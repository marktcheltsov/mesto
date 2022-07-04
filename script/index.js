const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

let profileEditButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');

function onClickProfile() {
    popup.classList.toggle('popup__opened');
    let name = profileName.textContent;
    document.getElementById('input__name').value = name;

    let about = profileAbout.textContent;
    document.getElementById('input__about').value = about;
}

function formSubmitHandler() {
    nameNew = document.getElementById('input__name').value;
    document.querySelector('.profile__name').textContent = nameNew;
    aboutNew = document.getElementById('input__about').value;
    document.querySelector('.profile__about').textContent = aboutNew;
}

formElement.addEventListener('submit', formSubmitHandler); 

profileEditButton.addEventListener('click', onClickProfile);

popupCloseButton.addEventListener('click', onClickProfile);




   






