function changeRowColor(num){
  var todaysrow = document.getElementsByClassName("todaysrow");
  var todayscontent= document.getElementsByClassName("todayscontent");//table row 눌렀을 때 오른쪽에 뜨는 content
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

for(i=0; i<5; i++)
  changeRowColor(i);




function backToMainPage(){
  //main page로 가기 직전 page의 back 버튼
  var backToMainBtn = document.getElementsByClassName("back-to-main-btn");
  var main = document.getElementById("main");
  for(i = 0; i < backToMainBtn.length; i++){//length가 계속 바뀔 거 같아 일단 function 안에 for문을 두었는데 페이지 개수가 확정되면 for을 밖으로 빼는 게 효율적일 것 같습니다

    backToMainBtn[i].addEventListener("click", function(){


        main.style.display = 'block';
        this.parentNode.parentNode.style.display = 'none';
        //back button은 항상 header 안에 위치하여 parentNode.parentNode가 wrapper 를 가리키도록 해야 합니다!
    }, false);

  }

}

backToMainPage();


function openEventsDetail(num){
  var todaysEvents = document.getElementById("todaysEvents");
  var eventsDetail = document.getElementsByClassName("events-detail");
  var eventsDetailBtn = document.getElementsByClassName("events-detail-btn");
  eventsDetailBtn[num].addEventListener("click", function(){
      todaysEvents.style.display = 'none';
      eventsDetail[num].style.display = 'block';
  }, false);

}


function backToEvents(num){
  var todaysEvents = document.getElementById("todaysEvents");
  var eventsDetail = document.getElementsByClassName("events-detail");
  var backToEventsBtn = document.getElementsByClassName("back-to-events-btn");
  backToEventsBtn[num].addEventListener("click", function(){

      eventsDetail[num].style.display = 'none';
      todaysEvents.style.display = 'block';

  }, false);
}

for(i=0; i<5; i++){
  openEventsDetail(i);
  backToEvents(i);
}
