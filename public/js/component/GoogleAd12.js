class GoogleAd12 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.renderAd();
        this.loadAdScript();
    }

    renderAd() {
        this.shadowRoot.innerHTML = `
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6660718818470329"
        data-ad-slot="8404260707"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
      <style>
        .adsbygoogle { display: block; width: 100%; }
      </style>
    `;
    }

    loadAdScript() {
        // 加载脚本或重复 push
        if (!window.adsbygoogle) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660718818470329';
            script.crossOrigin = 'anonymous';
            script.onload = () => this.pushAd();
            document.head.appendChild(script);
        } else {
            this.pushAd();
        }
    }

    pushAd() {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }
}

customElements.define('google-ad-12', GoogleAd12);
