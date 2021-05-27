// <!-- # Review - Conditionals

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Save a random whole number between -10 and 10 to a variable.

const number = Math.floor(Math.random() * 20)  -10
console.log(number)

// 2. If that variable is greater than 0, print "Ye" and otherwise print "No"

if(number > 0){
    console.log("Ye")
}
else {
    console.log("NO")
}

// 3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"

if (number > 5){
    console.log("winner")
}
else if(number > 0){
    console.log("ok")
}
else
{
    console.log("try again")
}

// 4. Save another random number between -10 and 10 to a variable.

const number1 = Math.floor(Math.random() * 20)  - 10
console.log(number1)

// 5. If both variables are more than 5, print "Good scores!"
if (number >5 && number1 > 5){
    console.log("good Scores")
}

// 6. If either variable is below -9, print "Minus nine!"

if (number < -9 || number1 < -9){
    console.log("minus nine!")
}

// 7. Create a variable to store a message. 

let note = "nice"

//If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". 

if ((number + number1) <0 ){
    note = "We have gone sub zero!"
}

//Otherwise, set the message to null. -->

else {
    note =  null
}
console.log(note)

