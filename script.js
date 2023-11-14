const key = "5fee49d6b53af05966ddf194c1c1fa65";


function cliqueiNoBotao(){

    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}

async function buscarCidade(cidade){ //pra informar que vou acessar um servidor
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados);
    
}

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "umidadde: " + dados.main.humidity
    document.querySelector(".imagem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
