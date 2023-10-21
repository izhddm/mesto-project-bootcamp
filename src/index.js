import './pages/index.css';

import {addCardToContainer, createCard, newCardBtn} from "./components/card";
import {
  profileForm, popups, newCardForm,
  handleNewCardButtonClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handleProfileEditBtnClick,
  handleClosePopup,
} from "./components/modal";
import {enableValidation} from "./components/validate";
import {initialCards, validationSettings} from "./components/data";
import {getCards, getMyInfo} from "./components/api";
import {
  profileAvatar,
  profileEditBtn,
  profileJob,
  profileTitle,
  setCurrentUserId
} from "./components/utils";

popups.forEach((popup) => {
  popup.addEventListener('mousedown', handleClosePopup.bind(null, popup))
})

newCardBtn.addEventListener('click', handleNewCardButtonClick);
profileEditBtn.addEventListener('click', handleProfileEditBtnClick);

profileForm.addEventListener('submit', handlePopupProfileFormSubmit);
newCardForm.addEventListener('submit', handlePopupNewCardFormSubmit);

// Получим информацию о пользователе и карточки
Promise.all([getMyInfo(), getCards()])
  .then(([myInfo, cards]) => {
      // Информация о пользователе
      profileAvatar.src = myInfo.avatar;
      profileTitle.textContent = myInfo.name;
      profileJob.textContent = myInfo.about;
      setCurrentUserId(myInfo._id);

      // Карточки
      cards.reverse().forEach((card) => {
        addCardToContainer(createCard(card));
      })
    }
  ).catch(error => {
  console.error(error);
})

// initializeCards(); // Инициализация дефолтных карточек

enableValidation(validationSettings);

