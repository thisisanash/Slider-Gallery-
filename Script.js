let node = document.querySelector(".frame");

let prevBtn = node.querySelector("#previous");
let nextBtn = node.querySelector("#next");

nextBtn.addEventListener("click", function () {
    let current = node.querySelector(".slide.current");
    let previous = node.querySelector(".slide.previous");
    let next = node.querySelector(".slide.next");

    previous.classList.remove("previous");
    previous.classList.add("current");

    current.classList.remove("current");
    current.classList.add("next");

    next.classList.remove("next");
    next.classList.add("previous");
});

prevBtn.addEventListener("click", function () {
    let current = node.querySelector(".slide.current");
    let previous = node.querySelector(".slide.previous");
    let next = node.querySelector(".slide.next");

    next.classList.remove("next");
    next.classList.add("current");

    current.classList.remove("current");
    current.classList.add("previous");

    previous.classList.remove("previous");
    previous.classList.add("next");
});