import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleForm) {
        super(popupSelector)
        this.handleForm = handleForm
        this.form = this.popup.querySelector('.popup__form');
        this.inputList = Array.from(this.form.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this.data = {}
        this.inputList.forEach((element) => {
            const keyWord = element.name;
            const elementValue = element.value
            this.data[keyWord] = elementValue;
          });
        return this.data;
    }

    setEventListeners() {
            super.setEventListeners()
            this.form.addEventListener('submit', (evt) => {
                evt.preventDefault()
                this._getInputValues()
                this.handleForm(this._getInputValues())
                this.close()
            })
    }      
}
