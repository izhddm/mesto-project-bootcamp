import {addCard, createCard} from "./card";

const profilePopup = document.querySelector('.popup-profile');
const newCardPopup = document.querySelector('.popup-new-card');

const profileForm = document.forms['edit-profile'];
const newCardForm = document.forms['edit-card'];

const imagePopup = document.querySelector('.popup-image');
const pictureImageFile = imagePopup.querySelector('.popup__image');
const captionImagePopup = imagePopup.querySelector('.popup__image-caption');

const profileSection = document.querySelector('.profile');
const profileInfo = profileSection.querySelector('.profile__info');
const profileCaption = profileInfo.querySelector('.profile__caption');
const profileTitle = profileCaption.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditBtn = profileCaption.querySelector('.profile__edit-button');

const popups = document.querySelectorAll('.popup');

const handleNewCardButtonClick = () => openPopup(newCardPopup);

const handlePopupNewCardFormSubmit = (evt) => {
  evt.preventDefault();
  addCard(createCard(newCardForm.place.value, newCardForm.url.value));
  closePopup(newCardPopup);
  resetForm(newCardForm);
};

const handlePopupProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = profileForm.username.value;
  profileJob.textContent = profileForm.job.value;
  closePopup(profilePopup);
};

const handleProfileEditBtnClick = () => {
  profileForm.username.value = profileTitle.textContent;
  profileForm.job.value = profileJob.textContent;
  openPopup(profilePopup);
};

const handleEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
};

const handleClosePopup = (popup, evt) => {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
    closePopup(popup);
  }
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKeyPress);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKeyPress);
}

function initImagePopup(name, link) {
  pictureImageFile.src = link;
  pictureImageFile.alt = name;
  captionImagePopup.textContent = name;
  openPopup(imagePopup);
}

function resetForm(form) {
  form.reset();
}

export {
  profileForm,
  newCardForm,
  profileEditBtn,
  popups,
  handleNewCardButtonClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handleProfileEditBtnClick,
  handleEscKeyPress,
  handleClosePopup,
  openPopup,
  initImagePopup
}

