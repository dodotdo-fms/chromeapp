function openWatchTVPage(){
    var main = document.getElementById("main");
    var watchTVEvents = document.getElementById("watchTV");
    var watchTVEventsBtn = document.getElementById("watchTV-btn");
    watchTVEventsBtn.addEventListener("click", function(){
        main.style.display = 'none';
        watchTVEvents.style.display = 'block';
    }, false);
  }
  
  openWatchTVPage();