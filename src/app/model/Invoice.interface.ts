import { InvoiceProductWiseQuantity } from './InvoiceProductWiseQuantity.interface';
import { CustomerInformation } from './CustomerInformation.interface';
import { BranchInformation } from './BranchInformation.interface';
import { ProductPriceMapping } from "./ProductPriceMapping.interface";
import { RelationshipExecutiveInformation } from './RelationshipExecutiveInformation.interface';

export interface Invoice{
    invoiceNo: string;
	totalAmount: number;
	invoiceGenerationDate: string;
    branchInformation: BranchInformation;
	executiveInformation: RelationshipExecutiveInformation;
	customerInformation: CustomerInformation;
	productQuantity: Map<ProductPriceMapping, InvoiceProductWiseQuantity>; 
}