/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
(function(){"use strict";function t(){}function r(t,n){for(var e=t.length;e--;)if(t[e].listener===n)return e;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var e=t.prototype,i=this,s=i.EventEmitter;e.getListeners=function(n){var r,e,t=this._getEvents();if(n instanceof RegExp){r={};for(e in t)t.hasOwnProperty(e)&&n.test(e)&&(r[e]=t[e])}else r=t[n]||(t[n]=[]);return r},e.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},e.getListenersAsObject=function(n){var e,t=this.getListeners(n);return t instanceof Array&&(e={},e[n]=t),e||t},e.addListener=function(i,e){var t,n=this.getListenersAsObject(i),s="object"==typeof e;for(t in n)n.hasOwnProperty(t)&&-1===r(n[t],e)&&n[t].push(s?e:{listener:e,once:!1});return this},e.on=n("addListener"),e.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},e.once=n("addOnceListener"),e.defineEvent=function(e){return this.getListeners(e),this},e.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},e.removeListener=function(i,s){var n,e,t=this.getListenersAsObject(i);for(e in t)t.hasOwnProperty(e)&&(n=r(t[e],s),-1!==n&&t[e].splice(n,1));return this},e.off=n("removeListener"),e.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},e.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},e.manipulateListeners=function(r,t,i){var e,n,s=r?this.removeListener:this.addListener,o=r?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(e=i.length;e--;)s.call(this,t,i[e]);else for(e in t)t.hasOwnProperty(e)&&(n=t[e])&&("function"==typeof n?s.call(this,e,n):o.call(this,e,n));return this},e.removeEvent=function(e){var t,r=typeof e,n=this._getEvents();if("string"===r)delete n[e];else if(e instanceof RegExp)for(t in n)n.hasOwnProperty(t)&&e.test(t)&&delete n[t];else delete this._events;return this},e.removeAllListeners=n("removeEvent"),e.emitEvent=function(r,o){var e,i,t,s,n=this.getListenersAsObject(r);for(t in n)if(n.hasOwnProperty(t))for(i=n[t].length;i--;)e=n[t][i],e.once===!0&&this.removeListener(r,e.listener),s=e.listener.apply(this,o||[]),s===this._getOnceReturnValue()&&this.removeListener(r,e.listener);return this},e.trigger=n("emitEvent"),e.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},e.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},e._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},e._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return i.EventEmitter=s,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}).call(this);

chrome.storage.local.get("socketIds", function (obj) {
	if (obj && obj.socketIds) {
		console.log(obj.socketIds);
		obj.socketIds.forEach(function (socketId) {
			chrome.socket.disconnect(socketId);
			chrome.socket.destroy(socketId);
		});
	}
	chrome.storage.local.set({socketIds: []});
});
var socketIds = [];

