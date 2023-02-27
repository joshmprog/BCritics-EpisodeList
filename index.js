<!--./index.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
	console.log(JSON.stringify(data));
	console.log(data.items);	
});

   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



