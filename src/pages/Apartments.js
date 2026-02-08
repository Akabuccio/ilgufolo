import { ApartmentCard } from '../components/ApartmentCard.js';

export function Apartments() {
    return `
    <section class="page-header" style="background-color: var(--color-secondary); color: white; padding: 6rem 0; text-align: center;">
      <div class="container">
        <h1>I Nostri Appartamenti</h1>
        <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; opacity: 0.9;">
          Soluzioni abitative complete per soggiorni senza pensieri.
        </p>
      </div>
    </section>

    <section class="container" style="padding: 4rem 0;">
      <div class="apartments-grid" style="display: grid; grid-template-columns: 1fr; gap: 4rem;">
        
        <!-- Gufolo 1 -->
        <article class="apartment-detail" style="display: flex; gap: 3rem; align-items: center; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <img src="https://placehold.co/800x600/2F4F4F/F9F7F2?text=Gufolo+1+Family" alt="Gufolo 1" style="border-radius: var(--border-radius); box-shadow: var(--shadow-md);">
          </div>
          <div style="flex: 1; min-width: 300px;">
            <h2>Gufolo 1 - Family Apartment</h2>
            <p class="lead" style="font-size: 1.1rem; color: var(--color-primary); margin-bottom: 1rem;">Per famiglie, gruppi e chi ama lo spazio.</p>
            <p style="margin-bottom: 1.5rem; color: var(--color-text-muted);">
              Un trilocale luminoso che ti accoglie con il calore di una vera casa. La cucina abitabile è il cuore dell'appartamento, perfetta per chi ama cucinare anche in vacanza.
            </p>
            <ul style="margin-bottom: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
              <li>✓ 4 Posti Letto</li>
              <li>✓ Cucina Completa</li>
              <li>✓ Lavatrice</li>
              <li>✓ WiFi Fibra</li>
              <li>✓ Animali Ammessi</li>
              <li>✓ Check-in Autonomo</li>
            </ul>
            <a href="/richiesta-soggiorno/?apt=gufolo1" class="btn" data-link>Richiedi Disponibilità</a>
          </div>
        </article>

        <hr style="border: 0; border-top: 1px solid rgba(0,0,0,0.1);">

        <!-- Gufolo 2 -->
        <article class="apartment-detail" style="display: flex; gap: 3rem; align-items: center; flex-wrap: wrap; flex-direction: row-reverse;">
          <div style="flex: 1; min-width: 300px;">
            <img src="https://placehold.co/800x600/8C3A3A/F9F7F2?text=Gufolo+2+Suite" alt="Gufolo 2" style="border-radius: var(--border-radius); box-shadow: var(--shadow-md);">
          </div>
          <div style="flex: 1; min-width: 300px;">
            <h2>Gufolo 2 - Romantic & Business Suite</h2>
            <p class="lead" style="font-size: 1.1rem; color: var(--color-primary); margin-bottom: 1rem;">Per coppie, single e smart workers.</p>
            <p style="margin-bottom: 1.5rem; color: var(--color-text-muted);">
              Un nido silenzioso affacciato su una corte interna privata. Qui il caos della città rimane fuori, permettendoti di lavorare o rilassarti in totale pace.
            </p>
             <ul style="margin-bottom: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
              <li>✓ 2 Posti Letto</li>
              <li>✓ Angolo Cottura</li>
              <li>✓ Scrivania Dedicata</li>
              <li>✓ WiFi Fibra</li>
              <li>✓ Aria Condizionata</li>
              <li>✓ Silenzio Garantito</li>
            </ul>
            <a href="/richiesta-soggiorno/?apt=gufolo2" class="btn" data-link>Richiedi Disponibilità</a>
          </div>
        </article>

      </div>
    </section>
  `;
}
