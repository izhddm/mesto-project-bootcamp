'use strict';

import { initImagePopup } from "./modal";
import {initialCards} from "./data";

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

export function createCard(name, link) {
  const card = contentTemplate.cloneNode(true);

  const img = card.querySelector('.element__image');
  img.src = link;
  img.alt = name;
  img.addEventListener('click', handleImageClick);

  card.querySelector('.element__title').textContent = name;

  const heartElement = card.querySelector('.heart');
  heartElement.addEventListener('click', handleHeartClick);

  const trashElement = card.querySelector('.element__trash');
  trashElement.addEventListener('click', handleTrashClick);

  return card;
}

export function addCard(element) {
  cardsContainer.prepend(element);
}

function deleteCard(element) {
  element.remove();
}

export function initializeCards() {
  initialCards.forEach(item => {
    addCard(createCard(item.name, item.link));
  });
}
