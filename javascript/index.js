//aos initalization
AOS.init();
//typing text animation
const typing = new Typed(".text", {
    strings: ["", "Youtuber", "Freelancer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 500,
    loop: true,

});


//if page get refresh scroll will be 0
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// page has to paly for 3 second even if website get loades
window.addEventListener("load", () => {
    const loader = document.querySelector("#preLoader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 3000);

})