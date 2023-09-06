
export interface Product{
    id:number;
    name:string;
    image?: string;
}
export interface Detail{
    id:number;
    isOpened:boolean;
}
export interface Product_Detail{
    id:number;
    name:string;
    description?:string;
    video?:string;
    more?:string[];
}