var currentSlide = 0;
var playing = true;
var slideInterval = setInterval(nextSlide, 5000);

function startSlideshow(int delay){
	playing = true;
	showSlide();
	slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideshow(){
	playing = false;
	clearInterval(slideInterval);
}

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("SlideImage");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

