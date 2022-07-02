// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// Resposta
// 1
interface Employee {
    code: number,
    name: string
}

let employee: Employee = {
    code: 10,
    name: "John"
}

// 2
let employee2: { code: number, name: string } = {
    code: 10,
    name: "John"
}

// 3
let employee3 = {} as Employee;
employee3.code = 10;
employee3.name = "John";

console.log(employee);
console.log(employee2);
console.log(employee3);