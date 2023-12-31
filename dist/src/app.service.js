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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const korisnik_entity_1 = require("./korisnici/models/korisnik.entity");
const tim_entity_1 = require("./timovi/timovi/models/tim.entity");
let AppService = exports.AppService = class AppService {
    constructor(korisnikRepository, timRepository) {
        this.korisnikRepository = korisnikRepository;
        this.timRepository = timRepository;
    }
    async create(data) {
        return this.korisnikRepository.save(data);
    }
    async findOne(condition) {
        return this.korisnikRepository.findOne(condition);
    }
    async createTim(data) {
        const noviTim = new tim_entity_1.Tim();
        noviTim.naziv = "FK " + data.ime;
        noviTim.igraciZamena = [];
        noviTim.igraciTeren = [];
        return this.timRepository.save(noviTim);
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(korisnik_entity_1.Korisnik)),
    __param(1, (0, typeorm_2.InjectRepository)(tim_entity_1.Tim)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object])
], AppService);
//# sourceMappingURL=app.service.js.map