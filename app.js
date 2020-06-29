

/*---------------------------------------------------------------------Assignment Chapter21-25---------------------------------------------------------------------*/

/*-----------------------------------------Task-1--------------------------------------------*/

var firstName = prompt("Please Enter Your First Name ");

var secondName = prompt(" Please Enter Your Second Name ");

var fullName;

fullName = firstName + " " + secondName;

document.write(fullName);


/*-----------------------------------------Task-2--------------------------------------------*/

var mobile = prompt("Enter You Favorite Mobile Phone");

document.write("<br>" + "My favorite phone is: " + mobile + "<br>");

var numChars = mobile.length;

document.write("Length of String: " + numChars + "<br>");

/*-----------------------------------------Task-3--------------------------------------------*/

var str = "Pakistani";

document.write("String: " + str + "<br>")

var strchar = str.indexOf("n");

document.write("Index of 'n': " + strchar + "<br>");

/*-----------------------------------------Task-4----------------------------------------------*/

var str = "Hello World!";

document.write("String: " + str + "<br>")

var strchar = str.lastIndexOf("l");

document.write("Index of 'l': " + strchar + "<br>");

/*-----------------------------------------Task-5----------------------------------------------*/

var str = "Pakistani";

document.write("String: " + str + "<br>")

var strchar = str.charAt(3);

document.write("Character at index 3: " + strchar + "<br>");

/*-----------------------------------------Task-6----------------------------------------------*/

var firstName = prompt("Please Enter Your First Name ");

var lastName = prompt("Please Enter Your last Name");

var fullName = firstName.concat(lastName);

document.write( "Your Full Name is:" + fullName + "<br>");

/*-----------------------------------------Task-7----------------------------------------------*/

var cityFirst = "Hyder";

var cityLast = "abad";

var cityName = cityFirst + cityLast;

document.write("City: " + cityName + "<br>");

var replace = cityFirst.replace("Hyder", "Islam");

cityName = replace + cityLast;

document.write("After replacement: " + cityName + "<br>");


/*-----------------------------------------Task-8----------------------------------------------*/

var message = "Ali and Sami are best friends. They play cricket and football together.";

var mess = message.replace(/and/g, "&");

document.write(mess + "<br>");

/*-----------------------------------------Task-9----------------------------------------------*/

var srt = "742";

document.write("Value:" + srt + "<br>");

document.write("Type:" + typeof srt + "<br>");

var srt1 = Number("742");


document.write("Value:" + srt1 + "<br>");

document.write("Type:" + typeof srt1 + "<br>");


/*-----------------------------------------Task-10----------------------------------------------*/


var user = prompt("Please Enter the text ");

var firstChar = user.slice(0,1);
var otherChar = user.slice(1);

firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();

var fullWord = firstChar + otherChar;

document.write("User input:" + user + "<br>");

document.write("Title case:" + fullWord + "<br>");

/*---------------------------------------Task-11------------------------------------------------*/

var user = prompt("Please Enter the text ");

var firstChar = user.slice(0,1);
var otherChar = user.slice(1);

firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();

var fullWord = firstChar + otherChar;

document.write("User input:" + user + "<br>");

document.write("Title case:" + fullWord + "<br>");

/*---------------------------------------Task-12------------------------------------------------*/

var num = 35.36;

var result = num * 100;

result = result.toString();

document.write("Number: " + num + "<br>");

document.write("Result: " +result + "<br>");

document.write("Type:" + typeof result + "<br>");


/*---------------------------------------Task-13------------------------------------------------*/

var user = prompt("Enter user Name");

var letters = /^[0-9a-zA-Z]+$/;

if (user.match(letters)) {

	alert("User Name is Correct.");
}

else {

	alert("Enter the valid User Name.");
}

/*----------------------------------Task-14-----------------------------------------------------*/

var arr = ["cake", "apple pie", "cookie", "chips", "patties"]

var letters = /^[0-9a-zA-Z]+$/;


var search = prompt("Welcome to ABC bakery. What you want to order sir/ma'ma?");


if ((arr === arr1) || (arr === arr2) || (arr === fullChar))    {
	alert(search + " is available at index " + [arr.indexOf(search)] + " in our bakery" )
}
else {
	alert(search + " is not available");

}

/*---------------------------------------------------------------------Assignment Chapter26-30---------------------------------------------------------------------*/

/*---------------------------------------------------Task-1----------------------------------------------------------*/

var vari = prompt("Please Enter Any positive number");

document.write("number: " + vari + "<br>");

var vari1 = Math.round(vari);

document.write("round off value: " + vari1 + "<br>");

var vari2 = Math.floor(vari);

document.write("floor value: " + vari2 + "<br>");

var vari3 = Math.ceil(vari);

document.write("ceil value: " + vari3 + "<br>");

