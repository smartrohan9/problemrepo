import { VenderInformation } from "./VenderInformation.model";
import { Tax } from "./Tax.interface";
import { ProductInformation } from "./ProductInformation.interface";

export interface ProductPriceMapping{
    pricemappingid:number;
	buyingPrice:number;
	sellingPrice:number;
	tax: Tax;
    productInformation: ProductInformation;
	venderInformation: VenderInformation;
}