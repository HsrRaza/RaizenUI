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

class RzInput extends HTMLElement{
    static get observedAttributes(){
        return ['type', 'size', 'placeholder','mode' ,'width', 'height']

    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }


    attributesChangedCallback(){
        this.render();
    }

    getStyles(){
        const mode = this.getAttribute('mode') || 'light';
        const size = this.getAttribute('size') || 'medium';
        const isDark = mode === 'dark';

        const width = this.getAttribute('width') || '20%';
        const height= this.getAttribute('height') || 'auto';

        const sizeStyles ={
            small : 'padding: 6px 10px; font-size: 12px' ,
            mediun : 'padding: 10px 14px; font-size: 14px' ,
            large : 'padding: 14px 18px; font-size: 16px' ,
        };

        return `
         input{
         width: ${width};
         height:${height}
         ${sizeStyles[size]}
         border: 1px solid ${isDark ? '#555': '$ccc'};
         border-radius: 6px;
         background-color: ${isDark ? '#1f1f1f': '#fff'};
         color:${isDark ? '#f5f5f5': '#111'};
         outline: none;
         box-sizing: border-box;
         transition:all 0.2s ease-in-out;
    }
         input::placeholder {
         color:${isDark ? '#888': '#4f446e5'};
         box-shadow: 0 0 0 2px ${isDark ? '#888': '4f46e533'};
         }
        
        `;
        

    };
        
    render(){
        const placeholder = this.getAttribute('placeholder') || 'Enter text...';
        const type = this.getAttribute('type') || 'text';

        this.shadowRoot.innerHTML = `
        <style> ${this.getStyles()} </style>
        <div> 
        <input type = "${type}" placeholder= "${placeholder}" />
        </div>
        `;
    }
    
}

customElements.define('rz-button', RzButton);
customElements.define('rz-input', RzInput);

export { RzButton, RzInput };
