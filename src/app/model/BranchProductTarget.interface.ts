;
import { BranchProductTargetQuantity } from "./BranchProductTargetQuantity.interface";
import { ProductPriceMapping } from './ProductPriceMapping.interface';
import { BranchInformation } from './BranchInformation.interface';

export interface BranchProductTarget{


  productTargetId:number;	
  targetDate:String;
  pmap:Map<ProductPriceMapping, BranchProductTargetQuantity>;
  branchInformation:BranchInformation;
}