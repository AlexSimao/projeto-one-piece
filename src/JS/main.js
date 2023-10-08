const lista_botoes = document.querySelectorAll(".botao");
const lista_personagens = document.querySelectorAll(".personagem");

lista_botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        lista_personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagem_selecionado = document.querySelector(".personagem.selecionado");
    personagem_selecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botao_selecionado = document.querySelector(".botao.selecionado");
    botao_selecionado.classList.remove("selecionado");
}
