// Funzione per verificare se una parola è palindroma
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
//const letters = word.split("");
    return word === reversedWord; // ottengo true o false a seconda del caso
  }
  
  // Lettura dell'input dell'utente
  const userInput = prompt("Inserisci una parola:");
  
  // Verifica se la parola è palindroma
  if (isPalindrome(userInput)) {
    console.log("La parola è palindroma.");
  } else {
    console.log("La parola non è palindroma.");
  }
  