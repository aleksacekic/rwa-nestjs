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
exports.IgraciTransferListaController = void 0;
const common_1 = require("@nestjs/common");
const igraci_transfer_lista_service_1 = require("./igraci-transfer-lista.service");
const igrac_dto_1 = require("../../igraci/models/igrac.dto");
let IgraciTransferListaController = exports.IgraciTransferListaController = class IgraciTransferListaController {
    constructor(igraciTransferListaService) {
        this.igraciTransferListaService = igraciTransferListaService;
    }
    dodajIgracaTransfer(dto) {
        return this.igraciTransferListaService.dodajIgracaTransferLista(dto);
    }
    getIgraciTransferLista() {
        return this.igraciTransferListaService.getIgraciTransferLista();
    }
    ukloniIgracaSaTransferListe(id) {
        return this.igraciTransferListaService.ukloniIgracaSaTransferListe(id);
    }
    updateIgraciTransferLista(igraci) {
        return this.igraciTransferListaService.updateIgraciTransferLista(igraci);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [igrac_dto_1.IgracDto]),
    __metadata("design:returntype", void 0)
], IgraciTransferListaController.prototype, "dodajIgracaTransfer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IgraciTransferListaController.prototype, "getIgraciTransferLista", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], IgraciTransferListaController.prototype, "ukloniIgracaSaTransferListe", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], IgraciTransferListaController.prototype, "updateIgraciTransferLista", null);
exports.IgraciTransferListaController = IgraciTransferListaController = __decorate([
    (0, common_1.Controller)('igraciTransferLista'),
    __metadata("design:paramtypes", [igraci_transfer_lista_service_1.IgraciTransferListaService])
], IgraciTransferListaController);
//# sourceMappingURL=igraci-transfer-lista.controller.js.map