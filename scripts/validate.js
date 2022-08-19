
export const enableValidation = { 
  formSelector: 'popup__form',
  popupInput: '.popup__input',
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

export class Valid { 
constructor(data, form) { 
  this._data = data;
  this._form = form
  this.formList = Array.from(this._form.querySelectorAll(data.popupInput));
  this._btn = this._form.querySelector(this._data.popupSaveButton);
  this._inputTextEror = this._form.querySelector(this._data.errorText);
} 
  _showInputError(input) { 
    this._inputContainer = input.closest(this._data.popupInputContainer); 
    this._inputTextEror = this._inputContainer.querySelector(this._data.errorText); 
    input.classList.add(this._data.popupInputError); 
    this._inputTextEror.classList.add(this._data.errorTextActive); 
    this._inputTextEror.textContent = input.validationMessage;
  }; 

  _hideInputError(input) { 
    this._inputContainer = input.closest(this._data.popupInputContainer); 
    this._inputTextEror = this._inputContainer.querySelector(this._data.errorText); 
    input.classList.remove(this._data.popupInputError); 
    this._inputTextEror.classList.remove(this._data.errorTextActive); 
    this._inputTextEror.textContent = '';
  }

  buttonSetOn() {
    this._btn.removeAttribute('disabled');
    this._btn.classList.remove(this._data.inactiveButtonClass);
  }

  buttonSetOff() {
    this._btn.setAttribute("disabled", ""); 
    this._btn.classList.add(this._data.inactiveButtonClass);
  }

  formValid() {
    const isValid = this._form.checkValidity();
    if (isValid) {
    this.buttonSetOn();
  } else {
    this.buttonSetOff();
  }
  }

  _setEventListeners() {
    this.formList.forEach((element) =>{
      element.oninput = () => { 
      if (!element.validity.valid) { 
        this._showInputError(element); 
      } else { 
        this._hideInputError(element);
      }
      this.formValid();
    }
});
}

  cleanForm() {
    this.formList.forEach((element) => { 
      element.classList.remove(this._data.popupInputError);
      this._inputContainer = element.closest(this._data.popupInputContainer);
      this._inputTextErors = this._inputContainer.querySelector(this._data.errorText)
      this._inputTextErors.textContent = '';
      this._btn.removeAttribute('disabled');
      this._btn.classList.remove(this._data.inactiveButtonClass);
    });
  }

  validation() {
    this._setEventListeners();
  }
}





