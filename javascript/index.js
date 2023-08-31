//aos initalization
AOS.init();
//typing text animation
const typing = new Typed(".text", {
    strings: ["", "Creators", "Freelancer", "Artisans", "Maestros"],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 500,
    loop: true,

});


// page has to paly for 3 second even if website get loads
window.addEventListener("load", () => {
    const loader = document.querySelector("#preLoader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000);
})

document.querySelector('video').playbackRate = 0.7;

const nav = document.querySelector("nav");
const scrollTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 800) {
        nav.classList.add("fixed-nav");
        scrollTop.style.visibility = "visible";
    } else {
        nav.classList.remove("fixed-nav");

        scrollTop.style.visibility = "hidden";
    }
});


//addeing layer of words after hovering on any team member div
const teamSlides = document.querySelectorAll(".team .swiper-slide");
teamSlides.forEach(slide => {
    const teamDetail = slide.querySelector(".team-detail");

    slide.addEventListener("mouseover", () => {
        teamDetail.style.visibility = "visible";
    });

    slide.addEventListener("mouseout", () => {
        teamDetail.style.visibility = "hidden";
    });
});


//scrool on click
window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}