// webpack css loader allows following statment to work
import './index.css';
import numeral from 'numeral';

import {getUsers, deleteUser} from './api/userApi';  // load our api code
import { link } from 'fs';

const courseValue = numeral(1000).format('0.0.00');

// debugger;  // uncomment, to stop script in chrome debugger

console.log(`I would like to pay ${courseValue} for this course.` ); // eslint-disable-line no-console
// note:  used special back ticks (`) in string above so it can
//         handle substituion vars.

// ------------ Example API call section -------------


// populate the html table with user via API call.
getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstname}</td>
      <td>${user.lastname}</td>
      <td>${user.email}</td>
    </tr>`
  });
  // populate the tag that has id 'users' on the page with the api results.
  global.document.getElementById('users').InnerHTML = userBody;

  // -------------- logic to handle deletes ---------------

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real arra from a DOM collection
  // getElementsByClassName only returns  an "array like" object
  Array.from(deleteLinks, link => {   // iterate thru array of tags
    link.onclick = function(event) {  // add click handler to each
      const element = event.target;
      event.preventDefault();     // prevent changes to url
      deleteUser(element.attributes["data-id"].value);  // remove the user from the array
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);  // remove the user from the DOM
    };
  });
});