var CRLF = '\r\n';
var STATUS_CODES = {
	100 : 'Continue',
	101 : 'Switching Protocols',
	102 : 'Processing',		              // RFC 2518, obsoleted by RFC 4918
	200 : 'OK',
	201 : 'Created',
	202 : 'Accepted',
	203 : 'Non-Authoritative Information',
	204 : 'No Content',
	205 : 'Reset Content',
	206 : 'Partial Content',
	207 : 'Multi-Status',               // RFC 4918
	300 : 'Multiple Choices',
	301 : 'Moved Permanently',
	302 : 'Moved Temporarily',
	303 : 'See Other',
	304 : 'Not Modified',
	305 : 'Use Proxy',
	307 : 'Temporary Redirect',
	400 : 'Bad Request',
	401 : 'Unauthorized',
	402 : 'Payment Required',
	403 : 'Forbidden',
	404 : 'Not Found',
	405 : 'Method Not Allowed',
	406 : 'Not Acceptable',
	407 : 'Proxy Authentication Required',
	408 : 'Request Time-out',
	409 : 'Conflict',
	410 : 'Gone',
	411 : 'Length Required',
	412 : 'Precondition Failed',
	413 : 'Request Entity Too Large',
	414 : 'Request-URI Too Large',
	415 : 'Unsupported Media Type',
	416 : 'Requested Range Not Satisfiable',
	417 : 'Expectation Failed',
	418 : 'I\'m a teapot',              // RFC 2324
	422 : 'Unprocessable Entity',       // RFC 4918
	423 : 'Locked',                     // RFC 4918
	424 : 'Failed Dependency',          // RFC 4918
	425 : 'Unordered Collection',       // RFC 4918
	426 : 'Upgrade Required',           // RFC 2817
	428 : 'Precondition Required',      // RFC 6585
	429 : 'Too Many Requests',          // RFC 6585
	431 : 'Request Header Fields Too Large',// RFC 6585
	500 : 'Internal Server Error',
	501 : 'Not Implemented',
	502 : 'Bad Gateway',
	503 : 'Service Unavailable',
	504 : 'Gateway Time-out',
	505 : 'HTTP Version not supported',
	506 : 'Variant Also Negotiates',    // RFC 2295
	507 : 'Insufficient Storage',       // RFC 4918
	509 : 'Bandwidth Limit Exceeded',
	510 : 'Not Extended',               // RFC 2774
	511 : 'Network Authentication Required' // RFC 6585
};
var socket = chrome.socket;
var stringToUint8Array = function(string) {
	var buffer = new ArrayBuffer(string.length);
	var view = new Uint8Array(buffer);
	for(var i = 0; i < string.length; i++) {
			view[i] = string.charCodeAt(i);
	}
	return view;
};

var arrayBufferToString = function(buffer) {
	var str = '';
	var uArrayVal = new Uint8Array(buffer);
	for(var s = 0; s < uArrayVal.length; s++) {
		str += String.fromCharCode(uArrayVal[s]);
	}
	return str;
};

var stringToArrayBuffer = function(string) {
	var buffer = new ArrayBuffer(string.length);
	var view = new Uint8Array(buffer);
	for(var i = 0; i < string.length; i++) {
		view[i] = string.charCodeAt(i);
	}
	return buffer;
};

var Server = function () {
	EventEmitter.call(this);
	this._host = "127.0.0.1";
	this._socketId = null;
}
Server.prototype = Object.create(EventEmitter.prototype);
Server.prototype.createServer = function(cb) {
	this._cb = cb;
};
Server.prototype.listen = function(port, host) {
	var self = this;
	this._host = host || this._host;
	socket.create("tcp", {}, function(_socketInfo) {
		self._socketId = _socketInfo.socketId;

		socket.listen(self._socketId, host || self._host, port, 20, function(result) {
			console.log("LISTENING:", result, self._socketId);
			if (result == 0) {
				socket.accept(self._socketId, self._onAccept.bind(self));

				socketIds.push(self._socketId);
				chrome.storage.local.set({socketIds: socketIds}, function () {
					console.log("SET ARGS", arguments);
				});
			}
		});
	});
};

Server.prototype._onAccept = function(acceptInfo) {
	var self = this;
	socket.accept(this._socketId, self._onAccept.bind(self));
	// console.log('accept::', acceptInfo);

	this._readSocket(acceptInfo.socketId, function (requestString) {
		chrome.socket.getInfo(acceptInfo.socketId, function (result) {
			var req = new Request(acceptInfo.socketId, result, requestString);
			req.setChunkSize(self._chunkSize);
			var res = new Response(acceptInfo.socketId);
			if (req.getHeader("Connection") == "keep-alive") {
				// result == boolean.
				// self._enableKeepAlive(acceptInfo.socketId, function (result) {
					// console.log("KeepAlive", acceptInfo.socketId, result);
					// self._readSocket(acceptInfo.socketId, function (requestString) {
						// console.log("KeepAlive _readSocket", requestString);
					// });
				// });
			}
			// console.log(acceptInfo.socketId, req._headers);
			// Do standard Response setup here
			res.setHeader('Content-Type', 'text/plain');

			// if (req._method.toLowerCase() === 'options') {
			// 	self.emit('OPTIONS', req, res);
			// } else {
			// 	self.emit('request', req, res);
			// 	self.emit(req._path, req, res);
			// }
			if (req._method) {
				self.emit(req._method.toLowerCase(), req, res);
				self.emit(req._method.toLowerCase() + ":" + req._path, req, res);	
			} else {
				res.end();
			}
		});
	});
};

