<!--./episodes.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((myObj) => {
    //console.log(myObj);
    //console.log(myObj.items[0].description);
    //document.getElementById("tile1num").innerHTML = myObj.items[0].name.substring(0,3).replace(/\D/g,'');
    document.getElementById("tile1title").innerHTML = myObj.items[0].name;
    document.getElementById("tile1desc").innerHTML = myObj.items[0].description;
  
});
