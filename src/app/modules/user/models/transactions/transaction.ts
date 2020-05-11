import { User } from '../user/user';

export class Transaction {
    constructor(public tipo?: string, 
        public monto?: Number, 
        public userfrom?: string,
        public userto?: string,
        ){

}
}
