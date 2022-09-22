import { Popup } from './Popup.js';

export class PopupRemove extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this.button = this.popup.querySelector('.popup__save-button');
    }

    submitRemoveCard(submitHandler) {
        this.button.addEventListener('click', (evt) => {
            submitHandler()
        })
    }

    setEventListeners() {
        super.setEventListeners()
}      
}



