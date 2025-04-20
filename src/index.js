import RzButton from "./hooks/buttton.js"


import rzLoginCard from "./hooks/login.js";


// customElements.define('rz-button', RzButton);

if (!customElements.get('rz-button')) {
    customElements.define('rz-button', RzButton);
  }

customElements.define('rz-login-card', rzLoginCard)


export { RzButton, rzLoginCard}