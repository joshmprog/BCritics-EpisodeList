<!--./index.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    console.log(myObj);
    console.log(myObj.items[0].description);
});

//const myOb = JSON.parse(myJSON);
//console.log(myOb.items[0].description);

   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



