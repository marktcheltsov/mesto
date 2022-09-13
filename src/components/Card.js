export class Card {
    constructor(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard) {
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
      this._id = data.id;
      this.cardId = data.cardId;
      this.likes = data.likes;
      this._handleOpenImage = handleOpenImage;
      this.removeBtn = data.removeBtn;
      this.removePopup = data.removePopup;
      this.handleRemoveLike = handleRemoveLike;
      this.handleAddLike = handleAddLike;
      this.handleRemoveCard = handleRemoveCard;
    }
    
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
      return cardElement;
    }

    addlike() {
      this.likeCounter.textContent = this.likes + 1
      this._btnLike.classList.add('element__like_active');
    }

    removeLike() {
      this.likeCounter.textContent = this.likes
      this._btnLike.classList.remove('element__like_active');
    }

    removeCardOnButtonClick() {
        this._buttonDeleteElement.closest('.element').remove();
    };
  
    _setEventListeners() {
      this._element = this._getTemplate();
      this.likeCounter = this._element.querySelector('.element__like-counter');
      this.likeCounter.textContent = (this.likes);
      this._image = this._element.querySelector('.element__image');
      this._btnLike = this._element.querySelector('.element__like');
      this._buttonDeleteElement = this._element.querySelector('.element__delete-icon');
      this._title = this._element.querySelector('.element__title');
      this.removeCardOnButtonClick();
      if (this._id !== 'd6cf05dde131a35a4a4474af') {
        this._buttonDeleteElement.remove();
      }
      this._btnLike.onclick = () => {
        if (this._btnLike.classList.contains('element__like_active')) {
          this.handleRemoveLike(this.cardId);
          if (this.likes == 0) {
            this.likeCounter.textContent = 0
            this.removeLike();
          } else {
            this.removeLike();
          }
        } else {
          this.handleAddLike(this.cardId);
          this.addlike();
        }
      };

      this._buttonDeleteElement.onclick = () => {
        this.removePopup.classList.add('popup_opened')
        this.removeBtn.onclick = () => {
          this.removeCardOnButtonClick();
          this.removePopup.classList.remove('popup_opened')
          this.handleRemoveCard(this.cardId)
        }
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
