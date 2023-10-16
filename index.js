let language = "P";

var win = 0;
var lose = 0;

var winningBalance= 0;
for(i=0;i<3;i++){
   win = getRandomInt(90)
   lose = getRandomInt(90)
   winningBalance += ( win - lose)
}

if (language == "P"){
   var level = Winning2LevelPortuguese( winningBalance );
} else {
   var level = Winning2Level( winningBalance );
}

if (language == "P") {
   console.log( ResponsePortuguese() );
}else{
   console.log( ResponseDefault() );
}

function ResponsePortuguese() {
   return `O Herói tem de saldo de ${winningBalance} está no nível de ${level}`
}

function ResponseDefault() {
   return `The Hero have  ${winningBalance} winning balnace. It is level ${level}`
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
   depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo(vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function Winning2Level(winningBalance) {
   var level = "Iron"
   if (winningBalance > 100) {
      level = "Immortal"
   } else if (winningBalance > 90) {
      level = "Legend"
   } else if (winningBalance > 80) {
      level = "Diamond"
   } else if (winningBalance > 50) {
      level = "Gold"
   } else if (winningBalance > 20) {
      level = "Silver"
   } else if (winningBalance > 10) {
      level = "Brass"
   }
}

function Winning2LevelPortuguese(winningBalance){
   var level = "Ferro"
   if (winningBalance > 100) {
      level = "Imortal"
   } else if (winningBalance > 90) {
      level = "Lendário"
   } else if (winningBalance > 80) {
      level = "Diamante"
   } else if (winningBalance > 50) {
      level = "Ouro"
   } else if (winningBalance > 20) {
      level = "Prata"
   } else if (winningBalance > 10) {
      level = "Bronze"
   }
   return level
}
