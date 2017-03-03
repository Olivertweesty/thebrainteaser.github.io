 var sum=0;
 var jina="";
 function mjina() {
   jina=document.getElementById('name').value;
   $("#inf").text("Your Time Has began Hurry Up");
   setTimeout(timeIsout,600000);
 }
 function timeIsout() {
   $("#Xmodal").text("You were timedOut "+jina+ " You managed to Get " +sum+ " Percent...  Reload The Page and try again");
   $("#myModal").modal("show");
   sum=0;
   $("img").fadeOut();

 }
function bOne() {
  var one=document.getElementById('inpOne').value;
    if (one==21) {
      sum=sum+7;
      $("#stOne").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stOne").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}

function bTwo() {
  var two=document.getElementById('inpTwo').value;
    if (two==1) {
      sum=sum+10;
      $("#stTwo").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stTwo").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bThree() {
  var three=document.getElementById('inpThree').value;
    if (three==31) {
      sum=sum+8;
      $("#stThree").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stThree").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bFour() {
  var four=document.getElementById('inpFour').value;
    if (four==34) {
      sum=sum+8;
      $("#stFour").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stFour").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bFive() {
  var five=document.getElementById('inpFive').value;
    if (five==0) {
      sum=sum+7;
      $("#stFive").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stFive").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bSix() {
  var six=document.getElementById('inpSix').value;
    if (six==13) {
      sum=sum+10;
      $("#stSix").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stSix").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bSeven() {
  var seven=document.getElementById('inpSeven').value;
    if (seven==18) {
      sum=sum+10;
      $("#stSeven").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stSeven").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bEight() {
  var eight=document.getElementById('inpEight').value;
    if (eight==35) {
      sum=sum+7;
      $("#stEight").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stEight").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bNine() {
  var nine=document.getElementById('inpNine').value;
    if (nine==120) {
      sum=sum+8;
      $("#stNine").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stNine").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bTen() {
  var ten=document.getElementById('inpTen').value;
    if (ten==15) {
      sum=sum+7;
      $("#stTen").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stTen").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function bEleven() {
  var eleven=document.getElementById('inpEleven').value;
  if (eleven==50) {
    sum=sum+8;
    $("#stEleven").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
  }
  else {
    sum=sum+0;
    $("#stEleven").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
  }
}
function bTwelve() {
  var twelve=document.getElementById('inpTwelve').value;
    if (twelve==45) {
      sum=sum+10;
      $("#stTwelve").html("<p class='text-success'><i class='fa fa-check'>Awesome Correct</i></p>");
    }
    else {
      sum=sum+0;
      $("#stTwelve").html("<p class='text-danger'><i class='fa fa-close'>Ouch!! Wrong</i></p>");
    }
}
function getRes() {
  $("#Xmodal").text("Congratulations "+jina+ " You Got " +sum+ " Percent... ");
  $("img").fadeOut();
}
// start of jquery-3
$(document).ready(function(){
  $("button[value='brt']").prop("disabled",true);
    $("img").fadeOut();
  // begin test
  $("[onclick='mjina()']").click(function(){
    $("button[value='brt']").prop("disabled",false);
      $("img").fadeIn();
  });
  // button One
  $("[onclick='bOne()']").click(function(){
    $(this).prop("disabled",true);
  });

  // button two
  $("[onclick='bTwo()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button three
  $("[onclick='bThree()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button four
  $("[onclick='bFour()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button five
  $("[onclick='bFive()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button six
  $("[onclick='bSix()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button seven
  $("[onclick='bSeven()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button eight
  $("[onclick='bEight()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button nine
  $("[onclick='bNine()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button ten
  $("[onclick='bTen()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button eleven
  $("[onclick='bEleven()']").click(function(){
    $(this).prop("disabled",true);
  });
  // button twelve
  $("[onclick='bTwelve()']").click(function(){
    $(this).prop("disabled",true);
  });
});
