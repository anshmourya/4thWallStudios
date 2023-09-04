//aos initalization
AOS.init();
//typing text animation
// const typing = new Typed(".text", {
//     strings: ["", "Creators", "Freelancer", "Artisans", "Maestros"],
//     typeSpeed: 100,
//     backSpeed: 40,
//     backDelay: 500,
//     loop: true,

// });


//handling nav active animations
const links = document.querySelectorAll('.nav-link');

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        });
    });
}

// page has to paly for 3 second even if website get loads
window.addEventListener("load", () => {
    const loader = document.querySelector("#preLoader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
})

//handeling video paly back speed;
document.querySelector('video').playbackRate = 0.7;

const nav = document.querySelector("nav");
const scrollTop = document.getElementById("scrollToTop");
const logo = document.querySelector(".logo");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 900) {
        logo.style.visibility = "visible";
        logo.style.animation = "transform .7s linear";
        nav.classList.add("fixed-nav");
        scrollTop.style.visibility = "visible";
    } else {
        nav.classList.remove("fixed-nav");
        logo.style.visibility = "hidden";
        scrollTop.style.visibility = "hidden";
        logo.style.animation = null;
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

function scrollToElement(id) {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//handel active nav on scroll
const navLink = document.querySelectorAll(".nav-list ul li");
const sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLink.forEach(navItem => {
                navItem.classList.remove("active");
            });
            document.querySelector("#" + "nav-" + id).classList.add("active");
        }
    })
}
