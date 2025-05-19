class GoogleAd12 extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(this.wrapper);
    }

    connectedCallback() {
        this.render();
        this.loadAd();
    }

    render() {
        // 清空旧内容，避免重复 push
        this.wrapper.innerHTML = `
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-6660718818470329"
        data-ad-slot="8404260707"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    `;
    }

    loadAd() {
        if (!window.adsbygoogle) {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660718818470329';
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.onload = () => this.pushAd();
            document.head.appendChild(script);
        } else {
            this.pushAd();
        }
    }

    pushAd() {
        try {
            const adSlot = this.wrapper.querySelector('.adsbygoogle');
            if (!adSlot.getAttribute('data-ad-status')) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }
}

customElements.define('google-ad-12', GoogleAd12);
