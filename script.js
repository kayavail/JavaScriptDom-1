var currentTime = document.getElementById("display_current_time");

function showDate(){
    var date = new Date();
    currentTime.innerHTML = date;
}

setInterval(showDate, 1000);

var square = document.getElementById("square");

function changeColor() {
    square.style.backgroundColor = "blue";
}

function reverseColor() {
    square.style.backgroundColor = "yellow";
}

function clickMe() {
    square.style.backgroundColor = "red";
}

var inputTag = document.getElementsByTagName("input");

function validateFields() {
    if (inputTag[0].value == ""){
        alert("Please Enter a Name");
    }else if (inputTag[1].value == ""){
        alert("Please Enter Password");
    }else if(inputTag[1].value != "12345678"){
        alert("Wrong Password!");
    }else{
        alert("Welcome");
    }
}

// var timer = 0;
//
// function countDown() {
//     document.write(timer + "<br>");
//     if (timer != 5){
//        clearInterval(timer);
//     }
//     timer++;
// }

setInterval(countDown, 1000);

//clearInterval(countDown());

// function add() {
//     document.write(2 + 10 + "<br>");
// }
//
// function sub() {
//     document.write(20 - 10 + "<br>");
// }
//
// add();
// setTimeout(sub, 2000);


// function person1() {
//    console.log("Bill Gates");
// }
//
// function person2() {
//     console.log("Mark Zukerberg");
// }
//
// function person3() {
//     console.log("Jeff Bezos");
// }

//person1();
//setInterval(person2, 2000);
//person3();



// var inputTags = document.getElementsByTagName("input");
// alert(inputTags[0].value);
//
//
// alert(inputTags[1].value);
//inputTags[1];

// function showMessage() {
//     alert("Hello, How are you?");
// }


//
// function press() {
//     alert("You Pressed the Keyboard");
// }

// function mouseOver() {
//     alert("Hi!");
// }

// var inputTag = document.getElementsByTagName("input");
//
// inputTag[0].value = "John Doe";
// inputTag[1].value = "john@gmail.com";
// inputTag[2].value = "11111111";

// var name = document.getElementById("enter_name").value = "Ola";
// var email = document.getElementById("enter_email").value = "ola@gmail.com";
// var password = document.getElementById("enter_password").value = "12345678";
//
// if (name != "Ola"){
//     alert("Wrong User!");
// }
// else{
//     alert("Valid User");
// }

// var text = document.getElementById("welcome_text").innerHTML;
// var story = document.getElementById("story").style.backgroundColor = "green";
// story = document.getElementById("story").style.color = "white";