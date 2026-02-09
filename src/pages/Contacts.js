export function Contacts() {
    return `
    <header class="experience-hero" style="min-height: 40vh;">
      <div class="container">
        <h1>Contatti</h1>
        <p>Siamo a tua disposizione per qualsiasi informazione.</p>
      </div>
    </header>

    <section class="container" style="padding: 4rem 0 6rem; text-align: center;">
      <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
        
        <div class="contact-item">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">📍</span>
          <h3>Dove Siamo</h3>
          <p style="color: var(--color-text-muted);">
            Via Saraceno, 75<br>
            44121 Ferrara (FE)
          </p>
        </div>

        <div class="contact-item">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">📞</span>
          <h3>Telefono</h3>
          <p>
            <a href="tel:+393383022845" style="color: var(--color-primary); text-decoration: none; font-size: 1.1rem;">
              +39 338 302 2845
            </a>
          </p>
        </div>

        <div class="contact-item">
          <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">✉️</span>
          <h3>Email</h3>
          <p>
            <a href="mailto:ilgufolo@gmail.com" style="color: var(--color-primary); text-decoration: none; font-size: 1.1rem;">
              ilgufolo@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  `;
}
