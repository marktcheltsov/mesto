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

let profileEditButton = document.querySelector('.profile__edit-button');

let popupProfile = document.querySelector('.popup-profile');

let popupCloseButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');

let popupCard = document.querySelector('.popup-cards');

let cardEditButton = document.querySelector('.profile__card-button');

let cardCloseButton = document.querySelector('.popup-cards__close-button');

let popupCradsSaveBtn = document.querySelector('.popup-cards__save-button');

let popupImage = document.querySelector('.popup-image');

let popupElemenIMG = document.querySelector('.popup-image__img');

function PopupOnClickOpen() {
    popupProfile.classList.toggle('popup_opened');
    if (popupProfile.classList.contains('popup_opened')) {
        inputName.value = profileName.textContent;
        inputAbout.value = profileAbout.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popupProfile.classList.toggle('popup_opened');
}

function PopupCardOnClickOpen() {
    popupCard.classList.toggle('popup_opened');
}

function oldCard() {
  for (let i = 0; i < initialCards.length; i++) {
    const elements = document.querySelector('.elements');

    const textBlock = document.createElement('div');
    textBlock.className = 'element__text-block';

    const img = document.createElement('img');
    img.className = 'element__image';

    const Title = document.createElement('h2');
    Title.className = 'element__title';

    const button = document.createElement('button');
    button.className = 'element__like';


    const MainDiv = document.createElement('div');
    MainDiv.className = 'element';

    const deleteIcon = document.createElement('button');
    deleteIcon.className = 'element__delete-icon';

    img.src= initialCards[i].link;
    Title.textContent = initialCards[i].name;

    elements.prepend(MainDiv);
    MainDiv.prepend(textBlock);
    MainDiv.prepend(img);

    textBlock.prepend(button);
    textBlock.prepend(Title);

    elements.prepend(MainDiv);
    MainDiv.prepend(deleteIcon);
  };
};

oldCard();

function NewCard(evt) {
  evt.preventDefault()
  const elements = document.querySelector('.elements');

  const textBlock = document.createElement('div');
  textBlock.className = 'element__text-block';

  const img = document.createElement('img');
  img.className = 'element__image';

  const Title = document.createElement('h2');
  Title.className = 'element__title';

  const button = document.createElement('button');
  button.className = 'element__like';

  const MainDiv = document.createElement('div');
  MainDiv.className = 'element';

  const deleteIcon = document.createElement('button');
  deleteIcon.className = 'element__delete-icon';

  img.src= inputCardsLink.value;
  Title.textContent = inputCardsName.value;

  initialCards.push({name: inputCardsName.value, link: inputCardsLink.value});
  console.log(initialCards);


  elements.prepend(MainDiv);
  MainDiv.prepend(textBlock);
  MainDiv.prepend(img);
  textBlock.prepend(button);
  textBlock.prepend(Title);
  elements.prepend(MainDiv);
  MainDiv.prepend(deleteIcon);

  popupCard.classList.toggle('popup_opened');
};

function PopupImageOnClickOpen() {
  popupImage.classList.toggle('popup_opened');
}

let Images = Array.from(document.querySelectorAll('.element__image'));
let Title = document.querySelector('.popup-image__title');

Images.forEach(img => {
  function onClickImg() {
    popupImage.classList.toggle('popup_opened');
    let imgLink = img.src;
    popupElemenIMG .src= imgLink;
    for (var i = 0; i < initialCards.length; i++){
      if (initialCards[i].link == imgLink){
        imgName = initialCards[i].name;
      };
    };
    Title.textContent = imgName;
  };
  img.addEventListener('click', onClickImg);
});

const MainDiv = document.querySelector('.element');
const MainDivs = Array.from(document.querySelectorAll('.element'));

const textBlock = MainDiv.querySelector('.element__text-block');
const textBlocks = Array.from(document.querySelectorAll('.element__text-block'));

const img = MainDiv.querySelector('.element__image');
const imgs = Array.from(document.querySelectorAll('.element__image'));

const Titles = Array.from(document.querySelectorAll('.element__title'));

const deleteIcon = document.querySelector('.element__delete-icon');
const deleteIcons = Array.from(document.querySelectorAll('.element__delete-icon'));

const button = textBlock.querySelector('.element__like');
const buttons = Array.from(document.querySelectorAll('.element__like'));

  deleteIcons.forEach(gg => {
    function deleteImg() {
      i = deleteIcons.indexOf(gg);
      MainDivs[i].remove();
      };
    gg.addEventListener('click', deleteImg);
    });

let popupImgCloseBtn = document.querySelector('.popup-image__close-button');

let btnLikeAll = document.querySelectorAll('.element__like');

let btnLikeArray = Array.from(btnLikeAll);

btnLikeArray.forEach(btn => {
  function onClickLike() {
      btn.classList.toggle('element__like_active');
  }
  btn.addEventListener('click', onClickLike);
});

cardEditButton.addEventListener('click', PopupCardOnClickOpen);
cardCloseButton.addEventListener('click', PopupCardOnClickOpen);
formElement.addEventListener('submit', formSubmitHandler); 
profileEditButton.addEventListener('click', PopupOnClickOpen);
popupCloseButton.addEventListener('click', PopupOnClickOpen);
popupImgCloseBtn.addEventListener('click', PopupImageOnClickOpen);
popupCradsSaveBtn.addEventListener('click', NewCard);

