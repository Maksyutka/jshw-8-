const modalWindow = document.querySelector(".modal");
const modalBtn = document.querySelector(".btn-primary");
const closeBtn = document.querySelector(".btn1");
const saveBtn = document.querySelector(".btn2");
const timesBtn = document.querySelector(".close");

function opening() {
    modalWindow.classList.add("modal-display");
}

modalBtn.addEventListener("click", opening);

function closing() {
    modalWindow.classList.remove("modal-display");
}

closeBtn.addEventListener("click", closing);
saveBtn.addEventListener("click", closing);
timesBtn.addEventListener("click", closing);



