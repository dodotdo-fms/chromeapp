
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



var webviewBack = document.getElementById("webview-back");
var entWebview = document.getElementsByClassName("ent-webview");

if(entWebview[0].canGoBack())
  webviewBack.addEventListener("click", entWebview[0].Back());
