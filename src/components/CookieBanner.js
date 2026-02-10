
export function CookieBanner() {
    // Check if user already consented
    if (localStorage.getItem('cookie_consent') === 'true') {
        return ''
    }

    // Add click listener after render
    setTimeout(() => {
        const btn = document.getElementById('accept-cookies')
        const banner = document.getElementById('cookie-banner')
        if (btn && banner) {
            btn.addEventListener('click', () => {
                localStorage.setItem('cookie_consent', 'true')
                banner.style.opacity = '0'
                banner.style.transform = 'translateY(100%)'
                setTimeout(() => banner.remove(), 300)
            })
        }
    }, 100)

    return `
    <div id="cookie-banner" style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(10, 10, 20, 0.95);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
      z-index: 10000;
      box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
      transition: all 0.3s ease;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    ">
      <div style="flex: 1; min-width: 300px; max-width: 800px; color: #e0e0e0; font-size: 0.9rem; line-height: 1.5;">
        <strong>🍪 Usiamo i cookie (ma solo quelli buoni).</strong><br>
        Utilizziamo cookie tecnici essenziali per far funzionare il sito e Google Fonts per lo stile. Niente tracciamento pubblicitario invadente.
        <a href="/privacy-policy" data-link style="color: #fff; text-decoration: underline; margin-left: 0.5rem;">Privacy Policy</a>
      </div>
      <button id="accept-cookies" class="btn btn-sm" style="white-space: nowrap;">
        Va bene
      </button>
    </div>
  `
}
