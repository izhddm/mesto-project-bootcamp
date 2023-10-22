'use strict';

import {initImagePopup} from "./modal";
import {checkLiked, getCurrentUserId} from "./utils";
import {delCard, likeCard, unlikeCard} from "./api";

const contentTemplate = document.getElementById('cardElementTemplate').content;
const cardsContainer = document.querySelector('.cards__elements');
export const newCardBtn = document.querySelector('.profile__add-button');

function toggleLikeCard(element) {
  element.classList.toggle('heart_active');
}

function setLikeCount(element, count){
  element.textContent = count;
}

function handleImageClick(evt) {
  const image = evt.target;
  initImagePopup(image.alt, image.src);
}

async function handleHeartClick(counterElement, cardId, evt) {
  try {
    const response = evt.target.classList.contains('heart_active')
      ? await unlikeCard(cardId)
      : await likeCard(cardId);

    toggleLikeCard(evt.target);

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

      deleteCard(cardsElement);
    })
    .catch(error => console.error(error));
}

export function createCard(card) {
  const cardTemplate = contentTemplate.cloneNode(true);

  const img = cardTemplate.querySelector('.element__image');
  img.src = card.link;
  img.alt = card.name;
  img.addEventListener('click', handleImageClick);

  cardTemplate.querySelector('.element__title').textContent = card.name;

  // Кнопка лайка
  const likeBtn = cardTemplate.querySelector('.heart__element');
  const likeCounter = cardTemplate.querySelector('.heart__counter');
  likeBtn.addEventListener('click', handleHeartClick.bind(null, likeCounter, card._id));

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

export function addCardToContainer(element) {
  cardsContainer.prepend(element);
}

function deleteCard(element) {
  element.remove();
}
