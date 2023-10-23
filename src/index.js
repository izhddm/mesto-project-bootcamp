import './pages/index.css';

import {createCard, newCardBtn} from "./components/card";
import {closePopup, openPopup} from "./components/modal";
import {disableSubmit, enableSubmit, enableValidation} from "./components/validate";
import {validationSettings} from "./components/data";
import {addCard, getCards, getMyInfo, setMyAvatar, setMyInfo} from "./components/api";
import {
  addCardToContainer,
  profileAvatarBtn, profileEditBtn, profileJob, profileTitle,
  updateProfileAvatar,
  updateProfileInfo
} from "./components/utils";

// Модальные окна
const profileModal = document.querySelector('.popup-profile');
const profileAvatarModal = document.querySelector('.popup-avatar');
const newCardModal = document.querySelector('.popup-new-card');

// Формы с модальных окон
const profileForm = document.forms['edit-profile'];
const profileAvatarForm = document.forms['edit-avatar'];
const newCardForm = document.forms['edit-card'];

const handleProfileEditBtnClick = () => {
  profileForm.username.value = profileTitle.textContent;
  profileForm.job.value = profileJob.textContent;
  openPopup(profileModal);
};

const handleProfileAvatarEditBtnClick = () => {
  profileAvatarForm.reset();
  openPopup(profileAvatarModal);
};

const handlePopupNewCardFormSubmit = (evt) => {
  evt.preventDefault();

  newCardForm.submit.textContent = 'Сохранение...';
  disableSubmit(newCardForm.submit);

  addCard(newCardForm.place.value, newCardForm.url.value)
    .then((card) => {
      addCardToContainer(createCard(card, card.owner._id));
      closePopup(newCardModal);
      newCardForm.reset();
    })
    .catch((error) => {
      enableSubmit(newCardForm.submit);
      console.error(error);
    })
    .finally(() => {
      newCardForm.submit.textContent = 'Создать';
    })
};

const handlePopupProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileForm.submit.textContent = 'Сохранить...';
  disableSubmit(profileForm.submit);

  setMyInfo(profileForm.username.value, profileForm.job.value)
    .then((myInfo) => {
      updateProfileInfo(myInfo);
      closePopup(profileModal);
    })
    .catch((error) => {
      enableSubmit(profileForm.submit);
      console.error(error);
    })
    .finally(() => {
      profileForm.submit.textContent = 'Сохранить';
    });
};

const handlePopupProfileAvatarFormSubmit = (evt) => {
  evt.preventDefault();

  profileAvatarForm.submit.textContent = 'Сохранить...';
  disableSubmit(profileAvatarForm.submit);

  setMyAvatar(profileAvatarForm.avatar.value)
    .then((myInfo) => {
      updateProfileAvatar(myInfo);
      closePopup(profileAvatarModal);
    })
    .catch((error) => console.error(error))
    .finally(() => {
      profileAvatarForm.submit.textContent = 'Сохранить';
      enableSubmit(profileAvatarForm.submit);
    });
}

const handleNewCardButtonClick = () => openPopup(newCardModal);


newCardBtn.addEventListener('click', handleNewCardButtonClick);
profileEditBtn.addEventListener('click', handleProfileEditBtnClick);
profileAvatarBtn.addEventListener('click', handleProfileAvatarEditBtnClick)

profileForm.addEventListener('submit', handlePopupProfileFormSubmit);
profileAvatarForm.addEventListener('submit', handlePopupProfileAvatarFormSubmit)
newCardForm.addEventListener('submit', handlePopupNewCardFormSubmit);

// Получим информацию о пользователе и карточки
Promise.all([getMyInfo(), getCards()])
  .then(([myInfo, cards]) => {
      // Информация о пользователе
      updateProfileAvatar(myInfo);
      updateProfileInfo(myInfo);

      // Карточки
      cards.reverse().forEach((card) => {
        addCardToContainer(createCard(card, myInfo._id));
      })
    }
  ).catch(error => {
  console.error(error);
})

enableValidation(validationSettings);

