import './pages/index.css';

import {initializeCards, newCardBtn} from "./components/card";
import {
  profileForm,
  profileEditBtn,
  popups,
  popupCloseButtons,
  newCardForm,
  handleNewCardButtonClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handleProfileEditBtnClick,
  handlePopupClose, handleEscKeyPress,
} from "./components/modal";
import {enableValidation} from "./components/validate";
import {validationSettings} from "./components/data";


popups.forEach(element => element.addEventListener('mousedown', handlePopupClose))
popupCloseButtons.forEach(button => button.addEventListener('click', handlePopupClose));

document.addEventListener('keydown', handleEscKeyPress);

newCardBtn.addEventListener('click', handleNewCardButtonClick);
profileEditBtn.addEventListener('click', handleProfileEditBtnClick);

profileForm.addEventListener('submit', handlePopupProfileFormSubmit);
newCardForm.addEventListener('submit', handlePopupNewCardFormSubmit);


initializeCards(); // Инициализация дефолтных карточек

enableValidation(validationSettings);

