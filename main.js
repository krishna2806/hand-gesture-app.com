p1=""

Webcam.set({
    width:450,
    height:300,
    image_format:'png',
    png_quality :99
});
camera=document.getElementById("camera")
Webcam.attach('#camera')
function snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="cimage" src="'+data_uri+'">'
});
}
console.log("v"+ml5.version)
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LYrQdicrN/model.json" , load)

function load(){
console.log("model loaded ")
}
function speak() {
    s = window.speechSynthesis
    s1 = "the  prediction is" + p1
    utterthis = new speechSynthesisUtterance(s1)
    s.speak(utterthis)
};

function identify() {
    img = document.getElementById("cimage")
    model.classify(img, output)
}

function output(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("emo").innerHTML = results[0].label
        
        p1 = results[0].label
        speak();

        if (results[0].label == "thumbs up") {
            document.getElementById("emoji").innerHTML = "&#128077;"
        }
        if (results[0].label == "cool") {
            document.getElementById("emoji").innerHTML = "&#128076;"
        }
        if (results[0].label == "peace") {
            document.getElementById("emoji").innerHTML = "&#9996;"
       
    }
}

