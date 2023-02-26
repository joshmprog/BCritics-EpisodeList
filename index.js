<!--./index.js-->

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
   
//var okay = json.items;
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;
