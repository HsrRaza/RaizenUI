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

customElements.define('rz-button', MyButton);
customElements.define('rz-input', RzInput);

export { MyButton, RzInput };
