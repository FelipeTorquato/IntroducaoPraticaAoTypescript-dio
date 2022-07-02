"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee = {
    code: 10,
    name: "John"
};
// 2
let employee2 = {
    code: 10,
    name: "John"
};
// 3
let employee3 = {};
employee3.code = 10;
employee3.name = "John";
console.log(employee);
console.log(employee2);
console.log(employee3);
