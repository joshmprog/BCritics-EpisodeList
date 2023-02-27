<!--./index.js-->

const response = await fetch('./data.json');
const json = await response.json();

console.log(JSON.stringify(json));
console.log(json.items);
   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



