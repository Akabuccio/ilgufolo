
import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'

export function CookiePolicy() {
    return `
    <div class="page-content">
      <section class="container" style="padding: 6rem 1rem; max-width: 800px; margin: 0 auto;">
        <h1 style="margin-bottom: 2rem;">Cookie Policy</h1>
        
        <p><strong>Ultimo aggiornamento:</strong> ${new Date().toLocaleDateString('it-IT')}</p>

        <p>Questa Cookie Policy spiega cosa sono i cookie e come li usiamo su <strong>Il Gufolo</strong>.</p>

        <h2 style="margin-top: 2rem;">Cosa sono i cookie?</h2>
        <p>I cookie sono piccoli file di testo che i siti salvano sul tuo computer o telefono mentre navighi. Servono a far funzionare le cose (es. ricordare che hai cliccato "accetta") o a capire come viene usato il sito.</p>

        <h2 style="margin-top: 2rem;">Che cookie usiamo?</h2>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
            <h3 style="margin-top: 0;">1. Cookie Tecnici (Essenziali)</h3>
            <p>Questi servono per far funzionare il sito. Senza di loro, alcune parti non andrebbero. Non serve il tuo consenso per questi.</p>
            <ul>
                <li><strong>GDPR Consent:</strong> Un piccolo cookie per ricordare che hai chiuso il banner della privacy, così non te lo mostriamo ogni volta.</li>
            </ul>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
            <h3 style="margin-top: 0;">2. Terze Parti (Google Fonts)</h3>
            <p>Usiamo i font di Google per rendere i testi leggibili e belli. Google potrebbe ricevere il tuo indirizzo IP per fornirti i font, ma non installiamo cookie di tracciamento pubblicitario tramite questo servizio.</p>
        </div>

        <h2 style="margin-top: 2rem;">Come gestire i cookie?</h2>
        <p>Puoi disattivare i cookie direttamente dalle impostazioni del tuo browser. Tieni conto che disabilitando tutto, il sito potrebbe non funzionare perfettamente.</p>

        <div style="margin-top: 3rem; text-align: center;">
            <a href="/" class="btn" data-link>Torna alla Home</a>
        </div>
      </section>
    </div>
  `
}
