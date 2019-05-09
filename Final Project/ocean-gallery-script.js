let slideIndex = 0;
let slidePaused = false;
showSlides();

function showSlides() {
    if(slidePaused == false) {
        let i;
        let slides = document.getElementsByClassName("slides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";   
        setTimeout(showSlides, 4000); 
    }
  
}

document.body.addEventListener("keydown", (e) => {
    pauseSlideShow();
   
});


function pauseSlideShow(){
    if(event.keyCode == 80 && slidePaused == false) {
        document.getElementById("pause").style.display = "block";
        document.getElementById("pause").classList.toggle("pauseMenu");
        slidePaused = true;
        console.log("Pausing SlideShow");
    }
    else if(event.keyCode == 80 && slidePaused == true) {
        document.getElementById("pause").style.display = "none";
        document.getElementById("pause").classList.toggle("pauseMenu");
        slidePaused = false;
        console.log("Resuming SlideShow");
        showSlides();
    }
    
}