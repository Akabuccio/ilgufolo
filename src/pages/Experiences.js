export function Experiences() {
  return `
    <!-- Hero Experience -->
    <header class="experience-hero">
      <div class="container">
        <h1>Soggiornare a Ferrara: Esperienze da Non Perdere</h1>
        <p>
          Storia, cultura e sapori autentici a pochi passi dai nostri appartamenti nel centro storico.
        </p>
      </div>
    </header>

    <section class="container" style="padding-bottom: 6rem;">
        
        <!-- Feature 1: Via Saraceno -->
        <article class="experience-card">
          <div class="experience-card-media">
             <img src="/images/experiences/via-saraceno.webp" 
                  alt="Via Saraceno, strada storica nel centro di Ferrara"
                  onerror="this.src='https://placehold.co/800x500/C5A065/FFF?text=Via+Saraceno'">
             <div class="experience-card-quote">
               <p>"La via più caratteristica del centro."</p>
             </div>
          </div>
          <div class="experience-card-content">
            <span class="experience-card-label">Lifestyle</span>
            <h2>Via Saraceno – A Due Passi dai Nostri Appartamenti</h2>
            <p class="lead">
              Soggiornare al Gufolo significa immergersi nell'atmosfera unica di una delle strade più antiche e vivaci di Ferrara.
            </p>
            <p>
              Qui troverai botteghe artigiane, enoteche storiche e piccoli ristoranti dove gustare la vera cucina ferrarese. 
              È il luogo perfetto per una passeggiata mattutina tra i profumi del forno o per un aperitivo serale in compagnia.
            </p>
            <ul class="experience-feature-list">
              <li><span>★</span> Shopping artigianale</li>
              <li><span>★</span> Enoteche e Ristoranti tipici</li>
              <li><span>★</span> Atmosfera medievale intatta</li>
            </ul>
            <div class="apt-link-experiences">
              <a href="/appartamenti/" data-link>→ Scopri i nostri appartamenti in zona</a>
            </div>
          </div>
        </article>

        <!-- Feature 2: Castello Estense -->
        <article class="experience-card inverted">
          <div class="experience-card-media">
             <img src="/images/experiences/castello-estense.webp" 
                  alt="Castello Estense, simbolo di Ferrara con le torri e il fossato"
                  onerror="this.src='https://placehold.co/800x500/2F4F4F/FFF?text=Castello+Estense'">
          </div>
          <div class="experience-card-content">
             <span class="experience-card-label">Iconico</span>
            <h2>Castello Estense – Simbolo di Ferrara</h2>
            <p class="lead">
              A soli 5 minuti a piedi dal tuo appartamento sorge il simbolo indiscusso della città.
            </p>
            <p>
              Un imponente castello medievale circondato dall'acqua, che racconta secoli di storia della famiglia d'Este. 
              Visitare le sue sale, le prigioni e salire sulla Torre dei Leoni è un'esperienza imperdibile per chi visita Ferrara.
            </p>
            <a href="https://www.castelloestense.it/" target="_blank" rel="noopener" class="btn btn-outline">Visita il Sito Ufficiale</a>
          </div>
        </article>

    </section>

    <!-- Call to Action -->
    <section class="experience-cta">
      <div class="container">
        <h2>Pronto a scoprire Ferrara?</h2>
        <p>Prenota il tuo appartamento nel centro storico e vivi queste esperienze indimenticabili.</p>
        <a href="/appartamenti/" class="btn" data-link>Scopri i Nostri Appartamenti</a>
      </div>
    </section>
  `;
}
