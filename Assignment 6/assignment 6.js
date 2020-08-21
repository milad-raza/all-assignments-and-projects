//Chapters #21-25
//task #1
var first = prompt("Enter your first name");
var last = prompt("Enter your last name");
var full = (first)+" "+(last);
alert("Welcome "+full);

//task #2
var mobile = prompt("Enter your favorite mobile model");
document.write("<h2>My favorite phone is: "+mobile+"<br>"+" Length of string: "+mobile.length+"</h2><br>");

//task #3
var pak = "Pakistani";
var index = pak.indexOf("n");
document.write("<h1>String: "+pak+"<br>Index of 'n': "+index+"</h1>");

//task #4
var hello = "Hello World";
var last1 = hello.lastIndexOf("l");
document.write("<h1>String: "+hello+"<br>Last index of 'l': "+last+"</h1>");

//task #5
var pak = "Pakistani";
var third = pak.charAt(3);
document.write("<h1>String: "+pak+"<br>Character at index 3: "+third+"</h1>");

//task #6
var now = (first.concat(" ", last));
document.write("<h1>"+now+"</h1><br>");

//task #7
var now = "Hyderabad";
document.write("<h1>City: "+now+"</h1>");
document.write("<h1>After replacement: "+now.replace("Hyder", "Islam")+"</h1>");

//task #8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h1>"+message.replace(/and/g, "&")+"</h1>");

//task #9
var num = "472";
document.write("<h1>Value: "+num+"<br>Type: string<br>");
document.write("Value: "+parseInt(num)+"<br>Type: number</h1>");

//task #10
var user = prompt("Enter something to covert it to upper case");
document.write("<h1>User input: "+user+"<br>");
document.write("Upper case: "+user.toUpperCase()+"</h1>");

//task #11
var user1 = prompt("Enter something to covert it to title case");
document.write("<h1>User input: "+user1+"<br>");
user1 = user1.toLowerCase().split(' ');
for (var i = 0; i < user1.length; i++){
user1[i] = user1[i].charAt(0).toUpperCase() + user1[i].slice(1); 
}
user1 = user1.join(" ");
document.write("Title case: "+user1+"</h1>");

//task #12
var num2 = 35.36;
document.write("<h1>Number: "+num2+"<br>");
var con = num2.toString();
var con1 = con.split(".");
var con2 = con1.join("");
document.write("String: "+con2+" </h1>");

//task #13
var usern = prompt("Enter user name")
for(i=0; i<usern.length; i++){
var now = usern.charCodeAt(i);
if (now === 33 || now === 44 || now === 46 || now === 64){
alert("Please enter a valid username")
break;
}
}

//task #14
var enter = prompt("Welcome to ABC Bakery. what do u want to order sir/ma'am?");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
enter1 = enter.toLowerCase();
if(arr.indexOf(enter1) !== -1){
document.write("<h1>"+enter+" is available at index "+arr.indexOf(enter1)+" in our bakery</h1>");
}
else{
document.write("<h1>We are sorry. "+enter+" is not available in our bakery</h1>");
}

//task #15
var password1 = prompt("Enter your password");
var password2 = /^[A-Za-z]\w{5,}$/;
if (password1.match (password2)){
    alert("Correct password")
}
else{
    alert("incorrect password")
}

//task #16
var university = "University of Karachi";
var uni = university.split("");
uni = uni.join("<br>");
document.write(uni);

//task #17
var fir = prompt ("Enten any character");
var fir1 = fir.slice(-1);
alert(fir1);

//task #18
var we = ("The quick brown fox jumps over the lazy dog");
var we1 = we.toLowerCase();
var no = (we1.match(/the/g)).length; 
document.write("<h1>Text: "+we+"<br>");
document.write("There are "+no+" occurrence(s) of word 'the'</h1>");


//Chapters #26-30
//task #1
var pos = prompt("Enter positive integer without (+) sign");
document.write("<h1>Number: "+pos+"<br>");
document.write("Round off value: "+Math.round(pos)+"<br>");
document.write("Floor value: "+Math.floor(pos)+"<br>");
document.write("Ceil value: "+Math.ceil(pos)+"</h1>");

//task #2
var pos = prompt("Enter negative integer without (-) sign");
document.write("<h1>Number: "+(-pos)+"<br>");
document.write("Round off value: "+Math.round(-pos)+"<br>");
document.write("Floor value: "+Math.floor(-pos)+"<br>");
document.write("Ceil value: "+Math.ceil(-pos)+"</h1>");

