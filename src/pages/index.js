import './index.css';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/Validate.js';

import { Section } from '../components/Section.js';

import { Api } from '../components/Api.js';

import { UserInfo } from '../components/UserInfo.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { Popup } from '../components/Popup.js';

const profileName = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');

const popupAvatarImg = document.querySelector('.profile__image');

const popupUserInfo = new UserInfo(profileName, profileAbout);

let userData = {
};

  const setings = {
    address: 'https://nomoreparties.co/v1/cohort-50',
    owner: 'me',
    token: '045f163c-447c-47f7-ad86-3f0afd434fd4'
  }

export const inputName = document.querySelector('.popup__input_type_name');
 
export const inputAbout = document.querySelector('.popup__input_type_about');
 
export const inputCardsName = document.getElementById('popup-cards__input_type_name');
 
export const inputCardsLink = document.getElementById('popup-cards__input_type_link');

export const escCode = 'Escape';

const profileOverplay = document.querySelector('.profile__change-image');

const popupAvatarCloseBtn = document.querySelector('.popup-avatar__close-button');

const popupAvatarSaveBtn = document.querySelector('.pupup-avatar__save-button');

const profileEditButton = document.querySelector('.profile__edit-button');
 
const popupProfile = document.querySelector('.popup-profile');

const popupProfileSelector = '.popup-profile';

const popupCardSelector = '.popup-cards';

const popupImageSelector = '.popup-image';

const popupAvatarSelector = '.popup-avatar';
 
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

const popupAvatarForm = document.querySelector('.popup__avatar-form');

const popupCardButtonText = 'Создать';

const popupSaveButtonText = 'Сохранить';

const popupCardSaveBtn = document.querySelector('.popup-cards__save-button');

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

const popupProfileSaveBtn = document.querySelector('.popup-profile__save-button');

const formProfileCheckValid = new FormValidator(enableValidation, popupProfileForm);

const formCardCheckValid = new FormValidator(enableValidation, popupCardForm);

export const popupImg = new PopupWithImage(popupImageSelector);

const popupRemoveSelector = document.querySelector('.pupup-remove')

const popupRemoveBtn = document.querySelector('.pupup-remove__save-button');

const popupRemove = new Popup('.pupup-remove')

const popupCrd = new PopupWithForm(popupCardSelector, (data)=> {
  const dataName = data.name;
  const dataLink = data.link;
  data.removeBtn = popupRemoveBtn;
  data.removePopup = popupRemoveSelector;
  data.id = 'd6cf05dde131a35a4a4474af';
  const newCard = creatCard(data, (dataName, dataLink)=> {
      popupImg.open(dataName, dataLink)
    }, '.template', (data)=> {
      NewApi.deleteLike(data)
    }, (data)=> {
      NewApi.addLike(data)
    },  (data)=> {
      NewApi.removeCard(data)
    });
  cardsContainer.prepend(newCard);
  formCardCheckValid.cleanForm();
  formCardCheckValid.setOffSubmitButton();  
  renderLoading(true, popupCardSaveBtn, popupCardButtonText)
  NewApi.pushCard(dataName, dataLink).finally(() => {
    renderLoading(false, popupCardSaveBtn, popupSaveButtonText)
  })
  popupCrd.close();
});

const popupAvatar = new PopupWithForm(popupAvatarSelector, (data)=> {
  const dataLink = data.link;
  popupAvatarImg.src = dataLink;
  renderLoading(true, popupAvatarSaveBtn, popupSaveButtonText)
  NewApi.pushNewAvatar(dataLink, renderLoading(true, popupAvatarSaveBtn, popupSaveButtonText))
  popupAvatar.close();
});

const popupPrf = new PopupWithForm(popupProfileSelector, (data)=> {
  const dataName = data.name;
  const dataAbout = data.about;
  popupUserInfo.setUserInfo(dataName, dataAbout);
  renderLoading(true, popupProfileSaveBtn, popupSaveButtonText);
  NewApi.pushNewUserInfo(dataName, dataAbout, renderLoading(true, popupProfileSaveBtn, popupSaveButtonText))
  popupPrf.close();
});

const initialCard = [];

function renderLoading(isLoading, btn, text) {
  if (isLoading) {
    btn.textContent = 'Сохранение...';
  } else {
    btn.textContent = text;
  }
}

function creatCard(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard) {
  const card = new Card(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard);
  const cardGenerate = card.generateCard();
  return cardGenerate;
}

const NewApi = new Api(setings);
NewApi.getUserInfoFromServer().then((res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
})).then((res => {
  popupUserInfo.setUserInfo(res.name, res.about);
  popupAvatarImg.src = res.avatar;
})).catch((err) => {
  console.log(err);
});

NewApi.getCard().then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}).then((result) => {
  result.forEach((item) => {
    initialCard.push({
      name: item.name,
      link: item.link,
      id: item.owner._id,
      likes: item.likes.length + 1,
      cardId: item._id,
      removeBtn : popupRemoveBtn,
      removePopup : popupRemoveSelector
    });
});
  for (let i = 0; i < initialCard.length; i++) {
    const dataName = initialCard[i].name;
    const dataLink = initialCard[i].link;
    const defoldcard = creatCard(initialCard[i], (dataName, dataLink) => {
      popupImg.open(dataName, dataLink);
    }, '.template', (data)=> {
      NewApi.deleteLike(data)
    }, (data)=> {
      NewApi.addLike(data)
    },  (data)=> {
      NewApi.removeCard(data)
    });
    cardsContainer.prepend(defoldcard);
  }
  }).catch((err) => {
    console.log(err);
  });

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

popupAvatarCloseBtn.onclick = () => {
  popupAvatar.close();
}

popupAvatarSaveBtn.onclick = () => {

  popupAvatar.close();
}

profileOverplay.onclick = () => {
  popupAvatar.open();
}

popupRemove.setEventListeners();
formProfileCheckValid.setValidation();
formCardCheckValid.setValidation();

popupImg.setEventListeners();
popupCrd.setEventListeners();
popupPrf.setEventListeners();
popupAvatar.setEventListeners();
