class RzButton extends HTMLElement {
  static get observedAttributes() { return ['variant']; }
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'primary';
    
    this.shadowRoot.innerHTML = `
      <style>
        .rz-btn {
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          margin: 0.5rem;
          display: inline-block;
        }
        
        .rz-btn--primary {
          background: white;
          color: black;
          border: 1px solid #ddd;
        }
        
        .rz-btn--secondary {
          background: #333;
          color: white;
        }
        
        .rz-btn--blue {
          background: #1d4ed8;
          color: white;
        }
        
        .rz-btn--primary:hover { background: #f0f0f0; }
        .rz-btn--secondary:hover { background: #444; }
        .rz-btn--blue:hover { background: #1a43c2; }
      </style>
      <button class="rz-btn rz-btn--${variant}">
        ${this.textContent || 'Click Me'}
      </button>
    `;
  }
}

// Export the class WITHOUT registration here
export default RzButton;