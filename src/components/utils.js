const profileSection = document.querySelector('.profile');
const profileInfo = profileSection.querySelector('.profile__info');
const profileAvatar = profileInfo.querySelector('.profile__avatar');
const profileCaption = profileInfo.querySelector('.profile__caption');
const profileTitle = profileCaption.querySelector('.profile__title');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditBtn = profileCaption.querySelector('.profile__edit-button');

// Id текущего пользователя
let currentUserId = undefined;

function getCurrentUserId() {
  return currentUserId;
}

function setCurrentUserId(id) {
  currentUserId = id;

  return currentUserId;
}


export {getCurrentUserId, setCurrentUserId, profileAvatar, profileTitle, profileJob, profileEditBtn}
