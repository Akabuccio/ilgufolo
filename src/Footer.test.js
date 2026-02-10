
import { describe, it, expect, beforeEach } from 'vitest'
import { Footer } from './components/Footer.js'

describe('Footer Component', () => {
    let container

    beforeEach(() => {
        container = document.createElement('div')
        container.innerHTML = Footer()
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    it('should render all navigation links', () => {
        const links = container.querySelectorAll('.footer-nav .nav-links a')
        expect(links.length).toBeGreaterThan(0)
    })

    it('should have correct Privacy Policy link with data-link attribute', () => {
        const privacyLink = container.querySelector('a[href="/privacy-policy"]')
        expect(privacyLink).not.toBeNull()
        expect(privacyLink.textContent).toBe('Privacy Policy')
        expect(privacyLink.hasAttribute('data-link')).toBe(true)
    })

    it('should have correct Cookie Policy link with data-link attribute', () => {
        const cookieLink = container.querySelector('a[href="/cookie-policy"]')
        expect(cookieLink).not.toBeNull()
        expect(cookieLink.textContent).toBe('Cookie Policy')
        expect(cookieLink.hasAttribute('data-link')).toBe(true)
    })

    it('should have correct Home link with data-link attribute', () => {
        const homeLink = container.querySelector('a[href="/"]')
        expect(homeLink).not.toBeNull()
        expect(homeLink.hasAttribute('data-link')).toBe(true)
    })
})
