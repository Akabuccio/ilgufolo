import { ApartmentCard } from '../components/ApartmentCard.js';

export function Home() {
  return `
    <!-- Fluid Hero Section -->
    <section class="hero-fluid">
      <div class="hero-bg">
        <!-- Clean dark luxury placeholder for better text legibility -->
        <img src="https://placehold.co/1920x1080/2a1a1f/2a1a1f?text=%20" alt="Via Saraceno Atmosphere" loading="eager" style="object-fit: cover;">
      </div>
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <h1 style="color: white;">La tua casa nel cuore<br>medievale di Ferrara</h1>
        <p style="font-size: 1.4rem; font-weight: 300; margin-bottom: 2.5rem; color: rgba(255,255,255,0.9);">
            Vivi l'eleganza. Respira la storia. <br>
            Soggiorni esclusivi per professionisti e viaggiatori lenti.
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
            <a href="/richiesta-soggiorno/" class="btn" style="background-color: var(--color-primary);">Richiedi Preventivo</a>
            <a href="#appartamenti" class="btn btn-outline" style="border-color: white; color: white;">Scopri le Suite</a>
        </div>
      </div>
    </section>

    <!-- Overlapping Gallery Section (Advanced Component) -->
    <section id="appartamenti" class="container" style="position: relative; z-index: 20;">
      <div class="luxury-gallery">
        
        <!-- CARD 1: GUFOLO Family (Deep Blue/Teal Accent) -->
        <article class="gallery-card">
          <div class="gallery-image-container">
             <img src="https://placehold.co/800x600/2F4F4F/FFF?text=Gufolo+Family+Apartment" alt="Gufolo 1 Interior">
          </div>
          <div class="gallery-details">
            <span style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; color: var(--color-text-muted);">Per Famiglie & Gruppi</span>
            <h3>Gufolo Family</h3>
            <p style="margin-bottom: 1.5rem; color: var(--color-text-muted);">
                Spazio, luce e una cucina da chef. Il rifugio ideale per chi vuole sentirsi a casa, con 4 posti letto e ogni comfort.
            </p>
            <ul style="display: flex; gap: 1rem; justify-content: center; list-style: none; margin-bottom: 2rem; color: var(--color-text-muted); font-size: 0.9rem;">
                <li>✦ 4 Ospiti</li>
                <li>✦ Cucina Abitabile</li>
                <li>✦ WiFi Fibra</li>
            </ul>
            <a href="/appartamenti/" class="btn-outline" data-link style="border-color: var(--color-secondary); color: var(--color-secondary);">Esplora Gufolo 1</a>
          </div>
        </article>

        <!-- CARD 2: GUFOLO Suite (Purple/Luxury Accent) -->
        <article class="gallery-card">
          <div class="gallery-image-container">
             <img src="https://placehold.co/800x600/66023C/FFF?text=Gufolo+Romantic+Suite" alt="Gufolo 2 Interior">
          </div>
          <div class="gallery-details">
            <span style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; color: var(--color-text-muted);">Per Coppie & Business</span>
            <h3 style="color: var(--color-tertiary);">Gufolo Suite</h3>
            <p style="margin-bottom: 1.5rem; color: var(--color-text-muted);">
                Silenzio assoluto e design raffinato. Una suite intima affacciata sulla corte interna, perfetta per lavorare o sognare.
            </p>
            <ul style="display: flex; gap: 1rem; justify-content: center; list-style: none; margin-bottom: 2rem; color: var(--color-text-muted); font-size: 0.9rem;">
                <li>✦ 2 Ospiti</li>
                <li>✦ Scrivania Smart</li>
                <li>✦ Corte Interna</li>
            </ul>
            <a href="/appartamenti/" class="btn-outline" data-link style="border-color: var(--color-tertiary); color: var(--color-tertiary);">Esplora Gufolo 2</a>
          </div>
        </article>

      </div>
    </section>

    <!-- Magazine Section: Via Saraceno -->
    <section class="magazine-section">
        <div class="container">
            <div class="magazine-grid">
                <div class="magazine-content">
                    <span style="color: var(--color-tertiary); font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Lifestyle</span>
                    <h2 class="text-gradient" style="margin-top: 0.5rem;">Via Saraceno:<br>Il Salotto di Ferrara</h2>
                    <p class="lead" style="font-size: 1.2rem; margin-bottom: 1.5rem; color: var(--color-dark);">
                        Uscire dal portone e trovarsi nel cuore della movida elegante.
                    </p>
                    <p style="margin-bottom: 2rem; color: var(--color-text-muted);">
                        Botughe artigiane, enoteche storiche e il profumo del pane appena sfornato. 
                        Soggiornare qui significa vivere la città come un vero ferrarese, dimenticando l'auto e riscoprendo il piacere di camminare.
                    </p>
                    <a href="/esperienze-ferrara/" class="btn-outline" data-link style="border-color: var(--color-dark);">Vivi l'Esperienza</a>
                </div>
                <div class="magazine-image">
                    <img src="https://placehold.co/800x1000/C5A065/FFF?text=Via+Saraceno+Vibe" alt="Via Saraceno Lifestyle">
                </div>
            </div>
        </div>
    </section>

    <!-- Castle Section (Reverse Grid) -->
    <section class="section-fluid" style="padding-bottom: 8rem;">
        <div class="container">
            <div class="magazine-grid" style="grid-template-columns: 1.5fr 1fr;">
                 <div class="magazine-image" style="order: 2;">
                    <!-- Placeholder for Castle Image -->
                    <img src="https://placehold.co/800x600/121212/FFF?text=Castello+Estense+Night" alt="Castello Estense">
                </div>
                <div class="magazine-content" style="order: 1;">
                     <span style="color: var(--color-primary); font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Cultura & Storia</span>
                    <h2 style="margin-top: 0.5rem;">A due passi dalla Storia</h2>
                    <p style="margin-bottom: 2rem; color: var(--color-text-muted);">
                        Il maestoso Castello Estense è a soli 5 minuti a piedi. 
                        Immergiti nel Rinascimento senza stress, con la libertà di tornare a casa per una pausa quando vuoi.
                    </p>
                </div>
            </div>
        </div>
    </section>
  `;
}
