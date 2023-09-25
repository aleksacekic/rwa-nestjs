import { Igrac } from "src/igraci/models/igrac.entity";
export declare class Tim {
    id: number;
    naziv: string;
    igraciTeren: number[] | null;
    igraciZamena: number[] | null;
    igraci: Igrac[];
}
