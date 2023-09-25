"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const igrac_entity_1 = require("./src/igraci/models/igrac.entity");
const igracTransferLista_entity_1 = require("./src/igraciTransferLista/models/igracTransferLista.entity");
const korisnik_entity_1 = require("./src/korisnici/models/korisnik.entity");
const tim_entity_1 = require("./src/timovi/timovi/models/tim.entity");
exports.typeOrmConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "igraci",
    entities: [igrac_entity_1.Igrac, tim_entity_1.Tim, igracTransferLista_entity_1.IgraciTransferLista, korisnik_entity_1.Korisnik],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map