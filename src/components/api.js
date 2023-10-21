const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-13',
  headers: {
    authorization: 'd870b268-feb8-4751-8894-514caff2a776',
    'content-type': 'application/json'
  }
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json().then(err => {
    err.code = res.status;

    return Promise.reject(err);
  })
}

function getMyInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkResponse)
}

function setMyInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(checkResponse)
}

function setMyAvatar(linkAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: linkAvatar
    })
  })
    .then(checkResponse)
}

function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(checkResponse)
}

function addCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(checkResponse)
}

function delCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse)
}

function likeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(checkResponse)
}

function unlikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(checkResponse)
}

export {getMyInfo, setMyInfo, setMyAvatar, getCards, addCard, delCard, likeCard, unlikeCard}


