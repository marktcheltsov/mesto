
let profileEditButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');




function onClickProfile() {
    popup.classList.toggle('popup__opened');
}

profileEditButton.addEventListener('click', onClickProfile);

btnProfileOFF.addEventListener('click', onClickProfile);



const profileName = document.querySelector('.profile__name');

const profileAbout = document.querySelector('.profile__about');



function formSubmitHandler() {
     name = document.querySelector('#input__name').value;

    document.querySelector('.profile__name').innerHTML = name;

    about = document.querySelector('#input__about').value;
    document.querySelector('.profile__about').innerHTML = about;

}

btnSave.addEventListener('click', btnSaveOnClick);

   






