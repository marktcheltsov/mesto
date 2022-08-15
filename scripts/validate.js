import { inputName } from './index.js';
import { inputAbout } from './index.js';
import { inputCardsName } from './index.js';
import { inputCardsLink } from './index.js';

let enableValidation = { 
  formSelector: 'popup__form', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__input_error', 
  errorClass: 'popup__error_visible', 
  errorText: '.popup__input-error-text', 
  errorTextActive: 'popup__input-error-text_active', 
  popupInputError: 'popup__input_error', 
  popupInputContainer: '.popup__input-container', 
  popupSaveButton: '.popup__save-button', 
  popupContainer: '.popup__container' 
};

class valid { 
constructor(data, inputA, inputB) { 
  this._data = data; 
  this._inputA = inputA; 
  this._inputB = inputB;
  this._popupContainer = inputA.closest(this._data.popupContainer);
  this._btn = this._popupContainer.querySelector(this._data.popupSaveButton);
} 

_showInputError(input) { 
  this._inputContainer = input.closest(this._data.popupInputContainer); 
  this._inputTextEror = this._inputContainer.querySelector(this._data.errorText); 
  input.classList.add(this._data.popupInputError); 
  this._inputTextEror.classList.add(this._data.errorTextActive); 
  this._inputTextEror.textContent = input.validationMessage;
  this._btn.setAttribute("disabled", ""); 
  this._btn.classList.add(this._data.inactiveButtonClass);
}; 

_hideInputError(input) { 
  this._inputContainer = input.closest(this._data.popupInputContainer); 
  this._inputTextEror = this._inputContainer.querySelector(this._data.errorText); 
  input.classList.remove(this._data.popupInputError); 
  this._inputTextEror.classList.remove(this._data.errorTextActive); 
  this._inputTextEror.textContent = ''; 
}; 

_formValid() { 
  if ((this._inputA.validity.valid !== true || this._inputB.validity.valid !== true) || (this._inputA.value == null || this._inputB.value == null)) { 
    this._btn.setAttribute("disabled", ""); 
    this._btn.classList.add(this._data.inactiveButtonClass);
  } else { 
    this._btn.classList.remove(this._data.inactiveButtonClass); 
    this._btn.removeAttribute("disabled", ""); 
  } 
} 

_setEventListeners() { 
  this._inputB.oninput = () => { 
    if (!this._inputB.validity.valid) { 
      this._showInputError(this._inputB); 
    } else { 
      this._hideInputError(this._inputB); 
    } 
    this._formValid(); 
  } 
  this._inputA.oninput = () => { 
    if (!this._inputA.validity.valid) { 
      this._showInputError(this._inputA); 
      this._formValid();
    } else { 
      this._hideInputError(this._inputA);
      this._formValid();
    } 
    this._formValid(); 
  } 
} 
enableValidation() { 
  this._setEventListeners(); 
} 
} 

const formCardCheckValid = new valid(enableValidation, inputName, inputAbout); 
formCardCheckValid.enableValidation();

const formProfileCheckValid = new valid(enableValidation, inputCardsName, inputCardsLink); 
formProfileCheckValid.enableValidation();
  