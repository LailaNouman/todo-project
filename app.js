var name = prompt("Enter you name please");

var gender = prompt("Enter you gender please (Male, Female)");

var age = prompt("Enter your age please");

if (age <= 0){
    alert ("Your age is less or equal than zero")
}


if ( confirm("Press the button if you want to skip the welcoming message")){
} else{
switch (gender){
    case "Male":
        alert ("Welcome Mr " + name);
        break;
    case "Female":
        alert ("Welcome Ms " + name);
        break;
    default:
        alert ("Welcome " + name);
  } } 
