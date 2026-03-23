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

// pegar todos os checkboxes
let checkboxes = document.querySelectorAll(".check-risco");

// pegar a div de resultado
let displayResultado = document.getElementById("resultado-risco");

// adicionar evento em cada checkbox usando for
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", verificarRisco);
}

// função que verifica o risco
function verificarRisco() {
  let marcados = 0;

  // contar quantos estão marcados
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      marcados = marcados + 1;
    }
  }

  displayResultado.style.display = "block";
  displayResultado.className = "";

  if (marcados == 0) {
    displayResultado.style.display = "none";
    return;
  }

  if (marcados >= 5) {
    displayResultado.innerText =
      "🚨 RISCO ALTO! Saia dessa página e não clique em nada.";
    displayResultado.classList.add("risco-alto");
    return;
  }

  if (marcados >= 3) {
    displayResultado.innerText =
      "⚠️ RISCO MÉDIO. Tenha muito cuidado e peça ajuda a uma pessoa de confiança.";
    displayResultado.classList.add("risco-medio");
    return;
  }

  // se não entrou em nenhum acima → é baixo
  displayResultado.innerText = "✅ RISCO BAIXO. Mas continue sempre alerta!";
  displayResultado.classList.add("risco-baixo");
}
