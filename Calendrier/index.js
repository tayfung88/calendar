document.addEventListener("DOMContentLoaded", function () {
    // Obtenir l'élément où vous allez afficher la liste de noms
    let nameList = document.getElementById("nameList");
  
    // Charger le fichier JSON
    fetch("name.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data.forEach(function (nameData) {
          let listCard = document.createElement("div");
          listCard.classList.add("name-card");
          listCard.innerHTML = `
            <h2>Nom : ${nameData.name}</h2>
            <p>Genre: ${nameData.gendre}</p>
          `;
          nameList.appendChild(listCard);
        });
    });
});