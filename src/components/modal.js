import {addCard, createCard} from "./card";

const profileBlock = document.querySelector('.popup-profile');
export const profileForm = profileBlock.querySelector('.popup__form');
const popupProfileUsername = profileForm.querySelector('.popup__input-username');
const popupProfileJob = profileForm.querySelector('.popup__input-job');

const element = document.querySelector('.popup-new-card');
export const newCardForm = element.querySelector('.popup__form');
const nameNewCard = newCardForm.querySelector('.popup__input-name');
const linkNewCard = newCardForm.querySelector('.popup__input-link');

const popupImage = document.querySelector('.popup-image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__image-caption');

const profileInfo = document.querySelector('.profile > .profile__info');
const profileCaption = profileInfo.querySelector('.profile__caption');
const profileTitle = profileCaption.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__job');
export const profileEditBtn = profileCaption.querySelector('.profile__edit-button');

export const popups = document.querySelectorAll('.popup');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');

export const handleNewCardButtonClick = () => openPopup(element);

export const handlePopupNewCardFormSubmit = (evt) => {
  evt.preventDefault();
  addCard(createCard(nameNewCard.value, linkNewCard.value));
  closePopup(element);
  resetForm(newCardForm);
};

export const handlePopupProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = popupProfileUsername.value;
  profileJob.textContent = popupProfileJob.value;
  closePopup(profileBlock);
};

export const handleProfileEditBtnClick = () => {
  popupProfileUsername.value = profileTitle.textContent;
  popupProfileJob.value = profileJob.textContent;
  openPopup(profileBlock);
};

export const handleEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
};

export const handlePopupClose = (evt) => {
  const popup = evt.currentTarget.classList.contains("popup") ? evt.target : evt.target.closest('.popup');
  if (popup) closePopup(popup);
};


export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKeyPress);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKeyPress);
}

export function initImagePopup(name, link) {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupImage);
}

function resetForm(form) {
  form.reset();
}
