window.onload = function() {
  let suit = ["♠", "♣", "♥", "♦"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  // Función para actualizar una carta
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

  // Función para generar una nueva carta
  function generateNewCard() {
      console.log("Generando nueva carta...");
      let card = document.querySelector(".card-container");
      updateCard(card);
  }

  // Generar una carta al cargar la página
  generateNewCard();

  // Generar una nueva carta al hacer clic en el botón
  document.getElementById("new-card-button").onclick = function() {
      console.log("Botón 'New Card' clicado.");
      generateNewCard();
  };

  // Change size using user's input
  function changeSizeCard() {
    let userWidth = parseInt(document.getElementById("widthInput").value, 10);
    let userHeight = parseInt(document.getElementById("heightInput").value, 10);

    const minWidth = 100;
    const maxWidth = 500;
    const minHeight = 140;
    const maxHeight = 700;

    if (userWidth < minWidth) {
        alert(`El ancho mínimo es ${minWidth}px.`);
        userWidth = minWidth;
    } else if (userWidth > maxWidth) {
        alert(`El ancho máximo permitido es ${maxWidth}px.`);
        userWidth = maxWidth;
    }

    if (userHeight < minHeight) {
        alert(`El alto mínimo es ${minHeight}px.`);
        userHeight = minHeight;
    } else if (userHeight > maxHeight) {
        alert(`El alto máximo permitido es ${maxHeight}px.`);
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

      multiCards.forEach(card => {
          card.classList.add("hidden");
      });

      let numToShow = Math.floor(Math.random() * multiCards.length) + 1;
      let shownIndices = [];
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

  document.getElementById("multi-card-button").addEventListener("click", getMultiCards);
};







