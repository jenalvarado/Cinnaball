const points = [
    "You know it",
    "Of course",
    "Maybe not",
    "Perhaps",
    "Probably not a good idea",
    "Signs points to yes",
    "As I see it yes",
    "Don't count on it",
    "My sources say no",
    "",
   "Reply hazy try again",
"Ask again later",
"Not sure",
"Let's see",
"Ok, yes",
"For sure",
"Absolutely",
"Most likely",
"You may rely on it",
"Yes"
];
document.getElementById("response").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("response").innerHTML = points[0];
  document.getElementById("response").style.fontSize="18px";
  setTimeout(timeup, 4000);

function timeup(){
    document.getElementById("response").innerHTML="8";
    document.getElementById("response").style.fontSize="120px";
    document.getElementById("clear").value="";

}
}