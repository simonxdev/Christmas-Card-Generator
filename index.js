const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

const pic = document.getElementById("pics")
const picdisplay = document.getElementById("picdisplay")
const picdisplay2 = document.getElementById("picdisplay2")
const to = document.getElementById("toname")
const todisplay = document.getElementById("todisplay")
const fromname = document.getElementById("fromname")

function writeGreeting() {
    greetingDisplay.innerHTML = "";
    picdisplay.innerText = pic.value;
    picdisplay2.innerText = pic.value;
    let message = greetings[(Math.random() * greetings.length) | 0];
    if (to.value != ""){
        greetingDisplay.innerHTML += 'Dear ' + to.value + ',<br>'
    }
    greetingDisplay.innerHTML += message;
    if (fromname.value != ""){
        greetingDisplay.innerHTML += '<br>From ' + fromname.value
    }
    
}

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.

const addbtn = document.getElementById("btnadd")
const addinput = document.getElementById("addmessage")
const messagecount = document.getElementById("messagecount")

addbtn.addEventListener("click", function(){
    if (addinput.value != ""){
        greetings.push(addinput.value);
        messagecount.innerText = " " + greetings.length;
    }
    addinput.value = "";
})