import { Role } from './Role.interface';


// tslint:disable-next-line:no-empty-interface
export interface Login {
    loginId :number;
    username: string;
    password: string;
    role : Role;
}
