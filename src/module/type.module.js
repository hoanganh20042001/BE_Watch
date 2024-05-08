"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypeModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var type_repository_1 = require("../dao/type.repository");
var type_service_1 = require("../business/type.service");
var type_controller_1 = require("../service /type.controller");
var TypeModule = /** @class */ (function () {
    function TypeModule() {
    }
    TypeModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([
                    type_repository_1.TypeRepository
                ])],
            controllers: [type_controller_1.TypeController],
            providers: [type_service_1.TypeService]
        })
    ], TypeModule);
    return TypeModule;
}());
exports.TypeModule = TypeModule;
