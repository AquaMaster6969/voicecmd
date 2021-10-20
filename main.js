x = 0;
y = 0;
troll="";
draw_troll = "";
speak_data="";
number="0";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  troll=loadImage("troll.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  canvas = createCanvas(900,600);
 }
function draw() {
  if(draw_troll == "set")
  {
    for(i=1;i<=number;i++){
      draw_troll
    }
    document.getElementById("status").innerHTML = to_number + " Trolls drawn";
    draw_troll = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}