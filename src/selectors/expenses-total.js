import React from 'react';

export default (expenses) => {
    return expenses.map((expense)=>expense.amount).reduce((total, num)=>total+num, 0)
}
//expenses.map genera un array, en este caso con los valores de amount
//[].reduce, suma todo los valores dentro del array, en este caso los de expenses.map
//si suma todo y no hay nada, devuelve 0.

 








//CODIGO MIO, VIEJO

// export default (expenses) => {
//     if(expenses){
//         if(Array.isArray(expenses)==false){
//             expenses=[expenses]
//         }
//         return expenses.map((expense)=>expense.amount).reduce((total,num)=>total+num)
//     } 
//     return 0;
// }


//Para sumar todos los numeros de un array array.reduce((total,num)=>{return total+num})


//Asi se suman todos los amount de expenses (cuando estan los objetos dentro de un array) 

// expenses.map((a)=>a.amount).reduce((total,num)=>{
//     return total+num
// })