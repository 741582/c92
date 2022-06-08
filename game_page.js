player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+ player1;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
  console.log(word); 
  
  
  char1=word.charAt(1);

  length= Math.floor(word.length/2);
  char2=word.charAt(length);

  length_minus_1=word.length-1;
  char3=word.charAt(length_minus_1);
  
  console.log(char1);
  console.log(char2);
  console.log(char3);

  remove_char1=word.replace(char1,"_");
  remove_char2=remove_char1.replace(char2,"_");
  remove_char3=remove_char2.replace(char3,"_");
  console.log(remove_char1);
  console.log(remove_char2);
  console.log(remove_char3);

  question_word="<h4 id='display_word'>Q."+remove_char3+"</h4>";
  input_box="<br> Answer ; <input type='text' id='input_box'>";
  check_button="<br> <br> <button class='btn btn-info'onclick='check()'>check </button>";

  row=question_word+input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("word").value=""; 

}
question_turn="player_1";
answer_turn="player_2";


function check(){
get_answer= document.getElementById("input_box").value
answer=get_answer.toLowerCase();
console.log("answer in lower case is"+answer);
if(answer==word){
  if(answer_turn=="player_1"){
    player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
  }
  else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
  }
}
if(question_turn=="player1"){
  question_turn="player2";
  document.getElementById("player_question").innerHTML="Question turn-"+player2;


}
else{
  question_turn="player1";
  document.getElementById("player_question").innerHTML="Question turn-"+player1;

}
if(answer_turn=="player1"){
  answer_turn="player2"; 
  document.getElementById("player_answer").innerHTML="Answer turn-"+player2;


}
else{
  answer_turn="player1";
  document.getElementById("player_answer").innerHTML="Answer turn-"+player1;

}
document.getElementById("output").innerHTML="";
}
