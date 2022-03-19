var cartas = {}
var deck1={}
var deck2={}


var c1={
  nome: "Katarina",
  imagem:"https://i.pinimg.com/736x/e8/27/dd/e827dd9b7303e379c6ed332ccaa5b893.jpg",
 atributos: { AD: 5,
AP: 7,
Defesa: 2,
// Armor: 2,
// MResist: 2,
  
}

};
var c2={
  nome: "Galio",
  imagem:"https://images5.alphacoders.com/114/thumb-1920-1141378.jpg" ,
 atributos: { AD: 1,
AP: 4,
Defesa: 8,
// Armor: 6,
// MResist: 9,
  
}

};
var c3 ={
  nome: "Yasuo",
  imagem:"https://conteudo.imguol.com.br/c/entretenimento/a5/2020/07/24/yasuo-1595595075753_v2_3x4.jpg",
 atributos: { AD: 8,
AP: 1,
Defesa: 3,
// Armor: 3,
// MResist: 2,
  
}
};
var c4 ={
  nome: "Veigar",
  imagem:"https://i.pinimg.com/originals/38/c2/5c/38c25cf5b191435fecf0e83d3edb98f0.jpg",
 atributos: { AD: 1,
AP: 10,
Defesa: 2,
// Armor: 3,
// MResist: 2,
  
}
};
var c5 ={
  nome: "Jhin",
  imagem:"https://pbs.twimg.com/profile_images/1389301528083800069/8K6WbUCN_400x400.jpg",
 atributos: { AD: 10,
AP: 1,
Defesa: 2,
// Armor: 3,
// MResist: 2,
  
}
};
var c6 ={
  nome: "Darius",
  imagem:"http://pm1.narvii.com/6261/fab3b815678c1ff21360b520cb8aa77975aeb9a1_00.jpg",
 atributos: { AD: 6,
AP: 1,
Defesa: 6,
// Armor: 3,
// MResist: 2,
  
}
};
var c7 ={
  nome: "Draven",
  imagem:"http://pm1.narvii.com/6913/563f8b1b7748151bb08d4973a51a61606b4f83f9r1-657-1000v2_uhq.jpg",
 atributos: { AD: 9,
AP: 1,
Defesa: 2,
// Armor: 3,
// MResist: 2,
  
}
};
var c8 ={
  nome: "Senna",
  imagem:"https://i.pinimg.com/originals/31/9e/0a/319e0a65e818f477d00a48784cbfca38.jpg",
 atributos: { AD: 7,
AP: 2,
Defesa: 3,
// Armor: 3,
// MResist: 2,
  
}
};
var c9 ={
  nome: "Zeri",
  imagem:"https://images7.alphacoders.com/120/1202659.jpg",
 atributos: { AD: 8,
AP: 4,
Defesa: 2,
// Armor: 3,
// MResist: 2,
  
}
};
var c10 ={
  nome: "Ryze",
  imagem:"https://cdn.bhdw.net/im/league-of-legends-lol-ryze-papel-de-parede-41416_w635.jpg",
 atributos: { AD: 1,
AP: 7,
Defesa: 5,
// Armor: 3,
// MResist: 2,
  
}
};
var c11 ={
  nome: "Leona",
  imagem:"https://pbs.twimg.com/media/EgHCyMvXsAENU0B.jpg",
 atributos: { AD: 1,
AP: 1,
Defesa: 10,
// Armor: 3,
// MResist: 2,
  
}
};
var c12 ={
  nome: "Nautilus",
  imagem:"https://static.invenglobal.com/upload/image/2020/04/26/i1587902678907974.jpeg",
 atributos: { AD: 1,
AP: 2,
Defesa: 9,
// Armor: 3,
// MResist: 2,
  
}
};
var c13 ={
  nome: "Evelynn",
  imagem:"http://lol-stats.net/uploads/cfNRiJr8BE8YVVAA8k4GYFW0GrBbI0WQuuRsiO0b.jpeg",
 atributos: { AD: 1,
AP: 7,
Defesa: 3,
// Armor: 3,
// MResist: 2,
  
}
};
var c14 ={
  nome: "Trundle",
  imagem:"https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/08/16152720/Trundle-Twitter-LOR-Art-768x345-1.jpg",
 atributos: { AD: 7,
AP: 1,
Defesa: 5,
// Armor: 3,
// MResist: 2,
  
}
};
var c15 ={
  nome: "Olaf",
  imagem:"https://cdn1.dotesports.com/wp-content/uploads/2021/02/01101045/Olaf_0.jpg",
 atributos: { AD: 7,
AP: 1,
Defesa: 4,
// Armor: 3,
// MResist: 2,
  
}
};
var c16 ={
  nome: "Ahri",
  imagem:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg",
 atributos: { AD: 1,
AP: 8,
Defesa: 3,
// Armor: 3,
// MResist: 2,
  
}
};
var c17 ={
  nome: "https://cdn1.dotesports.com/wp-content/uploads/2019/03/05133129/Cassiopeia_0.jpg",
  imagem:"https://conteudo.imguol.com.br/c/entretenimento/a5/2020/07/24/yasuo-1595595075753_v2_3x4.jpg",
 atributos: { AD: 1,
AP: 8,
Defesa: 3,
// Armor: 3,
// MResist: 2,
  
}
};
var c18 ={
  nome: "Ekko",
  imagem:"https://i.pinimg.com/originals/e9/b6/99/e9b69921e60116c7bc330fb12e603ab8.jpg",
 atributos: { AD: 2,
AP: 7,
Defesa: 4,
// Armor: 3,
// MResist: 2,
  
}
};
var c19 ={
  nome: "Swain",
  imagem:"https://i.pinimg.com/originals/c2/f0/69/c2f0693b161b2e80d0c5d02870724281.jpg",
 atributos: { AD: 1,
AP: 7,
Defesa: 6,
// Armor: 3,
// MResist: 2,
  
}
};
var c20 ={
  nome: "Ziggs",
  imagem:"https://cdn.bhdw.net/im/league-of-legends-lol-ziggs-papel-de-parede-54548_w635.jpg",
 atributos: { AD: 1,
AP: 9,
Defesa: 2,
// Armor: 3,
// MResist: 2,
  
}
};

