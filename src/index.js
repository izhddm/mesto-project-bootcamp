import './pages/index.css';

import {createCard, newCardBtn} from "./components/card";
import {
  profileForm, newCardForm,
  handleNewCardButtonClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handleProfileEditBtnClick,
  profileAvatarForm, handlePopupProfileAvatarFormSubmit, handleProfileAvatarEditBtnClick,
} from "./components/modal";
import {enableValidation} from "./components/validate";
import {validationSettings} from "./components/data";
import {getCards, getMyInfo} from "./components/api";
import {
  addCardToContainer,
  profileAvatarBtn,
  profileEditBtn,
  setCurrentUserId,
  updateProfileAvatar,
  updateProfileInfo
} from "./components/utils";


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

