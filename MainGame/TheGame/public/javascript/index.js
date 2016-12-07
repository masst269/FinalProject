//The dialog
var modal = document.getElementById("info-dialog");
//including the backdrop for functions
var backdrop = document.getElementById("info-backdrop");
//activating the instruction button
var btn = document.getElementById("info-button");

btn.addEventListener("click", function() {
  modal.style.display = "block";
  backdrop.style.display = "block";
});

var startBtn = document.getElementById('start-button');
var infoBtn = document.getElementById('info-button');

startBtn.addEventListener('click', startGame);


function startGame(event){

  console.log("Clicked = " + event);
  //.open('../html/end.html');




};
