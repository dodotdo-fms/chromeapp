var newMain = document.getElementById("new-main");
var requestBtn = document.getElementById("request-btn");
requestBtn.addEventListener("click", function(){
    main.style.display = 'none';
    newMain.style.display = 'block';
}, false);
