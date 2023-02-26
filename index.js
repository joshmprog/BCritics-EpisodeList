document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  $.getJSON("http://joshmprog.github.io/BCritics-EpisodeList/resultEpisodesList.json", function(json) {
    console.log(json); 
});
});
