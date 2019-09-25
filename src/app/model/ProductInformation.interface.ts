import { ProductCategory } from './ProductCategory.interface';

export interface ProductInformation{
    productCode: string;
	productName: string;
	hsnCode: string;
    productDescription: string;
    productCategory: ProductCategory;

}