Server.prototype._readSocket = function (socketId, cb) {
	socket.read(socketId, function(readInfo) {
		var data = arrayBufferToString(readInfo.data);
		cb && cb(data);
	});
};
Server.prototype._enableKeepAlive = function (socketId, cb) {
	chrome.socket.setKeepAlive(socketId, true, 0, cb)
};
Server.prototype.setChunkSize = function (chunkSize) {
	this._chunkSize = chunkSize;
};
Server.prototype.getChunkSize = function () {
	return this._chunkSize;
};
Server.prototype.get = function(path, cb) {
	this.on("get:" + path, cb);
};
Server.prototype.post = function(path, cb) {
	this.on("post:" + path, cb);
};
Server.prototype.put = function(path, cb) {
	this.on("post:" + path, cb);
};
Server.prototype.delete = function(path, cb) {
	this.on("delete:" + path, cb);
};
Server.prototype.head = function(path, cb) {
	this.on("head:" + path, cb);
};
Server.prototype.options = function(path, cb) {
	this.on("options:" + path, cb)
};

var Request = function (socketId, info, requestString) {
	this._socketId = socketId;
	this._method = null;
	this._remoteIp = null;
	this._remotePort = null;
	this._path = null;
	this._headers = new Headers();
	this._cookies = new Cookies();
	this.body = {};

	if (info) {
		this._remoteIp = info.peerAddress;
		this._remotePort = info.peerPort;
	}

	if (requestString) {
		this._parseString(requestString);
	}
}

Request.prototype.isStreaming = function () {
	return this.getHeader("range") != null;
}

Request.prototype.getRange = function (cb) {
	var self = this;
	// setTimeout(function () {
		if (self.isStreaming()) {
			var range = self.getHeader("range");
			range = range.split("bytes=")[1];
			range = range.split("-");
			var rangeOne = parseInt(range[0], 10);
			var rangeTwo = parseInt(range[1], 10);
			cb(rangeOne ? rangeOne : 0, rangeTwo ? rangeTwo : 0);
		} else {
			cb(null, null);
		}
	// }, 5)
}

Request.prototype.setChunkSize = function (size) {
	this._chunkSize = size;
}

Request.prototype.getChunkSize = function (cb) {
	var self = this;
	// setTimeout(function () {
		if (self.isStreaming()) {
			self.getRange(function (start, end) {
				if (end == 0) {
					end = start;
				}
				cb((end-start==0)?(self._chunkSize || 10000) : (end-start));
			});
		} else {
			cb(0,0);
		}
	// }, 5);
}

Request.prototype._parseString = function (requestString) {
	this._method = requestString.substr(0, requestString.indexOf(' '));
	this._path = requestString.substr(requestString.indexOf(' ') + 1, requestString.indexOf(' HTTP') - requestString.indexOf(' ') - 1);
	if (this._path.indexOf('?') > -1) {
		this._path = this._path.substr(0, this._path.indexOf('?'));
	}
	var headerLines = requestString.split('\n');
	for (var n = 0; n < headerLines.length; n++) {
		var line = headerLines[n];

		if (line.indexOf(':') > 0) {
			line = line.split(':');
			var key = line.shift();
			var value = line.join(':').trim();

			this._headers.setHeader(key, value);
		}
	}

	if (this._method !== 'GET' && requestString.indexOf('\r\n\r\n') > -1) {

		var bodyString = requestString.substr(requestString.indexOf('\r\n\r\n') + 2).trim();

		var bodySplit = bodyString.split('&');
		for (var n = 0; n < bodySplit.length; n++) {
			var args = bodySplit[n].split('=');
			if (args.length === 2) {
				this.body[args[0]] = args[1];
			}
		}
	}
}

