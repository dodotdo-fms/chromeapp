chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create('window.html', {

    // 'state': 'maximized',
    'state': 'fullscreen',
    'bounds': {
      'width': 1280,
      'height': 720
    }

  });

});
