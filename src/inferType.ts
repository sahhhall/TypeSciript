// type infer when you dont expiliictily annote them 
// arr: (string | number)[] here type script guess the type and 
const arr= [3,3,'sahal']


// contextual Typing 
// Typescript uses the location of variable infer their types , the mechanism knowm contextual typing 
// document.addEventListener('scroll', (e) =>{
//   console.log(e.button);
// })  typescript knows the event in the case is an instance of Uievent not of Mousevent so typescript thrown an err
