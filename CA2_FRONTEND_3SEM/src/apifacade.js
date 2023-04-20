const URL = "http://localhost:8080/";
const GoogleURL = "https://www.googleapis.com/books/v1/volumes?q=:keyes&key=AIzaSyCZoXruFbr28UKR2Z6HXgtXqnpRA0shUTk"

function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}

function apiFacade() {
 /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
 
const login = (user, password) => {
    // console.log("login");
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(URL + "api/login", options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token) })
}


const fetchData = (ressource) => {
    const options = makeOptions("GET",true); //True add's the token
   return fetch(URL + ressource, options).then(handleHttpErrors);
}

const fetchDataGoogle = () => {
  const options = makeOptions("GET");
 return fetch(GoogleURL, options).then(handleHttpErrors);
}
const makeOptions= (method,addToken,body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
 }
 const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}
function readJwtToken (token) {
    console.log('TOKEN: ',token);
    // console.log('TOKEN opened with atob: ',window.atob(token));
    var base64Url = token.split('.')[1];
    // console.log(base64Url);
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // console.log(base64);
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(jsonPayload);
    return JSON.parse(jsonPayload);
}

 return {
     makeOptions,
     setToken,
     getToken,
     loggedIn,
     login,
     logout,
     fetchData,
     fetchDataGoogle,
     readJwtToken,
    //  book,
 }
}
const facade = apiFacade();
export default facade;