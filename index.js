/* Секция Profile */
const profileBlock = document.querySelector('.profile');
const profileInfoElement = profileBlock.querySelector('.profile__info');
const profileCaptionElement = profileInfoElement.querySelector('.profile__caption');
const profileTitleElement = profileCaptionElement.querySelector('.profile__title');
const profileEditBtnElement = profileCaptionElement.querySelector('.profile__edit-button');
const profileJobElement = profileInfoElement.querySelector('.profile__job');

/* Попапы */
const popupProfile = document.querySelector('.popup-profile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileUsername = popupProfileForm.querySelector('.popup__input-username');
const popupProfileJob = popupProfileForm.querySelector('.popup__input-job');

const popupNewCard = document.querySelector('.popup-new-card');
const popupNewCardForm = popupNewCard.querySelector('.popup__form');
const nameNewCardValue = popupNewCardForm.querySelector('.popup__input-name').value;
const linkNewCardValue = popupNewCardForm.querySelector('.popup__input-link').value;

const popupImage = document.querySelector('.popup-image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__image-caption');


const popupCloseButtons = document.querySelectorAll('.popup__close-button');

/* Карточки с городами */
const cardsBlock = document.querySelector('.cards');
const cardsElement = cardsBlock.querySelector('.cards__elements');
const elementImages = cardsElement.querySelectorAll('.element__image');
const cardAddBtn = profileInfoElement.querySelector('.profile__add-button');


const cardElementTemplate = document.getElementById('cardElementTemplate').content; // Шаблон карточки

// Данные для дефолтных карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function resetForm(form) {
  form.reset();
}

/* Навесим на все кнопки закрытия popup одинаковый функционал закрытия*/
popupCloseButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    const popupParent = evt.currentTarget.closest('.popup'); // Ближайший родитель с классом .popup

    if (popupParent) closePopup(popupParent);
  })
});

/* Событие на клик кнопки редактирования информации о пользователе */
profileEditBtnElement.addEventListener('click', () => {
  // Установим значения со страницы
  popupProfileUsername.value = profileTitleElement.textContent;
  popupProfileJob.value = profileJobElement.textContent;

  openPopup(popupProfile);
});

/* Событие на клик по кнопке сохранить с формы редактирования профиля */
popupProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  profileTitleElement.textContent = popupProfileUsername.value;
  profileJobElement.textContent = popupProfileJob.value;

  closePopup(popupProfile);
});

/*
* Функционал для работы с карточками
*/

function likeHeart(heartElement) {
  heartElement.classList.toggle('heart_active');
}

function deleteCardElement(element) {
  element.remove();
}

function initImagePopup(name, link) {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageCaption.textContent = name;

  openPopup(popupImage);
}

function createCard(name, link) {
  const cardElement = cardElementTemplate.cloneNode(true);

  // Запишем нужные данные в карточку
  const img = cardElement.querySelector('.element__image');
  img.src = link;
  img.alt = name;

  // Событие на клик по картинке
  img.addEventListener('click', evt => {
    const image = evt.target;

    initImagePopup(image.alt, image.src);
  });

  cardElement.querySelector('.element__title').textContent = name;

  // Событие клика на сердце
  const heartElement = cardElement.querySelector('.heart');
  heartElement.addEventListener('click', evt => likeHeart(evt.target));

  // Событие клика на корзину
  const trashElement = cardElement.querySelector('.element__trash');
  trashElement.addEventListener('click', evt => {
    const trashElement = evt.target;
    const cardsElement = trashElement.closest('.element');

    deleteCardElement(cardsElement);
  })

  return cardElement;
}

document.addEventListener('DOMContentLoaded', () => {
  initialCards.forEach(item => {
    cardsElement.prepend(createCard(item.name, item.link));
  });
});

cardAddBtn.addEventListener('click', () => {
  openPopup(popupNewCard);
});

popupNewCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  cardsElement.prepend(createCard(nameNewCardValue, linkNewCardValue));

  closePopup(popupNewCard);
  resetForm(popupNewCardForm);
});

