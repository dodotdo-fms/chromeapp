
var todaysrow = document.getElementsByClassName("todaysrow");
var todayscontent= document.getElementsByClassName("todayscontent");



function changeRowColor(num){
  todaysrow[num].addEventListener("click", function() {
    for (var i = 0; i < 5; i++) {
      todaysrow[i].style.background = 'none';
      todaysrow[i].style.borderBottom = "grey";
      todayscontent[i].style.display = 'none';
    }
    todayscontent[num].style.display = 'block';
    this.style.background = "linear-gradient(to right,rgba(33, 37, 41, 0.218) 0%,rgba(15, 212, 255, 0.218) 50%,rgba(33, 37, 41, 0.218) 100%)";
    this.style.borderBottom = "2px solid";
    this.style.borderImage = "linear-gradient(to right,rgb(33, 37, 41) 0%,rgb(15, 212, 255) 50%,rgb(33, 37, 41) 100%)";
  }, false);
}

changeRowColor(0);
changeRowColor(1);
changeRowColor(2);
changeRowColor(3);
changeRowColor(4);



var backToEntBtn = document.getElementsByClassName("back-to-ent-btn");

//엔터테인먼트 webview 열었을 때 back 눌러서 닫는 부분입니다

function backToEnt(num){
  backToEntBtn[num].addEventListener("click", function(){
    this.parentNode.style.display = 'none';
    entertainment.style.display = 'block';
  }, false);
}
backToEnt(0);
backToEnt(1);
backToEnt(2);
backToEnt(3);
backToEnt(4);
backToEnt(5);
backToEnt(6);


var entertainmentBtn = document.getElementById("entertainment-btn");

entertainmentBtn.addEventListener("click", function(){

  main.style.display = 'none';
  entertainment.style.display = 'block';
}, false);

var youtubeBtn = document.getElementById("youtube-btn");
var amazonvideoBtn = document.getElementById("amazonvideo-btn");
var huluBtn = document.getElementById("hulu-btn");
var netflixBtn = document.getElementById("netflix-btn");
var BBCBtn = document.getElementById("BBC-btn");
var hbogoBtn = document.getElementById("hbogo-btn");
var pooqBtn = document.getElementById("pooq-btn");

function openEntWebview(webviewBtn, webviewContainer){

  webviewBtn.addEventListener("click", function(){

    webviewContainer.style.display = 'block';
    entertainment.style.display = 'none';

  }, false);

}

openEntWebview(youtubeBtn, youtubeContainer);
openEntWebview(amazonvideoBtn, amazonvideoContainer);
openEntWebview(huluBtn, huluContainer);
openEntWebview(netflixBtn, netflixContainer);
openEntWebview(BBCBtn, BBCContainer);
openEntWebview(hbogoBtn, hbogoContainer);
openEntWebview(pooqBtn, pooqContainer);


var backToMainBtn = document.getElementsByClassName("back-to-main-btn");

for(i = 0; i < backToMainBtn.length; i++){

  backToMainBtn[i].addEventListener("click", function(){


      main.style.display = 'block';
      this.parentNode.parentNode.style.display = 'none';

  }, false);

}

var backToEventsBtn = document.getElementsByClassName("back-to-events-btn");
var eventsDetailBtn = document.getElementsByClassName("events-detail-btn");


function openEventsDetail(num){
  eventsDetailBtn[num].addEventListener("click", function(){
      todaysEvents.style.display = 'none';
      eventsDetail[num].style.display = 'block';
  }, false);
}

openEventsDetail(0);
openEventsDetail(1);
openEventsDetail(2);
openEventsDetail(3);
openEventsDetail(4);


function backToEvents(num){
  backToEventsBtn[num].addEventListener("click", function(){

      eventsDetail[num].style.display = 'none';
      todaysEvents.style.display = 'block';

  }, false);
}

backToEvents(0);
backToEvents(1);
backToEvents(2);
backToEvents(3);
backToEvents(4);
backToEvents(5);
backToEvents(6);

var webviewBack = document.getElementById("webview-back");
var entWebview = document.getElementsByClassName("ent-webview");

if(entWebview[0].canGoBack())
  webviewBack.addEventListener("click", entWebview[0].Back());
