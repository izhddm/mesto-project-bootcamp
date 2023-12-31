import {handleInitImagePopup} from "./modal";
import {delCard, likeCard, unlikeCard} from "./api";

const contentTemplate = document.getElementById('cardElementTemplate').content.querySelector('.element');
export const newCardBtn = document.querySelector('.profile__add-button');

// Проверка, что текущий юзер лайкнул карточку
const checkLiked = (likes, userId) => likes.some((item) => item._id === userId);

function toggleLikeCard(element) {
  element.classList.toggle('heart_active');
}

function setLikeCount(element, count) {
  element.textContent = count;
}

async function handleHeartClick(counterElement, cardId, likeBtn) {
  try {
    const response = likeBtn.classList.contains('heart_active')
      ? await unlikeCard(cardId)
      : await likeCard(cardId);

    toggleLikeCard(likeBtn);

    // Запишем кол-во лайков
    setLikeCount(counterElement, response.likes.length)

  } catch (error) {
    console.error(error);
  }
}

function handleTrashClick(cardId, card) {
  delCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch(error => console.error(error));
}

export function createCard(card, userId) {
  const cardTemplate = contentTemplate.cloneNode(true);

  const img = cardTemplate.querySelector('.element__image');
  img.src = card.link;
  img.alt = card.name;
  img.addEventListener('click', handleInitImagePopup.bind(null, card.name, card.link));

  cardTemplate.querySelector('.element__title').textContent = card.name;

  // Кнопка лайка
  const likeBtn = cardTemplate.querySelector('.heart__element');
  const likeCounter = cardTemplate.querySelector('.heart__counter');
  likeBtn.addEventListener('click', handleHeartClick.bind(null, likeCounter, card._id, likeBtn));

  if (checkLiked(card.likes, userId)) {
    toggleLikeCard(likeBtn);
  }
  setLikeCount(likeCounter, card.likes.length);

  // Кнопка корзины
  const trashBtn = cardTemplate.querySelector('.element__trash');
  if (userId !== card.owner._id) {
    trashBtn.remove();
  } else {
    trashBtn.addEventListener('click', handleTrashClick.bind(null, card._id, cardTemplate));
  }

  return cardTemplate;
}


