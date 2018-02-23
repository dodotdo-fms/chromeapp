
//엔터테인먼트 webview 열었을 때 back 눌러서 닫는 부분입니다
function backToEnt(num){
  var entertainment = document.getElementById("entertainment");
  var backToEntBtn = document.getElementsByClassName("back-to-ent-btn");
  backToEntBtn[num].addEventListener("click", function(){
    this.parentNode.style.display = 'none';
    entertainment.style.display = 'block';
  }, false);
}

for(i = 0; i < 7; i++)
  backToEnt(i);


function openEntPage(){
  var main = document.getElementById("main");
  var entertainment = document.getElementById("entertainment");
  var entertainmentBtn = document.getElementById("entertainment-btn");
  entertainmentBtn.addEventListener("click", function(){
    main.style.display = 'none';
    entertainment.style.display = 'block';
  }, false);
}

openEntPage();

function openEntWebview(num){
  var entertainment = document.getElementById("entertainment");
  var entLogoBtn = document.getElementsByClassName("ent-logo");
  var webviewContainer = document.getElementsByClassName("webview-container");
  entLogoBtn[num].addEventListener("click", function(){
    webviewContainer[num].style.display = 'block';
    entertainment.style.display = 'none';
  }, false);
}

for (i = 0; i < 7; i++)
  openEntWebview(i);
