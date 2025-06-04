function recomecar(){
    p_emoji.innerHTML = "😶";
    div_coracao.innerHTML = `❤❤❤❤❤`;
    p_pergunta.innerHTML = `Segundo Global Growth Insights, em 2023 cerca de <strong>X</strong> do transporte refrigerado em todo o mundo foi feito a partir do meio rodoviário, ou seja, através de caminhões e vans que possuem baú refrigerado.`;
    div_resposta.innerHTML = `
        <button class="btn-continuar" onclick="ganhada_primeira()">X = metade</button><br><br>
        <button class="btn-continuar" onclick="perdida_primeira()">X = um terço</button><br><br>
        <button class="btn-continuar" onclick="perdida_primeira()">X = um quarto</button>
    `; 
}
/* ------------------------------------------------------------------------- */
/* PERGUNTA 1 */
/* ------------------------------------------------------------------------- */
function perdida_primeira(){
    p_emoji.innerHTML = "😥";
    div_coracao.innerHTML = `❤❤❤❤`;
    p_feedback.innerHTML = `<strong>Resposta anterior</strong>: metade`;
    p_pergunta.innerHTML = `ABRAS mostrou que <strong>Y</strong> das perdas de alimentos em supermercados são causadas por problemas no transporte refrigerado. E Embrapa defende que cerca de <strong>Z</strong>% dos alimentos refrigerados transportados no Brasil são perdidos devido a falhas na cadeia de frio`;
    div_resposta.innerHTML = `
        <button class="btn-continuar" onclick="perdida_segunda()">Y = metade e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="ganhada_segunda()">Y = um terço e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="perdida_segunda()">Y = um terço e Z = 30</button>
    `;
}

function ganhada_primeira(){
    p_emoji.innerHTML = "😁";
    div_coracao.innerHTML = `❤❤❤❤❤`;
    p_pergunta.innerHTML = `ABRAS mostrou que <strong>Y</strong> das perdas de alimentos em supermercados são causadas por problemas no transporte refrigerado. E Embrapa defende que cerca de <strong>Z</strong>% dos alimentos refrigerados transportados no Brasil são perdidos devido a falhas na cadeia de frio`;
    div_resposta.innerHTML = `
        <button class="btn-continuar" onclick="perdida_primeira2()">Y = metade e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="ganhada_segunda()">Y = um terço e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="perdida_primeira2()">Y = um terço e Z = 30</button>
    `;
}
/* ------------------------------------------------------------------------- */
/* PERGUNTA 2 */
/* ------------------------------------------------------------------------- */
function perdida_segunda(){
    p_emoji.innerHTML = "😥";
    div_coracao.innerHTML = `❤❤❤`;
    p_feedback.innerHTML = `<strong>Resposta anterior</strong>: um terço e 10%`;
    p_pergunta.innerHTML = `Apesar do prejuízo causado por essas perdas, apenas <strong>Z</strong> das empresas de transporte refrigerado no Brasil utilizam sistemas de monitoramento de temperatura em tempo real`;
    div_resposta.innerHTML = `
        <button class="btn-continuar" onclick="perdida_terceira()">Z = metade</button><br><br>
        <button class="btn-continuar" onclick="ganhada_terceira()">Z = um terço</button><br><br>
        <button class="btn-continuar" onclick="perdida_terceira()">Z = um quarto</button>
    `;
}
function perdida_terceira(){
    p_emoji.innerHTML = "😨";
    div_coracao.innerHTML = `❤❤`;
    p_pergunta.innerHTML = `ANVISA mostrou que <strong>X</strong>% das empresas de transporte refrigerado não cumprem integralmente as normas de controle de temperatura`;
    div_resposta.innerHTML = `
        <button class="btn-continuar" onclick="perdida_terceira()">Y = metade e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="ganhada_terceira_pergunta2()">Y = um terço e Z = 10</button><br><br>
        <button class="btn-continuar" onclick="perdida_terceira()">Y = um terço e Z = 30</button>
    `;


}