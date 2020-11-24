// YOUR CODE GOES HERE: 
let containerElem = document.querySelector(".container");
if (containerElem) {
  containerElem.insertAdjacentHTML("afterbegin", `<div class="demo-notice">Learn from <a href="https://recipes.remaketheweb.com/" target="_blank">Remake's recipes</a> about how to implement an app like this in 30 minutes!</div>`);
}

let frontPageButton = document.querySelector(".button--front-page");
if (frontPageButton) {
  frontPageButton.innerText = "Instant Sign Up";
}

let onSignupPage = window.location.href.indexOf("/user/signup") > -1;
if (onSignupPage) {
  let pageContainer = document.querySelector(".accounts");
  let formElem = document.querySelector("form");
  let usernameInput = document.querySelector("input[name='username']");
  let emailInput = document.querySelector("input[name='email']");
  let passwordInput = document.querySelector("input[name='password']");
  let loadingSvg = `<svg width="38" height="38" viewbox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#5034ca" stop-opacity="0" offset="0%"/><stop stop-color="#5034ca" stop-opacity=".631" offset="63.146%"/><stop stop-color="#5034ca" offset="100%"/></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"repeatCount="indefinite"/></path><circle fill="#5034ca" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"repeatCount="indefinite"/></circle></g></svg>`;

  pageContainer.insertAdjacentHTML("afterbegin", `
<style>
  .logging-in-notice {
    display: block;
    margin: 4rem auto 8rem;
    padding: 20px 0 15px;
    text-align: center;
    color: #5034ca;
    font-weight: bold;
  }
  .logging-in-notice__box {
    display: inline-block;
    padding: 1.25rem 2.75rem 1.1rem;
    border: 1px solid #735cd5;
    background-color: #edeafa;
    border-radius: 8px;
  }
  .logging-in-notice__text {
    margin-bottom: 16px;
    text-align: center;
    font-size: 24px;
  }
  .loading-indicator {
    margin: 0 auto;
    width: 30px;
  }
  .loading-indicator svg {
    width: 100%;
  }
</style>
<div class="logging-in-notice">
  <div class="logging-in-notice__box">
    <div class="logging-in-notice__text">Logging in automatically...</div>
    <div class="loading-indicator">${loadingSvg}</div>
  </div>
</div>
`);

  let username = "example" + Math.floor(Math.random() * 100000000000000);
  usernameInput.value = username
  emailInput.value = username + "@example.org";
  passwordInput.value = "password" + Math.floor(Math.random() * 100000000000000);
  formElem.submit();
}