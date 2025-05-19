class GoogleAd12 extends HTMLElement {
    connectedCallback() {
        this.ensureAdScript().then(() => {
            this.renderAd();
        }).catch((err) => {
            console.error('Failed to load AdSense:', err);
        });
    }

    ensureAdScript() {
        return new Promise((resolve, reject) => {
            if (window.adsbygoogle) {
                return resolve();
            }

            const existing = document.querySelector('script[src*="adsbygoogle.js"]');
            if (existing) {
                existing.addEventListener('load', resolve);
                existing.addEventListener('error', reject);
                return;
            }

            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6660718818470329';
            script.crossOrigin = 'anonymous';
            script.onload = resolve;
            script.onerror = reject;

            document.head.appendChild(script);
        });
    }

    renderAd() {
        this.innerHTML = '';

        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.setAttribute('data-ad-client', 'ca-pub-6660718818470329');
        ins.setAttribute('data-ad-slot', '8404260707');
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');

        this.appendChild(ins);

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense push error:', e);
        }
    }
}

customElements.define('google-ad-12', GoogleAd12);
