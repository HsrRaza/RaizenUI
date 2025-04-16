class RzInput extends HTMLElement{
    static get observedAttributes(){
        return ['type', 'size', 'placeholder','mode' ]

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
        const isDark = mode === 'dark'

        const sizeStyles ={
            small : 'padding: 6px 10px; font-size: 12px' ,
            mediun : 'padding: 10px 14px; font-size: 14px' ,
            large : 'padding: 14px 18px; font-size: 16px' ,
        };

        return `
         input{
         width: 100%;
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
        const placeholder = this.getAttribute('placeholder') || 'Enter text...'
        const type = this.getAttribute('type') || 'text';

        this.shadowRoot.innerHTML = `
        <style> ${this.getStyles()} </style>
        <div> 
        <input type = "${type}" placeholder= "${placeholder}" />
        </div>
        `
    }
    
}
export default RzInput