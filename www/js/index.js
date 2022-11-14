
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quaility: 80, 
        destinationType: Camera.DestinationType.FILE_URI
    }

    $("#takephoto").on("click", takepic);

    function takepic() {
        navigator.camera.getPicture(onSucess, onError, options);
    }

    function onSucess(imageData){
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $("#takephoto").after("<img src='"+ myNewImage + "'>")
        }, onError);
    }

    function onError(message){
        alert("Photo Error Has Occured." + message)
    }



}

