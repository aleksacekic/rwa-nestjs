"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const igraci_module_1 = require("./igraci/igraci.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../typeorm.config");
const igraci_transfer_lista_module_1 = require("./igraciTransferLista/igraci-transfer-lista/igraci-transfer-lista.module");
const korisnici_module_1 = require("./korisnici/korisnici.module");
const timovi_module_1 = require("./timovi/timovi/timovi.module");
const jwt_1 = require("@nestjs/jwt");
const korisnik_entity_1 = require("./korisnici/models/korisnik.entity");
const tim_entity_1 = require("./timovi/timovi/models/tim.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            igraci_module_1.IgraciModule,
            igraci_transfer_lista_module_1.IgraciTransferListaModule,
            korisnici_module_1.KorisniciModule,
            timovi_module_1.TimoviModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            typeorm_1.TypeOrmModule.forFeature([korisnik_entity_1.Korisnik, tim_entity_1.Tim]),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map