<!--./index.js-->

function readData() {
   var resp = fetch('./data.json').response;
   console.log(resp);
   return resp.json();
}
console.log(readData());
var testa = readData();
console.log(testa[0]);

   
//var okay = json.items;
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



