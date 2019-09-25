import { Invoice } from './Invoice.interface';
import { DamageStockComplainProductWiseQuantity } from './DamageStockComplainProductWiseQuantity.interface';
import { ProductPriceMapping } from "./ProductPriceMapping.interface";

export interface DamageStockComplain{
    complainNo: string;
    invoice: Invoice;
	pmap:Map<ProductPriceMapping,DamageStockComplainProductWiseQuantity>;
	complainType: string;
	complainDate: string;
    remarks: string;	
}