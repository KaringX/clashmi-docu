class CountdownRedirect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.remaining = parseInt(this.getAttribute('seconds')) || 10;
    this.href = this.getAttribute('href') || '/';
    this.title = this.getAttribute('title') || '页面即将跳转';
    this.cancelled = false;
  }

  connectedCallback() {
    this.render();
    this.startCountdown();
  }

  render() {
    const style = `
      <style>
        .container {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 0.5em;
          font-family: sans-serif;
        }
        .container p {
          margin: 0.2em;
        }
        button {
          padding: 0.5em 1em;
          margin-top: 0.5em;
          background-color: #f44336;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      </style>
    `;

    const html = `
      ${style}
      <div class="container">
        <p>将在 <span id="countdown">${this.remaining}</span> 秒后跳转到：<a href="${this.href}">${this.title}</a></p>
        <button id="cancelBtn">取消跳转</button>
      </div>
    `;

    this.shadowRoot.innerHTML = html;
    this.shadowRoot.getElementById('cancelBtn').addEventListener('click', () => this.cancel());
  }

  startCountdown() {
    this.timer = setInterval(() => {
      if (this.cancelled) return;
      this.remaining--;
      const countdown = this.shadowRoot.getElementById('countdown');
      if (countdown) countdown.textContent = this.remaining;

      if (this.remaining <= 0) {
        clearInterval(this.timer);
        if (!this.cancelled) {
          window.location.href = this.href;
        }
      }
    }, 1000);
  }

  cancel() {
    this.cancelled = true;
    clearInterval(this.timer);
    const btn = this.shadowRoot.getElementById('cancelBtn');
    btn.textContent = '已取消';
    btn.disabled = true;
  }
}

customElements.define('countdown-redirect', CountdownRedirect);
//<script src="/js/CountdownRedirect.js"></script>
//<countdown-redirect seconds="10" href="https://example.com" title="将跳转至外部链接"></countdown-redirect>
