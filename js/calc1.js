
var numQues = 10;
var numChoi = 3;
var pass=456;
var a;
var final;
document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}

var answers = new Array(10);
answers[0] = "Alphabet";
answers[1] = "Paris";
answers[2] = "HCL";
answers[3] = "Norway";
answers[4] = "37";
answers[5] = "Address Latch Enable";
answers[6] = "9";
answers[7] = "Triangle";
answers[8] = "transaction processing system";

answers[9] = "Deadlock avoidance";


function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  

  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  a=prompt("Enter the Password to Get Result","");

  score = Math.round(score/numQues*10);
  final=score;
  if(a==10)
  {
  form.percentage.value = score;
  }
  }

