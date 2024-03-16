window.onload = function() {
  let suit = ["♠", "♣", "♥", "♦"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  // Function to update a card
  const updateCard = (card) => {
    // Get random number and suit
    let randomNumber = number[Math.floor(Math.random() * number.length)];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];

    // Update elements
    card.querySelector(".number").innerHTML = randomNumber;
    card.querySelectorAll(".suit").forEach(element => {
        element.innerHTML = randomSuit;
        if (randomSuit == "♥" || randomSuit == "♦") {
            element.classList.add("red-suit");
            card.querySelector(".number").classList.add("red-suit");
        } else {
            element.classList.remove("red-suit");
            card.querySelector(".number").classList.remove("red-suit");
        }
    });
  };

  // Fuction to generate a new card
  function generateNewCard() {
      let card = document.querySelector(".card-container");
      updateCard(card);
  }

  // Generate a new card when onload
  generateNewCard();

  // Generate a new card every 5 seconds
  setInterval(generateNewCard, 5000);

  // Generate a new card when click
  document.getElementById("new-card-button").onclick = function() {
      generateNewCard();
  };

  // Change size using user's input
  function changeSizeCard() {
    let userWidth = parseInt(document.getElementById("widthInput").value, 10);
    let userHeight = parseInt(document.getElementById("heightInput").value, 10);

    const minWidth = 200;
    const maxWidth = 500;
    const minHeight = 350;
    const maxHeight = 700;

    if (userWidth < minWidth) {
        alert(`The minimum width is ${minWidth}px.`);
        userWidth = minWidth;
    } else if (userWidth > maxWidth) {
        alert(`The maximum width is ${maxWidth}px.`);
        userWidth = maxWidth;
    }

    if (userHeight < minHeight) {
        alert(`The minimum hight is ${minHeight}px.`);
        userHeight = minHeight;
    } else if (userHeight > maxHeight) {
        alert(`The maximum hight is ${maxHeight}px.`);
        userHeight = maxHeight;
    }

    let myDivs = document.querySelectorAll(".card-container");
    myDivs.forEach(div => {
        div.style.width = `${userWidth}px`;
        div.style.height = `${userHeight}px`;
    });
}

document.getElementById("changeSizeButton").addEventListener("click", function() {
    changeSizeCard();
});

  // MULTI-CARDS

  function getMultiCards() {
      let multiCards = document.querySelectorAll(".multi-card");
  
      // Agregar clase 'hidden' a todos los elementos excepto al primero
      multiCards.forEach((card, index) => {
          if (index !== 0) {
              card.classList.add("hidden");
          }
      });
  
      let numToShow = Math.floor(Math.random() * (multiCards.length - 1)) + 1; // Restar 1 para excluir el primer elemento
      let shownIndices = [0]; // Añadir índice 0 (primer elemento) al array mostrado
      for (let i = 0; i < numToShow; i++) {
          let randomIndex;
          do {
              randomIndex = Math.floor(Math.random() * multiCards.length);
          } while (shownIndices.includes(randomIndex));
          updateCard(multiCards[randomIndex]);
          multiCards[randomIndex].classList.remove("hidden");
          shownIndices.push(randomIndex);
      }
  }

  document.getElementById("multi-card-button").addEventListener("click", function() {
    getMultiCards(); // Llama a la función getMultiCards
    generateNewCard(); // Llama a la función generateNewCard
});
};







