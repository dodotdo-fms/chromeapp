function openRequestPage() {
    var main = document.getElementById("main");
    var requestEvents = document.getElementById("request");
    var requestEventBtn = document.getElementById("request-btn");
    requestEventBtn.addEventListener("click", function(){
        main.style.display = 'none';
        requestEvents.style.display = 'block';
    }, false);
  }
  
  openRequestPage();