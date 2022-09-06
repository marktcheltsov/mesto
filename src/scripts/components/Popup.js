import { escCode } from '../pages/index.js';

export class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
        this.popup = document.querySelector(this.popupSelector)
    };

    handleEscClose(evt) {
        if (evt.key == escCode) {
            this.openedPopup = document.querySelector('.popup_opened')
            this.openedPopup.classList.remove('popup_opened');
        };
    };

    open( ) {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this.handleEscClose);
    };

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this.handleEscClose);
    };

    setEventListeners() {
        this.popup.onclick = (event) => {
        if (event.target == this.popup && this.popup.classList.contains('popup_opened')) {
            this.close();  
            };
        };
    };
};