console.log("Tipos de função");

// async function minhaFuncao() {
//     return "Olá, mundo!";
// }

// const funcaooooo = () => {} //somente uma vez. 

function cumprimentar (mensagem , funcaoCallback) {
    console.log(mensagem);
    funcaoCallback();
}

function funcao() {
    console.log("Essa é a função de callback!");
}

cumprimentar('Olá, seja bem-vindo!', funcao);

function exibirMensagem(mensagem2, funcaoErro) {
    if (!mensagem2) {
        funcaoErro();
    } else {
        console.log(mensagem2);
    }
}

exibirMensagem(undefined, () => {
    console.log("Erro: mensagem não fornecida!");
});

[].forEach((elemento) => {
    console.log("Iterando sobre o array:", elemento);
}); //cada elemento se faz o console.log.