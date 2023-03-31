const toggle = document.querySelector("#check");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
    if (toggle.checked) {
        body.classList.toggle("body-light");
    } else {
        body.classList.toggle("body-light");
    }
})