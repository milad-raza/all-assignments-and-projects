//Chapter #1
//task #1
alert("welcome");

//task #2
alert("Error! please enter a valid password");

//task #3
alert("Welcome to js Land...\nHappy Coding!");

//task #4
alert("Welcome to js Land...");

//task #5
alert("Happy Coding!\n□ prevent this page for creating additional dialogues");

//task #6
console.log("Hello... I can run JS through my web browser's console");


//Chapter #2
//task #1
var username;

//task #2
var myName = "Muhammad Milad Raza";

//task #3
var message = "'"+"Hello World"+"'";
alert(message);

//task #4
var name = prompt("Enter Your Name");
var age = prompt("Enter Your Age");
var skill = prompt("Enter Your Skill");
alert(name);
alert(age);
alert(skill);

//task #5
var pizza = alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

//task #6
var email = "miladrazabhatti@gmail.com";
alert("my email address is " + email);

//task #7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

//task #8
document.write("Yah! I can write HTML content through JavaScript<br>");

//task #9
var design = "--------------------ಥﾟДﾟ●Дﾟಥ--------------------";
alert (design);


//Chapter #3
//task #1
var age = "20";
alert("I am " + age + " years old");

//task #2
var n = 10;
alert("You have visited this site "+n+" times");

//task #3
var birthYear = 1999;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared varible is number <br>");

//task #4
var name = prompt("Your name?");
var product = prompt("product you want to buy?");
var quantity = prompt("How many products you want to buy?");
document.write("<b>" + name + "</b>" + " " + "ordered" + " " + "<b>" + quantity + "</b>" + " " + "<b>" + product+ "</b>" + "(s)" +" on XYZ Clothing Store<br>");


//Chapter #4
//task #1
var x=1 , y=2 , z=3;

//task #2
//var a1=1 ,usevar=2 , x3=y , d4="s" , z56="g";
//var 1=a , 2b=b , if=c, d f=d, d+&=e;

//task #3
document.write(" <h1> Rules for naming JS variables </h1> <br><br><br>");
document.write("Variable names can only contain letters,numbers,$ and _. <br> For example: $_my1stvariable <br>");
document.write("Variable must begin with a letter,$ or _. <br> For example: $name,_name or name <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not be JS keywords<br>");


//Chapter #5
//task #1
var first = prompt('Enter your first number for +');
var second = prompt('Enter your second number for +');
var add = (+first)  + (+second);
document.write("Sum of " + first + " and " + second + " is " + add + "<br>");

//task #2
var third = prompt('Enter your first number for -');
var forth = prompt('Enter your second number for -');
var subtract = (third)  - (forth);
document.write("Subtraction of " + third + " and " + forth + " is " + subtract + "<br>");
var fifth = prompt('Enter your first number for *');
var sixth = prompt('Enter your second number for *');
var multipliey = (fifth)  * (sixth);
document.write("Multiplication of " + fifth + " and " + sixth + " is " + multipliey + "<br>");
var seventh = prompt('Enter your first number for /');
var eight = prompt('Enter your second number for /');
var divide = (seventh)  / (eight);
document.write("Division of " + seventh + " and " + eight + " is " + divide + "<br>");
var nineth = prompt('Enter your first number for %');
var ten = prompt('Enter your second number for %');
var module = (nineth)  % (ten);
document.write("Modulus of " + nineth + " and " + ten + " is " + module + "<br>");

//task #3
var a;
document.write("Value after variable declaration is " + a +"<br>");
a=6;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a=a+7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
a=13%3;
document.write("The reminder is: " + a + "<br> <br>");

//task #4
var b=600;
b*600;
document.write("Total cost of buy 5 tickets to a movie is: " + b + "<br> <br>");

//task #5
document.write("Table of 2 <br>");
document.write("2 * 1 = "  + 2*1 + "<br>");
document.write("2 * 2 = "  + 2*2 + "<br>");
document.write("2 * 3 = "  + 2*3 + "<br>");
document.write("2 * 4 = "  + 2*4 + "<br>");
document.write("2 * 5 = "  + 2*5 + "<br>");
document.write("2 * 6 = "  + 2*6 + "<br>");
document.write("2 * 7 = "  + 2*7 + "<br>");
document.write("2 * 8 = "  + 2*8 + "<br>");
document.write("2 * 9 = "  + 2*9 + "<br>");
document.write("2 * 10 = "  + 2*10 + "<br> <br>");

