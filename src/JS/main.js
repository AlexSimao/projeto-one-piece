const lista_botoes = document.querySelectorAll(".botao");
const lista_personagens = document.querySelectorAll(".personagem");

lista_botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botao_selecionado = document.querySelector(".botao.selecionado");
        botao_selecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const personagem_selecionado = document.querySelector(".personagem.selecionado");
        personagem_selecionado.classList.remove("selecionado");
        lista_personagens[indice].classList.add("selecionado");
    });
});
