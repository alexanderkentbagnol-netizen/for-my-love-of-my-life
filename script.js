// ===============================
// PART 1 - PASSWORD & OPENING
// ===============================


window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 4000);
    }
});

// Website password
const correctPassword = "053125";


// Get elements
const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const enterButton = document.getElementById("enter-btn");
const mainContent = document.getElementById("main-content");


// Enter website function
function unlockWebsite(){

    const enteredPassword = passwordInput.value;


    if(enteredPassword === correctPassword){

        // Remove password screen
        passwordScreen.style.opacity = "0";


        setTimeout(()=>{

            passwordScreen.style.display = "none";

            // Show main website
            mainContent.style.display = "block";


            setTimeout(()=>{

                mainContent.style.opacity = "1";

            },100);


        },800);


    } else {

        alert("Wrong password 💔 Try again.");

        passwordInput.value = "";

    }

}


// Button click
enterButton.addEventListener("click", unlockWebsite);


// Enter key support
passwordInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        unlockWebsite();

    }

});



// ===============================
// OPENING ANIMATION
// ===============================


window.addEventListener("load", ()=>{

    const opening = document.getElementById("opening");

    if(opening){

        setTimeout(()=>{

            opening.classList.add("hide");

        },2500);

    }

});
}


// ===============================
// PART 2 - SLIDESHOW & MUSIC
// ===============================


// ===============================
// MEMORY SLIDESHOW
// ===============================

let currentSlide = 0;

const slides = document.querySelectorAll(".memory-slide");


// Show selected slide
function showSlide(index){

    if(slides.length === 0) return;


    // Loop slides
    if(index >= slides.length){

        currentSlide = 0;

    } else if(index < 0){

        currentSlide = slides.length - 1;

    } else {

        currentSlide = index;

    }


    // Hide all slides
    slides.forEach(slide=>{

        slide.classList.remove("active");

    });


    // Show current slide
    slides[currentSlide].classList.add("active");

}



// Next button
function nextSlide(){

    showSlide(currentSlide + 1);

}


// Previous button
function previousSlide(){

    showSlide(currentSlide - 1);

}



// Auto change slides every 5 seconds

setInterval(()=>{

    nextSlide();

},5000);



// Start first slide
showSlide(currentSlide);




// ===============================
// MUSIC PLAYER
// ===============================


const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-btn");

let musicPlaying = false;



function toggleMusic(){


    if(!music) return;



    if(musicPlaying){


        music.pause();

        musicButton.innerHTML = "🎵 Play Music";


        musicPlaying = false;



    } else {


        music.play();

        musicButton.innerHTML = "⏸ Pause Music";


        musicPlaying = true;


    }

}



// Music button click
if(musicButton){

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

}



// Try autoplay after user interaction
document.addEventListener("click",()=>{

    if(music && !musicPlaying){

        music.volume = 0.5;

    }

});


function nextSlide(){

changeSlide(currentSlide+1);

}



function previousSlide(){

changeSlide(currentSlide-1);

}





// Automatic slideshow

setInterval(()=>{

nextSlide();

},6000);





// ================================
// PROGRESS BAR
// ================================


function updateProgress(){

let progress =
document.getElementById(
"progress"
);


progress.innerHTML =
(currentSlide+1)
+
"/"
+
slides.length;


}





// ================================
// TYPEWRITER MESSAGE
// ================================


let message =
"Every moment with you becomes a beautiful memory ❤️";


let index=0;



function startTyping(){


let text =
document.getElementById(
"typeText"
);


function type(){

if(index < message.length){

text.innerHTML +=
message.charAt(index);

index++;

setTimeout(type,80);

}

}


type();


}






// ================================
// FLOATING HEARTS
// ================================


