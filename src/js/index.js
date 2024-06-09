console.log(document.getElementById("btn-avancar"));
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;


btnAvancar.addEventListener("click", function (){
    if(cartaoAtual == 5) return;
    
    esconderCartaoselecionado();

const cartoes = document.querySelectorAll(".cartao");
cartaoAtual++;
(cartoes[cartaoAtual].classList.add("selecionado"));


});


btnVoltar.addEventListener("click", function () {
    if(cartaoAtual == 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado")

    const cartoes = document.querySelectorAll(".cartao");
    cartaoAtual--;
    (cartoes[cartaoAtual].classList.add("selecionado"));

});

/* refaturamentos-----------------------------------------------------------------------------------*/

function esconderCartaoselecionado() {
    const cartaosSelecionado = document.querySelector(".selecionado");
    cartaosSelecionado.classList.remove("selecionado");
}

