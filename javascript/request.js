var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var recognition;

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

function showInfo(s) {
    console.log(s);
    // if (s) {
    //     for (var child = info.firstChild; child; child = child.nextSibling) {
    //         if (child.style) {
    //             child.style.display = child.id == s ? 'inline' : 'none';
    //         }
    //     }
    //     info.style.visibility = 'visible';
    // } else {
    //     info.style.visibility = 'hidden';
    // }
}


function initRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        upgrade();
    } else {
        start_button.style.display = 'inline-block';
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
            recognizing = true;
            showInfo('info_speak_now');
            start_img.src = 'images/mic-animate.gif';
        };

        recognition.onerror = function(event) {
            if (event.error == 'no-speech') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_speech');
                ignore_onend = true;
            }

            if (event.error == 'audio-capture') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_microphone');
                ignore_onend = true;
            }

            if (event.error == 'not-allowed') {
                console.log(event.timeStamp + ', ' + start_timestamp);
                if (event.timeStamp - start_timestamp < 100) {
                    showInfo('info_blocked');
                } else {
                    showInfo('info_denied');
                }
                ignore_onend = true;
            }
        };

        recognition.onend = function() {
            recognizing = false;
            if (ignore_onend) {
                return;
            }
            start_img.src = 'images/mic.gif';
            if (!final_transcript) {
                showInfo('info_start');
                return;
            }
            // showInfo('');
            // if (window.getSelection) {
            //     window.getSelection().removeAllRanges();
            //     var range = document.createRange();
            //     range.selectNode(document.getElementById('final_span'));
            //     window.getSelection().addRange(range);
            // }
        };

        recognition.onresult = function(event) {
            var interim_transcript = '';
            var writeText = '';

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript 
                } 
            }
            
            final_transcript = capitalize(final_transcript);
            interim_transcript = capitalize(interim_transcript);

            if (final_transcript.length > 0) {
                writeText = final_transcript; 
            } else {
                writeText = interim_transcript; 
            }

            document.getElementById('request-text').value = linebreak(writeText);
        };

        recognition.onspeechend = function() {
            console.log('Speech has stopped being detected');
            recognition.stop();
        }
    }
}

function startRecognition () {
    var startButton = document.getElementById('start_button');
    startButton.addEventListener('click', function (event) {
        console.log('Test');
        if (recognizing) {
            recognition.stop();
            return;
        }
    
        final_transcript = '';
        recognition.lang = 'en-US';
        recognition.start();
        ignore_onend = false;
        document.getElementById('request-text').value = '';
        start_img.src = 'images/mic-slash.gif';
        start_timestamp = event.timeStamp;
    }, false);
}

function upgrade() {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function sendRequest (data) {
    var arg = {
        url: serverAddress + '/stv/item_request',
        type: 'post',
        data: {
            'hotelName': 'FSDH',
            'roomName': data.roomName,
            'item': data.item
        },
        dataType: 'json',
        asycn: true,
        success: function (js) {
            console.log(js);
        }
    };

    jQuery.ajax(arg);
}

function addTowelBtnEvent () {
    var towelBtn = document.getElementById('towels');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Towel'
        };

        sendRequest(data);
    }, false);
}

function addShampooBtnEvent () {
    var towelBtn = document.getElementById('shampoo');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Shampoo'
        };

        sendRequest(data);
    }, false);
}

function addSlipperBtnEvent () {
    var towelBtn = document.getElementById('slippers');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Slipper'
        };

        sendRequest(data);
    }, false);
}

function addToiletTissueBtnEvent () {
    var towelBtn = document.getElementById('toiletTissue');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Toliet Tissue'
        };

        sendRequest(data);
    }, false);
}

function addToothBrushBtnEvent () {
    var towelBtn = document.getElementById('toothbrush');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Toothbrush'
        };

        sendRequest(data);
    }, false);
}

function addBruchBtnEvent () {
    var towelBtn = document.getElementById('brush');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': 'Brush'
        };

        sendRequest(data);
    }, false);
}

function addSendBtnEvent () {
    var towelBtn = document.getElementById('sendText');
    towelBtn.addEventListener('click', function () {
        var data = {
            'roomName': 1001,
            'item': document.getElementById('request-text').value
        };

        sendRequest(data);
        document.getElementById('request-text').value = 'Speak requests using the voice input button in remote controller.';
    }, false);
}

function addTextAreaEvent() {
    var textArea = document.getElementById('request-text');
    textArea.addEventListener('click', function () {
        textArea.value = '';
    });
}

initRecognition();
startRecognition();
addTowelBtnEvent();
addBruchBtnEvent();
addToothBrushBtnEvent();
addSlipperBtnEvent();
addToiletTissueBtnEvent();
addShampooBtnEvent();
addSendBtnEvent();
//addTextAreaEvent();