function createHeart(){


let heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.className="heart";



heart.style.left =
Math.random()*100+"vw";



heart.style.fontSize =
(Math.random()*20+15)+"px";



heart.style.animationDuration =
(Math.random()*3+3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}


setInterval(createHeart,400);






// ================================
// SPARKLES
// ================================


function sparkle(){


let star =
document.createElement("div");


star.innerHTML="✨";


star.className="sparkle";


star.style.left =
Math.random()*100+"vw";


star.style.top =
Math.random()*100+"vh";



document.body.appendChild(star);



setTimeout(()=>{

star.remove();

},2000);


}


setInterval(sparkle,700);






// ================================
// LOVE TIMER
// ================================


// Change this date

let startDate =
new Date("2025-01-01");



function updateLoveTimer(){


let today =
new Date();



let difference =
today-startDate;



let days =
Math.floor(
difference/
(1000*60*60*24)
);



document.getElementById(
"loveDays"
)
.innerHTML =
days+
" days of memories ❤️";


}



setInterval(updateLoveTimer,1000);






// ================================
// MUSIC BUTTON
// ================================


function musicControl(){


let music =
document.getElementById(
"music"
);



if(music.paused){

music.play();

}

else{

music.pause();

}


}






// ================================
// SECRET MESSAGE
// ================================


function secretMessage(){


alert(
"You are my favorite person, my happiest memory, and someone I will always treasure ❤️"
);


}



// ================================
// PASSWORD SYSTEM
// ================================


function checkPassword(){


let password =
document.getElementById("password").value;



// CHANGE YOUR PASSWORD HERE

let correctPassword = "05/31/25";



if(password === correctPassword){


document.getElementById("opening")
.style.display="none";


document.getElementById("main")
.style.display="block";


startTyping();


}


else{


document.getElementById("wrongPassword")
.innerHTML =
"Wrong password 💔 Try again";


}


}


// Start first slide

window.onload = function () {

    setTimeout(() => {

        // Hide loading screen
        document.getElementById("loader").style.display = "none";

        // Show password screen
        document.getElementById("opening").style.display = "flex";

    }, 3000);

    changeSlide(0);
    updateLoveTimer();
};

};


// ===============================
// PART 3 - EXTRA EFFECTS & FINISH
// ===============================


// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}


// Create hearts every second
setInterval(createHeart, 800);



// Secret message button
function secretMessage() {

    let message = `
    💜 My favorite memory with you...

    Thank you for being part of my life.
    Every moment with you became something special.

    No matter what happens,
    I will always treasure our memories. 💜
    `;

    alert(message);
}



// Add smooth scrolling
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        let target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});



// Hide loader after website loads
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if(loader){
            loader.style.opacity = "0";

            setTimeout(()=>{
                loader.style.display = "none";
            },500);
        }

    },1500);

});



// Add typing effect
function typingEffect(element, text, speed = 80){

    let i = 0;

    element.innerHTML = "";

    function typing(){

        if(i < text.length){

            element.innerHTML += text.charAt(i);
            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}



// Start typing when main page opens
function startTyping(){

    const title = document.querySelector(".love-title");

    if(title){

        typingEffect(
            title,
            "Our Little World 💜",
            100
        );

    }

    }

// ===============================
// PART 4 - EXTRA EFFECTS
// ===============================


// Floating Hearts Effect
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 6000);

}


setInterval(createHeart, 500);




// Typing Animation

const messageText = 
"Every moment with you became one of my favorite memories. Thank you for being part of my little world ❤️";


let textIndex = 0;


function typeMessage(){

    const typingElement = document.getElementById("typing");


    if(!typingElement) return;


    if(textIndex < messageText.length){

        typingElement.innerHTML += messageText.charAt(textIndex);

        textIndex++;

        setTimeout(typeMessage, 70);

    }

}


window.addEventListener("load", () => {

    setTimeout(typeMessage, 2000);

});




// Music Button

const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-btn");


if(musicButton && music){

    musicButton.addEventListener("click", ()=>{


        if(music.paused){

            music.play();

            musicButton.innerHTML = "⏸ Pause Music";

        }

        else{

            music.pause();

            musicButton.innerHTML = "🎵 Play Music";

        }


    });


}




// Image Click Animation

const photos = document.querySelectorAll(".memory img");


photos.forEach(photo => {


    photo.addEventListener("click", ()=>{


        photo.classList.toggle("zoom");


    });


});




// Surprise Button

const surpriseButton = document.getElementById("surprise-btn");


if(surpriseButton){


    surpriseButton.addEventListener("click", ()=>{


        alert(
        "You are one of the most special people in my life ❤️"
        );


    });


}




// Smooth Scroll For Buttons

document.querySelectorAll("a").forEach(link=>{


    link.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});




// Console Message

console.log(
"❤️ Our Little World Website Loaded Successfully ❤️"
);


// ===============================
// PART 5 - EXTRA FEATURES
// ===============================


// Love Counter
// Change this date if your relationship date is different

const startDate = new Date("2025-05-31");


function updateLoveCounter(){

    const now = new Date();

    const difference = now - startDate;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    const counter = document.getElementById("love-counter");


    if(counter){

        counter.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

    }

}


setInterval(updateLoveCounter,1000);

updateLoveCounter();




// Random Love Messages

const loveMessages = [

    "You make ordinary moments feel special ❤️",

    "Thank you for being one of my happiest memories 💜",

    "Every picture tells a story with you 📸",

    "I hope this little website reminds you how special you are ✨",

    "Some memories are worth keeping forever ❤️"

];


