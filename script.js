// Item 1

var nickname = "Eve";
var height = 64;
var weight = 52;

var heightft = Math.floor(height/12);
var heightinch = height%12;
var weightlbs = weight*2.20462;

var firstouput = "Name: " + nickname + "\nHeight: " + heightft +"\'"+ heightinch + "\"" + "\nWeight" + weightlbs.tofixed(3) + "lbs" alert(firstoutput);

// Item 2

var condition = confirm("Do you agree to share personal information with our site?");
if (condition){
    console.log(firstoutput);
    
}

else {
    console.log("User does not wish to share his or her personal information.");
    
}

// Item 3 

var firstName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: ");
var birthYear = prompt("Please enter your birthyear: ");

var age = 2023 - birthYear;
var secondoutput + "Hello" + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";

document.getElementbyId("output").textContent = secondoutput;