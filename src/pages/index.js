import './index.css';

import { Card } from '../components/Card.js';

import { FormValidator } from '../components/FormValidator.js';

import { Section } from '../components/Section.js';

import { Api } from '../components/Api.js';

import { UserInfo } from '../components/UserInfo.js';

import { PopupWithImage } from '../components/PopupWithImage.js';

import { PopupWithForm } from '../components/PopupWithForm.js';

import { renderLoading } from '../utils/utils.js';

import { PopupRemove } from '../components/PopupRemove.js';

import { inputName, inputAbout } from '../utils/constants.js'

const popupImage = document.querySelector('.popup-image');

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

const profileOverplay = document.querySelector('.profile__change-image');

const popupAvatarCloseBtn = document.querySelector('.popup-avatar__close-button');

const popupAvatarSaveBtn = document.querySelector('.popup-avatar__save-button');

const profileEditButton = document.querySelector('.profile__edit-button');
 
const popupProfile = document.querySelector('.popup-profile');

const popupProfileSelector = '.popup-profile';

const popupRemoveSelector = '.pupup-remove';

const popupCardSelector = '.popup-cards';

const popupImageSelector = '.popup-image';

const popupAvatarSelector = '.popup-avatar';
 
const popupProfileCloseButton = document.querySelector('.popup-profile__close-button');
 
const popupCard = document.querySelector('.popup-cards');
 
const cardEditButton = document.querySelector('.profile__card-button');
 
const cardCloseButton = document.querySelector('.popup-cards__close-button');
 
const cardsContainer = document.querySelector('.elements');
 
const popupImgCloseBtn = document.querySelector('.popup-image__close-button');

const popupProfileForm = document.querySelector('.popup__profile-form');

const popupCardForm = document.querySelector('.popup__card-form');

const popupAvatarForm = document.querySelector('.popup-avatar__form');

const popupCardButtonText = 'Создать';

const popupSaveButtonText = 'Сохранить';

const popupCardSaveBtn = document.querySelector('.popup-cards__save-button');

let myId = '';

let cardsList = null;

const initialCard = [];

const validationConfig = { 
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

const formProfileCheckValid = new FormValidator(validationConfig, popupProfileForm);

const formCardCheckValid = new FormValidator(validationConfig, popupCardForm);

const formAvatarCheackValid = new FormValidator(validationConfig, popupAvatarForm);

const popupRemoveBtn = document.querySelector('.pupup-remove__save-button');

const popupImg = new PopupWithImage(popupImageSelector);

const api = new Api(setings);

const popupAddCard = new PopupWithForm(popupCardSelector, (data)=> {
  const dataName = data.name;
  const dataLink = data.link;
  data.ownerId = myId;
  data.likes = []
  data.owner =  {
    _id : myId
  }
  const newCard = createCard(data, (dataName, dataLink)=> {
      popupImg.open(dataName, dataLink)
    }, '.template', (data)=> {
      api.deleteLike(data).catch((err) => {
        console.log(err);
      });
    }, (data)=> {
      api.addLike(data).catch((err) => {
        console.log(err);
      });
    },  (data)=> {
      api.removeCard(data).catch((err) => {
        console.log(err);
      });
    });
  cardsList.addItem(newCard, true)
  formCardCheckValid.setOffSubmitButton();  
  renderLoading(true, popupCardSaveBtn, popupCardButtonText)
  api.pushCard(dataName, dataLink).catch((err) => {
    console.log(err);
  }).finally(() => {
    popupAddCard.close()
    renderLoading(false, popupCardSaveBtn, popupSaveButtonText)
  })
});

const popupAvatar = new PopupWithForm(popupAvatarSelector, (data)=> {
  const dataLink = data.link;
  popupAvatarImg.src = dataLink;
  renderLoading(true, popupAvatarSaveBtn, popupSaveButtonText)
  api.pushNewAvatar(dataLink).catch((err) => {
    console.log(err);
  }).finally(() => {
    popupAvatar.close();
    renderLoading(false, popupAvatarSaveBtn, popupSaveButtonText)
    formAvatarCheackValid.setOffSubmitButton();
  })
});

const popupEditProfile = new PopupWithForm(popupProfileSelector, (data)=> {
  const dataName = data.name;
  const dataAbout = data.about;
  popupUserInfo.setUserInfo(dataName, dataAbout);
  renderLoading(true, popupProfileSaveBtn, popupSaveButtonText)
  api.pushNewUserInfo(dataName, dataAbout).finally(() => {
    renderLoading(false, popupProfileSaveBtn, popupSaveButtonText);
    popupEditProfile.close()
  })
});

const popupRemove = new PopupRemove(popupRemoveSelector)

function createCard(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard) {
  const card = new Card(data, handleOpenImage, templateSelector, handleRemoveLike, handleAddLike, handleRemoveCard, ()=> {
    popupRemove.open()
    popupRemove.submitRemoveCard(() => {
      popupRemove.close()
      card.removeCardOnButtonClick()
    })
  })
  const cardGenerate = card.generateCard();
  return cardGenerate;
}


api.getAllNeededDataForCards().then((result) => {
  const [ userData, initialCards] = result;
  myId = userData._id;
  popupUserInfo.setUserInfo(userData.name, userData.about);
  popupAvatarImg.src = userData.avatar;

  cardsList = new Section (initialCards, (initialCards)=> {
  initialCards.likesLenght = initialCards.likes.lenght;
  initialCards.ownerId = userData._id;
  const defoldcard = createCard(initialCards, (name, link)=> {
    popupImg.open(name, link);
  }, '.template', (data)=> {
    api.deleteLike(data).catch((err) => {
      console.log(err);
    });
  }, (data)=> {
    api.addLike(data).catch((err) => {
      console.log(err);
    });
  },  (data)=> {
    api.removeCard(data).catch((err) => {
      console.log(err);
    });
  }, userData);
  cardsList.addItem(defoldcard, false)
}, cardsContainer)
cardsList.renderItems()
}).catch((err) => {
    console.log(err);
  });



cardEditButton.onclick = () => {
  popupAddCard.open();
  formCardCheckValid.setOffSubmitButton(); 
}

profileEditButton.onclick = () => {
  popupEditProfile.open();
  inputName.value = popupUserInfo.getUserInfo().name;
  inputAbout.value = popupUserInfo.getUserInfo().about;
}

profileOverplay.onclick = () => {
  popupAvatar.open();
}

popupRemove.setEventListeners();
formProfileCheckValid.setValidation();
formCardCheckValid.setValidation();
formAvatarCheackValid.setValidation();


popupImg.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupAvatar.setEventListeners();

/*const defoldcard = createCard(initialCard, (name, link)=> {
  popupImg.open(name, link);
}, '.template', (data)=> {
  api.deleteLike(data)
}, (data)=> {
  api.addLike(data)
},  (data)=> {
  api.removeCard(data)
});


  initialCards.forEach((item) => {
    initialCard.push({
      ownerId: ownerId,
      name: item.name,
      link: item.link,
      id: item.owner._id,
      likes: item.likes.length + 1,
      cardId: item._id,
      removeBtn : popupRemoveBtn,
      removePopup : popupRemoveSelector
    });
    
});*/