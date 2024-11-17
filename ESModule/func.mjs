import {odd,even} from './var.mjs';

function checkOddOreven(num){
    if(num%2){
        return odd;
    }
    return even;
}
export default checkOddOreven;