/*---------------------------------------------------Task-2----------------------------------------------------------*/

var vari = prompt("Please Enter Any negative number");

document.write("number: " + vari + "<br>");

var vari1 = Math.round(vari);

document.write("round off value: " + vari1 + "<br>");

var vari2 = Math.floor(vari);

document.write("floor value: " +vari2 + "<br>");

var vari3 = Math.ceil(vari);

document.write("ceil value: " + vari3 + "<br>");

/*---------------------------------------------------Task-3----------------------------------------------------------*/

var number = prompt("Please Enter any value");

var number1 = Math.abs(number);

document.write(number1 + "<br>");

/*---------------------------------------------------Task-4----------------------------------------------------------*/

var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + diceRoll);


/*---------------------------------------------------Task-5----------------------------------------------------------*/

var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0) {

    document.write("2 <br> Random Coin Value: Head")

} 

else if(floor === 1)  {

    document.write("1 <br> Random Coin Value: Tails")
}

/*---------------------------------------------------Task-6----------------------------------------------------------*/

var ran = Math.floor(Math.random() * 101);

document.write("random number between 1 and 100: " + ran + "<br>");

/*---------------------------------------------------Task-7----------------------------------------------------------*/

var weight = parseFloat(prompt("Please Enter your weight"));

document.write("The weight of user is " + weight + "kilograms" +"<br>");

/*---------------------------------------------------Task-8----------------------------------------------------------*/

var user = prompt("Please Enter the value between 1 and 10");

var ran = Math.floor(Math.random() * 10);

if (user === ran) {

	alert("Congratulation, You have guess the Right Number");
}

else {
	alert("Try Again");
}

/*--------------------------------------------------------------------Assignment Chapter#31-34--------------------------------------------------------*/

/*---------------------------------------------------Task-1----------------------------------------------------------*/

var rightNow = new Date();

document.write(rightNow + "<br>");

/*---------------------------------------------------Task-2----------------------------------------------------------*/

var rightNow = new Date();

var str = rightNow.toString();

var month = str.slice(4,8);


document.write("Current month:  " + month + "<br>");


/*---------------------------------------------------Task-3----------------------------------------------------------*/

var rightNow = new Date();

var str = rightNow.toString();

var today = str.slice(0,3);


document.write("Today is " + today + "<br>");

/*---------------------------------------------------Task-4----------------------------------------------------------*/

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


for (var i=0; i < dayNames.length; i++ ) {

	if ( (dayNames[i] === "Sat") || (dayNames[i] === "Sun") ) {

		document.write("It's Fun Day" + "<br>");
	}

}

/*---------------------------------------------------Task-5----------------------------------------------------------*/

var date = prompt("Please Enter the date");


if( date < 16) {

	document.write("First fifteen days of the month");
}

else {
	
	document.write("Last days of the month");
}

/*---------------------------------------------------Task-6----------------------------------------------------------*/

var today = new Date();

var dob = new Date("jan 1, 1970");

var diff = today - dob;

var diffInMin = diff/(1000*60*60);

document.write("Current Date" + today + "<br>")

document.write("Elapsed milliseconds since January 1, 1970: " + diff + "<br>");

document.write("Elapsed minutes since January 1, 1970: " +diffInMin + "<br>");

/*---------------------------------------------------Task-7----------------------------------------------------------*/

var hours = new Date().getHours();

var hours = (hours+24)%24;

var mid='AM';

if (hours == 0) { 

	hours = 12;
}

else if (hours>12)  {

	hours = hours%12;

	mid='PM';
}

alert ("It's " + hours + mid);

/*---------------------------------------------------Task-8----------------------------------------------------------*/

var lastDate = new Date("Dec 31, 2020");

document.write("Later Date: " + lastDate + "<br>");

/*---------------------------------------------------Task-9----------------------------------------------------------*/

var ramazan = new Date("Apr 24, 2020");

var today = new Date();

var diff = today - ramazan;

alert(diff);

/*---------------------------------------------------Task-10----------------------------------------------------------*/

var ref = new Date("Jun 20, 2020");

var today = new Date();

var diff = today - ref;

var diff1 = Math.floor(diff/1000);

document.write("On reference date " + ref + "<br>")

document.write(diff1 + " seconds had passed since begining of 2020" + "<br>");

/*---------------------------------------------------Task-11----------------------------------------------------------*/

var d = new Date();

document.write("Current Time " + d + "<br>")

d.setHours(d.getHours()-1)

document.write("1 hour ago, It was " + d + "<br>");

/*---------------------------------------------------Task-12----------------------------------------------------------*/

var d = new Date();

document.write("Current Time " + d + "<br>")

d.setFullYear(d.getFullYear()-100)

document.write("1 hour ago, It was " + d + "<br>");

