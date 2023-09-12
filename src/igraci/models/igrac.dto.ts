import { IsArray, IsNotEmpty } from 'class-validator';

export class IgracDto {
  ime: string;
  ocena: number;
  pozicija: string;
  timId: number;
  cena: number;
}

export class IgraciIdsDto {
  @IsNotEmpty()
  @IsArray()
  igraciIds: number[];
}


