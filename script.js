// =================================
// LOVE WEBSITE JAVASCRIPT
// =================================


// ================================
// OPENING SCREEN
// ================================

function openWebsite(){

    document.getElementById("opening")
    .style.display="none";


    document.getElementById("main")
    .style.display="block";


    startTyping();

}




// ================================
// SLIDESHOW SYSTEM
// ================================


let currentSlide = 0;

let slides =
document.querySelectorAll(".slide");


let animations = [

"fade",
"zoom",
"bounce",
"left",
"right",
"rotate",
"heartPop"

];



function changeSlide(number){


slides.forEach(slide=>{

slide.classList.remove(
"active",
...animations
);

});



currentSlide = number;



if(currentSlide >= slides.length){

currentSlide=0;

}


if(currentSlide < 0){

currentSlide=slides.length-1;

}



let animation =
animations[
Math.floor(
Math.random()*animations.length
)
];



slides[currentSlide]
.classList.add(
"active",
animation
);


updateProgress();


}



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






// Start first slide

window.onload=function(){

changeSlide(0);

updateLoveTimer();

};
