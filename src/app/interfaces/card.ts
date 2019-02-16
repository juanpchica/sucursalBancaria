import { Consumption } from './consumption';

export interface Card{
    id: number;
    idClient: number;
    type: TypeCard;
    number: string;
    ccv: number;
    consumptions?: Consumption[];
}

export enum TypeCard {
    type1 = "Master Card",
    type2 = "Maestro",
    type3 = "Visa",
    type4 = "American Express"
}