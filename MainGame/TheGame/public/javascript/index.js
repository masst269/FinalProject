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

function displayModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var ModalElem = document.getElementById('modal');

  // Show the modal and its backdrop.
  backdropElem.classList.remove('hidden');
  ModalElem.classList.remove('hidden');

}

function closeAddNoteModal() {

  var backdropElem = document.getElementById('modal-backdrop');
  var ModalElem = document.getElementById('modal');

  clearTodoInputValues();
  // Show the modal and its backdrop.
  backdropElem.classList.add('hidden');
  ModalElem.classList.add('hidden');
}

function clearInputValues() {

  var InputElems = document.getElementsByClassName('element');
  for (var i = 0; i < InputElems.length; i++) {
    var input = todoInputElems[i].querySelector('input, textarea');
    input.value = '';
  }
}

function createNewTodoBodyElem(text, label) {

  var newBodyElem = document.createElement('p');

  // If the body element has a label, add a span containing that label.
  if (label) {
    newBodyElem.classList.add('indent-wrapped');
    var labelSpanElem = document.createElement('li');
    labelSpanElem.classList.add(label);
    var labelSpanElemText = document.createTextNode(label + ': ');
    labelSpanElem.appendChild(labelSpanElemText);
    newTBodyElem.appendChild(labelSpanElem);
  }

  var newBodyElemText = document.createTextNode(text);
  newTBodyElem.appendChild(newBodyElemText);

  return newBodyElem;

}

function createNewTodoSection(name) {
  var newTodoSection = document.createElement('li');
  var newTextNode = document.createTextNode(name);
  newTodoSection.appendChild(newTextNode);
  var newTodoBody = document.createElement('div');
  newTodoSection.appendChild(newTodoBody);
}

function insertNewTodo() {
  var names = document.getElementById('name').value;
  if (names) {

    // Create a new todo section and append it to the main element.
    var newTodoSection = createNewTodoSection(
      names
    );
    var mainElement = document.getElementById('box');
    box.appendChild(newTodoSection);

    closeAddNoteModal();

  } else {

    alert('You must specify a value for the "name" field.');

  }

}



  var addNoteButtonElem = document.getElementById('add-name');
  addNoteButtonElem.addEventListener('click', displayAddNoteModal);

  var modalCloseButton = document.querySelector('#modal .modal-close');
  modalCloseButton.addEventListener('click', closeAddNoteModal);

  var modalCancalButton = document.querySelector('#modal .modal-cancel');
  modalCancalButton.addEventListener('click', closeAddNoteModal);

  var modalAcceptButton = document.querySelector('#modal .modal-accept');
  modalAcceptButton.addEventListener('click', insertNewTodo);

});
