export function Header() {
  return `
    <header class="site-header">
      <div class="container header-container">
        <a href="/" class="logo">
          <img src="/logo.png" alt="Il Gufolo Apartments" style="height: 60px; width: auto;">
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/appartamenti/">Appartamenti</a></li>
            <li><a href="/esperienze-ferrara/">Esperienze</a></li>
            <li><a href="/richiesta-soggiorno/">Richiesta Soggiorno</a></li>
          </ul>
        </nav>
        <a href="/richiesta-soggiorno/" class="btn btn-sm header-cta">Richiedi Preventivo</a>
        <button class="mobile-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}
