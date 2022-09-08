export class Card {
    constructor(data, handleOpenImage, templateSelector) {
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
      this._handleOpenImage = handleOpenImage;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
      return cardElement;
    }

    _toggleLike() {
        this._btnLike.classList.toggle('element__like_active');
    };

    _removeCardOnButtonClick() {
        this._buttonDeleteElement.closest('.element').remove();
    };
  
    _setEventListeners() {
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.element__image');
      this._btnLike = this._element.querySelector('.element__like');
      this._buttonDeleteElement = this._element.querySelector('.element__delete-icon');
      this._title = this._element.querySelector('.element__title');
      this._removeCardOnButtonClick();

      this._btnLike.onclick = () => {
        this._toggleLike();
      };

      this._buttonDeleteElement.onclick = () => {
        this._removeCardOnButtonClick();
      };

      this._image.onclick = () => {
          this._handleOpenImage(this._name, this._link);
        };
      };
      

  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._title.textContent = this._name;
      this._image.src = this._link;
      this._image.alt = this._name;
      return this._element;
    };
  };
