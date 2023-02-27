<!--./index.js-->

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => const myJSON = json);

const myOb = JSON.parse(myJSON);
console.log(myOb.items[0].description);

   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



