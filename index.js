var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var userName = readlineSync.question(chalk.cyan("Can i have your name ? "));

console.log(chalk.greenBright("Welcome " + userName+" Let's see how much you know about ", chalk.magenta.underline("Ankita" + '!')));

//function
function play(question , answer){
  var userAns = readlineSync.question(question);


  //branchingzz
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bold.rgb(102, 255, 51)("You are right!"));
    score = score + 1;
    console.log(chalk.cyanBright("Correct ! Nice "));
  }else{
    console.log(chalk.bold.rgb(255, 0, 0)("You are wrong!"));
  }
  console.log(chalk.bold.rgb(255, 51, 153)("Your Score is: ") + chalk.blue(score));
  console.log("-------------------------------------------------");
}

//array
var questions = [{
  question :`Ankita's nickname?`,
  answer : "Neha"
} , 
{
  question :`Favorite Food?`,
  answer : "Momos"
}, 
{
  question : `Favorite Series? ` ,
  answer : "Money Heist"
} , 
{
  question : `Favorite Movie ?`,
  answer : "International Khiladi"
} ,
{
  question : `What's make Ankita happy?`,
  answer : "Shopping"
}];

//loop

for(var i=0;i<questions.length;i++){
  var qBank = questions[i];
  play(chalk.yellowBright(qBank.question) , qBank.answer);

}
console.log(chalk.bgRed.black("\t\t\t\tYour current score is: " + score));
