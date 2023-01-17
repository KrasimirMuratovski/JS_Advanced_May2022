function toggle() {

    let button = document.querySelector(".button");
    let text = document.querySelector("#extra");

    text.style.display = text.style.display === "block" ? "none" : "block";
    button.textContent = button.textContent === "More" ? "Less" : "More";
}