const messageButton = document.getElementById("message-btn");


if(messageButton){


    messageButton.addEventListener("click",()=>{


        const random =
        loveMessages[
            Math.floor(Math.random()*loveMessages.length)
        ];


        const display =
        document.getElementById("random-message");


        if(display){

            display.innerHTML = random;

        }


    });


}




// Automatic Memory Slideshow

let currentSlide = 0;


const slides =
document.querySelectorAll(".slide");


function showSlide(index){


    slides.forEach(slide=>{

        slide.style.display="none";

    });


    if(slides[index]){

        slides[index].style.display="block";

    }


}



function nextSlide(){


    if(slides.length === 0) return;


    currentSlide++;


    if(currentSlide >= slides.length){

        currentSlide = 0;

    }


    showSlide(currentSlide);


}



function previousSlide(){


    if(slides.length === 0) return;


    currentSlide--;


    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }


    showSlide(currentSlide);


}



showSlide(currentSlide);




// Slideshow Buttons

const nextButton =
document.getElementById("next-btn");


const previousButton =
document.getElementById("previous-btn");



if(nextButton){

    nextButton.addEventListener(
        "click",
        nextSlide
    );

}


if(previousButton){

    previousButton.addEventListener(
        "click",
        previousSlide
    );

}




// Auto Change Slides Every 5 Seconds

if(slides.length > 0){

    setInterval(nextSlide,5000);

}




// Reveal Animation When Scrolling

const revealElements =
document.querySelectorAll(".reveal");


function revealOnScroll(){


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().


// ===============================
// PART 6 - FINAL EFFECTS & POLISH
// ===============================


// PASSWORD SCREEN EFFECT

const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("enter-btn");
const passwordScreen = document.getElementById("password-screen");
const mainContent = document.getElementById("main-content");


// Change this password
const correctPassword = "bella";


if(passwordButton && passwordInput){


    passwordButton.addEventListener("click",()=>{


        if(passwordInput.value.toLowerCase() === correctPassword){


            if(passwordScreen){

                passwordScreen.style.opacity="0";


                setTimeout(()=>{

                    passwordScreen.style.display="none";

                },1000);

            }


            if(mainContent){

                mainContent.style.display="block";

                setTimeout(()=>{

                    mainContent.classList.add("show");

                },100);

            }


            startConfetti();


        }

        else{


            passwordInput.value="";

            passwordInput.placeholder=
            "Wrong password 💔";


            passwordInput.classList.add("shake");


            setTimeout(()=>{

                passwordInput.classList.remove("shake");

            },500);


        }


    });


}




// ENTER KEY PASSWORD LOGIN

if(passwordInput){


    passwordInput.addEventListener("keypress",(e)=>{


        if(e.key==="Enter" && passwordButton){

            passwordButton.click();

        }


    });


}




// CONFETTI EFFECT

function startConfetti(){


    for(let i=0;i<80;i++){


        let confetti =
        document.createElement("div");


        confetti.className="confetti";


        confetti.innerHTML =
        ["❤️","💜","✨","⭐"][Math.floor(Math.random()*4)];


        confetti.style.left =
        Math.random()*100+"vw";


        confetti.style.animationDuration =
        (Math.random()*3+2)+"s";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },5000);


    }


}




// SECRET BUTTON

const secretButton =
document.getElementById("secret-btn");


if(secretButton){


    secretButton.addEventListener("click",()=>{


        const secret =
        document.getElementById("secret-message");


        if(secret){


            secret.innerHTML =
            "💜 You found the secret message. This little world was made with love and memories ❤️";


            secret.classList.add("show");


        }


    });


}




// IMAGE DOUBLE TAP EFFECT FOR MOBILE

document.querySelectorAll("img").forEach(image=>{


    let lastTap = 0;


    image.addEventListener("touchend",()=>{


        let currentTime =
        new Date().getTime();


        let tapLength =
        currentTime-lastTap;


        if(tapLength < 500){


            image.classList.toggle("zoom");


        }


        lastTap=currentTime;


    });


});




// BUTTON CLICK ANIMATION

document.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener("click",()=>{


        button.classList.add("clicked");


        setTimeout(()=>{

            button.classList.remove("clicked");

        },300);


    });


});




// BACK TO TOP BUTTON

const topButton =
document.getElementById("top-btn");


if(topButton){


    topButton.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}




// WEBSITE READY MESSAGE

window.addEventListener("load",()=>{


    console.log(
    "💜 Our Little World is completely loaded 💜"
    );


});
            
