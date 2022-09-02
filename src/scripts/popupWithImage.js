
import { Popup } from './popup.js';

export class PopupWithImage extends Popup {
        constructor(popupSelector){
        super(popupSelector)
        this.image = document.querySelector('.popup-image__img');
        this.title = document.querySelector('.popup-image__title');
        }

        open(title, img) {
            this.image.src = img;
            this.image.alt = title;
            this.title.textContent = title;
            super.open()
            }

    }

