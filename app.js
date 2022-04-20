
let array = [];

let name = prompt("Enter you name please");

let gender = prompt("Enter you gender please (Male, Female)");

let age = prompt("Enter your age please");

if (age <= 0){
    alert ("Your age is less or equal than zero")
}

let martial = prompt("Are you married? [Yes/No]");  

let job = prompt("Do you work? [Yes/No]");

let waking = prompt("Do you wake up early? [Yes/No]");

array.push(name,gender,age,martial,job,waking);


    function empty (){
    for (let i = 0; i < array.length; i++){
    if (Boolean(array[i]) == false){ 
    array[i]= "invalid";
    }
  } 
}

empty();

console.log(array);

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
