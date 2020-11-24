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
    padding: 1.25rem 2.75rem 1.4rem;
    border: 1px solid #735cd5;
    background-color: #edeafa;
    border-radius: 8px;
  }
  .logging-in-notice__text {
    text-align: center;
    font-size: 24px;
  }
</style>
<div class="logging-in-notice">
  <div class="logging-in-notice__box">
    <div class="logging-in-notice__text">Logging in automatically...</div>
  </div>
</div>
`);

  let username = "example" + Math.floor(Math.random() * 100000000000);
  usernameInput.value = username
  emailInput.value = username + "@example.org";
  passwordInput.value = "password" + Math.floor(Math.random() * 100000000000);
  formElem.submit();
}