document.querySelector(".hamburger__button").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".hamburger__button").classList.toggle("active");
    document.querySelector(".nav__container").classList.toggle("active");


})

// document.querySelector(".arrow").addEventListener("click", (e) => {
//     e.currentTarget.classList.add("clicked")
// });