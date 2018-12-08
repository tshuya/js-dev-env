import 'whatwg-fetch';

import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

// public exposed functions ------------------
export function getUsers() {
  return get('users');
}
// route to allow deletion of recors
export function deleteUser(id) {
  return del(`users/s${id}`);
}
//----------- private functions -----------------

// prefix the url with the dev env path (to use JSON server), if env is localhost
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}