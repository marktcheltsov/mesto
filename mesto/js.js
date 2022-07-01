
//like//



let btnLike = document.querySelectorAll('.element__like');


btnLike.forEach(btn => {
    function onClickLike() {
        btn.classList.toggle('element__like_active');
    }
    btn.addEventListener('click', onClickLike);
});




//like//

//profileON-OFF//

let btnProfileON = document.querySelector('#button__profile');

let popup = document.querySelector('.popup');

let btnProfileOFF = document.querySelector('.popup__close-button');



function onClickProfile() {
    popup.classList.toggle('popup__opened');
}

btnProfileON.addEventListener('click', onClickProfile);

btnProfileOFF.addEventListener('click', onClickProfile);

//profileON-OFF//

//profileSave//

let name = 'Жак-Ив Кусто';

let about = 'Исследователь океана';

document.querySelector('.profile__name').innerHTML = name;

document.querySelector('.profile__about').innerHTML = about;


let btnSave = document.querySelector('.popup__save-button');

function btnSaveOnClick() {
     name = document.querySelector('#input__name').value;
    document.querySelector('.profile__name').innerHTML = name;

    about = document.querySelector('#input__about').value;
    document.querySelector('.profile__about').innerHTML = about;

}

btnSave.addEventListener('click', btnSaveOnClick);

//profileSave//
   






