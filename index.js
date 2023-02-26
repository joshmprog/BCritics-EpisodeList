function displayHighScoresJSON() {
    var requestLocal = new XMLHttpRequest();
    
    requestLocal.open("GET", "resultEpisodesList.json", false);
    requestLocal.setRequestHeader("Content-Type", "application/json");
    requestLocal.send();

   var highScoresDiv = document.getElementById("items");
   var json = JSON.parse(requestLocal.responseText);
   
   highScoresDiv.innerHTML = json.items[0];
}

displayHighScoresJSON();
