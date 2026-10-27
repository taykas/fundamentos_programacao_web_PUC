if (condição) {
   // bloco a ser executado se a "condição" for VERDADE  
}

if (condição1) {
  // bloco a ser executado se a "condição1" for VERDADE  
} else if (condição2) {
 // bloco a ser executado se a "condição1" for FALSA e a "condição2" for VERDADE  
} else {
 // bloco a ser executado se a "condição1" for FALSA e a "condição2" for FALSA
}

switch(expression) {
  case x:
    // bloco de código executa se "expression" é igual a x
    break;
  case y:
    // bloco de código executa se "expression" é igual a y
    break;
  default:
    // bloco de código executa se "expression" é diferente de x e diferente de y
}

// Início: i=0; Finaliza: i = 5; A cada repetição: i++
let text = " ";
for (let i = 0; i < 5; i++) { 
   text += "O número é " + i + "<br>";
 }

 var i = 1;         // variável i, de controle da repetição, é inicializada
var text = " ";  
while (i < 5) {           // Enquanto i < 5, repete o bloco
  text += "O número é " + i;
  i++;                    // A cada repetição, incrementa i
}