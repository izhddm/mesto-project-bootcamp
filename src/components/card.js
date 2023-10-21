'use strict';

import { initImagePopup } from "./modal";

const contentTemplate = document.getElementById('cardElementTemplate').content;
const cardsContainer = document.querySelector('.cards__elements');
export const newCardBtn = document.querySelector('.profile__add-button');

function likeCard(element) {
  element.classList.toggle('heart_active');
}

function handleImageClick(evt) {
  const image = evt.target;
  initImagePopup(image.alt, image.src);
}

function handleHeartClick(evt) {
  likeCard(evt.target);
}

function handleTrashClick(evt) {
  const cardsElement = evt.target.closest('.element');
  deleteCard(cardsElement);
}

export function createCard(card) {
  const cardTemplate = contentTemplate.cloneNode(true);

  const img = cardTemplate.querySelector('.element__image');
  img.src = card.link;
  img.alt = card.name;
  img.addEventListener('click', handleImageClick);

  cardTemplate.querySelector('.element__title').textContent = card.name;

  const heartElement = cardTemplate.querySelector('.heart');
  heartElement.addEventListener('click', handleHeartClick);

  const trashElement = cardTemplate.querySelector('.element__trash');
  trashElement.addEventListener('click', handleTrashClick);

  return cardTemplate;
}

export function addCardToContainer(element) {
  cardsContainer.prepend(element);
}

function deleteCard(element) {
  element.remove();
}
