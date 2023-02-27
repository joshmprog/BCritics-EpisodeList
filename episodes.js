<!--./episodes.js-->

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => JSON.parse(json))
  .then((data) => {
      for (var i = 0; i < data.items.length; i++) {
        var title = data.items[i].name;
        var desc = data.items[i].description.substring(0,200) + "...";
        var imageurl = data.items[i].images[0].url;
        var audioprev = data.items[i].audio_preview_url;
        var key = data.items[i].id;
        var badge = document.createElement('div');
        badge.className = 'tile';
        badge.id = key
        badge.innerHTML =
          '<img src="https://i.scdn.co/image/ab67656300005f1f7a26bdaa44ed8cad4cbac373"/>' +
          '<div class="text">' +
          '<h2>' + title + '</h2>' + 
          '<p class="animate-text">' + desc + '</p>' + 
          '<div class="audioplayer"><audio controls style="width:200px"><source src="' + audioprev + '" type="audio/mpeg"></audio></div>' + 
          //'<div class="dots">' + 
          //  '<span></span>' + 
          //  '<span></span>' + 
          //  '<span></span>' + 
          //'</div>' + 
          '</div>';
        document.getElementById('badge-list').appendChild(badge);
      }
});
