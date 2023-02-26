function logResults(json) {
    console.log(json)
}

$.ajax({
    url: "https://raw.githubusercontent.com/joshmprog/BCritics-EpisodeList/main/resultEpisodesList.json",
    dataType: "json"
}).done(function(result){
    console.log(result);
});
