
import { BranchProductStockWiseQuantity } from "./BranchProductStockWiseQuantity.interface";
import { BranchInformation } from './BranchInformation.interface';
import { ProductPriceMapping } from './ProductPriceMapping.interface';

export interface BranchProductStock
{
    purchaseOrderRequestId:number;
    branchInformation:BranchInformation;
    pmap:Map<ProductPriceMapping,BranchProductStockWiseQuantity>;
    date:string;
}