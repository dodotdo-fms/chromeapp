back_to_main_btn.addEventListener("click", function(){
  if (todaysEvents.style.display == 'none') {
    main.style.display = 'block';
    todaysEvents.style.display = 'block';

  }
  else {
    main.style.display = 'block';
    todaysEvents.style.display = 'none';

  }
}, false);

var todaysrow = document.getElementsByClassName("todaysrow");

for (var i = 0; i < todaysrow.length; i++) {
  todaysrow[i].addEventListener("mouseover", function() {
      this.style.backgroundColor = 'red';
    }, false);

    todaysrow[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = '#212529';
      }, false);
}
