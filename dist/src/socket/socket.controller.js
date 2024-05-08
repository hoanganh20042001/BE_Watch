"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const socket_getway_1 = require("./socket.getway");
let SocketController = class SocketController {
    constructor(gateway) {
        this.gateway = gateway;
    }
    async sendMessage() {
        this.gateway.sendMessage('Hello from server!');
        return 'Message sent to client!';
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketController.prototype, "server", void 0);
__decorate([
    (0, common_1.Get)('send-message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocketController.prototype, "sendMessage", null);
SocketController = __decorate([
    (0, swagger_1.ApiTags)('socket'),
    (0, websockets_1.WebSocketGateway)(),
    (0, common_1.Controller)('socket'),
    __metadata("design:paramtypes", [socket_getway_1.Gateway])
], SocketController);
exports.SocketController = SocketController;
//# sourceMappingURL=socket.controller.js.map