//task #6
var c = 25;
var f =(c*9/5)+32;
document.write(c + " °c" + " is " + f + "°f<br>");
var f = 67;
var c =(f-38)*5/9;
document.write(f + " °f" + " is " + c + "°c<br> <br>");

//task #7
document.write("<h1>Shopping Cart</h1><br><br><br>");
var price1 = 650 , price2 = 100 , quantity1 = 3 , quantity2 = 7 , ship = 100 ;
document.write("Price of item 1 is "+price1 +  "<br>");
document.write("Quantity of item 1 is "+quantity1 + "<br>");
document.write("Price of item 2 is "+price2 + "<br>");
document.write("Quantity of item 2 is "+quantity2 + "<br>");
document.write("Shipping charges "+ship +"<br><br>");
var full= price1*3 + 100*7 + 100;
document.write("Total of your order is " +full + "<br>");

//task #8
document.write("<h1>Mark Sheet</h1> <br> <br>");
var obtain = 804;
var total = 980 ;
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + obtain + "<br>");
var per = (obtain/total)*100;
document.write("Percentage: " + per +"%<br><br>");

//task #9
document.write("<h1>Currency in PKR</h1><br><br>");
var us =104.80 ,saudi =28;
var pkr = us*10 + saudi*25;
document.write("Total currency in PKR " + pkr + "<br><br>");

//task #10
var num = 2;
num = (((num+5)*10)/2); 
document.write(num + "<br><br>");

//task #11
document.write("Age Calculater <br><br>");
var current =2020;
var base =1999;
var all = current-base;
document.write("Current year: " + current + "<br>");
document.write("Birth year: " + base + "<br>" );
document.write("Your age is: " + all + "<br><br><br>");

//task #12
document.write("<h1>The Geometrizer</h1><br><br>");
var r = 20;
document.write("Radius of circle is: "+ r + "<br>");
var cr = (2)*(3.142)*(r);
document.write("The circumference is: "+ cr + "<br>");
var ar = (3.142)*(r)*(2);
document.write("The area is: "+ ar + "<br><br><br>");

//task #13
document.write("<h1>The Life Time Supply Calculator</h1><br><br>");
var favorite = "bravo";
var now = 20;
var till = 60;
var perd = 2;
document.write("Favorite Snacks: "+ favorite +"<br>");
document.write("Current age: "+ now+ "<br>");
document.write("Estimated maximum age: "+ till +"<br>");
document.write("Amount of snaks per day: "+perd +"<br>");
var z = till - now ;
var need = (365*z)*2;
document.write("You will need "+need+" "+favorite+" to last you until the ripe old age of "+till+"<br>");


//Chapters #6-9
//task #1
var num = prompt("Enter a number");
document.write("Result:<br>");
document.write("The value of a is: "+num+"<br>");
document.write("------------------------------------------<br><br>");
document.write("The value of ++a is: "+(++num)+"<br>");
document.write("Now the value of a is: "+num +"<br><br>");
document.write("The value of a++ is: "+(num++)+"<br>");
document.write("Now the value of a is: "+num +"<br><br>");
document.write("The value of --a is: "+(--num)+"<br>");
document.write("Now the value of a is: "+num +"<br><br>");
document.write("The value of a-- is: "+(num--)+"<br>");
document.write("Now the value of a is: "+num +"<br><br><br>");

//task #2
var a=2, b=1;
document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
document.write("--a is: "+(--a)+"<br>");
var a=2 ,b=1;
document.write("--a - --b is: "+(--a - --b)+"<br>");
var a=2 ,b=1;
document.write("--a - --b + ++b is: "+(--a - --b + ++b)+"<br>");
var a=2,b=1;
document.write("--a - --b + ++b + b-- is: "+(--a - --b + ++b + b--)+"<br>");
var a=2,b=1;
var result =(--a - --b + ++b + b--);
document.write("Result is: "+result+"<br><br><br>");

