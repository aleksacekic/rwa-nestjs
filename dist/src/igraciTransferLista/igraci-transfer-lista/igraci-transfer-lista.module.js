"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgraciTransferListaModule = void 0;
const common_1 = require("@nestjs/common");
const igraci_transfer_lista_service_1 = require("./igraci-transfer-lista.service");
const igraci_transfer_lista_controller_1 = require("./igraci-transfer-lista.controller");
const igracTransferLista_entity_1 = require("../models/igracTransferLista.entity");
const typeorm_1 = require("@nestjs/typeorm");
let IgraciTransferListaModule = exports.IgraciTransferListaModule = class IgraciTransferListaModule {
};
exports.IgraciTransferListaModule = IgraciTransferListaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([igracTransferLista_entity_1.IgraciTransferLista])],
        controllers: [igraci_transfer_lista_controller_1.IgraciTransferListaController],
        providers: [igraci_transfer_lista_service_1.IgraciTransferListaService],
    })
], IgraciTransferListaModule);
//# sourceMappingURL=igraci-transfer-lista.module.js.map