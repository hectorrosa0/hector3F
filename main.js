
const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const contador = document.querySelectorAll(".contador")
contador[0].textContent = "ola"
const tempoObjetivo0 =new Date(2024,05,22,09,50)
const tempoObjetivo1 =new Date(2024,05,22,09,50)
const tempoObjetivo2 =new Date(2024,05,22,09,50)
const tempoObjetivo3 =new Date(2024,05,22,09,50)

let segundos
let minutos
let horas
let dias

let agora = new Date();
segundos =(tempoObjetivo0-agora)/1000;
minutos = segundos/60
horas = minutos/60
dias = horas/24

contador[0].textContent= tempoObjetivo0-agora
contador[1].textContent= tempoObjetivo1-agora
contador[2].textContent= tempoObjetivo2-agora
contador[3].textContent= tempoObjetivo3-agora

contador[0].textContent = `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

for (let i = 0 ; i < botoes.length ; i++){
    botoes[i].onclick = function (){
        for (let j = 0; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}