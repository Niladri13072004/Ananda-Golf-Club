gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -40%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: true
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: true
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#page-4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page-4",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
})
var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    blur.style.left = (e.x - 250) + "px";
    blur.style.top = (e.y - 250) + "px";
})

var h4 = document.querySelectorAll("#nav h4");
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 1.3;
        cursor.classList.add("cursor-card-hover");
    });
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1;
        cursor.classList.remove("cursor-card-hover");
    });
});

// Card tilt effect
var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-card-hover");
    });

    card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = ((y - centerY) / centerY) * -15;
        var rotateY = ((x - centerX) / centerX) * 15;
        card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-card-hover");
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
})

var elem = document.querySelectorAll(".elem");
elem.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-card-hover");
    });
    elem.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-card-hover");
    });
});

var arrow = document.querySelector("#arrow");
if (arrow) {
    arrow.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-card-hover");
    });
    arrow.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-card-hover");
    });
}

var hoverElems = document.querySelectorAll("#f1 img, .social-icons i, #f2 h3, #f3 h3, #f4 h4 span, #coffee-shop-btn, .nav-btn");
hoverElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-card-hover");
    });
    elem.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-card-hover");
    });
});

// ===== FOOD & DRINK SLIDESHOW =====
var foodSlides = document.querySelectorAll(".food-slide");
var foodDots = document.querySelectorAll(".food-dot");
var currentSlide = 0;

function showSlide(index) {
    foodSlides.forEach(function (slide) {
        slide.classList.remove("active");
    });
    foodDots.forEach(function (dot) {
        dot.classList.remove("active");
    });
    currentSlide = index;
    foodSlides[currentSlide].classList.add("active");
    foodDots[currentSlide].classList.add("active");
}

function nextSlide() {
    var next = (currentSlide + 1) % foodSlides.length;
    showSlide(next);
}

// Auto-cycle every 3 seconds
var slideInterval = setInterval(nextSlide, 3000);

// Click on dots to jump to a slide
foodDots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        clearInterval(slideInterval);
        showSlide(parseInt(dot.getAttribute("data-index")));
        slideInterval = setInterval(nextSlide, 3000);
    });
});

// ===== COMMENT CAROUSEL =====
var comments = document.querySelectorAll(".comment");
var currentComment = 0;
comments[0].classList.add("active");

function nextComment() {
    var current = comments[currentComment];
    current.classList.add("slide-out");
    current.classList.remove("active");

    currentComment = (currentComment + 1) % comments.length;

    setTimeout(function () {
        current.classList.remove("slide-out");
        comments[currentComment].classList.add("active");
    }, 800);
}

setInterval(nextComment, 5000);