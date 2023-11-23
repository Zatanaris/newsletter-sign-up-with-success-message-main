const RegisterContent = document.querySelector(".container-form");
const SussesContaint = document.querySelector(".sucess-content");
const form = document.querySelector(".form");
const Input = document.querySelector("#Email");
const error = document.querySelector(".error");
const Button = document.querySelector(".btn");
const emailUser = document.querySelector("#user");
const ResetBtn = document.querySelector("#back");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let InputValue = Input.value;

    if (InputValue === "") {
        Input.classList.add("error");
        error.classList.remove("hide");
    } else {
        RegisterContent.classList.toggle("hide");
        SussesContaint.classList.toggle("hide");
        emailUser.innerHTML = InputValue;
        error.classList.add("hide");
        Input.classList.remove("error");
    }
});

ResetBtn.addEventListener("click", () => {
    RegisterContent.classList.toggle("hide");
    SussesContaint.classList.toggle("hide");
    Input.value = "";
});
