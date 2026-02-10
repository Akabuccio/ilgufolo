
import { Header } from '../components/Header.js'
import { Footer } from '../components/Footer.js'

export function PrivacyPolicy() {
    return `
    <div class="page-content">
      <section class="container" style="padding: 6rem 1rem; max-width: 800px; margin: 0 auto;">
        <h1 style="margin-bottom: 2rem;">Sostanzialmente... la tua Privacy</h1>
        
        <p><strong>Ultimo aggiornamento:</strong> ${new Date().toLocaleDateString('it-IT')}</p>

        <p>Benvenuto su <strong>Il Gufolo</strong>. La tua privacy è una cosa seria per noi, ma non vogliamo annoiarti con legalese incomprensibile. Ecco come trattiamo i tuoi dati, in modo semplice e trasparente.</p>

        <h2 style="margin-top: 2rem;">1. Chi siamo (Titolare del Trattamento)</h2>
        <p>Il titolare del trattamento dei dati è: <strong>Il Gufolo - Appartamenti Vacanze</strong><br>
        Ferrara, Italia.<br>
        Per qualsiasi domanda, scrivici a: <a href="mailto:info@ilgufolo.it">info@ilgufolo.it</a></p>

        <h2 style="margin-top: 2rem;">2. Che dati raccogliamo?</h2>
        <p>Raccogliamo solo il minimo indispensabile per farti dormire sonni tranquilli:</p>
        <ul>
            <li><strong>Dati che ci dai tu:</strong> Quando ci contatti (nome, email, telefono) per chiedere informazioni o prenotare un soggiorno.</li>
            <li><strong>Dati tecnici:</strong> Indirizzo IP, tipo di browser (dati che il tuo computer scambia automaticamente con il nostro server per farti vedere il sito).</li>
        </ul>

        <h2 style="margin-top: 2rem;">3. Perché li raccogliamo?</h2>
        <p>Non vendiamo i tuoi dati a nessuno. Li usiamo solo per:</p>
        <ul>
            <li>Rispondere alle tue richieste di prenotazione.</li>
            <li>Adempiere agli obblighi di legge (es. registrazione ospiti per la Questura).</li>
            <li>Far funzionare questo sito in modo sicuro.</li>
        </ul>

        <h2 style="margin-top: 2rem;">4. Cookie</h2>
        <p>Usiamo cookie tecnici (per far funzionare il sito) e Google Fonts per renderlo carino. Non usiamo cookie di profilazione pubblicitaria o analitica invasiva. Per i dettagli tecnici, leggi la nostra <a href="/cookie-policy" data-link>Cookie Policy</a>.</p>

        <h2 style="margin-top: 2rem;">5. I tuoi diritti</h2>
        <p>In base al GDPR, hai il diritto di:</p>
        <ul>
            <li>Chiederci che dati abbiamo su di te.</li>
            <li>Chiederci di correggerli o cancellarli.</li>
            <li>Opporti al loro utilizzo.</li>
        </ul>
        <p>Basta mandarci una mail, e sistemiamo tutto.</p>

        <div style="margin-top: 3rem; text-align: center;">
            <a href="/" class="btn" data-link>Torna alla Home</a>
        </div>
      </section>
    </div>
  `
}
