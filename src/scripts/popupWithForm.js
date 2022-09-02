
    import { Popup } from './popup.JS';

    export class PopupWithForm extends Popup {
        constructor(popupSelector, handle) {
            super(popupSelector)
            this.handle = handle
        }
        setEventListeners() {
            this.popupSelector.onclick = (event) => {
                if (event.target == this.popupSelector && this.popupSelector.classList.contains('popup_opened')) {
                    this.close();  
                };
              };
            this.popupSelector.addEventListener('submit',  this.handle);
        }

    }