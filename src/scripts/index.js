import '../pages/index.css';

import { Card } from './card.js';

import { Valid } from './validate.js';

import { Section } from './section.js';

import { UserInfo } from './userInfo.js';

import { enableValidation } from './validate.js';

import { PopupWithImage } from './popupWithImage.js';

import { PopupWithForm } from './popupWithForm.js';

const profileName = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');
 
export const inputName = document.querySelector('.popup__input_type_name');
 
export const inputAbout = document.querySelector('.popup__input_type_about');
 
export const inputCardsName = document.getElementById('popup-cards__input_type_name');
 
export const inputCardsLink = document.getElementById('popup-cards__input_type_link');

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

const formProfileCheckValid = new Valid(enableValidation, popupProfileForm);

const formCardCheckValid = new Valid(enableValidation, popupCardForm);

const popupuserinfo = new UserInfo(profileName, profileAbout);

export const popupImg = new PopupWithImage(popupImage);

const popupCrd = new PopupWithForm(popupCard, (evt)=> {
  evt.preventDefault();
  const data = {
  name: inputCardsName.value,
  link: inputCardsLink.value
}

const NewCard = new Card(data, (inputCardsNameValue, inputCardsLinkValue)=> {
  const imagePopup = new PopupWithImage(popupImage);
  imagePopup.open(inputCardsNameValue, inputCardsLinkValue)
  }, '.template')
  const cardGenerate = NewCard.generateCard();
  cardsContainer.prepend(cardGenerate );
  formCardCheckValid.cleanForm()
  formCardCheckValid.buttonSetOff();  
  popupCrd.close()
});
  
const popupPrf = new PopupWithForm(popupProfile, (evt)=> {
  const popupuserinfo = new UserInfo(profileName, profileAbout);
  evt.preventDefault();
  popupuserinfo.setUserInfo(inputName, inputAbout)
  popupPrf.close()
});
 
const makeTable = new Section (initialCards, (initialCards)=> {
  const Defoldcard = new Card(initialCards, (name, link)=> {
  const imagePopup = new PopupWithImage(popupImage);
  imagePopup.open(name, link)
  }, '.template')
  const cardGenerate = Defoldcard.generateCard();
  cardsContainer.prepend(cardGenerate)
}, cardsContainer)

makeTable.renderItems();

popupuserinfo.getUserInfo()
popupuserinfo.setUserInfo(inputName, inputAbout)

popupImgCloseBtn.onclick = () => {
  popupImg.close()
}

cardEditButton.onclick = () => {
  popupCrd.open()
}

cardCloseButton.onclick = () => {
  popupCrd.close()
}

popupProfileCloseButton.onclick = () => {
  popupPrf.close()
}

profileEditButton.onclick = () => {
  popupPrf.open()
  inputName.value = popupuserinfo.getUserInfo().name;
  inputAbout.value = popupuserinfo.getUserInfo().about;
}

popupImg.setEventListeners()
popupCrd.setEventListeners()
popupPrf.setEventListeners()

formProfileCheckValid.validation();
formCardCheckValid.validation();