import { ISize } from "./products";

export interface ICartProduct {
    _id: string;
    images: string;
    price: number;
    size?: ISize;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex';
    quantity: number;
}



// export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
// export  type IType = 'shirts'|'pants'|'hoodies'|'hats';