// MODAL DE AJUDA

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

// AUMENTAR/DIMINUIR FONTE

let tamanhoFonteAtual = 16;
const valorAdicionado = 2; // Quantos pixels aumenta/diminui por clique

const btnAumentar = document.getElementById("btn-aumentar-fonte");
const btnDiminuir = document.getElementById("btn-diminuir-fonte");

btnAumentar.addEventListener("click", aumentaFonte);
btnDiminuir.addEventListener("click", diminuiFonte);

function aumentaFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
};

function diminuiFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual - valorAdicionado;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}