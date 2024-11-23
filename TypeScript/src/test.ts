// const x:number = 1;
// console.log(x);
// ..........................................................................

function greet(firstName:string){
    console.log("hello " + firstName);
}

greet("Rakshat");

// ...............................................

function sum(num1:number,num2:number):number{
    return num1+num2;
}
sum(1,2);

// ...............................................
function isLegal(age:number):boolean{
    return age>18 ? true:false;
}

console.log(isLegal(23));

// .............................................

function callback(fn:()=>number):void
    {
        setTimeout(fn,1000);
    }
callback(function (){
    console.log("hello ji");
    return 1;
})

// .......................................