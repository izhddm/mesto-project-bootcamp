const imageModal = document.querySelector('.popup-image');
const pictureImageModal = imageModal.querySelector('.popup__image');
const captionImageModal = imageModal.querySelector('.popup__image-caption');

const popups = document.querySelectorAll('.popup');

const handleEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');

    closePopup(openedPopup);
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

function handleInitImagePopup(name, link) {
  pictureImageModal.src = link;
  pictureImageModal.alt = name;
  captionImageModal.textContent = name;
  openPopup(imageModal);
}

// Событие закрытия по клику на оверлей или крестик для всех попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', handleClosePopup.bind(null, popup))
})

export {
  openPopup,
  closePopup,
  handleInitImagePopup
}

