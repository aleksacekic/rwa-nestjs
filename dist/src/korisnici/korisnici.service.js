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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisniciService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const korisnik_entity_1 = require("./models/korisnik.entity");
const typeorm_2 = require("typeorm");
let KorisniciService = exports.KorisniciService = class KorisniciService {
    constructor(korisnikRepository) {
        this.korisnikRepository = korisnikRepository;
    }
    async dodajKorisnika(korisnikDto) {
        const korisnik = this.korisnikRepository.create(korisnikDto);
        return await this.korisnikRepository.save(korisnik);
    }
    async findOne(id) {
        return this.korisnikRepository.findOneBy({ id });
    }
    async updateVirtuelniNovac(id, novoStanjeNovca, IDtima) {
        const korisnik = await this.korisnikRepository.findOneBy({ id });
        if (!korisnik) {
            throw new Error('Korisnik nije pronadjen');
        }
        korisnik.virtuelniNovac = novoStanjeNovca;
        korisnik.timId = IDtima;
        return this.korisnikRepository.save(korisnik);
    }
    async updateTrenutniKorisnik(korisnik) {
        return this.korisnikRepository.save(korisnik);
    }
};
exports.KorisniciService = KorisniciService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(korisnik_entity_1.Korisnik)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], KorisniciService);
//# sourceMappingURL=korisnici.service.js.map