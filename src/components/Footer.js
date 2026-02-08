export function Footer() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <h3>Il Gufolo</h3>
          <p>Appartamenti esclusivi nel cuore medievale di Ferrara.</p>
        </div>
        
        <div class="footer-links">
          <h4>Esplora</h4>
          <ul>
            <li><a href="/appartamenti/">Appartamenti</a></li>
            <li><a href="/esperienze-ferrara/">Esperienze</a></li>
            <li><a href="/richiesta-soggiorno/">Richiedi Preventivo</a></li>
            <li><a href="/contatti/">Contatti</a></li>
          </ul>
        </div>
        
        <div class="footer-contacts">
          <h4>Contatti</h4>
          <p>Via Saraceno, 75<br>44121 Ferrara (FE)</p>
          <p><a href="tel:+393383022845">+39 338 302 2845</a></p>
          <p><a href="mailto:ilgufolo@gmail.com">ilgufolo@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>&copy; ${year} Il Gufolo. Tutti i diritti riservati.</p>
      </div>
    </footer>
  `;
}
