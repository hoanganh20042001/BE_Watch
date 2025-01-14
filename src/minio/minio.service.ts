// minio.service.ts
import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';

@Injectable()
export class MinioService {
  private readonly minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: 'localhost',
      port: 9001,
      useSSL: false,
      accessKey: 'your-access-key',
      secretKey: 'your-secret-key',
    });
  }

  async uploadFile(bucketName: string, objectName: string, buffer: Buffer, contentType: string): Promise<string> {
    try {
      const metaData = {
        'Content-Type': contentType,
      };
      await this.minioClient.putObject(bucketName, objectName, buffer, metaData);
      const url = await this.minioClient.presignedGetObject(bucketName, objectName);
      return url;
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  async editImage(bucketName: string, objectName: string, editFunction: (buffer: Buffer) => Buffer): Promise<string> {
    try {
      // Download the original image
      const originalObject = await this.minioClient.getObject(bucketName, objectName);
      const chunks: Buffer[] = [];
      let size = 0;
      originalObject.on('data', (chunk) => {
        chunks.push(chunk);
        size += chunk.length;
      });
      await new Promise((resolve, reject) => {
        originalObject.on('end', resolve);
        originalObject.on('error', reject);
      });
      const originalBuffer = Buffer.concat(chunks, size);

      // Edit the image buffer
      const editedBuffer = editFunction(originalBuffer);

      // Upload the edited image
      const editedUrl = await this.uploadFile(bucketName, objectName, editedBuffer, 'image/jpeg');
      return editedUrl;
    } catch (error) {
      throw new Error(`Failed to edit image: ${error.message}`);
    }
  }

  async deleteImage(bucketName: string, objectName: string): Promise<void> {
    try {
      await this.minioClient.removeObject(bucketName, objectName);
    } catch (error) {
      throw new Error(`Failed to delete image: ${error.message}`);
    }
  }
}
