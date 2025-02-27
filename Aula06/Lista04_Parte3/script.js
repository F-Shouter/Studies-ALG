/* Exercício 16 */
function comprar(){
    var qtd = Number(input_qtd.value);
    var total = 0;
    if(qtd >= 12){
        total = qtd * 2.5;
    }else {total = qtd * 3;}
    div_mensagem.innerHTML = `O valor da sua compra foi de R$${total} reais.`;
}
/* Exercício 17 */
function analisar(){
    var freq = Number(input_freq.value);
    if(freq>=50){
        div_mensagem.innerHTML = `<img src="image/images.jpg" alt="">`;
    }else {
        div_mensagem.innerHTML = `<img src="image/download.jpg" alt="">`;
    }
}
/* Exercício 18 */
function verificar(){
    var n1 = Number(input_n1.value);
    var n2 = Number(input_n2.value);
    var media = (n1+n2)/2;
    if(media >=6){
        div_mensagem.innerHTML = `Parabéns, aprovado!`;
    }else {
        div_mensagem.innerHTML = `Tente outra vez...`;
    }
}
/* Exercício 19 */
function vmedir(){
    var temp = Number(input_temp.value);
    if(temp < 10){
        div_mensagem.innerHTML = `Apropriada p/ conservar alimento`;
    }else {
        div_mensagem.innerHTML = `Tente outra vez...`;
    }
}