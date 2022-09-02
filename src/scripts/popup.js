
    const escCode = 'Escape';

   export class Popup {
        constructor(popupSelector) {
            this.popupSelector = popupSelector
        }

        handleEscClose(evt) {
            if (evt.key == escCode) {
                this.openedPopup = document.querySelector('.popup_opened')
                this.openedPopup.classList.remove('popup_opened');
              }
        }
        open( ) {
            this.popupSelector.classList.add('popup_opened');
            document.addEventListener('keydown', this.handleEscClose);
        }

        close() {
            this.popupSelector.classList.remove('popup_opened');
            document.removeEventListener('keydown', this.handleEscClose);
        }
        setEventListeners() {
            this.popupSelector.onclick = (event) => {
                if (event.target == this.popupSelector && this.popupSelector.classList.contains('popup_opened')) {
                    this.close();  
                };
              };
        }
    }