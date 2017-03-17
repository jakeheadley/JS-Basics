//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (str) {
  if (name === "Tyler") {
    return true;
  } else if (name !== "Tyler") {
    return false;
  }
}
isTyler();

//////////////////PROBLEM 2////////////////////

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName (str) {
  var person = prompt("Please enter your name:");
  if (person !== null) {
      return "Hello " + person;
  }
}
getName();

//////////////////PROBLEM 3////////////////////

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome () {
  person = getName().split(" ");
  person.shift();
  person = person.toString().replace(/,/g, " ");
  alert("Welcome, " + person);
}
welcome();

//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?

  //Parameters are the names listed in the function definition. [~W3]
  //Arguments are the values passed to (and received by) a function. [~W3]

//////////////////PROBLEM 5////////////////////

//What are all the falsy values in JavaScript and how do you check if something is falsy?

// (0 == false);          // true
// (" " == false);        // true
// (undefined == false);  // true
// (null == false);       // true
// (false == false);      // true
// (NaN == false);        // true

//////////////////PROBLEM 6////////////////////

//Create a function called myName that returns your name

function myName () {
  return "Jake";
}

//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName();

//Now alert the result of invoking newMyName

alert(myNewName);

//////////////////PROBLEM 7////////////////////

//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn () {
  return (function () {return "Jake";})();
}
outerFn();

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
