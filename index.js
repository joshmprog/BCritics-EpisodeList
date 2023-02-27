<!--./index.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    //console.log(myObj);
    //console.log(myObj.items[0].description);
    document.getElementById("latestPod").innerHTML = myObj.items[0].name.substring(0,2);
    document.getElementById("latestEmbed").src = "https://open.spotify.com/embed/episode/" + myObj.items[0].id;
});

//const myOb = JSON.parse(myJSON);
//console.log(myOb.items[0].description);



