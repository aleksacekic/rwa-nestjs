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
exports.KorisniciController = void 0;
const common_1 = require("@nestjs/common");
const korisnici_service_1 = require("./korisnici.service");
const korisnik_entity_1 = require("./models/korisnik.entity");
const korisnik_dto_1 = require("./models/korisnik.dto");
let KorisniciController = exports.KorisniciController = class KorisniciController {
    constructor(korisnikService) {
        this.korisnikService = korisnikService;
    }
    dodajIgraca(dto) {
        return this.korisnikService.dodajKorisnika(dto);
    }
    findOne(id) {
        return this.korisnikService.findOne(id);
    }
    updateVirtuelniNovac(id, novoStanjeNovca, IDtima) {
        return this.korisnikService.updateVirtuelniNovac(id, novoStanjeNovca, IDtima);
    }
    updateTrenutniKorisnik(id, korisnik) {
        korisnik.id = id;
        return this.korisnikService.updateTrenutniKorisnik(korisnik);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [korisnik_dto_1.KorisnikDto]),
    __metadata("design:returntype", void 0)
], KorisniciController.prototype, "dodajIgraca", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KorisniciController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/virtuelniNovac'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('novoStanjeNovca')),
    __param(2, (0, common_1.Body)('IDtima')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], KorisniciController.prototype, "updateVirtuelniNovac", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, korisnik_entity_1.Korisnik]),
    __metadata("design:returntype", void 0)
], KorisniciController.prototype, "updateTrenutniKorisnik", null);
exports.KorisniciController = KorisniciController = __decorate([
    (0, common_1.Controller)('korisnici'),
    __metadata("design:paramtypes", [korisnici_service_1.KorisniciService])
], KorisniciController);
//# sourceMappingURL=korisnici.controller.js.map