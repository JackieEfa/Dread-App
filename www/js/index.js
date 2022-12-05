
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quaility: 80, 
        destinationType: Camera.DestinationType.FILE_URI
    }

    $("#takephoto").on("click", takepic); // for each photo section instead
    $("#takephoto2").on("click", takepic);
    $("#takephoto3").on("click", takepic);
    $("#takephoto4").on("click", takepic);

    function takepic() {
        navigator.camera.getPicture(onSucess, onError, options);
    }

    function onSucess(imageData){ // may need to duplicate sucess functions for each image 
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $(".image-space").attr("src", myNewImage) // targeting the css image on all at the momment i think 
        }, onError);
    }

    function onSucess(imageData){ // may need to duplicate sucess functions for each image 
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $(".image-space1").attr("src", myNewImage) // targeting the css image on all at the momment i think 
        }, onError);
    }

    function onSucess(imageData){ // may need to duplicate sucess functions for each image 
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $(".image-space2").attr("src", myNewImage) // targeting the css image on all at the momment i think 
        }, onError);
    }

    function onSucess(imageData){ // may need to duplicate sucess functions for each image 
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $(".image-space3").attr("src", myNewImage) // targeting the css image on all at the momment i think 
        }, onError);
    }

    function onError(message){
        alert("Photo Error Has Occured." + message)
    }



}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleMotion)
    } else {
        alert("sorry your browser does not support this")
    }

    var movebox = 0;

    function handleMotion(event) {
        // console.log(event)
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;

        $("#z").text("z: " + z)
        $("#x").text("x: " + x)
        $("#y").text("y: " + y)

        movebox += x / 2

        $(".box").css("transform", "rotateZ(" + z + "deg) rotateX(" + x + "deg) rotateY(" + y + "deg) translateY(" + movebox + "px)")

        Number.prototype.map = function (in_min, in_max, out_min, out_max) {
            return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        var r = z.map(0, 360, 0, 255)
        var g = x.map(-180, 180, 0, 255)
        var b = y.map(-90, 90, 0, 255)

        $("body").css("background", "rgb(" + r + "," + g + "," + b + ")")


    }


}

document.getElementById("StatusInput").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput1").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput2").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput3").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );