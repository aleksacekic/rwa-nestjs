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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const express_1 = require("express");
let AppController = exports.AppController = class AppController {
    constructor(appService, jwtService) {
        this.appService = appService;
        this.jwtService = jwtService;
    }
    async register(ime, email, password) {
        const hashedPassword = await bcrypt.hash(password, 12);
        const noviTim = await this.appService.createTim({ ime });
        const user = await this.appService.create({
            ime,
            email,
            password: hashedPassword,
            virtuelniNovac: 10000,
            timId: noviTim.id,
        });
        delete user.password;
        return user;
    }
    async login(email, password, response) {
        const user = await this.appService.findOne({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException('invalid credentials');
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new common_1.BadRequestException('invalid credentials');
        }
        const jwt = await this.jwtService.signAsync({ id: user.id });
        console.log('JWT Token:', jwt);
        response.cookie('jwt', jwt, { httpOnly: false, sameSite: 'none' });
        return {
            message: 'success',
        };
    }
    async user(request) {
        try {
            const cookie = request.cookies['jwt'];
            console.log('Received cookie:', cookie);
            const data = await this.jwtService.verifyAsync(cookie);
            console.log(data);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            const userId = parseInt(data['id'], 10);
            const user = await this.appService.findOne({ where: { id: userId } });
            const { password, ...result } = user;
            return result;
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async logout(response) {
        response.clearCookie('jwt', {
            sameSite: 'none',
            secure: true,
        });
        return {
            message: 'success',
        };
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)('ime')),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "user", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [app_service_1.AppService, typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AppController);
//# sourceMappingURL=app.controller.js.map