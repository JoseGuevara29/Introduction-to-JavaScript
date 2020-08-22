/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = 18;
var age = true;
if (votingAge >= 18) {
  age = true;
  console.log(age);
} else {
  age = false;
  console.log(age);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var num = 2;
if (num >= 2) {
  var num2 = num;
  console.log(num2);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var year = "1999";
year = 1999;
console.log(year);
year = 1999 - 2;
console.log(year);

//Task d: Write a function to multiply a*b
function multi(a, b) {
  var c = a * b;
  return c;
}
console.log(multi(10, 2));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function ageInDogYears(humanY) {
  var dogY = humanY * 7;
  return dogY;
}
console.log(ageInDogYears(1));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

function DogFoodIntake(dogAge, weight) {
  if (dogAge >= 1) {
    if (weight <= 5) {
      let intake = weight * 0.05;
      return intake;
    } else if (weight > 5 && weight <= 10) {
      let intake = weight * 0.04;
      return intake;
    } else if (weight > 10 && weight <= 15) {
      let intake = weight * 0.03;
      return intake;
    } else {
      let intake = weight * 0.02;
      return intake;
    }
  } else {
    //in months
    // Puppies less than 1 year
    // 2 - 4 months 10% of their body weight
    // 4 - 7 months 5% of their body weight
    // 7 - 12 months 4% of their body weight
    if (dogAge >= 2 / 12 && dogAge < 4 / 12) {
      let intake = weight * 0.1;
      return intake;
    } else if (dogAge >= 4 / 12 && dogAge < 7 / 12) {
      let intake = weight * 0.05;
      return intake;
    } else if (dogAge >= 7 / 12 && dogAge < 12 / 12) {
      let intake = weight * 0.04;
      return intake;
    }
  }
}
console.log(DogFoodIntake(1, 15));
console.log(DogFoodIntake(0.667, 15));

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

//rock = 0
//paper = 1
//scissors = 2
function rockPaperSissor(choice) {
  var ranNum = Math.floor(Math.random() * Math.floor(3));
  if (choice == "rock") {
    choice = 0;
  } else if (choice == "paper") {
    choice = 1;
  } else if (choice == "scissors") {
    choice = 2;
  }
  if (ranNum == 0) {
    var player2 = "rock";
  } else if (ranNum == 1) {
    var player2 = "paper";
  } else if (ranNum == 2) {
    var player2 = "scissors";
  }
  if (
    (choice == 0 && ranNum == 0) ||
    (choice == 1 && ranNum == 1) ||
    (choice == 2 && ranNum == 2)
  ) {
    return "Player2 played " + player2 + " Draw";
  } else if (choice == 0 && ranNum == 1) {
    return "Player2 played " + player2 + ". You lost!";
  } else if (choice == 0 && ranNum == 2) {
    return "Player2 played " + player2 + ". You won!";
  } else if (choice == 1 && ranNum == 0) {
    return "Player2 played " + player2 + ". You won!";
  } else if (choice == 1 && ranNum == 2) {
    return "Player2 played " + player2 + ". You lost!";
  } else if (choice == 2 && ranNum == 0) {
    return "Player2 played " + player2 + ". You lost!";
  } else if (choice == 2 && ranNum == 1) {
    return "Player2 played " + player2 + ". You won!";
  }
}
console.log(rockPaperSissor("scissors"));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmIntoMiles(numConvert) {
  return (
    numConvert + " Km is equals to " + numConvert * 0.621371 + " in miles."
  );
}
console.log(kmIntoMiles(5));
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function ftIntoCm(numConvert2) {
  return numConvert2 + " feet is equals to " + numConvert2 * 30.48 + " in cm.";
}
console.log(ftIntoCm(5));
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda
// on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(bottlesOfSoda) {
  for (var i = bottlesOfSoda; i > 0; i--) {
    var current = i + 1;

    console.log(
      current +
        " bottles of soda on the wall, " +
        current +
        " bottles of soda, take one down pass it around " +
        i +
        " bottles of soda on the wall."
    );
  }
}
console.log(annoyingSong(99));
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
function gradeCalc(grade) {
  if (grade >= 90) {
    return console.log("Your grade is A");
  } else if (grade >= 80 && grade < 90) {
    return console.log("Your grade is B");
  } else if (grade >= 70 && grade < 80) {
    return console.log("Your grade is C");
  } else if (grade >= 60 && grade < 70) {
    return console.log("Your grade is D");
  } else {
    return console.log("Your grade is F");
  }
}
console.log(gradeCalc(80));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
