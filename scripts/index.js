import { Card } from './card.js';
import { valid } from './validate.js';
import { enableValidation } from './validate.js';




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
 
const popupProfileContainer = document.querySelector('.popup__container');

const popupCardsContainer = document.querySelector('.popup-cards__container');
 
const popupCard = document.querySelector('.popup-cards');
 
const cardEditButton = document.querySelector('.profile__card-button');
 
const cardCloseButton = document.querySelector('.popup-cards__close-button');
 
const popupCardsSaveBtn = document.querySelector('.popup-cards__save-button');

const popupImage = document.querySelector('.popup-image');
 
export const popupElemenImg = document.querySelector('.popup-image__img');
 
export const popupTitleImg = document.querySelector('.popup-image__title');
 
const cardsContainer = document.querySelector('.elements');
 
const popupImgCloseBtn = document.querySelector('.popup-image__close-button');

const template = document.querySelector('#template');

const popupProfileSaveBtn = document.querySelector('.popup-profile__save-button');

const escCode = 'Escape';

const popupProfileForm = document.querySelector('.popup__profile-form');

const popupCardForm = document.querySelector('.popup__card-form');

const formProfileCheckValid = new valid(enableValidation, popupProfileForm);

const formCardCheckValid = new valid(enableValidation, popupCardForm);

formProfileCheckValid.Validation();

formCardCheckValid.Validation();


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc); 
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
} 

function onClickOpenAndClosePopupProfile() {
  if (popupProfile.classList.contains('popup_opened')) {
    closePopup(popupProfile);
    formProfileCheckValid.cleanForm();
  } else {
    openPopup(popupProfile);
  }
};

function onClickOpenAndClosePopupCard() {
  if (popupCard.classList.contains('popup_opened')) {
    closePopup(popupCard);
    formCardCheckValid.cleanForm();
    formCardCheckValid.buttonSetOff();
  } else {
    openPopup(popupCard);
  }
};
 
 
export function onClickOpenAndClosePopupImage() {
  if (popupImage.classList.contains('popup_opened')) {
    closePopup(popupImage);
  } else {
    openPopup(popupImage);
  }
};


function closePopupByEsc(evt) {
  if (evt.key == escCode) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    if (openedPopup == popupProfile) {
      formProfileCheckValid.cleanForm();
    } else if (openedPopup == popupCard) {
      formCardCheckValid.cleanForm();
      formCardCheckValid.buttonSetOff();
    }
  }
} 
 
function onClickOpenPopupProfileValue() {
  onClickOpenAndClosePopupProfile();
  if (popupProfile.classList.contains('popup_opened')) {
      inputName.value = profileName.textContent;
      inputAbout.value = profileAbout.textContent;
  }
};
 
function clearInputCards() {
  inputCardsLink.value = "";
  inputCardsName.value = "";
};
 
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    onClickOpenAndClosePopupProfile()
};
 
function GetCard(cardsLink, cardsName, templateSelector) {
  const card = new Card(cardsLink, cardsName, templateSelector)
  const cardGenerate = card.generateCard();
  cardsContainer.prepend(cardGenerate);
}

 function creatDefoltCard() {
  for (let i = 0; i < initialCards.length; i++) {
  GetCard(initialCards[i].link, initialCards[i].name, '.template');
  };
};
 
creatDefoltCard();

function creatNewCard(evt) {
  evt.preventDefault();
  GetCard(inputCardsLink.value, inputCardsName.value, '.template');
  onClickOpenAndClosePopupCard();
  clearInputCards();
  formCardCheckValid.buttonSetOff();
};

popupProfile.onclick = function(event) {
  if (event.target == popupProfile && popupProfile.classList.contains('popup_opened')) {
    closePopup(popupProfile)
    formProfileCheckValid.cleanForm();
  };
};

popupCard.onclick = function(event) {
  if (event.target == popupCard && popupCard.classList.contains('popup_opened')) {
    closePopup(popupCard)
    formCardCheckValid.cleanForm();
    formCardCheckValid.buttonSetOff();
  };
};

popupImage.onclick = function(event) {
  if (event.target == popupImage && popupImage.classList.contains('popup_opened')) {
    closePopup(popupImage)
  };
};


cardEditButton.addEventListener('click', onClickOpenAndClosePopupCard);
cardCloseButton.addEventListener('click', onClickOpenAndClosePopupCard);
popupProfileContainer.addEventListener('submit', handleProfileFormSubmit);
profileEditButton.addEventListener('click', onClickOpenPopupProfileValue);
popupProfileCloseButton.addEventListener('click', onClickOpenPopupProfileValue);
popupImgCloseBtn.addEventListener('click', onClickOpenAndClosePopupImage);
popupCardsContainer.addEventListener('submit', creatNewCard);




