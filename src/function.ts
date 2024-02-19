// function name(parameter: type,parameter: type): returnType {
//     //code logic goes here
// }

// unlike javascript functions typescript allows you add type to parameter and return type  too 

function summ (a: number, b: number): number {
    return a + b;
}

summ(10,10);

// when you not annotate return type typescript infer return type 
const sumtwo = (a: number, b: number) => {
    return a + b;
}

sumtwo(1,2)


// default parameter && optional parameters if default parmameter just change c: number = 10;

const gett = (a: number , b: number, c?: number): number => {
 if (typeof c !== 'undefined'){
    return a * b * c;
 }
 return a * b
}


console.log(gett(1,2,5));

