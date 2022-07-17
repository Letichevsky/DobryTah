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

const lernMore = document.querySelector(".s2_button")
const showMenu = document.getElementsByClassName("s3_sec_button")

const en = document.querySelector(".en")
const f_en = document.getElementById("f_en")

en.onclick = () => {
  location.href = "/html/index_en.html"
}
f_en.onclick = () => {
  location.href = "/html/index_en.html"
}

logo.onclick = () => {
  location.href = "/index.html"
}
footer_logo.onclick = () => {
  location.href = "/index.html"
}

lernMore.onclick = () => {
  location.href = "/html/contact_cz.html"
}

// showMenu[0].onclick = () => {
//   location.href = "/html/menu_cz.html"
// }

for (let i = 0; i < showMenu.length; i++) {
  showMenu[i].onclick = function(){
    location.href = "/html/menu_cz.html"
  }
}