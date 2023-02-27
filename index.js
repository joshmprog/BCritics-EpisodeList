<!--./index.js-->

const response = fetch('./data.json');
const json = response.json();

console.log(JSON.stringify(json));
console.log(json.items);
   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



