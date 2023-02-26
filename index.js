$().ready(function(){
    $.getJSON( "/resultEpisodesList.json", function( resultEpisodesList ) {
    console.log(resultEpisodesList);
    $("#items").html(resultEpisodesList["items"]);
  });
});
