import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
        constructor(popupSelector){
                super(popupSelector)
                this.image = document.querySelector('.popup-image__img');
                this.title = document.querySelector('.popup-image__title');
        }

        open(name, link) {
            this.image.src = link;
            this.image.alt = name;
            this.title.textContent = name;
            super.open();
        }
}