Request.prototype.getHeader = function(key) {
	return this._headers.getHeader(key);
};

var Response = function (socketId) {
	this._socketId = socketId;
	this._headersSent = false;
	this._headers = new Headers();
	this._cookies = new Cookies();
	this._status = 200;
}


Response.prototype.write = function(data, cb) {
	var self = this;
	// setTimeout(function () {
		var outputBuffer;

		if (typeof data === 'string') {
			outputBuffer = stringToArrayBuffer(data);
			// outputBuffer = data;
		} else if (data instanceof Uint8Array) {
			outputBuffer = data.buffer;
			// var view = new Uint8Array(outputBuffer);
			// view.set(data, 0);
		} else if (data instanceof ArrayBuffer) {
			outputBuffer = data;
		} else {
			outputBuffer = data;
		}
		
		socket.write(self._socketId, outputBuffer, function(writeInfo) {
			// console.log('write writeInfo', writeInfo);
			// setTimeout(function () {
				cb && cb(writeInfo);
			// }, 5);
		});
	// }, 5);
};

Response.prototype.send = function(data) {
	if (this._headersSent) {
		throw new Error("Headers already sent");
	}

	var thing = stringToUint8Array(data);
	this._headers.setHeader('Content-Length', thing.length);
	this._sendHeaders();
	var self = this;
	this.write(data, function () {
		self.end();
	});
};


Response.prototype.chunk = function(req, file, chunkSize) {
	if (!chunkSize) {
		chunkSize = 1024 * 1024;
	}
	var self = this;
	if (req.isStreaming()) {
		req.getRange(function (start, end) {
			if (end == 0 || end == start) {
				end = file.length - start;
			}
			file = file.slice(start, end);
		});
	}
	this.setHeader('Content-Type', file.type);
	this.setHeader('Transfer-Encoding', 'chunked');
	this._sendHeaders(function() {
		sendChunk(0, chunkSize);
	});

	function sendChunk(start, end) {
		// console.log('sendchunk', start, end);
		var chunk = file.slice(start, end);
		self.write(chunk.size.toString(16) + '\r\n', function() {
			// console.log('size written', chunk.size.toString(16));
			var fileReader = new FileReader();
			fileReader.onload = function(e) {
				// console.log('onload');
				self.write(e.target.result, function() {
					self.write('\r\n', function(writeInfo) {
						if (chunk.size > 0) {
							sendChunk(end, end + chunkSize);
						} else {
							self.end();
						}
					});
				});
			};

			fileReader.readAsArrayBuffer(chunk);
		});
		
	};
}

