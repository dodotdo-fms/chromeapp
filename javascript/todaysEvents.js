backToMainBtn.addEventListener("click", function(){

    main.style.display = 'block';
    todaysEvents.style.display = 'none';

}, false);

var todaysrow = document.getElementsByClassName("todaysrow");
var eventImgtag = document.getElementById("event-img");
var eventsDetail = document.getElementsByClassName("events-detail");
for (var i = 0; i < todaysrow.length; i++){
  // if(i==0){
  //   eventImgtag.src = "images/event_3.jpg";
  // }

  todaysrow[i].addEventListener("click", function() {
    for (var j = 0; j < todaysrow.length; j++) {
      todaysrow[j].style.background = 'none';
      todaysrow[j].style.borderBottom = "grey";
    }
    this.style.background = "linear-gradient(to right,rgba(33, 37, 41, 0.218) 0%,rgba(15, 212, 255, 0.218) 50%,rgba(33, 37, 41, 0.218) 100%)";
    this.style.borderBottom = "2px solid";
    this.style.borderImage = "linear-gradient(to right,rgb(33, 37, 41) 0%,rgb(15, 212, 255) 50%,rgb(33, 37, 41) 100%)";
  }, false);


}

var entertainmentBtn = document.getElementById("entertainment-btn");

entertainmentBtn.addEventListener("click", function(){

  youtubeContainer.style.display = 'block';
  main.style.display = 'none';

}, false);

var backToEntBtn = document.getElementsByClassName("back-to-ent-btn")

backToEntBtn[0].addEventListener("click", function(){

  backToEntBtn[0].parentNode.style.display = 'none';
  main.style.display = 'block';



}, false);
//
// var backToEventsBtn = document.getElementById("back-to-Events-btn");
// var eventsDetailBtn = document.getElementsByClassName("events-detail-btn");
//
// eventsDetailBtn.addEventListener("click", function(){
//
//     eventsDetail.style.display = 'block';
//     todaysEvents.style.display = 'none';
//
// }, false);
//
// backToEventsBtn.addEventListener("click", function(){
//
//     eventsDetail.style.display = 'none';
//     todaysEvents.style.display = 'block';
//
// }, false);
