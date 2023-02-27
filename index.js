<!--./index.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json.items[0].description);
});

//const myOb = JSON.parse(myJSON);
//console.log(myOb.items[0].description);

   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