Response.prototype.stream = function (req, data, _chunkSize) {
	var self = this;
	if (this._headersSent) {
		throw new Error("Headers already sent");
	}
	this.setHeader("Content-Type", data.type);
	this.setHeader('Accept-Ranges', 'bytes');
	// this.setHeader('Transfer-Encoding', 'chunked');
	// this.setHeader('Connection', 'keep-alive');
	if (req._method == "GET" || req.isStreaming()) {
		req.getRange(function (start, end) {
			// console.log("getRange", start, end);
			start = start || 0;
			end = end || 0;
			self.setStatusCode(206);
			req.getChunkSize(function (chunkSize) {
				if (chunkSize == 0) {
					chunkSize = self._chunkSize || 5242880;
					// chunkSize = data.size;
				} else if (_chunkSize) {
					chunkSize = _chunkSize;
					end = start + chunkSize;
				}
				if (end == 0) {
					end = start+chunkSize;
				}
				var chunk = data.slice(start, end + 1);
				end = start + chunk.size - 1;
				self.setHeader("Content-Length", chunk.size);
				self.setHeader("Content-Range", "bytes "+start+"-"+end+"/"+data.size); // Should match content-length? Also use byte-byte/* for unknown lengths.
				self._sendHeaders();
				var chunkresponse = false;
				if (chunkresponse === true) {
					// var numChunks = Math.ceil((chunk.size / (1024*1024*25)));
					var numChunks = 20;
					var _miniChunkSize = Math.ceil(chunk.size / numChunks);
					var fileChunkMachineMan = function (chunkNum) {
						var newChunk = chunk.slice(_miniChunkSize * chunkNum, (_miniChunkSize * chunkNum) + _miniChunkSize);
						var fileReader = new FileReader();
						fileReader.onload = function () {
							self.write(this.result, function (writeInfo) {
								if (chunkNum == numChunks) {
									self.end();
								} else {
									fileChunkMachineMan(chunkNum+1);
									// console.log("wtf... something strange, yo", chunk.size, chunk, start, end);
									// console.log("Content-Range", "bytes "+start+"-"+end+"/"+data.size);
								}
							});
						};
						fileReader.readAsArrayBuffer(newChunk);
					}
					// setTimeout(function () {
						fileChunkMachineMan(0);
					// }, 5);
				 } else {
				 	var fileReader = new FileReader();
				 	fileReader.onload = function () {
					 	self.write(this.result, function () {
					 		self.end();
					 	});
				 	}
				 	fileReader.readAsArrayBuffer(chunk);
				}
			});
		});
	} else if (req._method == "HEAD") {
		self.setHeader("Content-Length", data.size);
		self._sendHeaders(function () {
			self.end();
		});
	}
};

Response.prototype.end = function(data) {
	socket.disconnect(this._socketId);
	socket.destroy(this._socketId);
};

Response.prototype.redirect = function(url) {
	if (this._headersSent) {
		throw new Error("Headers already sent");
	}

	this._headers.setHeader('Location', url);
	this._status = 302;
	this._sendHeaders();
	this.end();
};

Response.prototype.setStatusCode = function(code) {
	this._status = code;
};

Response.prototype._sendHeaders = function(cb) {
	this.write('HTTP/1.1 ' + this._status + ' ' +  STATUS_CODES[this._status] + "\n" + this._headers.toString() + '\n\n', cb);
	this._headersSent = true;
};

Response.prototype.setHeader = function(key, value) {
	this._headers.setHeader(key, value);
};

var Headers = function () {
	this._headers = {};
}
Headers.prototype.setHeader = function(key, value) {
	this._headers[key.toLowerCase()] = value;
};
Headers.prototype.getHeader = function(key) {
	return this._headers[key.toLowerCase()] || null;
};
Headers.prototype.removeHeader = function (key) {
	delete this._headers[key];
};
Headers.prototype.toString = function() {
	var array = [];
	if (this.getHeader('content-type')) {
		array.push('Content-Type: ' + this.getHeader('content-type'));
	}
	if (this.getHeader('content-length')) {
		array.push('Content-Length: ' + this.getHeader('content-length'));
	}
	for(var key in this._headers) {
		if (key !== 'content-type' && key !== 'content-length') {
			var fancyKey = key.replace(/^([a-z])/, function(x) { return x.toUpperCase(); }).replace(/-([a-z])/g, function(x) { return x.toUpperCase(); });
			array.push(fancyKey + ": " + this._headers[key]);
		}
	}

	// console.log('headerToString', array);
	return array.join('\n');
};

var Cookies = function () {

};
Cookies.prototype.addCookie = function(key, value) {
	
};
Cookies.prototype.removeCookie = function (key) {

};
Cookies.prototype.toString = function () {
	return "";
};