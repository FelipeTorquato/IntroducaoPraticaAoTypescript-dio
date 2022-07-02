// Como podemos melhorar o esse código usando TS? 

// Resposta
enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}