//task #3
var well = prompt("Enter Your Name");
alert("Welcome "+well);

//task #4
var table = prompt("Enter a number (1-10)");
if (table == 1){
document.write("1 * 1 = "  + 1*1 + "<br>");
document.write("1 * 2 = "  + 1*2 + "<br>");
document.write("1 * 3 = "  + 1*3 + "<br>");
document.write("1 * 4 = "  + 1*4 + "<br>");
document.write("1 * 5 = "  + 1*5 + "<br>");
document.write("1 * 6 = "  + 1*6 + "<br>");
document.write("1 * 7 = "  + 1*7 + "<br>");
document.write("1 * 8 = "  + 1*8 + "<br>");
document.write("1 * 9 = "  + 1*9 + "<br>");
document.write("1 * 10 = "  + 1*10 + "<br> <br>");
}
else if (table==2){
document.write("2 * 1 = "  + 2*1 + "<br>");
document.write("2 * 2 = "  + 2*2 + "<br>");
document.write("2 * 3 = "  + 2*3 + "<br>");
document.write("2 * 4 = "  + 2*4 + "<br>");
document.write("2 * 5 = "  + 2*5 + "<br>");
document.write("2 * 6 = "  + 2*6 + "<br>");
document.write("2 * 7 = "  + 2*7 + "<br>");
document.write("2 * 8 = "  + 2*8 + "<br>");
document.write("2 * 9 = "  + 2*9 + "<br>");
document.write("2 * 10 = "  + 2*10 + "<br>");
}
else if (table==3){
document.write("3 * 1 = "  + 3*1 + "<br>");
document.write("3 * 2 = "  + 3*2 + "<br>");
document.write("3 * 3 = "  + 3*3 + "<br>");
document.write("3 * 4 = "  + 3*4 + "<br>");
document.write("3 * 5 = "  + 3*5 + "<br>");
document.write("3 * 6 = "  + 3*6 + "<br>");
document.write("3 * 7 = "  + 3*7 + "<br>");
document.write("3 * 8 = "  + 3*8 + "<br>");
document.write("3 * 9 = "  + 3*9 + "<br>");
document.write("3 * 10 = "  + 3*10 + "<br>");
}
else if (table==4){
document.write("4 * 1 = "  + 4*1 + "<br>");
document.write("4 * 2 = "  + 4*2 + "<br>");
document.write("4 * 3 = "  + 4*3 + "<br>");
document.write("4 * 4 = "  + 4*4 + "<br>");
document.write("4 * 5 = "  + 4*5 + "<br>");
document.write("4 * 6 = "  + 4*6 + "<br>");
document.write("4 * 7 = "  + 4*7 + "<br>");
document.write("4 * 8 = "  + 4*8 + "<br>");
document.write("4 * 9 = "  + 4*9 + "<br>");
document.write("4 * 10 = "  + 4*10 + "<br>");
}
else if (table==5){
document.write("5 * 1 = "  + 5*1 + "<br>");
document.write("5 * 2 = "  + 5*2 + "<br>");
document.write("5 * 3 = "  + 5*3 + "<br>");
document.write("5 * 4 = "  + 5*4 + "<br>");
document.write("5 * 5 = "  + 5*5 + "<br>");
document.write("5 * 6 = "  + 5*6 + "<br>");
document.write("5 * 7 = "  + 5*7 + "<br>");
document.write("5 * 8 = "  + 5*8 + "<br>");
document.write("5 * 9 = "  + 5*9 + "<br>");
document.write("5 * 10 = "  + 5*10 + "<br>");
}
else if (table==6){
document.write("6 * 1 = "  + 6*1 + "<br>");
document.write("6 * 2 = "  + 6*2 + "<br>");
document.write("6 * 3 = "  + 6*3 + "<br>");
document.write("6 * 4 = "  + 6*4 + "<br>");
document.write("6 * 5 = "  + 6*5 + "<br>");
document.write("6 * 6 = "  + 6*6 + "<br>");
document.write("6 * 7 = "  + 6*7 + "<br>");
document.write("6 * 8 = "  + 6*8 + "<br>");
document.write("6 * 9 = "  + 6*9 + "<br>");
document.write("6 * 10 = "  + 6*10 + "<br>");
}
else if (table==7){
document.write("7 * 1 = "  + 7*1 + "<br>");
document.write("7 * 2 = "  + 7*2 + "<br>");
document.write("7 * 3 = "  + 7*3 + "<br>");
document.write("7 * 4 = "  + 7*4 + "<br>");
document.write("7 * 5 = "  + 7*5 + "<br>");
document.write("7 * 6 = "  + 7*6 + "<br>");
document.write("7 * 7 = "  + 7*7 + "<br>");
document.write("7 * 8 = "  + 7*8 + "<br>");
document.write("7 * 9 = "  + 7*9 + "<br>");
document.write("7 * 10 = "  + 7*10 + "<br>");
}
else if (table==8){
document.write("8 * 1 = "  + 8*1 + "<br>");
document.write("8 * 2 = "  + 8*2 + "<br>");
document.write("8 * 3 = "  + 8*3 + "<br>");
document.write("8 * 4 = "  + 8*4 + "<br>");
document.write("8 * 5 = "  + 8*5 + "<br>");
document.write("8 * 6 = "  + 8*6 + "<br>");
document.write("8 * 7 = "  + 8*7 + "<br>");
document.write("8 * 8 = "  + 8*8 + "<br>");
document.write("8 * 9 = "  + 8*9 + "<br>");
document.write("8 * 10 = "  + 8*10 + "<br>");
}
else if (table==9){
document.write("9 * 1 = "  + 9*1 + "<br>");
document.write("9 * 2 = "  + 9*2 + "<br>");
document.write("9 * 3 = "  + 9*3 + "<br>");
document.write("9 * 4 = "  + 9*4 + "<br>");
document.write("9 * 5 = "  + 9*5 + "<br>");
document.write("9 * 6 = "  + 9*6 + "<br>");
document.write("9 * 7 = "  + 9*7 + "<br>");
document.write("9 * 8 = "  + 9*8 + "<br>");
document.write("9 * 9 = "  + 9*9 + "<br>");
document.write("9 * 10 = "  + 9*10 + "<br>");
}
else if (table==10){
document.write("10 * 1 = "  + 10*1 + "<br>");
document.write("10 * 2 = "  + 10*2 + "<br>");
document.write("10 * 3 = "  + 10*3 + "<br>");
document.write("10 * 4 = "  + 10*4 + "<br>");
document.write("10 * 5 = "  + 10*5 + "<br>");
document.write("10 * 6 = "  + 10*6 + "<br>");
document.write("10 * 7 = "  + 10*7 + "<br>");
document.write("10 * 8 = "  + 10*8 + "<br>");
document.write("10 * 9 = "  + 10*9 + "<br>");
document.write("10 * 10 = "  + 10*10 + "<br>");
}
else{
document.write("5 * 1 = "  + 5*1 + "<br>");
document.write("5 * 2 = "  + 5*2 + "<br>");
document.write("5 * 3 = "  + 5*3 + "<br>");
document.write("5 * 4 = "  + 5*4 + "<br>");
document.write("5 * 5 = "  + 5*5 + "<br>");
document.write("5 * 6 = "  + 5*6 + "<br>");
document.write("5 * 7 = "  + 5*7 + "<br>");
document.write("5 * 8 = "  + 5*8 + "<br>");
document.write("5 * 9 = "  + 5*9 + "<br>");
document.write("5 * 10 = "  + 5*10 + "<br> <br> <br>");
}

