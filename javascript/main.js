

function printClock() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	  var day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var clock = document.getElementById("time");          // 시간 출력할 장소 선택
    var date = document.getElementById("date");          // 날짜 출력할 장소 선택
    var currentDate = new Date();                                     // 현재시간
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = 'AM'; // 초기값 AM
    var currentHours = addZeros(currentDate.getHours(),2);
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds =  addZeros(currentDate.getSeconds(),2);

    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = 'PM';
    	currentHours = addZeros(currentHours - 12,2);
    }

    if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
       currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
    }
    clock.innerHTML = currentHours+":"+currentMinute;
    date.innerHTML = day[currentDate.getDay()] + ", " + currentDate.getDate() + " " + month[currentDate.getMonth()]; //날짜를 출력해 줌

    setInterval("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}


//define page variable
var main = document.getElementById("main");
var todaysEvents = document.getElementById("todaysEvents");
var entertainment = document.getElementById("entertainment");
var youtubeContainer = document.getElementById("youtube-container");
var amazonvideoContainer = document.getElementById("amazonvideo-container");
var huluContainer = document.getElementById("hulu-container");
var netflixContainer = document.getElementById("netflix-container");
var BBCContainer = document.getElementById("BBC-container");
var hbogoContainer = document.getElementById("hbogo-container");
var pooqContainer = document.getElementById("pooq-container");
var eventsDetail = document.getElementsByClassName("events-detail");

//main page에서 today's events page로 넘어가는 버튼
var todaysEventsBtn = document.getElementById("todaysEvents-btn");
todaysEventsBtn.addEventListener("click", function(){
    main.style.display = 'none';
    todaysEvents.style.display = 'block';
}, false);


var onOffBtn = document.getElementsByClassName("on-off-btn");

function moveOnOffBtn(btn) {
  if(btn.style.left == 4 + '%') {
    var pos = 4;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 54) {
        clearInterval(id);
      } else {
        pos++;
        btn.style.left = pos + '%';
      }
    }
  }
  else {
    var pos = 44;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 4) {
        clearInterval(id);
      } else {
        pos--;
        btn.style.left = pos + '%';
      }
    }
  }
}

onOffBtn[0].addEventListener("click", function(){
  moveOnOffBtn(onOffBtn[0]);
}, false);

onOffBtn[1].addEventListener("click", function(){
  moveOnOffBtn(onOffBtn[1]);
}, false);



function openCountBox(){
  var stuff = document.getElementsByClassName("stuff");
  var countBox = document.getElementsByClassName("count-box");
  stuff[0].addEventListener("click", function(){
    countBox[0].style.display = 'block';
  }, false);
  stuff[1].addEventListener("click", function(){
    countBox[1].style.display = 'block';
  }, false);
  stuff[2].addEventListener("click", function(){
    countBox[2].style.display = 'block';
  }, false);

}


openCountBox();

function cancelCountBox(){
  var cancelBtn = document.getElementsByClassName("cancel-btn");
  var countBox = document.getElementsByClassName("count-box");
  cancelBtn[0].addEventListener("click", function(){
      countBox[0].style.display = "none";
  }, false);
  cancelBtn[1].addEventListener("click", function(){
      countBox[1].style.display = 'none';
  }, false);
  cancelBtn[2].addEventListener("click", function(){
      countBox[2].style.display = 'none';
  }, false);

}

cancelCountBox();

window.onload = function() {
    printClock();
}
