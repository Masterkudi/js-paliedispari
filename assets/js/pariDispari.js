// genera un numero casuale da 1 a 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  // determina se un numero è pari o dispari
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // dichiara il vincitore
  function declareWinner(userChoice, userNumber, computerNumber) {
    const sum = userNumber + computerNumber;
    const isSumEven = isEven(sum);
  
    console.log("Numero del computer:", computerNumber);
    console.log("Somma dei numeri:", sum);
  
    if (
      (userChoice === "pari" && isSumEven) ||
      (userChoice === "dispari" && !isSumEven)
    ) {
      console.log("Hai vinto!");
    } else {
      console.log("Hai perso!");
    }
  }
  
  // Leggi input utente
  const userChoice = prompt("Scegli pari o dispari:");
  const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
  
  // Genera un numero casuale per il computer
  const computerNumber = generateRandomNumber();
  
  // Calcola il risultato e dichiara il vincitore
  declareWinner(userChoice, userNumber, computerNumber);
  