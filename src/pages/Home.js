import { ApartmentCard } from '../components/ApartmentCard.js';

export function Home() {
  return `
    <!-- ============================================ -->
    <!-- HERO SECTION: Liquid Glass + Parallax Effect -->
    <!-- ============================================ -->
    <section class="hero-liquid">
      <div class="hero-parallax-bg">
        <img src="/images/gufolo-suite/soggiorno-cucina-gufolo-ferrara.jpg" 
             alt="Soggiorno luminoso con travi a vista - Il Gufolo Ferrara" 
             loading="eager">
      </div>
      
      <!-- Liquid Glass Overlay -->
      <div class="hero-glass-layer"></div>
      
      <div class="hero-content-fluid">
        <span class="hero-eyebrow">✦ Appartamenti di Charme a Ferrara ✦</span>
        <h1>La tua casa nel cuore<br>medievale di Ferrara</h1>
        <p class="hero-subtitle">
          Vivi l'eleganza. Respira la storia.<br>
          Soggiorni esclusivi per professionisti e viaggiatori lenti.
        </p>
        <div class="hero-cta-group">
          <!-- Richiedi Preventivo removed -->
          <a href="#appartamenti" class="btn btn-glass">Scopri le Suite</a>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <span>Scorri</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- APARTMENTS SECTION: Fluid Cards with Badges -->
    <!-- ============================================ -->
    <section id="appartamenti" class="apartments-fluid">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Le Nostre Suite</span>
          <h2>Appartamenti nel Centro Storico di Ferrara</h2>
          <p class="section-lead">Due appartamenti unici per soggiornare a Ferrara in modo indimenticabile.</p>
        </div>

        <div class="apartment-cards-fluid">
          
          <!-- GUFOLO FAMILY CARD -->
          <article class="apartment-card-fluid" data-href="/appartamenti/">
            <!-- Capacity Badge -->
            <div class="capacity-badge badge-family">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Perfect for Families</span>
            </div>
            
            <div class="card-image-wrapper">
              <img src="/images/gufolo-family/gufolo-ferrara-soggiorno-accogliente.jpg" 
                   alt="Gufolo Family - Soggiorno Accogliente" 
                   loading="lazy">
              <div class="card-image-overlay"></div>
            </div>
            
            <div class="card-content-fluid">
              <div class="card-meta">
                <span class="apt-type">Appartamento Familiare</span>
                <span class="apt-capacity">4 Ospiti</span>
              </div>
              <h3>Gufolo Family</h3>
              <p>Spazio, luce e una cucina da chef. Il rifugio ideale per chi vuole sentirsi a casa.</p>
              
              <ul class="amenities-pills">
                <li>Cucina Abitabile</li>
                <li>WiFi Fibra</li>
                <li>Lavatrice</li>
                <li>Pet Friendly</li>
              </ul>
              
              <a href="/appartamenti/" class="btn-explore" data-link>
                <span>Esplora la Suite</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>

          <!-- GUFOLO SUITE CARD -->
          <article class="apartment-card-fluid" data-href="/appartamenti/">
            <!-- Capacity Badge -->
            <div class="capacity-badge badge-romantic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Romantic Suite</span>
            </div>
            
            <div class="card-image-wrapper">
              <img src="/images/gufolo-suite/open-space-gufolo-ferrara.jpg" 
                   alt="Gufolo Suite - Open Space Romantico" 
                   loading="lazy">
              <div class="card-image-overlay"></div>
            </div>
            
            <div class="card-content-fluid">
              <div class="card-meta">
                <span class="apt-type">Suite Romantica</span>
                <span class="apt-capacity">2 Ospiti</span>
              </div>
              <h3>Gufolo Suite</h3>
              <p>Silenzio assoluto e design raffinato. Perfetta per coppie e smart workers.</p>
              
              <ul class="amenities-pills">
                <li>Corte Interna</li>
                <li>Scrivania Smart</li>
                <li>WiFi Fibra</li>
                <li>A/C</li>
              </ul>
              
              <a href="/appartamenti/" class="btn-explore" data-link>
                <span>Esplora la Suite</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
          
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ESPERIENZE A FERRARA: Parallax Carousel -->
    <!-- ============================================ -->
    <section class="experiences-parallax">
      <div class="parallax-bg" style="background-image: url('https://images.unsplash.com/photo-1548678673-1c5ffc04f62a?w=1920&q=80');"></div>
      <div class="parallax-overlay"></div>
      
      <div class="container experiences-content">
        <div class="section-header section-header-light">
          <span class="section-label">Lifestyle Ferrara</span>
          <h2>Soggiornare a Ferrara: Esperienze Uniche</h2>
          <p class="section-lead">A pochi passi dal tuo appartamento nel centro storico, un mondo di esperienze ti aspetta.</p>
        </div>
        
        <div class="experience-carousel" id="experienceCarousel">
          
          <!-- Experience Card 1: Via Saraceno -->
          <article class="experience-slide">
            <div class="exp-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h4>Via Saraceno</h4>
            <p>Il salotto bohémien di Ferrara. Botteghe artigiane, enoteche e il profumo del pane dal forno.</p>
            <span class="exp-distance">📍 A 0 minuti</span>
          </article>
          
          <!-- Experience Card 2: Castello Estense -->
          <article class="experience-slide">
            <div class="exp-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="10" width="18" height="12" rx="2"/>
                <path d="M12 2L2 10h20L12 2z"/>
                <path d="M7 22v-4h4v4M13 22v-4h4v4"/>
              </svg>
            </div>
            <h4>Castello Estense</h4>
            <p>Il simbolo di Ferrara. Secoli di storia degli Este a soli 5 minuti a piedi.</p>
            <span class="exp-distance">📍 5 min a piedi</span>
          </article>
          
          <!-- Experience Card 3: Cattedrale -->
          <article class="experience-slide">
            <div class="exp-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h4>Cattedrale</h4>
            <p>Capolavoro romanico-gotico. La facciata in marmo rosa a pochi passi.</p>
            <span class="exp-distance">📍 3 min a piedi</span>
          </article>
          
          <!-- Experience Card 4: Mura Estensi -->
          <article class="experience-slide">
            <div class="exp-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h4>Mura Estensi</h4>
            <p>9 km di percorso ciclabile panoramico. Noleggia una bici e scopri Ferrara.</p>
            <span class="exp-distance">📍 10 min a piedi</span>
          </article>
          
        </div>
        
        <div class="experiences-cta">
          <a href="/esperienze-ferrara/" class="btn btn-glass-light" data-link>
            Scopri tutte le Esperienze
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- LONG STAY CTA SECTION -->
    <!-- ============================================ -->
    <section class="longstay-section">
      <div class="container">
        <div class="longstay-card">
          <div class="longstay-content">
            <span class="section-label">Offerta Speciale</span>
            <h2>Soggiorni Lunghi?<br>Prezzi su Misura.</h2>
            <p>Smart workers, studenti, professionisti in trasferta. Contattaci per un preventivo personalizzato a partire da 30 giorni.</p>
            <!-- Richiedi Preventivo removed from longstay -->
          </div>
          <div class="longstay-visual">
            <div class="floating-badge">
              <span class="discount">-20%</span>
              <span class="period">Mensile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
