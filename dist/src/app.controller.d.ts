import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    register(ime: string, email: string, password: string): Promise<import("./korisnici/models/korisnik.entity").Korisnik>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        ime: string;
        email: string;
        virtuelniNovac: number;
        timId: number;
        tim: import("./timovi/timovi/models/tim.entity").Tim;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
