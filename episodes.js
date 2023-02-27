<!--./episodes.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    document.getElementById("tile1title").innerHTML = myObj.items[0].name;
    document.getElementById("tile1desc").innerHTML = myObj.items[0].description.substring(0,200) + "...";
  
});
