let age = number(prompt ("how old are you?"));
let name = prompt("Enter your name:").trim().toLowerCase();
if (age<18) {
    console.log("you cant enter");
} else if (age >=21 && name === "nino") {
    console.log ("Welcome, VIP!");
} else if (age % 2 === 0 || name === "giorgi" ) {
    console.log("You get a free drink!");

} else {
    console.log("Welcome in. Enjoy your evening.");
}