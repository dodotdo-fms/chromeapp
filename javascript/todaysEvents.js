
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

var backToEntBtn = document.getElementsByClassName("back-to-ent-btn");

//for문을 돌리니 webview가 제대로 안 나오네요 ㅜㅜ.. 엔터테인먼트 webview 열었을 때 back 눌러서 닫는 부분입니다
backToEntBtn[0].addEventListener("click", function(){
  backToEntBtn[0].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[1].addEventListener("click", function(){
  backToEntBtn[1].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[2].addEventListener("click", function(){
  backToEntBtn[2].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[3].addEventListener("click", function(){
  backToEntBtn[3].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[4].addEventListener("click", function(){
  backToEntBtn[4].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[5].addEventListener("click", function(){
  backToEntBtn[5].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
backToEntBtn[6].addEventListener("click", function(){
  backToEntBtn[6].parentNode.style.display = 'none';
  entertainment.style.display = 'block';
}, false);
var entertainmentBtn = document.getElementById("entertainment-btn");

entertainmentBtn.addEventListener("click", function(){

  entertainment.style.display = 'block';
  main.style.display = 'none';

}, false);

var youtubeBtn = document.getElementById("youtube-btn");
var amazonvideoBtn = document.getElementById("amazonvideo-btn");
var huluBtn = document.getElementById("hulu-btn");
var netflixBtn = document.getElementById("netflix-btn");
var BBCBtn = document.getElementById("BBC-btn");
var hbogoBtn = document.getElementById("hbogo-btn");
var pooqBtn = document.getElementById("pooq-btn");
youtubeBtn.addEventListener("click", function(){

  youtubeContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
amazonvideoBtn.addEventListener("click", function(){

  amazonvideoContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
huluBtn.addEventListener("click", function(){

  huluContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
netflixBtn.addEventListener("click", function(){

  netflixContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
BBCBtn.addEventListener("click", function(){

  BBCContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
hbogoBtn.addEventListener("click", function(){

  hbogoContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);
pooqBtn.addEventListener("click", function(){

  pooqContainer.style.display = 'block';
  entertainment.style.display = 'none';

}, false);

var backToMainBtn = document.getElementsByClassName("back-to-main-btn");

for(i = 0; i < backToMainBtn.length; i++){

  backToMainBtn[i].addEventListener("click", function(){


      main.style.display = 'block';
      this.parentNode.parentNode.style.display = 'none';

  }, false);

}

var webviewBack = document.getElementById("webview-back");
var entWebview = document.getElementsByClassName("ent-webview");
entWebview[0].back("click");

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
