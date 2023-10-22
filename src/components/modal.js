import {addCardToContainer, createCard} from "./card";
import {profileAvatar, profileJob, profileTitle, updateProfileAvatar, updateProfileInfo} from "./utils";
import {addCard, setMyAvatar, setMyInfo} from "./api";

const profilePopup = document.querySelector('.popup-profile');
const profileAvatarPopup = document.querySelector('.popup-avatar');
const newCardPopup = document.querySelector('.popup-new-card');

const profileForm = document.forms['edit-profile'];
const profileAvatarForm = document.forms['edit-avatar'];
const newCardForm = document.forms['edit-card'];

const imagePopup = document.querySelector('.popup-image');
const pictureImageFile = imagePopup.querySelector('.popup__image');
const captionImagePopup = imagePopup.querySelector('.popup__image-caption');


const popups = document.querySelectorAll('.popup');

const handleNewCardButtonClick = () => openPopup(newCardPopup);

const handlePopupNewCardFormSubmit = (evt) => {
  evt.preventDefault();

  addCard(newCardForm.place.value, newCardForm.url.value)
    .then((card) => {
      addCardToContainer(createCard(card));
      closePopup(newCardPopup);
      resetForm(newCardForm);
    })
    .catch((error) => console.error(error))
};

const handlePopupProfileFormSubmit = (evt) => {
  evt.preventDefault();

  setMyInfo(profileForm.username.value, profileForm.job.value)
    .then((myInfo) => {
      updateProfileInfo(myInfo);
      closePopup(profilePopup);
    })
    .catch((error) => console.error(error))
};

const handlePopupProfileAvatarFormSubmit = (evt) => {
  evt.preventDefault();

  setMyAvatar(profileAvatarForm.avatar.value)
    .then((myInfo) => {
      updateProfileAvatar(myInfo);
      closePopup(profileAvatarPopup);
    })
    .catch((error) => console.error(error));
}

const handleProfileEditBtnClick = () => {
  profileForm.username.value = profileTitle.textContent;
  profileForm.job.value = profileJob.textContent;
  openPopup(profilePopup);
};

const handleProfileAvatarEditBtnClick = () => {
  profileAvatarForm.avatar.value = profileAvatar.src;
  openPopup(profileAvatarPopup);
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
  profileAvatarPopup,
  profileAvatarForm,
  newCardForm,
  popups,
  handleNewCardButtonClick,
  handleProfileAvatarEditBtnClick,
  handlePopupNewCardFormSubmit,
  handlePopupProfileFormSubmit,
  handlePopupProfileAvatarFormSubmit,
  handleProfileEditBtnClick,
  handleEscKeyPress,
  handleClosePopup,
  openPopup,
  initImagePopup
}

