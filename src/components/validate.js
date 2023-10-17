function enableSubmit(button) {
  button.disabled = false;
}

function disableSubmit(button) {
  button.disabled = true;
}

//функция показывает ошибку в поле ввода
function showError(inputField, errorMessage, errorInputClass, errorSpanClass) {
  inputField.classList.add(errorInputClass);
  const spanId = "error-" + inputField.id;
  const errorElement = document.getElementById(spanId);
  errorElement.classList.add(errorSpanClass);
  errorElement.textContent = errorMessage;
}

//функция прячет ошибку в поле ввода
function hideError(inputField, errorInputClass, errorSpanClass) {
  inputField.classList.remove(errorInputClass);

  const spanId = "error-" + inputField.id;
  const errorElement = document.getElementById(spanId);
  errorElement.classList.remove(errorSpanClass);
  errorElement.textContent = "";
}

//функция валидации формы
function validateForm(inputField, settings) {
  if (inputField.validity.valid) {
    hideError(inputField, settings.inputErrorClass, settings.errorClass);
  } else {
    showError(
      inputField,
      inputField.validationMessage,
      settings.inputErrorClass,
      settings.errorClass
    );
  }
}

function checkForm(form, button) {
  if (form.checkValidity()) {
    enableSubmit(button);
  } else {
    disableSubmit(button);
  }
}

export function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach((form) => {
    const submitButton = form.querySelector(settings.submitButtonSelector);
    const inputFields = form.querySelectorAll(settings.inputSelector);
    checkForm(form, submitButton);
    inputFields.forEach((item) => {
      item.addEventListener("input", () => {
        checkForm(form, submitButton);
        validateForm(item, settings);
      });
    });
  });
}
