function openRoomServicePage(){
    var main = document.getElementById("main");
    var roomServiceEvents = document.getElementById("roomService");
    var roomServiceEventBtn = document.getElementById("roomService-btn");
    roomServiceEventBtn.addEventListener("click", function(){
        main.style.display = 'none';
        roomServiceEvents.style.display = 'block';
    }, false);
  }
  
  openRoomServicePage();