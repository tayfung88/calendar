document.addEventListener("DOMContentLoaded", function () {
    function loadJSON(callback) {
      // Utilise la méthode fetch pour récupérer le fichier JSON.
      fetch("anniversaires.json")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(function (data) {
          // Appelle la fonction de rappel avec les données JSON récupérées.
          callback(data);
        })
        .catch(function (error) {
          console.error("Fetch error: " + error);
        });
    }
  
    function buildTimeline(data) {
      var timeline = document.querySelector(".cd-timeline");
  
      data.forEach(function (item) {
        var block = document.createElement("div");
        block.className = "cd-timeline__block";
  
        var date = document.createElement("span");
        date.className = "cd-timeline__date";
        date.textContent = item.date;
  
        var name = document.createElement("h2");
        name.textContent = item.name;
  
        block.appendChild(date);
        block.appendChild(name);
        timeline.appendChild(block);
      });
  
      var verticalTimeline = new VerticalTimeline(timeline);
      checkTimelineScroll();
    }
  
    loadJSON(buildTimeline);
  });