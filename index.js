var requestLocal = new XMLHttpRequest();
    
requestLocal.open("GET", "resultEpisodesList.json", false);
requestLocal.setRequestHeader("Content-Type", "application/json");
requestLocal.send();

//var highScoresDiv = document.getElementById("items");
var json = JSON.parse(requestLocal.responseText);
   
var okay = json.items;
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;
