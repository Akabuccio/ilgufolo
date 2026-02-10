export function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container footer-content">
        <!-- 1. Brand Section -->
        <div class="footer-brand">
          <h3 class="brand-logo">Il Gufolo</h3>
          <p class="brand-mission">Esclusività e storia nel cuore medievale di Ferrara. Un'esperienza di soggiorno unica dove il comfort incontra la tradizione estense.</p>
        </div>
        
        <!-- 2. Navigation -->
        <div class="footer-nav">
          <h4 class="footer-heading">Esplora</h4>
          <ul class="nav-links">
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/appartamenti/" data-link>Appartamenti</a></li>
            <li><a href="/esperienze-ferrara/" data-link>Esperienze</a></li>
          </ul>
        </div>
        
        <!-- 3. Contact Info -->
        <div class="footer-contact">
          <h4 class="footer-heading">Contatti</h4>
          <ul class="contact-list">
            <li>
                <span class="icon">📍</span>
                <span>Via Saraceno, 75<br>44121 Ferrara (FE)</span>
            </li>
            <li>
                <span class="icon">📞</span>
                <a href="tel:+393383022845">+39 338 302 2845</a>
            </li>
            <li>
                <span class="icon">✉️</span>
                <a href="mailto:ilgufolo@gmail.com">ilgufolo@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container bottom-content">
            <div class="footer-legal">
                <p>&copy; ${year} Il Gufolo. Tutti i diritti riservati.</p>
            </div>
            <div class="footer-credits">
                 <a href="#">Privacy Policy</a>
                 <span class="separator">•</span>
                 <a href="#">Cookie Policy</a>
            </div>
        </div>
      </div>
    </footer>
  `;
}
