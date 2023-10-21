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

export {getMyInfo}


