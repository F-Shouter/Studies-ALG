/* Exercício 16 */
function comprar(){
    var qtd = Number(input_qtd.value);
    var total = 0;
    if(qtd >= 12){
        total = qtd * 2.5;
    }else {total = qtd * 3;}
    div_mensagem.innerHTML = `O valor da sua compra foi de R$${total} reais.`;
}