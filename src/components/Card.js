export class Card {
    constructor(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard, handleOpenRemovePopup, userData) {
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
      this._data = data
      this._id = data._id;
      this._cardId = data._id;
      this._likes = data.likes;
      this._myId = data.ownerId;
      this._cardOwner = data.owner;
      this._handleOpenImage = handleOpenImage;
      this._handleRemoveLike = handleRemoveLike;
      this._handleAddLike = handleAddLike;
      this._handleRemoveCard = handleRemoveCard;
      this._handleOpenRemovePopup = handleOpenRemovePopup;
    }
    
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
      return cardElement;
    }

    isLiked() {
      this._likes.forEach(element => {
        if (element["_id"] == this._data.ownerId) {
          this.addlike()
        }
 
      });
    }

    addlike() {
      this._btnLike.classList.add('element__like_active');
    }

    removeLike() {
      this._btnLike.classList.remove('element__like_active');
    }

    removeCardOnButtonClick() {
        this._buttonDeleteElement.closest('.element').remove();
    };
  
    _setEventListeners() {
      this._element = this._getTemplate();
      this.likeCounter = this._element.querySelector('.element__like-counter');
      this.likeCounter.textContent = this._likes.length;
      console.log(this._likes.length)
      this._image = this._element.querySelector('.element__image');
      this._btnLike = this._element.querySelector('.element__like');
      this._buttonDeleteElement = this._element.querySelector('.element__delete-icon');
      this._title = this._element.querySelector('.element__title');
      this.isLiked()
      if (this._cardOwner["_id"] !== this._data.ownerId && this._cardOwner["_id"] !== undefined && this._data.ownerId !== undefined) {
        this._buttonDeleteElement.remove();
      }
      this._btnLike.onclick = () => {
        if (this._btnLike.classList.contains('element__like_active')) {
          this.removeLike();
          this._likes.length = this._likes.length - 1
          this.likeCounter.textContent = this._likes.length;;
          this._handleRemoveLike(this._cardId)
        } else {
          this.addlike();
          this._likes.length = this._likes.length + 1
          this.likeCounter.textContent = this._likes.length
          this._handleAddLike(this._cardId);
        }
      };

      this._buttonDeleteElement.onclick = () => {
        this._handleOpenRemovePopup()
        this._handleRemoveCard(this._cardId)
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
