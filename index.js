<!--./index.js-->

const loadPosts = async () => {
  const response = await fetch('./data.json');
  const posts = await response.json();
  return posts;
};

const posts = await loadPosts();
console.log(posts);

//    .then((response) => response.json())
//    .then((json) => const myJSON = json);

//const myOb = JSON.parse(myJSON);
//console.log(myOb.items[0].description);

   
var ahh = "why yes!";

document.getElementById("hmm").innerHTML = ahh;



