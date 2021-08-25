function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet', modelLoaded);
}
function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResults);
}
function modelLoaded(){
  console.log("Model is loaded");
}
function gotResults(error, results){
  if(error){
    console.log(error);
    console.log("coming");
  }
  else{
    console.log(results);
    console.log("coming");
    document.getElementById("result_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}



