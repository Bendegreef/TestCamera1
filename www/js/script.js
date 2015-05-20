/* jshint
browser: true,
devel: true
*/
var pictureSource; // picture source
var destinationType; // sets the format of returned value 

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready to be used!
//
function onDeviceReady() {
	console.log(window.device);
	console.log(window.plugins);
	alert('device ready');
	document.getElementById("takePicture").onclick = takePicture;
}

function takePicture() {
	navigator.camera.getPicture(function (imageURI) {
			alert(imageURI);
		},
		function (message) {
			alert(message);
		}, {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI
		});
}

function onSuccess(imageData) {
	var image = document.getElementById('myImage');
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
	setTimeout(function () {
		//alert('Failed because: ' + message);
	}, 0);

}