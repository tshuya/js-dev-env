// one way to automatically determine if in dev mode
// and should use mock server vs prod server for api calls

/* export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
} */

// alternatively use a string parameter to specify which env to use.
export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

/** 
 * This function getQueryStringParameterByName takes parameter name and url 
 * as parmaters and returns parameter value 
 * @parameter {String} parameterName
 * @parameter {String} url
 * (if url is not passed it takes the current url from window.location.href)
 **/

function getQueryStringParameterByName(parameterName, url) {
  if (!url) url = window.location.href;
  parameterName= parameterName.replace(/[\[\]]/g, "\\$&");
  var regularExpression = 
      new RegExp("[?&]" + parameterName + "(=([^&#]*)|&|#|$)"),
  results = regularExpression.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// to trigger the above, call the website with the following;
//   localhost:3000/?useMockApi=true

