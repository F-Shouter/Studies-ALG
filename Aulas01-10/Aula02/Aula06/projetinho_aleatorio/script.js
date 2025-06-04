function avaliar(){
    var saldo = Number(input_saldo.value);
    var deb = Number(input_deb.value);
    var atual = saldo - deb;
    if (atual>=0){
        div_mensagem.innerHTML = `<b style= "color: blue"><i>o saldo atual da conta corrente é ${atual}</i></b>`;
    }else {div_mensagem.innerHTML = `<b style= "color: red"><i>o saldo atual da conta corrente é ${atual}</i></b>`;}
}