/*---------------------------------------------------Task-13----------------------------------------------------------*/

var dob = new Date(+prompt("Please Enter Your Age"))

var dobmili = dob.getTime();

var today = new Date();

var todaymili = Number(today.getFullYear());

var diff = todaymili - dobmili;

document.write("Your age is " + dobmili + "<br>");

document.write("Your birth year is " + diff + "<br>");

/*---------------------------------------------------Task-14----------------------------------------------------------*/

var userName = prompt("Enter Customer Name");

var mon = new Date(prompt("Enter the Month"));

var mon1 = mon.getMonth();

var units = +prompt("Number of Units Consumed");

var charges = 16;

var net = units * charges;

var late = 350;

var gross = net + late;

document.write("Customer Name: " + userName + "<br>");

document.write("Month: " + mon1 + "<br>");

document.write("Number of units: " + units + "<br>");

document.write("Charges per unit: " + charges + "<br>");

document.write("Net Amount Payable (within Due Date): " + net + "<br>");

document.write("Late payment surcharge: " + late + "<br>");

document.write("Gross Amount PAyable (after Due Date) " + gross + "<br>");



/*---------------------------------------------------------Assignment Chapter#35-38---------------------------------------------------------------------*/

/*---------------------------------------------------Task-1-----------------------------------------------------------*/

function time() {

	var now = new Date();
	document.write(now + "<br>");

}

time();

/*---------------------------------------------------Task-2-----------------------------------------------------------*/

function greeting() {

	var firstName = prompt("Enter Your First Name");

	var lastName = prompt("Enter Your Last Name");

	var fullNmae = firstName + " "  +lastName;

	alert("Your Full Name is " + fullNmae);
}

greeting();

/*---------------------------------------------------Task-3-----------------------------------------------------------*/

function sum() {
	var firstNum = +prompt("Enter any number");

	var secondNum = +prompt("Enter any number");

	var sumOfNum = firstNum + secondNum;

	document.write("Sum of two number: " + sumOfNum + "<br>");
}

sum();

/*---------------------------------------------------Task-4-----------------------------------------------------------*/

function operation(num1, num2, opr) {
	
	if (opr === "+") {
		return num1 + num2
	}

	else if (opr === "-") {
		return num1 - num2
	}

	else if (opr === "*") {

		return num1 * num2
	}

	else if (opr === "/") {

		return num1 / num2
	}

	else if (opr === "%") {

		return num1 % num2
	}

	else {

		return "Incorrect Operator"
	}
}

var num1 = +prompt("Please Enter the value");

var num2 = +prompt("Please Enter the value");

var opr = prompt("Please Enter the operator");

var result =operation(num1, num2, opr);

console.log(result)

/*---------------------------------------------------Task-5-----------------------------------------------------------*/

function square (x) {
  return x * x;
};

document.write(square(12));

/*---------------------------------------------------Task-6-----------------------------------------------------------*/

function factorial(n) {
	
  let answer = 1;

  if (n == 0 || n == 1){

    return answer;

  }
  else {
    
    for(var i = n; i >= 1; i--) {
      
      answer = answer * i;

    }

    return answer;

  }  

}

var n = +prompt("Enter the Factorial Number");

document.write(factorial(n));

/*---------------------------------------------------Task-7-----------------------------------------------------------*/


/*---------------------------------------------------Task-8-----------------------------------------------------------*/

function calculateHypotenuse(a,b) {

	function squ() {

		var d = (a*a) + (b*b)

		alert("Inner function of a: " + d );
	}

	var c = Math.sqrt((a*a) + (b*b))

	alert("Outer function: " + c)

	squ();
}

calculateHypotenuse(6,5)

/*----------------------------------------------Task-9-----------------------------------------------------------------*/

/*Arguments as value*/

function area(a,b) {

	var d  = a * b;

	alert(d)
}

area(5,6)

/*Arguments as variable*/

function area(a,b) {

	var d  = a * b;

	alert(d)
}

var width = 5;

var height = 6;

area(width,height)



/*----------------------------------------------Task-10-----------------------------------------------------------------*/

function check_Palindrome(str_entry){

   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;

	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}

	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {

		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {

			ccount = (cstr.length - 1) / 2;
		}
	}

	for (var x = 0; x < ccount; x++) {

		if (cstr[x] != cstr.slice(-1-x)[0]) {

			console.log("Entry is not a palindrome.");

			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}

var phare = prompt("Please Enter any Word");
check_Palindrome(phare);

/*----------------------------------------------Task-11-----------------------------------------------------------------*/

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

/*----------------------------------------------Task-12-----------------------------------------------------------------*/

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);

  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

/*----------------------------------------------Task-13-----------------------------------------------------------------*/

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

/*----------------------------------------------Task-14-----------------------------------------------------------------*/

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));





