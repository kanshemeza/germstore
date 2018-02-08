import {Reviewmodel} from './reviewmodel';


export class GermModel{
    id: number;
    name: string;
    price: number;
    description: string;
    fullImagePath: string;
    inventory: number;
    colors: string[];
    reviews: Reviewmodel[];
}