//task #5
var full = 100;
var s1 = prompt("Enter first subject name");
var s2 = prompt("Enter second subject name");
var s3 = prompt("Enter third subject name");
var m1 = prompt("Enter first subject obtained marks");
var m2 = prompt("Enter second subject obtained marks");
var m3 = prompt("Enter third subject obtained marks");
var per1 = (m1/full)*100;
var per2 = (m2/full)*100;
var per3 = (m3/full)*100;
var fullall = 100*3;
var mall = (+m1)+(+m2)+(+m3);
var perall = (mall/fullall)*100;
document.write("<table> <th>Subjects</th> <th>Total marks</th> <th>Obtained marks</th> <th>Percentage</th> <tr> <td>"+s1+"</td>" + "<td>"+full+"</td>"+ "<td>"+m1+"</td>"+"<td>"+per1+"%"+"</td>"+"</tr>"+"<tr><td>"+s2+"</td>" + "<td>"+full+"</td>"+ "<td>"+m2+"</td>"+"<td>"+per2+"%"+"</tr>"+"<tr><td>"+s3+"</td>" + "<td>"+full+"</td>"+ "<td>"+m1+"</td>"+"<td>"+per1+"%"+"</tr>"+"<tr>"+"<td></td>"+"<td><b>"+fullall+"</b></td>"+"<td><b>"+mall+"</b></td>"+"<td><b>"+perall+"%"+"</b><td>"+"</tr>"+"</table><br>");


