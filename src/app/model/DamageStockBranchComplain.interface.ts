import { BranchInformation } from "./BranchInformation.interface";
import { ProductPriceMapping } from "./ProductPriceMapping.interface";
import { DamageStockBranchComplainQuantity } from "./DamageStockBranchComplainQuantity.interface";

export interface DamageStockBranchComplain{
  damageStockBranchComplainid :string;
	branchInformation:BranchInformation;
  pmap: Map<ProductPriceMapping, DamageStockBranchComplainQuantity>;
  dateComplain:string;
  remarks:String;
  }
  