// function adicionarPontos(jogador1){
//   var jogador = jogador1
//   jogador.pontos++;
//   console.log(jogador.pontos);
// };



var carta0 = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20]; //lista de cartas

var cartaJogador1;
var cartaJogador2;
var jogador1 = {pontos: 0};
var jogador2 = {pontos:0};
var jogadores = [jogador1, jogador2];
// função base do jogo- sortear carta (criar botoes para sortear deck para dois jogadores)
function sortearCarta (){
 var numeroCarta1 = parseInt(Math.random() * 20);
    cartaJogador1 = carta0[numeroCarta1];
var numeroCarta2 = parseInt(Math.random() * 20);
 //while para sortear carta diferente
  while (numeroCarta1==numeroCarta2) {
    var numeroCarta2 = parseInt(Math.random() * 20);
  }
  cartaJogador2 = carta0[numeroCarta2];
  console.log(cartaJogador1, cartaJogador2); 
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("exibir1").disabled = false;
  document.getElementById("exibir2").disabled = false;
 
  // exibirCartaJogador();
}

function exibirCartaJogador1 (){
   document.getElementById("exibir1").disabled = true;
  exibirCartaJ1();
  
}


function exibirCartaJogador2(){
   document.getElementById("exibir2").disabled = true;
  exibirCartaJ2();
  
}




function atributoSelecionado () {
  
  var atributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < atributos.length; i++) {
    
    if (atributos[i].checked){
      
      return atributos[i].value;
      
    }
  }
  
}

function jogar() {
  
  var atributoSelecao = atributoSelecionado();
  console.log(atributoSelecao);
  var resultado = document.getElementById("resultado");
  var vitoria1 = "Jogador 1 venceu a rodada"
  var vitoria2 = "Jogador 2 venceu a rodada"
  var empate = "Os jogadores empataram"
  var valorJogador1 = cartaJogador1.atributos[atributoSelecao]
  var valorJogador2 = cartaJogador2.atributos[atributoSelecao]

  
  if(valorJogador1 > valorJogador2){
    
   // adicionarPontos()
    resultado.innerHTML= vitoria1
  }
  else if(valorJogador1 < valorJogador2){
    
    resultado.innerHTML= vitoria2
  }
  
  // else if (atributos[i].checked = false) {
  //    resultado.innerHTML= empate
  // }
  
  else if (valorJogador1 == valorJogador2) { 
    resultado.innerHTML= empate
  }
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  
  
}

function exibirCartaJ1(){
  
  var divCartaJogador= document.getElementById("carta-jogador");
  
  divCartaJogador.style.backgroundImage= `url(${cartaJogador1.imagem})`;
 
var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto="";
  for (var atributo in cartaJogador1.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador1.atributos[atributo] + "<br>";
    
}
  var nome = `<p class="carta-subtitle">${cartaJogador1.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  
  }

function exibirCartaJ2(){
  
  var divCartaJogador= document.getElementById("carta-maquina");
  
  divCartaJogador.style.backgroundImage= `url(${cartaJogador2.imagem})`;
 
var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto="";
  for (var atributo in cartaJogador2.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador2.atributos[atributo] + "<br>";
    
}
  var nome = `<p class="carta-subtitle">${cartaJogador2.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  
  }