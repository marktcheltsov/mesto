import { escCode } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
        this.popup = document.querySelector(this.popupSelector)
        this.btnClose = this.popup.querySelector('.popup__close-button')
    };

    _handleEscClose = (evt) => {
        if (evt.key == escCode) {
            this.close(); 
        };
    }

    open( ) {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    close() {
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners() {
        this.btnClose.onclick = () => {
            this.close();
        }
        this.popup.onclick = (event) => {
        if (event.target == this.popup && this.popup.classList.contains('popup_opened')) {
            this.close();  
            };
        };
    };
};