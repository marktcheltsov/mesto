import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
        constructor(popupSelector) {
                super(popupSelector)
                this.image = this.popup.querySelector('.popup-image__img');
                this.title = this.popup.querySelector('.popup-image__title');
        }

        open(name, link) {
            this.image.src = link;
            this.image.alt = name;
            this.title.textContent = name;
            super.open();
        }
}

