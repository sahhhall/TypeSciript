/****************************** Type annotations  */ 

// let variableName : type = value;

let userName: string = 'sahal';
let counter : number;
counter = 12;
// counter = 'Helol'; //complile error 

// Arrays 

// let users: string[] = ['s','df',7]  only string 
// let users: [] = [2,] Typescript think its an empty array because of type [] 
let user: any[] = ['shal',2]
console.log(user);


let discount: number;
let itemcount = 12;

if(itemcount > 0 && itemcount <= 5){
    discount = 10;
}else{
    discount = 15;
}


console.log(`discount amount is ${discount}`);

// Typealias : create new name for existing type 

type strnumbool = string | number ;
let input: strnumbool;
// input = true;