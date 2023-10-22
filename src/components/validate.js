// Управляем доступностью кнопки
function enableSubmit(button) {
  button.disabled = false;
}

function disableSubmit(button) {
  button.disabled = true;
}

function showError(inputField, errorMessage, errorInputClass, errorSpanClass) {
  inputField.classList.add(errorInputClass);
  const spanId = "error-" + inputField.name;
  const errorElement = document.getElementById(spanId);
  errorElement.classList.add(errorSpanClass);
  errorElement.textContent = errorMessage;
}

//Отображаем ошибку
function hideError(inputField, errorInputClass, errorSpanClass) {
  inputField.classList.remove(errorInputClass);

  const spanId = "error-" + inputField.name;
  const errorElement = document.getElementById(spanId);
  errorElement.classList.remove(errorSpanClass);
  errorElement.textContent = "";
}

//Валидируем форму
function validateForm(inputField, settings) {
  inputField.validity.valid
    ? hideError(inputField, settings.inputErrorClass, settings.errorClass)
    : showError(inputField, inputField.validationMessage, settings.inputErrorClass, settings.errorClass);
}

function checkForm(form, button) {
  form.checkValidity() ? enableSubmit(button) : disableSubmit(button);
}

export function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);

  forms.forEach(form => {
    const {submitButtonSelector, inputSelector} = settings;
    const submitButton = form.querySelector(submitButtonSelector);
    const inputFields = form.querySelectorAll(inputSelector);

    const handleInput = item => {
      checkForm(form, submitButton);
      validateForm(item, settings);
    };

    inputFields.forEach(item => {
      item.addEventListener("input", () => handleInput(item));
    });

    checkForm(form, submitButton);

    // Отключим кнопку сохранить
    form.addEventListener('reset', () => {
      disableSubmit(submitButton);
    })
  });
}

export {enableSubmit, disableSubmit}

