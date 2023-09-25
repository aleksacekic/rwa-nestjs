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
exports.IgraciController = void 0;
const common_1 = require("@nestjs/common");
const igraci_service_1 = require("./igraci.service");
const igrac_dto_1 = require("./models/igrac.dto");
const igrac_entity_1 = require("./models/igrac.entity");
let IgraciController = exports.IgraciController = class IgraciController {
    constructor(igracService) {
        this.igracService = igracService;
    }
    async getLastAddedIgracId() {
        const lastAddedIgrac = await this.igracService.getLastAddedIgrac();
        return lastAddedIgrac.id;
    }
    dodajIgraca(dto) {
        return this.igracService.dodajIgraca(dto);
    }
    getSviIgraci() {
        return this.igracService.getSviIgraci();
    }
    getIgracById(igracId) {
        return this.igracService.getIgracById(igracId);
    }
    getIgraciByPozicija(pozicija, timId) {
        return this.igracService.getIgraciByPozicija(pozicija, timId);
    }
    dodajIgracaUListuIgraca(igrac, ciljaniTimId) {
        return this.igracService.dodajIgracaUListuIgraca(igrac, ciljaniTimId);
    }
    getIgraciByIds(igraciIdsDto) {
        return this.igracService.getIgraciByIds(igraciIdsDto.igraciIds);
    }
};
__decorate([
    (0, common_1.Get)('lastAddedId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IgraciController.prototype, "getLastAddedIgracId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [igrac_dto_1.IgracDto]),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "dodajIgraca", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "getSviIgraci", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "getIgracById", null);
__decorate([
    (0, common_1.Get)(':pozicija/:timId'),
    __param(0, (0, common_1.Param)('pozicija')),
    __param(1, (0, common_1.Param)('timId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "getIgraciByPozicija", null);
__decorate([
    (0, common_1.Post)('dodajUListuIgraca/:ciljaniTimId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('ciljaniTimId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [igrac_entity_1.Igrac, Number]),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "dodajIgracaUListuIgraca", null);
__decorate([
    (0, common_1.Post)('getIgraciByIds'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [igrac_dto_1.IgraciIdsDto]),
    __metadata("design:returntype", void 0)
], IgraciController.prototype, "getIgraciByIds", null);
exports.IgraciController = IgraciController = __decorate([
    (0, common_1.Controller)('igraci'),
    __metadata("design:paramtypes", [igraci_service_1.IgraciService])
], IgraciController);
//# sourceMappingURL=igraci.controller.js.map