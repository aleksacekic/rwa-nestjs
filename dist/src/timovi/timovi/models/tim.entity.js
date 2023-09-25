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
exports.Tim = void 0;
const igrac_entity_1 = require("../../../igraci/models/igrac.entity");
const typeorm_1 = require("typeorm");
let Tim = exports.Tim = class Tim {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tim.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tim.prototype, "naziv", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { array: true, nullable: true }),
    __metadata("design:type", Array)
], Tim.prototype, "igraciTeren", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { array: true, nullable: true }),
    __metadata("design:type", Array)
], Tim.prototype, "igraciZamena", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => igrac_entity_1.Igrac, (igrac) => igrac.tim),
    __metadata("design:type", Array)
], Tim.prototype, "igraci", void 0);
exports.Tim = Tim = __decorate([
    (0, typeorm_1.Entity)()
], Tim);
//# sourceMappingURL=tim.entity.js.map