// JavaScript - JS1 - CA - Contact.js

const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkForm);

function checkForm(event) {
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const firstNameMsg = document.querySelector("#firstNameError");
    const lastNameMsg = document.querySelector("#lastNameError");
    const emailMsg = document.querySelector("#emailError");
    const emailFormatMsg = document.querySelector("#invalidEmailError");
    const messageFormatMsg = document.querySelector("#messageError");

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailFormat = email.value;
    const messageFormat = message.value;

    event.preventDefault();
    console.log("The form has been successfully submitted");

    if (checkInput(firstNameValue) === true) {
        firstNameMsg.style.display = "none";
    } else {
        firstNameMsg.style.display = "block";
    }

    if (checkInput(lastNameValue) === true) {
        lastNameMsg.style.display = "none";
    } else {
        lastNameMsg.style.display = "block";
    }

    if (checkInput(emailFormat) === true) {
        emailMsg.style.display = "none";
    if (emailValidation(emailFormat) === true) {
        emailFormatMsg.style.display = "none";
    } else {
        emailFormatMsg.style.display = "block";
    } 
    } else {
      emailMsg.style.display = "block";
      emailFormatMsg.style.display = "none";
    }

    if (checkInputMsg(messageFormat) === true) {
        messageFormatMsg.style.display = "none";
    } else {
        messageFormatMsg.style.display = "block";
    }
}

function checkInput(input) {
    const trimmedInput = input.trim();
  
    if (trimmedInput.length > 0) {
      return true;
    } else {
      return false;
    }
}

function checkInputMsg(input) {
    const trimmedInput = input.trim();

    if (trimmedInput.length < 10) {
        return false;
    } else {
        return true;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}