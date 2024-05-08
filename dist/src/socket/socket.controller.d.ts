import { Server } from 'socket.io';
import { Gateway } from './socket.getway';
export declare class SocketController {
    private readonly gateway;
    constructor(gateway: Gateway);
    server: Server;
    sendMessage(): Promise<string>;
}
