import './pages/index.css';

import {createCard, newCardBtn} from "./components/card";
import {profileAvatarPopup, closePopup, openPopup, profilePopup, newCardPopup,} from "./components/modal";
import {disableSubmit, enableSubmit, enableValidation} from "./components/validate";
import {validationSettings} from "./components/data";
import {addCard, getCards, getMyInfo, setMyAvatar, setMyInfo} from "./components/api";
import {
  addCardToContainer,
  profileAvatarBtn, profileEditBtn, profileJob, profileTitle,
  setCurrentUserId,
  updateProfileAvatar,
  updateProfileInfo
} from "./components/utils";

// Формы с модальных окон
const profileForm = document.forms['edit-profile'];
const profileAvatarForm = document.forms['edit-avatar'];
const newCardForm = document.forms['edit-card'];

const handleProfileEditBtnClick = () => {
  profileForm.username.value = profileTitle.textContent;
  profileForm.job.value = profileJob.textContent;
  openPopup(profilePopup);
};

const handleProfileAvatarEditBtnClick = () => {
  profileAvatarForm.reset();
  openPopup(profileAvatarPopup);
};

const handlePopupNewCardFormSubmit = (evt) => {
  evt.preventDefault();

  newCardForm.submit.textContent = 'Сохранение...';
  disableSubmit(newCardForm.submit);

  addCard(newCardForm.place.value, newCardForm.url.value)
    .then((card) => {
      addCardToContainer(createCard(card));
      closePopup(newCardPopup);
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
      closePopup(profilePopup);
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
      closePopup(profileAvatarPopup);
    })
    .catch((error) => console.error(error))
    .finally(() => {
      profileAvatarForm.submit.textContent = 'Сохранить';
      enableSubmit(profileAvatarForm.submit);
    });
}

const handleNewCardButtonClick = () => openPopup(newCardPopup);


newCardBtn.addEventListener('click', handleNewCardButtonClick);
profileEditBtn.addEventListener('click', handleProfileEditBtnClick);
profileAvatarBtn.addEventListener('click', handleProfileAvatarEditBtnClick)

profileForm.addEventListener('submit', handlePopupProfileFormSubmit);
profileAvatarForm.addEventListener('submit', handlePopupProfileAvatarFormSubmit)
newCardForm.addEventListener('submit', handlePopupNewCardFormSubmit);

// Получим информацию о пользователе и карточки
Promise.all([getMyInfo(), getCards()])
  .then(([myInfo, cards]) => {
      setCurrentUserId(myInfo._id);

      // Информация о пользователе
      updateProfileAvatar(myInfo);
      updateProfileInfo(myInfo);

      // Карточки
      cards.reverse().forEach((card) => {
        addCardToContainer(createCard(card));
      })
    }
  ).catch(error => {
  console.error(error);
})

enableValidation(validationSettings);

