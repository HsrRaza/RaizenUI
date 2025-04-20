class RzButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #ffffff;
          color: #000000;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        button:hover {
          background-color: #f0f0f0;
        }
      </style>
      <button><slot>Click Me</slot></button>
    `;
  }
}



export default RzButton