//task #3
var val = prompt("Enter any integer with +/- sign to find its absolute value");
var abbs = Math.abs(val);
document.write("<h1>Absolute value of "+val+" is "+abbs+"</h1>");

//task #4
var dice = Math.floor(Math.random()*6)+1;
document.write("<h1>Random dice value: "+dice+"</h1>");

//task #5
var coin = Math.floor(Math.random()*2)+1;
if (coin === 1){
document.write("<h1>"+coin+"<br>Random coin value: Heads</h1>");
}
else if (coin === 2){
document.write("<h1>"+coin+"<br>Random coin value: Tails</h1>");
}

//task #6
var bt = Math.floor(Math.random()*100);
document.write("<h1>Random number between 1 to 100: "+bt+"</h1>");

//task #7
var z = parseFloat(prompt("Enter your weight in kilogram"));
document.write("<h1>The weight of user is "+z+" kilograms</h1>");

//task #8
var ran = Math.floor(Math.random()*10)+1;
var use = prompt ("Enter a number between 1 to 10");
console.log(ran);
if (ran == use){
alert("Congratulations you win");
}
else{
alert("try again");
}


//Chapters #31-34
//task #1
var today = new Date();
document.write("<h3>"+today+"</h3>");

//task #2
var tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today1 = new Date();
var month = today1.getMonth();
var cmonth = tmonth[month];
document.write("<h1>Current month is: "+cmonth+"</h1>");

//task #3
var tday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today2 = new Date();
var day = today2.getDay();
var cday = tday[day];
document.write("<h1>Today is "+cday+"</h1>");

//task #4
var tday1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today3 = new Date();
var day1 = today3.getDay();
var cday1 = tday1[day1];
if (cday1 === "Sat" || cday1 === "Sun"){
document.write("<h1>It's fun day</h1>");
}

//task #5
var today4 = new Date();
var dat = today4.getDate();
if (dat < 16){
document.write("<h1>First fifteen days of the month</h1>")
}
else{
document.write("<h1>Last fifteen days of the month</h1>")
}

//task #6
var today5 = new Date();
document.write("<h3>Current date: "+today5+"<br>");
var geti = today5.getTime();
document.write("Elapsed milliseconds since January 1,1970: "+geti+"<br>");
var getii = Math.floor(today5.getTime()/(1000*60));
document.write("Elapsed minutes since January 1,1970: "+getii+"</h3>");

//task #7
var today6 = new Date();
var get1 = today6.getHours();
if (get1 < 12){
document.write("<h1>It's A.M</h1>");
}
else{
document.write("<h1>It's P.M</h1>");
}

//task #8
var today7 = new Date(2020,11,31);
document.write("<h3>Later date: "+today7+"</h3>");

//task #9
var past = new Date(2015,5,18);
var today8 = new Date();
var get2 = Math.round((today8-past)/(1000*60*60*24));
document.write("<h1>"+get2+"days have passed since 1st Ramadan,2015</h1>");

//task #10
var today9 = new Date();
now5 = new Date(2015);
sec3 = Math.floor((today9-now5)/1000);
document.write("<h3>On reference date "+today9+",<br>"+sec3+" seconds had passed since beginning of 2015</h3>");

//task #11
var today10 = new Date();
var hour1 = 1000*60*60;
var ago = (new Date())-(hour1);
var ago1 = new Date(ago);
document.write("<h3>Current date: "+today10+"<br>1 hour ago, it was "+ago1+"</h3>");

//task #12
var today12 = new Date();
var year100 = (1000*60*60*24*365)*100;
var ago2 = (new Date())-(year100);
var ago3 = new Date(ago2);
document.write("<h3>Current date: "+today12+"<br>100 years ago, it was "+ago3+"</h3>");

//task #13
var age = prompt("Enter your age")
var calii = 2020-age;
document.write("<h2>Your age is "+ age + "<br>")
document.write("Your birth year is "+ calii + "</h2>")

//task #14
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer name: <b>ABC Customer</b><br>");
document.write("Month: <b>June</b><br>");
document.write("Number of units: <b>350</b><br>");
document.write("Charges per unit: <b>15</b><br><br>");
neta =350*15;
netb = 350;
netc =neta+netb;
document.write("Net Amount Payable (with in due date): <b>"+neta+"</b><br>");
document.write("Net Payment surcharge: <b>"+netb+"</b><br>");
document.write("Gross Amount Payable (after due date): <b>"+netc+"</b><br>");


//Chapters #35-38
//task #1
function todaydate(){
var todays = new Date();
document.write("<h3>"+todays+"</h3>");
}
todaydate();

