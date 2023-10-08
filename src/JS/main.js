const lista_botoes = document.getElementsByClassName("botao");
const lista_personagens = document.getElementsByClassName("personagem");

for (let i in lista_botoes) {
    lista_botoes[i].setAttribute("id", `btn-${i}`);
    lista_personagens[i].setAttribute("id", `personagem-${i}`);
    lista_botoes[i].addEventListener("click", () => addSelecionado(`btn-${i}`));
}

function addSelecionado(id) {
    for (let i in lista_botoes) {
        lista_botoes[i].classList.remove("selecionado");
        lista_personagens[i].classList.remove("selecionado");

        if (`btn-${i}` == id) {
            document.getElementById(`btn-${i}`).classList.add("selecionado");
            document
                .getElementById(`personagem-${i}`)
                .classList.add("selecionado");
        }
    }
}
