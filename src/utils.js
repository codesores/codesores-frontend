import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('token');

export function getQueryParams() {
  const query = window.location.search.substring(1);
  const pairs = query.split('&').map((str) => str.split('='));
  return pairs.reduce((memo, pair) => {
    memo[pair[0]] = pair[1];
    return memo;
  }, {});
}

export function getCookie(name) {
  var value = "; " + document.cookie
  var parts = value.split("; " + name + "=")
  if (parts.length == 2) return parts.pop().split(";").shift()
}


// const baseApiUrl = 'http://localhost:3000';

export function fetchUserDetails(options) {
  const { token } = options;
  const url = '{baseApiUrl}/user?token=${token}';

  return axios.get(url, {withCredentials: true}).then((response)=> {
    return response.json()
  }).catch(error => {
    console.error('Could not fetch user details', error)
  })
  return fetch(url, {
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => {
    return response.json();
  })
  .catch(error => {
    console.error('Could not fetch user details', error);
  });
}
