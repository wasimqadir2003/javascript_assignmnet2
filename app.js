

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

