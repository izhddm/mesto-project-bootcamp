/* Секция Profile */
const profileBlock = document.querySelector('.profile');
const profileInfoElement = profileBlock.querySelector('.profile__info');
// const avatarElement = profileInfoElement.querySelector('.profile__avatar');
const profileCaptionElement = profileInfoElement.querySelector('.profile__caption');
const profileTitleElement = profileCaptionElement.querySelector('.profile__title');
const profileEditBtnElement = profileCaptionElement.querySelector('.profile__edit-button');
const profileJobElement = profileInfoElement.querySelector('.profile__job');
// const addButtonElement = profileInfoElement.querySelector('.profile__add-button');

/* Попапы */
const popupProfile = document.querySelector('.popup-profile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileUsername = popupProfileForm.querySelector('.popup__input-username');
const popupProfileJob = popupProfileForm.querySelector('.popup__input-job');
const popupProfileFormSaveBtn = popupProfileForm.querySelector('.popup__submit');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/* Навесим на все кнопки закрытия popup одинаковый функционал закрытия*/
popupCloseButtons.forEach(button => {
  button.addEventListener('click', (evt) => {
    const clickedButton = evt.currentTarget; // Элемент на котором произошел клик

    const popupParent = clickedButton.closest('.popup'); // Ближайший родитель с классом .popup

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
popupProfileFormSaveBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  profileTitleElement.textContent = popupProfileUsername.value;
  profileJobElement.textContent = popupProfileJob.value;

  // Закроем форму
  const popupParent = evt.currentTarget.closest('.popup'); // Ближайший родитель с классом .popup

  closePopup(popupParent);
});
