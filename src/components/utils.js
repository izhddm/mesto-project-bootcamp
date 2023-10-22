const profileSection = document.querySelector('.profile');
const profileInfo = profileSection.querySelector('.profile__info');
const profileAvatar = profileInfo.querySelector('.profile__avatar');
const profileCaption = profileInfo.querySelector('.profile__caption');
const profileTitle = profileCaption.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditBtn = profileCaption.querySelector('.profile__edit-button');
const profileAvatarBtn = profileInfo.querySelector('.profile__avatar-container');

// Id текущего пользователя
let currentUserId = undefined;

function getCurrentUserId() {
  return currentUserId;
}

function setCurrentUserId(id) {
  currentUserId = id;

  return currentUserId;
}

// Проверка, что текущий юзер лайкнул карточку
const checkLiked = (likes, userId) => likes.some((item) => item._id === userId);

// Запись информации о пользователе приходящей с бэкенда
const updateProfileInfo = (userInfo) => {
  profileTitle.textContent = userInfo.name;
  profileJob.textContent = userInfo.about;
};

const updateProfileAvatar = (myInfo) => {
  profileAvatar.src = myInfo.avatar;
}

export {
  getCurrentUserId,
  setCurrentUserId,
  profileAvatarBtn,
  profileAvatar,
  profileTitle,
  profileJob,
  profileEditBtn,
  checkLiked,
  updateProfileInfo,
  updateProfileAvatar,
}
