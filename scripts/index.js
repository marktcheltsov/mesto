const profileName = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');
 
const inputName = document.querySelector('.popup__input_type_name');
 
const inputAbout = document.querySelector('.popup__input_type_about');
 
const inputCardsName = document.getElementById('popup-cards__input_type_name');
 
const inputCardsLink = document.getElementById('popup-cards__input_type_link');

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
 
const popupElemenImg = document.querySelector('.popup-image__img');
 
const popupTitleImg = document.querySelector('.popup-image__title');
 
const cardsContainer = document.querySelector('.elements');
 
const popupImgCloseBtn = document.querySelector('.popup-image__close-button');

const template = document.querySelector('#template');

const popupProfileSaveBtn = document.querySelector('.popup-profile__save-button');

const escCode = 27;



function popupOpen(popup) {
  popup.classList.toggle('popup_opened');
};
 
function onClickOpenPopupProfile() {
  popupOpen(popupProfile);
};

function onClickOpenPopupCard() {
  popupOpen(popupCard);
};
 
function onClickOpenPopupImage() {
  popupOpen(popupImage);
};
 
function onClickOpenPopup() {
  onClickOpenPopupProfile();
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
    onClickOpenPopupProfile()
};
 
function creatCard(cardsLink, cardsName) {
  const templateItems = template.content.cloneNode(true);


  const btnLike = templateItems.querySelector('.element__like');
 
  const element = templateItems.querySelector('.element');
 
  const deleteIcon = templateItems.querySelector('.element__delete-icon');
 
  const img = templateItems.querySelector('.element__image');

  const title = templateItems.querySelector('.element__title')
 
  img.onclick = function () {
    popupElemenImg.src= img.src;
    const imgContainer = img.closest('.element');
    popupTitleImg.textContent = imgContainer.querySelector('.element__title').textContent;
    popupElemenImg.alt= imgContainer.querySelector('.element__title').textContent;
    onClickOpenPopupImage();
  };

  deleteIcon.onclick = function () {
    deleteIcon.closest('.element').remove();
  };
 
  btnLike.onclick = function () {
    btnLike.classList.toggle('element__like_active');
  };

  img.src= cardsLink;
  title.textContent = cardsName;
  img.alt= cardsName;
  return templateItems;
};

function addCard(cardsLink, cardsName) {
  const card = creatCard(cardsLink, cardsName);
  cardsContainer.prepend(card);
};

 function creatDefoltCard() {
  for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].link, initialCards[i].name);
  };
};
 
creatDefoltCard();

function creatNewCard(evt) {
  evt.preventDefault();
  addCard(inputCardsLink.value, inputCardsName.value);
  onClickOpenPopupCard();
  clearInputCards();
  popupCardsSaveBtn.setAttribute("disabled", "");
  popupCardsSaveBtn.classList.add('popup__save-button_disabled');
};

popupProfile.onclick = function(event) {
  if (event.target == popupProfile && popupProfile.classList.contains('popup_opened')) {
    popupOpen(popupProfile);
  };
};

popupCard.onclick = function(event) {
  if (event.target == popupCard && popupCard.classList.contains('popup_opened')) {
    popupOpen(popupCard);
  };
};

popupImage.onclick = function(event) {
  if (event.target == popupImage && popupImage.classList.contains('popup_opened')) {
    popupOpen(popupImage);
  };
};

document.addEventListener('keydown', function (event) {
 if (event.keyCode == escCode && popupProfile.classList.contains('popup_opened')) {
    popupOpen(popupProfile);
    };
    document.removeEventListener('keydown', function (){
      if (event.keyCode == escCode && popupProfile.classList.contains('popup_opened')) {
        popupOpen(popupProfile);
        };
     })
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode == escCode && popupImage.classList.contains('popup_opened')) {
     popupOpen(popupImage);
     };
     document.removeEventListener('keydown', function (){
      if (event.keyCode == escCode && popupImage.classList.contains('popup_opened')) {
        popupOpen(popupImage);
        };
     })
 });

document.addEventListener('keydown', function (event) {
 if (event.keyCode == escCode && popupCard.classList.contains('popup_opened')) {
    popupOpen(popupCard);
    };
    document.removeEventListener('keydown', function (){
      if (event.keyCode == escCode && popupCard.classList.contains('popup_opened')) {
         popupOpen(popupCard);
         };
     })
});


cardEditButton.addEventListener('click', onClickOpenPopupCard);
cardCloseButton.addEventListener('click', onClickOpenPopupCard);
popupProfileContainer.addEventListener('submit', handleProfileFormSubmit);
profileEditButton.addEventListener('click', onClickOpenPopup);
popupProfileCloseButton.addEventListener('click', onClickOpenPopup);
popupImgCloseBtn.addEventListener('click', onClickOpenPopupImage);
popupCardsContainer.addEventListener('submit', creatNewCard);