const alertElement = document.querySelectorAll(".alert-style");
const closingBtn = document.querySelectorAll(".close-button");
const arrayLength = alertElement.length;

for (let i = 0; i < arrayLength; i++) {
    closingBtn[i].addEventListener("click", function () {
        alertElement[i].classList.remove("show");
    });
}