//Chapters #9-11
//task #1
var city = prompt("Please enter the city name");
if (city =="karachi"){
alert("Welcome to city of lights");
}

//task #2
var gender = prompt("Gender");
if (gender =="male"){
alert("Good morning sir.");
}
else if (gender =="female"){
alert("Good morning ma'am.");
}

//task #3
var signal = prompt("Signal color");
if (signal =="red"){
alert("Must stop");
}
else if(signal =="yellow"){
alert("Ready to move");
}
else if(signal =="green"){
alert("Move now");
}

//task #4
var fuel = prompt("Please enter fuel status (in litters)")
if (fuel < 0.25){
alert("Please refill the fuel in your car");
}

//task #5
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//task #6
document.write("<h1>Mark Sheet</h1>");
var marks = prompt("Enter your obtained marks in 3 subjects");
var total = prompt("Enter total marks");
var per = (marks/total)*100;
if (per >= 80){
var grade = "A-one"
var remarks = "Excellent"
}
else if (per >= 70){
var grade = "A"
var remarks = "Good"
}
else if (per >= 60){
var grade = "B"
var remarks = "You need to improve"
}
else{
var grade = "Fail"
var remarks = "Sorry"
}
document.write("<h3>Total Marks: "+total+"</h3>");
document.write("<h3>Obtained Marks: "+marks+"</h3>");
document.write("<h3>Percentage: "+per+"%</h3>");
document.write("<h3>Grade: "+grade+"</h3>");
document.write("<h3>Remarks: "+remarks+"</h3><br><br>");

//task #7
var secret = 5;
var num =prompt("Enter a number between 1-10");
if (num==secret){
document.write("Bingo! correct answer <br>");
}
else if (num == secret+1){
document.write("Close enough");
}

//task #8
var odd1 = prompt("Enter a number to check the number is divisible by 3");
if (odd1%3 === 0){
alert ("Given number is divisible by 3");
}
else{
alert("Given number is not divisible by 3");
}

//task #9
var num = prompt("Enter a number to check the number is odd/even");
if (num%2 ==0){
alert("Given number is even");
}
else{
alert("Given number is odd");
}

//task #10
var T = prompt ("Enter the temperature");
if (T > 40){
document.write("It is too hot outside.");
}
else if ( T > 30){
document.write("The Weather today is Normal.");
}
else if ( T > 20){
document.write("Today’s Weather is cool.");
}
else if ( T > 10){
document.write("OMG! Today’s weather is so Cool.");
}

//task #11
var first = prompt ("Enter first number");
var second = prompt ("Enter second number ");
var operator = prompt ("Enter operator");
var add = (+first)+(+second);
var sub = first - second;
var multi = first * second;
var div = first/second;
var mod = first%second;
if (operator == "+"){
document.write( first + "+" + second + "=" +add);
}
else if (operator == "-"){
document.write( first + "-" + second + "=" +sub);
}
else if (operator == "*"){
document.write( first + "*" + second + "=" +multi);
}
else if (operator == "/"){
document.write( first + "/" + second + "=" +div);
}
else if (operator == "%"){
document.write( first + "%" + second + "=" +mod);
}


//Chapters #12-13
//task #1
var check = prompt("Enter a character to check it is upper/lower case");
var now = check.charCodeAt(0);
if (now >= 65 && now <=90){
document.write("The given character is upper case latter<br>");
}
else if (now >= 97 && now <= 122){
document.write("The given character is lower case latter<br>");
}

