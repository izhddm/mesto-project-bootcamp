import './pages/index.css';

import {initializeCards, newCardBtn} from "./components/card";
import {
  profileForm,
  profileEditBtn,
  popups,
  newCardForm,
  handleNewCardButtonClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handleProfileEditBtnClick,
  handleClosePopup,
} from "./components/modal";
import {enableValidation} from "./components/validate";
import {validationSettings} from "./components/data";


popups.forEach((popup) => {
  popup.addEventListener('mousedown', handleClosePopup.bind(null, popup))
})

newCardBtn.addEventListener('click', handleNewCardButtonClick);
profileEditBtn.addEventListener('click', handleProfileEditBtnClick);

profileForm.addEventListener('submit', handlePopupProfileFormSubmit);
newCardForm.addEventListener('submit', handlePopupNewCardFormSubmit);


initializeCards(); // Инициализация дефолтных карточек

enableValidation(validationSettings);

