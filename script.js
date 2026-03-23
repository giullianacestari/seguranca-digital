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
const valor = 2; // Quantos pixels aumenta/diminui por clique

const btnAumentar = document.getElementById("btn-aumentar-fonte");
const btnDiminuir = document.getElementById("btn-diminuir-fonte");

btnAumentar.addEventListener("click", aumentaFonte);
btnDiminuir.addEventListener("click", diminuiFonte);

function aumentaFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual + valor;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

function diminuiFonte() {
  tamanhoFonteAtual = tamanhoFonteAtual - valor;
  document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}

// LEITURA EM VOZ ALTA

// variável que guarda se o sistema está lendo
let lendo = false;
const botaoLer = document.getElementById("btn-leitura");

// quando clicar no botão
botaoLer.addEventListener("click", iniciarLeitura);

function iniciarLeitura() {
  // se já estiver lendo, pausa ou continua a leitura
  if (lendo == true) {
    if (speechSynthesis.paused == true) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.pause();
    }
    return;
  }

  // pegar o texto da página
  let conteudo = document.querySelector("main");
  let texto = conteudo.innerText;

  // criar objeto de fala
  let fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";

  // quando terminar de ler, chamar função de finalizar leitura
  fala.onend = finalizarLeitura;
  lendo = true;

  // cancelar falas antigas
  speechSynthesis.cancel();

  // iniciar leitura
  speechSynthesis.speak(fala);
}

// função chamada quando a leitura termina
function finalizarLeitura() {
  lendo = false;
}