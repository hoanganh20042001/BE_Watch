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
exports.MomoController = void 0;
const common_1 = require("@nestjs/common");
const momo_service_1 = require("./momo.service");
let MomoController = class MomoController {
    constructor(momoService) {
        this.momoService = momoService;
    }
    getMessage() {
        return '<p>Score one <a href="/heart">heart</a> or one <a href="/coin">coin</a>.</p>';
    }
    scoreCoin() {
        this.momoService.score('coin');
        return this.getMessage();
    }
    scoreHeart() {
        this.momoService.score('heart');
        return this.getMessage();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MomoController.prototype, "getMessage", null);
__decorate([
    (0, common_1.Get)('coin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MomoController.prototype, "scoreCoin", null);
__decorate([
    (0, common_1.Get)('heart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MomoController.prototype, "scoreHeart", null);
MomoController = __decorate([
    (0, common_1.Controller)('momo'),
    __metadata("design:paramtypes", [momo_service_1.MoMoService])
], MomoController);
exports.MomoController = MomoController;
//# sourceMappingURL=momo.controller.js.map