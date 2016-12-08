
var innMeet1 = {
  buttonText: "START"
  text: "Kings scribe asks you for aid ",
  image: "whatever"
  id: "1" // possible
  next: ["innMeet2", "innMeetFail1", "innMeetFail2"]
};
var innMeet2 = {
  buttonText: "Accept his call to aid"
  text: "Kings scribe delights, gives map, start",
};
var innMeetFail1 = {
  buttonText: "Refuse the peasant",
  text: "You died"
};
var innMeetFail2 = {
  buttonText: "Kill the messenger",
  text: "You died"
};

var youDied = {
  buttonText: "You Died"
  text: "You died"
}


innMeet1.next = [innMeet2, innMeetFail1, innMeetFail2];
/*
y = {val: 3, next: []}
var ll = {val: 5, next: {val: 4, next: null}};
*/

CurrentParagraphText = text
CurrentImage = image

button1Text = next[0].buttonText
button2Text = next[1].buttonText
button3Text = next[2].buttonText

function(){

  if (button1 clicked){
    go to link next[0]
  }
  else if (button2 clicked){
    go to link next[1]
  }
  else if (button3 clicked){
    go to link next[2]
  }
}

/*
how it works:
[variable name].buttonText will be grabbed by the prior button.
When clicked on, it will have a link to the next page. This page will be populated by the information in [variable name]. Specifically text, and possibly image.
Inside [variable name] will be next linking to the next 3 variables. Through this, the page can be populated via [varname1].buttonText, [varname2].buttonText
and [varname3].buttonText. These will each link to the next page and so forth.



*/
