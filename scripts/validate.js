
 let enableValidation = {
    formSelector: 'popup__form',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible',
    errorText: '.popup__input-error-text',
    errorTextActive: 'popup__input-error-text_active',
    popupInputError: 'popup__input_error',
    popupInputContainer: '.popup__input-container'
  }; 

  console.log(enableValidation.inactiveButtonClass)
  console.log(enableValidation.errorText)

const showInputError = (input, btn) => {
    const inputContainer = input.closest(enableValidation.popupInputContainer);
    const inputTextEror = inputContainer.querySelector(enableValidation.errorText);
    input.classList.add(enableValidation.popupInputError);
    inputTextEror.classList.add(enableValidation.errorTextActive);
    inputTextEror.textContent = input.validationMessage;
  };
  
  const hideInputError = (input) => {
    const inputContainer = input.closest(enableValidation.popupInputContainer);
    const inputTextEror = inputContainer.querySelector(enableValidation.errorText);
    input.classList.remove(enableValidation.popupInputError);
    inputTextEror.classList.remove(enableValidation.errorTextActive);
    inputTextEror.textContent = '';
  };
  
  function formValid(inputA, inputb, btn) {
    if (inputA.validity.valid !== true || inputb.validity.valid !== true) {
      btn.setAttribute("disabled", "");
      btn.classList.add(enableValidation.inactiveButtonClass)
    } else {
      btn.removeAttribute("disabled", "");
      btn.classList.remove(enableValidation.inactiveButtonClass)
    }
  };

inputName.oninput = function() {
    if (!inputName.validity.valid) {
      showInputError(inputName, popupProfileSaveBtn);
    } else {
      hideInputError(inputName, popupProfileSaveBtn);
    }
    formValid(inputName, inputAbout, popupProfileSaveBtn);
  };
  
  inputAbout.oninput = function() {
    if (!inputAbout.validity.valid) {
      showInputError(inputAbout, popupProfileSaveBtn);
    } else {
      hideInputError(inputAbout, popupProfileSaveBtn);
    }
    formValid(inputName, inputAbout, popupProfileSaveBtn);
  };
  
  inputCardsName.oninput = function() {
    if (!inputCardsName.validity.valid) {
      showInputError(inputCardsName, popupCardsSaveBtn);
    } else {
      hideInputError(inputCardsName, popupCardsSaveBtn);
    }
    formValid(inputCardsName, inputCardsLink, popupCardsSaveBtn);
  };
  
   
  inputCardsLink.oninput = function() {
    if (!inputCardsLink.validity.valid) {
      showInputError(inputCardsLink, popupCardsSaveBtn);
    } else {
      hideInputError(inputCardsLink, popupCardsSaveBtn);
    } 
    formValid(inputCardsName, inputCardsLink, popupCardsSaveBtn);
  };
  