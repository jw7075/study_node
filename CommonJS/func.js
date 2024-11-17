const {odd,even}=require('./var'); //require 함수 안에 불러올 모듈의 경로 적기 , 구조 분해 할당 문법 : var.js 의 module.exports에 담겨있던 객체를 불러와 사용

function checkOddOrEven(num){
    if(num%2){
        return odd;
    }
    return even;
}

module.exports=checkOddOrEven;