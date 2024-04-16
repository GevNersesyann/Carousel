let dots = document.getElementsByClassName("dots-item"),
  dotsArea = document.getElementById("dots-block"),
  slides = document.getElementsByClassName("slides-item"),
  prevBtn = document.getElementById("left-button"),
  nextBtn = document.getElementById("right-button"),
  playBtn = document.getElementById("play-button"),
  stopBtn = document.getElementById("stop-button"),
  slideIndex = 1,
  slideInterval;

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

prevBtn.onclick = function () {
  plusSlide(-1);
};

nextBtn.onclick = function () {
  plusSlide(1);
};

dotsArea.onclick = function (e) {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains("dots-item") && e.target === dots[i]) {
      currentSlide(i + 1);
    }
  }
};

function playSlides() {
  slideInterval = setInterval(() => {
    plusSlide(1);
  }, 2000);
}
function stopSlides() {
  clearInterval(slideInterval);
}

playBtn.onclick = function () {
  playSlides();
};

stopBtn.onclick = function () {
  stopSlides();
};
