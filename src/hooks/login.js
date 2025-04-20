class rzLoginCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            --bg-color: #000000;
            --border-color: #2a2a2a;
            --text-color: #ffffff;
            --input-bg: #111111;
            --hover-grey: #333333;
          }
          
          .login-container {
            height: 200px;
            width: 200px;
            padding: 1rem;
            border: 1px solid var(--border-color);
            border-radius: 0;
            background: var(--bg-color);
            color: var(--text-color);
            font-family: system-ui, sans-serif;
          }
          
          h2 {
            text-align: center;
            margin: 0 0 1rem 0;
            font-weight: 400;
            letter-spacing: 1px;
            font-size: 1.2rem;
          }
          
          label {
            display: block;
            margin-bottom: 0.3rem;
            font-size: 0.8rem;
          }
          
          input {
            width: 80%;
            padding: 6px 10px;
            margin-bottom: 0.5rem;
            background: var(--input-bg);
            border: 1px solid var(--border-color);
            color: var(--text-color);
            font-size: 0.9rem;
          }
          
          input:focus {
            outline: 1px solid white;
          }
          
          button {
            width: 80%;
            padding: 6px 10px;
            background: var(--bg-color);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            cursor: pointer;
            margin-top: 0.4rem;
            font-size: 0.9rem;
          }
          
          button:hover {
            background: var(--hover-grey);
          }
        </style>
        
        <div class="login-container">
          <h2>Login</h2>
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name">
          <label for="password">Password</label>
          <input type="password" name="password">
          <button>Submit</button>
        </div>
      `;
    }
  }
  

  export default rzLoginCard