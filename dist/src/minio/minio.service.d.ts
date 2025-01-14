/// <reference types="node" />
export declare class MinioService {
    private readonly minioClient;
    constructor();
    uploadFile(bucketName: string, objectName: string, buffer: Buffer, contentType: string): Promise<string>;
    editImage(bucketName: string, objectName: string, editFunction: (buffer: Buffer) => Buffer): Promise<string>;
    deleteImage(bucketName: string, objectName: string): Promise<void>;
}
