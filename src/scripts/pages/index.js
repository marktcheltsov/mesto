import '../../pages/index.css';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/Validate.js';

import { Section } from '../components/Section.js';

import { UserInfo } from '../components/UserInfo.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

const profileName = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');
 
export const inputName = document.querySelector('.popup__input_type_name');
 
export const inputAbout = document.querySelector('.popup__input_type_about');
 
export const inputCardsName = document.getElementById('popup-cards__input_type_name');
 
export const inputCardsLink = document.getElementById('popup-cards__input_type_link');

export const escCode = 'Escape';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
 
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
 
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
 
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
 
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },

  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
 
];

const profileEditButton = document.querySelector('.profile__edit-button');
 
const popupProfile = document.querySelector('.popup-profile');

const popupProfileSelector = '.popup-profile';

const popupCardSelector = '.popup-cards';

const popupImageSelector = '.popup-image';
 
const popupProfileCloseButton = document.querySelector('.popup-profile__close-button');
 
const popupCard = document.querySelector('.popup-cards');
 
const cardEditButton = document.querySelector('.profile__card-button');
 
const cardCloseButton = document.querySelector('.popup-cards__close-button');

export const popupImage = document.querySelector('.popup-image');
 
export const popupElemenImg = document.querySelector('.popup-image__img');
 
export const popupTitleImg = document.querySelector('.popup-image__title');
 
const cardsContainer = document.querySelector('.elements');
 
const popupImgCloseBtn = document.querySelector('.popup-image__close-button');

const popupProfileForm = document.querySelector('.popup__profile-form');

const popupCardForm = document.querySelector('.popup__card-form');

const enableValidation = { 
  formSelector: 'popup__form',
  popupInput: '.popup__input',
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__input_error', 
  errorClass: 'popup__error_visible', 
  errorText: '.popup__input-error-text', 
  errorTextActive: 'popup__input-error-text_active', 
  popupInputError: 'popup__input_error', 
  popupInputContainer: '.popup__input-container', 
  popupSaveButton: '.popup__save-button', 
  popupContainer: '.popup__container' 
};

const formProfileCheckValid = new FormValidator(enableValidation, popupProfileForm);

const formCardCheckValid = new FormValidator(enableValidation, popupCardForm);

const popupUserInfo = new UserInfo(profileName, profileAbout);

export const popupImg = new PopupWithImage(popupImageSelector);

formProfileCheckValid.setValidation();

formCardCheckValid.setValidation();

const popupCrd = new PopupWithForm(popupCardSelector, (data)=> {
  const dataName = data.name;
  const dataLink = data.link;

  const newCard = creatCard(data, (dataName, dataLink)=> {
      popupImg.open(dataName, dataLink)
    }, '.template')
  const cardGenerate = newCard.generateCard();
  makeTable.addItem(cardGenerate);
  formCardCheckValid.cleanForm();
  formCardCheckValid.setOffSubmitButton();  
  popupCrd.close();
});
  
const popupPrf = new PopupWithForm(popupProfileSelector, (data)=> {
  const dataName = data.name;
  const dataAbout = data.about;
  popupUserInfo.setUserInfo(dataName, dataAbout);
  popupPrf.close();
});

function creatCard(data, handleOpenImage, templateSelector) {
  const card = new Card(data, handleOpenImage, templateSelector);
  return card;
}
 
const makeTable = new Section (initialCards, (initialCards)=> {
  const defoldcard = creatCard(initialCards, (name, link)=> {
    popupImg.open(name, link);
  }, '.template');
  const cardGenerate = defoldcard.generateCard();
  makeTable.addItem(cardGenerate);
}, cardsContainer);

makeTable.renderItems();

popupUserInfo.getUserInfo();
popupUserInfo.setUserInfo(inputName, inputAbout);

popupImgCloseBtn.onclick = () => {
  popupImg.close();
}

cardEditButton.onclick = () => {
  popupCrd.open();
  formCardCheckValid.cleanForm();
  formCardCheckValid.setOffSubmitButton(); 
}

cardCloseButton.onclick = () => {
  popupCrd.close();
}

popupProfileCloseButton.onclick = () => {
  popupPrf.close();
}

profileEditButton.onclick = () => {
  popupPrf.open();
  inputName.value = popupUserInfo.getUserInfo().name;
  inputAbout.value = popupUserInfo.getUserInfo().about;
}

popupImg.setEventListeners();
popupCrd.setEventListeners();
popupPrf.setEventListeners();
