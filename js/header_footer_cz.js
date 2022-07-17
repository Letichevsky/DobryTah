AOS.init({
    // Global settings:
    disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of data-aos as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
    // Settings that can be overridden on per-element basis, by data-aos-* attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

const logo = document.querySelector(".logo")
const footer_logo = document.getElementById("logo_footer")
const header = document.querySelector(".header_box")

const burger = document.querySelector(".burger_body")
const burger_sec = document.querySelector(".burger_menu_section")
const burger_menu = document.querySelector(".burger_menu_body")
const closed_section = document.querySelector(".closed_section")
const bm_button = document.querySelector(".bm_button_box")

const line1 = document.querySelector(".burger_line1")
const line2 = document.querySelector(".burger_line2")
const line3 = document.querySelector(".burger_line3")

const icon_instagram = document.getElementById("f_social_icon_instagram")



// functions
function header_fixed() {
    if(scrollY > 49) {
        header.classList.add("scroll")
        logo.classList.add("scroll")

    } else {
        header.classList.remove("scroll")
        logo.classList.remove("scroll")
    }
}

function openBurger() {
    burger_sec.classList.toggle("open")
    burger_menu.classList.toggle("open")
    bm_button.classList.toggle("open")
    line1.classList.toggle("open")
    line2.classList.toggle("open")
    line3.classList.toggle("open")
}

function closedBurger() {
    burger_sec.classList.remove("open")
    burger_menu.classList.remove("open")
    bm_button.classList.remove("open")
    line1.classList.remove("open")
    line2.classList.remove("open")
    line3.classList.remove("open")
}





// Action



logo.addEventListener('mouseover', e => logo.src = "../img/logo_hover.svg");
logo.addEventListener('mouseout', e => logo.src = "../img/logo.svg");

footer_logo.addEventListener('mouseover', e => footer_logo.src = "../img/logo_hover.svg");
footer_logo.addEventListener('mouseout', e => footer_logo.src = "../img/logo.svg");



document.addEventListener('scroll', () => {
    header_fixed()
})

burger.onclick = () => {
    openBurger()
}

closed_section.onclick = () => {
    closedBurger()
}

logo.onclick = () => {
    location.href = "../index.html"
}
footer_logo.onclick = () => {
    location.href = "../index.html"
}

icon_instagram.onclick = () => {
    window.open("https://www.instagram.com/dobrytah");
}