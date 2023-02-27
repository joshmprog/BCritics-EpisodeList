<!--./index.js-->

const okay = fetch('./data.json').then(function (response) {
	// If the response is successful, get the JSON
	if (response.ok) {
		return response.json();
	}
});
console.log(JSON.stringify(okay));
console.log(okay.items);
   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



