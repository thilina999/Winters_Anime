
var total_seconds =60*10;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
  document.getElementById("quiz-time-left").innerHTML = 'Time left: '+c_minutes+' minutes '+c_seconds+' seconds';

  if (total_seconds<=0) {
      check();
  } else {
      total_seconds = total_seconds-1;
      c_minutes = parseInt(total_seconds/60);
      c_seconds = parseInt(total_seconds%60);
      setTime();
  }
}
      setTime();


function setTime(){
  var setTime=   setTimeout("CheckTime()",1000);
}

function check() {
  clearTimeout(setTime);
  var usedSec = 600-total_seconds;
  var m= parseInt(usedSec/60);
  var s= parseInt(usedSec%60);

  var question01 = document.quiz.question01.value;
  var question02 = document.quiz.question02.value;
  var question03 = document.quiz.question03.value;
  var question04 = document.quiz.question04.value;
  var question05 = document.quiz.question05.value;
  var question06 = document.quiz.question06.value;
  var question07 = document.quiz.question07.value;
  var question08 = document.quiz.question08.value;
  var question09 = document.quiz.question09.value;
  var question10 = document.quiz.question10.value;

  var  correct = 0;
  var  score = 0;
  var que =[question01, question02 ,question03 ,question04 , question05,
            question06,  question07 ,question08 , question09 , question10];

  for(i=0;i<10;i++){
    if (que[i] == "ansCorrect"){
        correct++;
        score = score +2;
        addCorrect(i);
    }else{
        score = score -1;
        addIncorrect(i);
    }
  }
  var colorB = ["red","green","blue"];
  var picture = ["images/fail.gif","images/won1.gif","images/won3.gif"];
  var range;
      if(score <= 10){
        range = 0;
      }
      if(score>10 && score<20 ){
        range = 1;
      }
      if(score == 20){
        range = 2;
      }
    document.body.style.backgroundColor = colorB[range];
    if (!(score ==20)){
        document.getElementById('buttonReplay').style.visibility = "visible";
    }

    document.getElementById('afterSubmit').style.visibility = "visible";
    document.getElementById('quiz-time-left').style.visibility = "hidden";
    document.getElementById('button').style.visibility = "hidden";
    document.getElementById('result').innerHTML = "You used "+m+" minutes and " +s+" seconds <br> You got "+correct+ " correct answers <br> Total score is "
                                                    +score+"<br><a href='#content'>==>Click Here<==<br>to see your answers</a>";
    document.getElementById('picture').src = picture[range];
    window.location.hash='#result';
  }

  function reload(){
    location.reload();
    window.location.hash='#main';
  }
  var suminfo =["infoSummary-01","infoSummary-02","infoSummary-03","infoSummary-04","infoSummary-05",
                "infoSummary-06","infoSummary-07","infoSummary-08","infoSummary-09","infoSummary-10"];
  function   addCorrect(i) {
    document.getElementById(suminfo[i]).style.visibility = "visible";
    document.getElementById(suminfo[i]).innerHTML ="<img src='images/corrcet.png'  style='width:50px;height:50px;'>";
  }
  function   addIncorrect(i) {
    document.getElementById(suminfo[i]).style.visibility = "visible";
    document.getElementById(suminfo[i]).innerHTML ="<img src='images/incorrect.png'  style='width:50px;height:50px;'>";
  }