//task #2
var num1, num2;
num1 = prompt("Input the First integer");
num2 = prompt("Input the second integer");
if(num1 > num2){ 
alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else if(num2 > num1){
alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}                  
else{
alert("The values "+ num1+ " and "+num2+ " are equal.");
}

//task #3
var see = prompt("Enter a number to check it's positive or negative");
if(see>0){
alert("Given number "+see+" is positive");
}
else if(see<0){
alert("Given number "+see+" is negative");
}
else{
alert("Given number "+see+" is zero");
}

//task #4
var x = prompt("Enter a variable to check it is vowel or not");
if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){
alert(x+" is a vowel");
}
else{
alert(x+" is not a vowel");
}

//task #5
var pass = "m19991999";
var pass1 = prompt("Please enter your password");
if (pass1 === "m19991999"){
alert("Correct! The password you entered matches the original password");
}
else if(pass1 === ""){
alert("Please enter a password");
}
else{
alert ("Incorrect password");
}

//task #6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert (greeting);
}

//task #7
var time = prompt("Enter the current time");
if (time >= 0000 && time <1200){
alert("Good morning!");
}
else if (time >= 1200 && time <1700){
alert("Good afternoon!");
}
else if (time >= 1700 && time <2100){
alert("Good evening!");
}
else if (time >= 2100 && time <=2359){
alert("Good night!");
}


//Chapters #14-16
//task #1
var names=[];

//task #2
var students= new Array();

//task #3
var cities = ["karachi","lahore","islamabad","quetta"];
alert(cities[2]);

//task #4
var numbers = [10,20,30,40];
alert(numbers[3]);

//task #5
var booleans = [1>3,1<3];
alert(booleans[0]);
alert(booleans[1]);

//task #6
var mixed = ["Lahore",10,1>2];
alert(mixed[0]);
alert(mixed[1]);
alert(mixed[2]);

//task #7
var title = ["<h3>Qualifications: </h3><br>"]
document.write(title[0]);
var qualifications = ["SSC","HSC","BSC","BS","B.COM","MS","M. Phil.","PhD"]
for (var i=0; i<qualifications.length; i++)
document.write("<h3>"+(i+1)+ ") " + qualifications[i]+"</h3>");

//task #8
var student = ["Hassan","Salman","Farhan"];
var scores = [420,245,300];
var per1 = (scores[0]/500)*100;
var per2 = (scores[1]/500)*100;
var per3 = (scores[2]/500)*100;
document.write("Score of "+student[0]+" is "+scores[0]+ ". Percentage: "+per1+" %<br>");
document.write("Score of "+student[1]+" is "+scores[1]+ ". Percentage: "+per2+" %<br>");
document.write("Score of "+student[2]+" is "+scores[2]+ ". Percentage: "+per3+" %<br><br>");

//task #9
var colors = ["blue","red","green"];
document.write(colors+"<br>");
var value = prompt("Enter the color name which you want to add at the beginning of the colors");
colors.splice(0,0,value);
document.write(colors+"<br>");
var value1 = prompt("Enter the color name which you want to add at the end of the colors");
colors.splice(4,0,value1);
document.write(colors+"<br>");
colors.splice(0,0,"orange","pink");
document.write(colors+"<br>");
colors.splice(0,1);
document.write(colors+"<br>");
colors.splice(5,1);
document.write(colors+"<br>");
var user = prompt("In which position you want to add color");
var namez = prompt("Enter the color name you want to add");
colors.splice(user-1,0,namez)
document.write(colors+"<br>");
var user2 = prompt("In which position you want to delete color/colors");
var namez2 = prompt("How many colors do u want to remove");
colors.splice(user-1,namez2)
document.write(colors+"<br><br>");

//task #10
var score = [320,230,480,120];
score.sort();
document.write(score+"<br><br>");

