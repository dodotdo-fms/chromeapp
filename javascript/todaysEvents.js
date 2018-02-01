back_to_main_btn.addEventListener("click", function(){

    main.style.display = 'block';
    todaysEvents.style.display = 'none';

}, false);

var todaysrow = document.getElementsByClassName("todaysrow");

for (var i = 0; i < todaysrow.length; i++) {
  todaysrow[i].addEventListener("mouseover", function() {
      this.style.background = "linear-gradient(to right,rgba(33, 37, 41, 0.218) 0%,rgba(15, 212, 255, 0.218) 50%,rgba(33, 37, 41, 0.218) 100%)";
      this.style.borderBottom = "2px solid";
      this.style.borderImage = "linear-gradient(to right,rgb(33, 37, 41) 0%,rgb(15, 212, 255) 50%,rgb(33, 37, 41) 100%)";
  }, false);

  todaysrow[i].addEventListener("mouseout", function() {
      this.style.background = 'none';
      this.style.borderBottom = "grey";
  }, false);
}


var events_detail = document.getElementById("events_detail");
var back_to_Events_btn = document.getElementById("back_to_Events_btn");
var events_detail_btn = document.getElementById("events_detail_btn");

events_detail_btn.addEventListener("click", function(){

    events_detail.style.display = 'block';
    todaysEvents.style.display = 'none';

}, false);

back_to_Events_btn.addEventListener("click", function(){

    events_detail.style.display = 'none';
    todaysEvents.style.display = 'block';

}, false);
