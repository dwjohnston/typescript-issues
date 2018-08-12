import {hello, myRandom} from "foo"; 

export class Alpha {

    blurp () : string {
        return hello() + myRandom(); 
    }
}