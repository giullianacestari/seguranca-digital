let botaoAjuda = document.querySelector(".btn-help");
let botaoFechar = document.querySelector(".btn-close");
let janelaDeAjuda = document.querySelector(".modal-fundo");

botaoAjuda.addEventListener("click", abrirModal);
botaoFechar.addEventListener("click", fecharModal);

function abrirModal() {
  janelaDeAjuda.style.display = "block";
}

function fecharModal() {
  janelaDeAjuda.style.display = "none";
}