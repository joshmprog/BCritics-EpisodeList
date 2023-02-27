<!--./episodes.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    for (var i = 1; i < 5; i++) { //data.tennis.length; i++) {
    document.getElementById("tile" + i + "title").innerHTML = myObj.items[i-1].name;
    document.getElementById("tile" + i + "desc").innerHTML = myObj.items[i-1].description.substring(0,200) + "...";
    }
});
