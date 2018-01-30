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
