// 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

class MyButton extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const button = document.createElement('button');
      button.textContent = this.textContent || 'Click Me';
      button.className = 'my-button'; // styling comes from global or shadow
  
      // Simple styles (optional)
      const style = document.createElement('style');
      style.textContent = `
        .my-button {
          padding: 0.5rem 1rem;
          background-color: #1d4ed8;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }
  
        .my-button:hover {
          background-color: #2563eb;
        }
      `;
  
      shadow.append(style, button);
    }
  }
  
  export default MyButton;
  