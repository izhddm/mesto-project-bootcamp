import {initImagePopup} from "./modal";
import {getCurrentUserId} from "./utils";
import {delCard, likeCard, unlikeCard} from "./api";

const contentTemplate = document.getElementById('cardElementTemplate').content;
export const newCardBtn = document.querySelector('.profile__add-button');

// Проверка, что текущий юзер лайкнул карточку
const checkLiked = (likes, userId) => likes.some((item) => item._id === userId);

function toggleLikeCard(element) {
  element.classList.toggle('heart_active');
}

function setLikeCount(element, count) {
  element.textContent = count;
}

async function handleHeartClick(counterElement, cardId) {
  try {
    const response = this.classList.contains('heart_active')
      ? await unlikeCard(cardId)
      : await likeCard(cardId);

    toggleLikeCard(this);

    // Запишем кол-во лайков
    setLikeCount(counterElement, response.likes.length)

  } catch (error) {
    console.error(error);
  }
}

function handleTrashClick(cardId, evt) {
  delCard(cardId)
    .then(() => {
      const cardsElement = evt.target.closest('.element');

      cardsElement.remove();
    })
    .catch(error => console.error(error));
}

export function createCard(card) {
  const cardTemplate = contentTemplate.cloneNode(true);

  const img = cardTemplate.querySelector('.element__image');
  img.src = card.link;
  img.alt = card.name;
  img.addEventListener('click', initImagePopup.bind(null, card.name, card.link));

  cardTemplate.querySelector('.element__title').textContent = card.name;

  // Кнопка лайка
  const likeBtn = cardTemplate.querySelector('.heart__element');
  const likeCounter = cardTemplate.querySelector('.heart__counter');
  likeBtn.addEventListener('click', handleHeartClick.bind(likeBtn, likeCounter, card._id));

  if (checkLiked(card.likes, getCurrentUserId())) {
    toggleLikeCard(likeBtn);
  }
  setLikeCount(likeCounter, card.likes.length);

  // Кнопка корзины
  const trashBtn = cardTemplate.querySelector('.element__trash');
  if (getCurrentUserId() !== card.owner._id) {
    trashBtn.remove();
  } else {
    trashBtn.addEventListener('click', handleTrashClick.bind(null, card._id));
  }

  return cardTemplate;
}


