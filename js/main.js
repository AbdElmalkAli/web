var nameinput = document.getElementById('name')
var numberinput = document.getElementById('Number')
var homeinput = document.getElementById('home')
var button = document.getElementById('btn')
var gusess = document.querySelector('.gusess');
var list = document.querySelector('.list')
var userGuesses = 0;
var allGuessedNumber = [];
var box = '   <p class="list  "></p>'
console.log(nameinput);
console.log(numberinput);
console.log(homeinput);
console.log(button);


function checkNumber(){
 var inputNumber = numberinput.value;
 var inputname = nameinput.value;
  var inputhome = homeinput.value;



console.log(numberinput);

allGuessedNumber.push(inputNumber);
 list.textContent=allGuessedNumber;
 
allGuessedNumber.push(inputname);
 list.textContent=allGuessedNumber;
 
allGuessedNumber.push(inputhome);
 list.textContent=allGuessedNumber;
 
console.log('hi');


}


button.addEventListener('click' , checkNumber)






