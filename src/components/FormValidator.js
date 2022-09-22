export class FormValidator { 
  constructor(data, form) { 
    this._data = data;
    this._form = form
    this.inputList = Array.from(this._form.querySelectorAll(data.popupInput));
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

  setOnSubmitButton() {
    this._btn.removeAttribute('disabled', "");
    this._btn.classList.remove(this._data.inactiveButtonClass);
  }

  setOffSubmitButton() {
    this._btn.setAttribute("disabled", ""); 
    this._btn.classList.add(this._data.inactiveButtonClass);
  }

  cheakFormValid() {
    const isValid = this._form.checkValidity();
    if (isValid) {
      this.setOnSubmitButton();
    } else {
      this.setOffSubmitButton();
    }
  }

  _setEventListeners() {
    this.inputList.forEach((element) =>{
      element.oninput = () => { 
        if (!element.validity.valid) { 
          this._showInputError(element); 
        } else { 
          this._hideInputError(element);
        }
      this.cheakFormValid();
    }
  });
}

  cleanForm() {
    this.inputList.forEach((element) => { 
      element.value = '';
      this._hideInputError(element);
      this.setOnSubmitButton();
    });
  }

  setValidation() {
    this._setEventListeners();
  }
}





