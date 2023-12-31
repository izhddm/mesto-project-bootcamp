const profileSection = document.querySelector('.profile');
const profileInfo = profileSection.querySelector('.profile__info');
const profileAvatar = profileInfo.querySelector('.profile__avatar');
const profileCaption = profileInfo.querySelector('.profile__caption');
const profileTitle = profileCaption.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditBtn = profileCaption.querySelector('.profile__edit-button');
const profileAvatarBtn = profileInfo.querySelector('.profile__avatar-container');

// Контейнер со всеми карточками
const cardsContainer = document.querySelector('.cards__elements');

// Запись информации о пользователе приходящей с бэкенда
const updateProfileInfo = (userInfo) => {
  profileTitle.textContent = userInfo.name;
  profileJob.textContent = userInfo.about;
};

const updateProfileAvatar = (myInfo) => {
  profileAvatar.src = myInfo.avatar;
}

// Добавление карточки в контейнер
function addCardToContainer(element) {
  cardsContainer.prepend(element);
}

export {
  profileAvatarBtn,
  profileTitle,
  profileJob,
  profileEditBtn,
  updateProfileInfo,
  updateProfileAvatar,
  addCardToContainer
}
