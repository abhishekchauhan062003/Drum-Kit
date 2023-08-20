function handleTap(e) {
  switch (e) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
  }
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var ch = this.innerHTML;
    handleTap(ch);
    buttonAnimation(ch);
  });
}
// or
// for(var i=0;i<7;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
//     alert("I got clicked");
//
//   });
//
// }
document.addEventListener("keypress",function(event){
  var e = event.key;
  handleTap(e);


  buttonAnimation(e);
});
function buttonAnimation(currentKey){
  var active_button = document.querySelector( "." + currentKey);
  active_button.classList.add("pressed");

  setTimeout(function(){
    active_button.classList.remove("pressed");
  },100);
  // hideDiv.classList.add('hidden');
}
