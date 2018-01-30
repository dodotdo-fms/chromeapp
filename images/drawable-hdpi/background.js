chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create('window.html', {

    'state': 'maximized',
    'state': 'fullscreen',
    'bounds': {
      'width': 1920,
      'height': 1080
    }

  });

});
