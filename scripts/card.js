import { onClickOpenAndClosePopupImage } from './index.js';
import { popupElemenImg } from './index.js';
import { popupTitleImg } from './index.js';

export class Card {
    constructor(cardsLink, cardsName, templateSelector) {
      this._templateSelector = templateSelector;
      this._name = cardsName;
      this._link = cardsLink;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
        
      return cardElement;
    }
  
    _setEventListeners() {
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.element__image');
      this._btnLike = this._element.querySelector('.element__like');
      this._deleteIcon = this._element.querySelector('.element__delete-icon');
      this._imgContainer = this._image.closest('.element');
      this._title = this._imgContainer.querySelector('.element__title');
      this._btnLike.onclick = () => {
        this._btnLike.classList.toggle('element__like_active');
      };
  
      this._deleteIcon.onclick = () => {
        this._deleteIcon.closest('.element').remove();
      };
  
      this._image.onclick = () => {
        popupElemenImg.src= this._image.src;
        popupTitleImg.textContent = this._title.textContent;
        popupElemenImg.alt= this._title.textContent;
        onClickOpenAndClosePopupImage();
      };
    };
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._image = this._element.querySelector('.element__image');
      this._title = this._element.querySelector('.element__title');
  
      this._title.textContent = this._name;
      this._image.src = this._link;
      this._image.alt = this._name;
      return this._element;
    };
  };