//task #2
function welcome(){
var first = prompt("Enter your first name");
var last = prompt("Enter your last name");
var full = (first)+" "+(last);
document.write("<h2>Welcome "+full+"</h2>");
}
welcome();

//task #3
function sum(){
    firstnum = prompt("Enter first number");
    secondnum = prompt("Enter second number");
    sum1 = (+firstnum)+(+secondnum);
    return sum1;
}
document.write("Sum is "+sum()+"<br>");

//task #4
function cal(){
    num1 = prompt("Enter first number");
    num2 = prompt("Enter second number");
    opp = prompt("Enter operator");
    if (opp === "+") {
        sum2 = (+num1)+(+num2);
        document.write("Sum of "+ num1 +  " & " + num2 + " is "+sum2);
    }
    else if (opp === "-"){
        sum2 = (num1)-(num2);
        document.write("Subtraction of "+ num1 +  " & " + num2 + " is "+sum2);
    }
    else if (opp === "*"){
        sum2 = (num1)*(num2);
        document.write("Multipication of "+ num1 +  " & " + num2 + " is "+sum2);
    }
    else if (opp === "/"){
        sum2 = (num1)/(num2);
        document.write("Division of "+ num1 +  " & " + num2 + " is "+sum2);
    }
    else if (opp === "%"){
        sum2 = (num1)%(num2);
        document.write("remainder of "+ num1 +  " & " + num2 + " is "+sum2);
    }
    else{
        document.write("Please enter correct operator")
    }
}
cal();

//task #5
function square(double){
    document.write("<br>Argument value is "+double);
    document.write("<br>Square of argument is "+Math.pow(double,2)+"<br>");
}
square(10);

//task #6
function factorial(num){
    fact = (num*(num-1)*(num-2)*1);
    document.write("Factorial of "+num+" is "+fact+"<br>");
}
factorial(4);

//task #7
function count(a,b){
    for(var counting = a; counting<=b; counting++)
    document.write(counting+",");
}
var firstval = prompt("Enter start value");
var secondval = prompt("Enter end value");
count(firstval,secondval);
document.write("<br>");

//task #8
function hyp(a,b){
    c = Math.pow(a,2)+Math.pow(b,2);
    function hyp2(){
        return Math.pow(c,2)
       }
    document.write("Hypotenuse of this right angle triangle is "+hyp2()+"<br>")
}
var base = prompt("Enter base of right angle triangle");
var perp = prompt("Enter perpendicular of right angle triangle");
hyp(base,perp);

//task #9
function rect(a,b){
    area = a*b
    document.write("Area of rectangle is "+area+"<br>");
}
var w = 5;
var h = 10;
rect(w,h);
function rect1(c,d){
    area = c*d
    document.write("Area of rectangle is "+area+"<br>");
}
var width = prompt("Enter width of rectangle");
var height = prompt("Enter height of rectangle");
rect1(width,height);

//task #10
function pal(check){
    if(check == check.split("").reverse().join("")){
        document.write(check+" is palindrome<br>")
    }
    else{
        document.write(check+" is not palindrome<br>")
    }
}
var yes = prompt("Enter variable to check it is palindrome or not");
pal(yes);

//task #11
function title1(case1){
    case1 = case1.toLowerCase();
    case1 = case1.split(" ");
    for(var i = 0; i < case1.length; i++){
        case1[i]=case1[i].charAt(0).toUpperCase()+case1[i].slice(1);
    }
    (case1.join(" "));
    document.write(case1);
}
var text5 = prompt("Enter text to convert it to title case");
title1(text5);

 //task #12
 function count9(case2){
     var n = case2.split(" ");
     var length=0;
     var words1 = null;
     for(var i = 0; i<n.length; i++){
         if(length < n[i].length){
            length = n[i].length;
            words1 = n[i];
         }
     }
     document.write(words1 +" is longest word<br>")
 }
var text9 = prompt("Enter text to check which word is longer");
count9(text9);

//task #13
function count10(case3,case4){
    document.write((case3.match(case4)).length+" time occurance of "+case4+" in "+case3+"<br>");
}
var text10 = "Web Developers"
var text11 = "D";
count10(text10,text11);

//task #14
function geo1(radius){
    cir = (2)*(3.14)*(radius);
    document.write("circumference of circle = "+cir+"<br>")
}


function geo2(radius){
    area = (3.14)*(Math.pow(radius,2))
    document.write("circumference of circle = "+area)
}

var radius = 2.50;
geo1(radius);
geo2(radius);