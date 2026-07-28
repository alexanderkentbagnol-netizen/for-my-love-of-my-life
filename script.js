// ===============================
// PART 1 - PASSWORD & OPENING
// ===============================


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
