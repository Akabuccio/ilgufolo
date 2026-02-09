export function Header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="/" class="logo">
          <img src="/logo.png" alt="Il Gufolo Apartments" style="height: 80px; width: auto;">
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/appartamenti/">Appartamenti</a></li>
            <li><a href="/esperienze-ferrara/">Esperienze</a></li>
            <li><a href="/contatti/">Contattaci</a></li>
          </ul>
        </nav>
        <!-- Richiedi Preventivo removed as requested -->
        <button class="mobile-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}
