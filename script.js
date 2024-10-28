// Variaveis globais
let quantidadeCartas = 0;
let contador = 0;
let contar = 0;

// Array com todas as imagens
const listaImagens = [
  "bobrossparrot",
  "explodyparrot",
  "fiestaparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

let listaImagensEmbaralhada = [];
let listImagensEmbaralhadaDuplicadas = [];

// Abertura da página, conferindo se as entradas do jogador estão de acordo com o solicitado

function entradaDosNumeros() {
  listaImagensEmbaralhada = [];
  quantidadeCartas = Number(prompt("Insira um número entre 4 e 14"));
  verificarNumerosEntrada();
}

function verificarNumerosEntrada() {
  let isImpar = quantidadeCartas % 2;

  if (isImpar == 1 || quantidadeCartas < 4 || quantidadeCartas > 14) {
    alert("O número precisa ser PAR e estar entre 4 e 14");
    entradaDosNumeros();
  } else {
    criarCartas();
  }
}

function embaralharCartas() {
  listaImagens.sort(function () {
    return 0.5 - Math.random();
  });

  for (let i = 0; i < quantidadeCartas / 2; i++) {
    listaImagensEmbaralhada.push(listaImagens[i]);
  }
}

