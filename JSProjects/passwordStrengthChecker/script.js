const inputField = document.querySelector("#password");
const outputField = document.querySelector("#output");
console.log(inputField, outputField);

inputField.addEventListener("input", () => {
  let password = inputField.value;
  if (password.length < 8) {
    outputField.innerText = "Password is too short";
    outputField.style.color = "red";
  } else {
    // outputField.innerText ="password is long enough"
    // outputField.style.color="green";
    // {}[]@#$%^&*()!
    if (password.search(/[a-z]/) == -1) {
      outputField.innerText = "Password is missing lowercase latter";
      outputField.style.color = "red";
    } else if (password.search(/[A-Z]/) == -1) {
      outputField.innerText = "Password is missing upperCase latter";
      outputField.style.color = "red";
    } else if (password.search(/[0-9]/) == -1) {
      outputField.innerText = "Password is missing Number ";
      outputField.style.color = "red";
    } else if (password.search(/[ {\}\[\]\ @\#\$\ %\^\&\*\(\)\!]/) == -1) {
      outputField.innerText = "Password is missing a special character ";
      outputField.style.color = "red";
    } else {
      outputField.innerText = "password is too strong";
      outputField.style.color = "green";
      if (password.value === 0) {
        outputField.innerHTML = "";
      }
    }
  }
});
