
var todaysrow = document.getElementsByClassName("todaysrow");
var todayscontent= document.getElementsByClassName("todayscontent");//table row 눌렀을 때 오른쪽에 뜨는 content



function changeRowColor(num){
  todaysrow[num].addEventListener("click", function() {
    for (var i = 0; i < 5; i++) { //이전에 click된 row색 되돌리고 content 숨기기
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



//main page로 가기 직전 page의 back 버튼
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
