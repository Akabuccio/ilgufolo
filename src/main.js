import './style.css'
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Home } from './pages/Home.js'
import { Apartments } from './pages/Apartments.js'
import { Experiences } from './pages/Experiences.js'
import { Contacts } from './pages/Contacts.js'
import { initGalleryInteractions, cleanupGallery } from './utils/gallery.js'
import { updatePageSEO } from './seo-config.js'
import { PrivacyPolicy } from './pages/PrivacyPolicy.js'
import { CookiePolicy } from './pages/CookiePolicy.js'
import { CookieBanner } from './components/CookieBanner.js'

function App() {
  const app = document.querySelector('#app')

  if (!app) return

  // Router Logic
  const routes = {
    '/': Home,
    '/appartamenti': Apartments,
    '/esperienze-ferrara': Experiences,
    '/contatti': Contacts,
    '/privacy-policy': PrivacyPolicy,
    '/cookie-policy': CookiePolicy,
    '/richiesta-soggiorno': () => `
        <section class="container" style="padding: 6rem 0; text-align: center;">
          <h1>Contattaci</h1>
          <p>Modulo di contatto in arrivo...</p>
          <a href="/" class="btn" data-link>Torna alla Home</a>
        </section>
      `
  }

  function router() {
    const path = window.location.pathname
    // Normalize path: remove trailing slash for consistent matching
    // Exception: root path '/' should remain '/'
    const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path

    let view = routes[normalizedPath]

    // Simple fallback for development / loose matching
    if (!view) {
      if (normalizedPath.startsWith('/appartamenti')) view = Apartments
      else if (normalizedPath.startsWith('/esperienze')) view = Experiences
      else if (normalizedPath.startsWith('/contatti')) view = Contacts
      else if (normalizedPath.startsWith('/privacy')) view = PrivacyPolicy
      else if (normalizedPath.startsWith('/cookie')) view = CookiePolicy
      else if (normalizedPath.startsWith('/richiesta')) view = routes['/richiesta-soggiorno']
      else view = Home
    }

    // Set route-specific class on body for styling
    document.body.className = ''
    if (path === '/') document.body.classList.add('page-home')
    else if (path.includes('appartamenti')) document.body.classList.add('page-apartments')
    else if (path.includes('esperienze')) document.body.classList.add('page-experiences')

    app.innerHTML = `
      ${Header()}
      <main>
        ${view ? view() : Home()}
      </main>
      ${Footer()}
      ${CookieBanner()}
    `

    // Re-attach mobile menu listeners after render
    initMobileMenu()
    initGalleryInteractions()
    handleScroll()

    // Update SEO meta tags and Schema.org
    updatePageSEO(path)
  }

  function handleScroll() {
    const header = document.querySelector('.site-header')
    if (!header) return

    const scrollHandler = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', scrollHandler)
    // Run once on init
    scrollHandler()
  }

  function navigateTo(url) {
    history.pushState(null, null, url)
    router()
    window.scrollTo(0, 0)
  }

  // Handle browser back/forward
  window.addEventListener('popstate', router)

  // Handle programmatic navigation
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault()
        navigateTo(e.target.href)
      }
      // Handle clickable cards with data-href attribute
      const card = e.target.closest('[data-href]')
      if (card) {
        e.preventDefault()
        navigateTo(card.dataset.href)
      }
      // Also handle links inside Header nav if they match internal routes
      if (e.target.closest('nav a') || e.target.closest('.logo')) {
        const anchor = e.target.closest('a')
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('/')) {
          e.preventDefault()
          navigateTo(href)
        }
      }
    })

    router()
  })



  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle')
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-active')
      })
    }
  }
}

// Robust initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App)
} else {
  App()
}
