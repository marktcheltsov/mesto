const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');



let profileEditButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');


function PopupOnClickOpen() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        inputName.value = profileName.textContent;
        inputAbout.value = profileAbout.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 

profileEditButton.addEventListener('click', PopupOnClickOpen);

popupCloseButton.addEventListener('click', PopupOnClickOpen);




   






