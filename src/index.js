import RzButton from "./hooks/buttton"
import RzInput from "./hooks/input"


// customElements.define('rz-button', RzButton);

if (!customElements.get('rz-button')) {
    customElements.define('rz-button', RzButton);
  }

  
customElements.define('rz-input', RzInput);


export {RzInput, RzButton}