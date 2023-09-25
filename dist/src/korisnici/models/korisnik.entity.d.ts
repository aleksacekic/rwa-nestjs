import { Tim } from 'src/timovi/timovi/models/tim.entity';
export declare class Korisnik {
    id: number;
    ime: string;
    email: string;
    password: string;
    virtuelniNovac: number;
    timId: number;
    tim: Tim;
}