//task #11
var cities2 =["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
var city2 = [cities2[0],cities2[2],cities2[4]];
document.write(city2+"<br><br>");

//task #12
var stri = ["This","is","my","cat"];
document.write("<h2>Array:<br>"+stri+"</h2><br>");
var noe = stri.join(" ");
document.write("<h2>String:<br>"+noe+"</h2><br><br>");

//task #13
var device = ["Devices:"];
document.write("<h3>"+device+"</h3><br>");
var devices = ["keyboard","mouse","printer","monitor"];
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.shift();
document.write("<h3>Out:<br>"+item+"</h3><br>");

//task #14
var device = ["Devices:"];
document.write("<h3>"+device+"</h3><br>");
var devices = ["keyboard","mouse","printer","monitor"];
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3>");
var item = devices.pop();
document.write("<h3>Out:<br>"+item+"</h3><br>");

//task #15
var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select><option>"+phones[0]+"</option>"+"<option>"+phones[1]+"</option>"+"<option>"+phones[2]+"</option>"+"<option>"+phones[3]+"</option>"+"<option>"+phones[4]+"</option>"+"<option>"+phones[5]+"</option></select><br>");


//Chapters #17-20
//task #1
var array1 = [[]];

//task #2
var matrix =[
[0,1,2,3],
[1,0,1,2],
[2,1,0,1]
];
document.write("<h1>"+matrix[0][0]+" "+matrix[0][1]+" "+matrix[0][2]+" "+matrix[0][3]+"</h1>");
document.write("<h1>"+matrix[1][0]+" "+matrix[1][1]+" "+matrix[1][2]+" "+matrix[1][3]+"</h1>");
document.write("<h1>"+matrix[2][0]+" "+matrix[2][1]+" "+matrix[2][2]+" "+matrix[2][3]+"</h1><br><br>");

//task #3
for (var i=1; i<11; i++)
document.write("<b>"+i+"</b><br>");

//task #4
document.write("<br>");
var k = prompt("Enter a table number which is you want");
var till = prompt ("Enter the limit you want");
for (var j=1; j<=till; j++)
document.write(k+" X "+j+" = "+(k*j)+"<br>");

//task #5
document.write("<br>");
var fruits = ["apple","banana","mango","orange","strawberry"];
for(var a=0; a<=4; a++)
document.write("Element at index "+a+" is "+fruits[a]+"<br>");

//task #6
document.write("<br><h3>Counting:</h3>");
for (var a1=1; a1<=15; a1++)
document.write(a1+",");
document.write("<br><h3>Reverse counting:</h3>");
for (var a2=10; a2>=1; a2--)
document.write(a2+",");
document.write("<br><h3>Even:</h3>");
for (var a3=0; a3<=20; a3++)
if (a3%2 === 0){
document.write(a3+",");
}
document.write("<br><h3>Odd:</h3>");
for (var a4=0; a4<=20; a4++)
if (a4%2 === 1){
document.write(a4+",");
}
document.write("<br><h3>Series:</h3>");
for (var a3=2; a3<=20; a3++)
if (a3%2 === 0){
document.write("<b>"+a3+"k,</b>");
}

//task #7
document.write("<br>");
var enter = prompt("Welcome to ABC Bakery. what do u want to order sir/ma'am?");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
if(arr.indexOf(enter) !== -1){
document.write("<h3>"+enter+" is <b>available</b> at index "+arr.indexOf(enter)+" in our bakery</h3>");
}
else{
document.write("<h3>We are sorry. "+enter+" is <b>not available</b> in our bakery</h3>");
}

//task #8
document.write("<br>");
var arr = [24,53,78,91,12];
var one = arr[0];
for (var i=0; i<arr.length; i++)
if (one < arr[i] ){
one = arr[i];
}
document.write("<h2>Array items: "+arr+"</h2>"+"<h2>The largest number is "+one+"</h2><br>");

//task #9
document.write("<br>");
var arry = [24,53,78,91,12];
var oneo = arry[0];
for (var i=0; i<arry.length; i++)
if (arry[i] < oneo ){
oneo = arry[i];
}
document.write("<h2>Array items: "+arry+"</h2>"+"<h2>The smallest number is "+oneo+"</h2><br>");

//task #10
document.write("<br>");
for (var x = 1; x <= 100; x++){
if (x%5 == 0){
document.write(x+",");
}
}