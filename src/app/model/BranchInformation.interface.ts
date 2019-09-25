
import { State } from './State.interface';
import { District } from './District.interface';
export interface BranchInformation{
    branchCode: string;
	branchName: string;
    state: State;
	district:District;
	branchAddress: string;
	branchPincode: number;
	branchContactNumber: number;
	branchEmailId: string;
	branchStatus: string;
	branchType: string;
	openingDate: string;
}
