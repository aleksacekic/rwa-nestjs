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
exports.IgraciTransferLista = void 0;
const tim_entity_1 = require("../../timovi/timovi/models/tim.entity");
const typeorm_1 = require("typeorm");
let IgraciTransferLista = exports.IgraciTransferLista = class IgraciTransferLista {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], IgraciTransferLista.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IgraciTransferLista.prototype, "ime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IgraciTransferLista.prototype, "ocena", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], IgraciTransferLista.prototype, "pozicija", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], IgraciTransferLista.prototype, "cena", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tim_entity_1.Tim, tim => tim.igraciZamena),
    (0, typeorm_1.JoinColumn)({ name: "timId" }),
    __metadata("design:type", tim_entity_1.Tim)
], IgraciTransferLista.prototype, "tim", void 0);
exports.IgraciTransferLista = IgraciTransferLista = __decorate([
    (0, typeorm_1.Entity)()
], IgraciTransferLista);
//# sourceMappingURL=igracTransferLista.entity.js.map