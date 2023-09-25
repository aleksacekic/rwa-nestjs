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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimoviController = void 0;
const common_1 = require("@nestjs/common");
const timovi_service_1 = require("./timovi.service");
const tim_dto_1 = require("./models/tim.dto");
let TimoviController = exports.TimoviController = class TimoviController {
    constructor(timoviService) {
        this.timoviService = timoviService;
    }
    obrisiTim(id) {
        return this.timoviService.obrisiTim(id);
    }
    dodajTim(dto) {
        return this.timoviService.dodajTim(dto);
    }
    async dodajIgracaZamenama(timId, igracZamenaId) {
        return this.timoviService.dodajIgracaZamenama(timId, igracZamenaId);
    }
    async getTimById(timId) {
        return this.timoviService.getTimById(timId);
    }
    async getSviTimovi() {
        return this.timoviService.getSviTimovi();
    }
    async updateTimIgraci(timId, igraci) {
        await this.timoviService.updateTimIgraci(timId, igraci.teren, igraci.zamena);
    }
};
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TimoviController.prototype, "obrisiTim", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tim_dto_1.TimDto]),
    __metadata("design:returntype", void 0)
], TimoviController.prototype, "dodajTim", null);
__decorate([
    (0, common_1.Put)(':timId/dodajIgracaZamenama/:igracZamenaId'),
    __param(0, (0, common_1.Param)('timId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('igracZamenaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TimoviController.prototype, "dodajIgracaZamenama", null);
__decorate([
    (0, common_1.Get)(':timId'),
    __param(0, (0, common_1.Param)('timId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TimoviController.prototype, "getTimById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TimoviController.prototype, "getSviTimovi", null);
__decorate([
    (0, common_1.Put)(':timId/updateIgraci'),
    __param(0, (0, common_1.Param)('timId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TimoviController.prototype, "updateTimIgraci", null);
exports.TimoviController = TimoviController = __decorate([
    (0, common_1.Controller)('timovi'),
    __metadata("design:paramtypes", [timovi_service_1.TimoviService])
], TimoviController);
//# sourceMappingURL=timovi.controller.js.map