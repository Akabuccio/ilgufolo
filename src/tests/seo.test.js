/**
 * SEO Tests for Il Gufolo Website
 * Validates meta tags, Schema.org JSON-LD, alt texts, and internal linking
 */

import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import {
    seoConfig,
    getSeoConfig,
    getSchemaForPath,
    lodgingBusinessSchema,
    apartmentSchemas
} from '../seo-config';

describe('SEO Configuration', () => {

    describe('Page Meta Tags', () => {

        it('should have unique title for each page', () => {
            const titles = Object.values(seoConfig).map(config => config.title);
            const uniqueTitles = new Set(titles);
            expect(uniqueTitles.size).toBe(titles.length);
        });

        it('should have title under 60 characters for each page', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.title.length).toBeLessThanOrEqual(60);
            });
        });

        it('should have description under 160 characters for each page', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.description.length).toBeLessThanOrEqual(160);
            });
        });

        it('should have correct title for apartments page', () => {
            const apartmentsConfig = getSeoConfig('/appartamenti/');
            expect(apartmentsConfig.title).toBe('Appartamenti di Charme a Ferrara | Il Gufolo');
        });

        it('should return correct config for path variations', () => {
            expect(getSeoConfig('/appartamenti').title).toBe('Appartamenti di Charme a Ferrara | Il Gufolo');
            expect(getSeoConfig('/appartamenti/').title).toBe('Appartamenti di Charme a Ferrara | Il Gufolo');
        });

    });

    describe('Schema.org JSON-LD', () => {

        it('should have valid LodgingBusiness schema', () => {
            expect(lodgingBusinessSchema['@context']).toBe('https://schema.org');
            expect(lodgingBusinessSchema['@type']).toBe('LodgingBusiness');
            expect(lodgingBusinessSchema.name).toBe('Il Gufolo');
        });

        it('should have correct Ferrara coordinates', () => {
            expect(lodgingBusinessSchema.geo.latitude).toBeCloseTo(44.8378, 4);
            expect(lodgingBusinessSchema.geo.longitude).toBeCloseTo(11.6199, 4);
        });

        it('should have all required amenities in English', () => {
            const amenityNames = lodgingBusinessSchema.amenityFeature.map(a => a.name);
            expect(amenityNames).toContain('High-Speed WiFi');
            expect(amenityNames).toContain('Fully Equipped Kitchen');
            expect(amenityNames).toContain('Air Conditioning');
            expect(amenityNames).toContain('Pet Friendly');
        });

        it('should have two apartment schemas', () => {
            expect(apartmentSchemas.length).toBe(2);
        });

        it('should have correct Gufolo Family apartment details', () => {
            const gufoloFamily = apartmentSchemas.find(a => a.name === 'Gufolo Family');
            expect(gufoloFamily).toBeDefined();
            expect(gufoloFamily['@type']).toBe('Apartment');
            expect(gufoloFamily.numberOfRooms).toBe(3);
            expect(gufoloFamily.occupancy.value).toBe(4);
        });

        it('should have correct Gufolo Suite apartment details', () => {
            const gufoloSuite = apartmentSchemas.find(a => a.name === 'Gufolo Suite');
            expect(gufoloSuite).toBeDefined();
            expect(gufoloSuite['@type']).toBe('Apartment');
            expect(gufoloSuite.numberOfRooms).toBe(1);
            expect(gufoloSuite.occupancy.value).toBe(2);
        });

        it('should return multiple schemas for apartments page', () => {
            const schemas = getSchemaForPath('/appartamenti/');
            expect(schemas.length).toBeGreaterThan(1);
            expect(schemas[0]['@type']).toBe('LodgingBusiness');
        });

    });

    describe('International SEO Configuration', () => {

        it('should have English title for each page', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.titleEN).toBeDefined();
                expect(config.titleEN.length).toBeGreaterThan(0);
            });
        });

        it('should have English description for each page', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.descriptionEN).toBeDefined();
                expect(config.descriptionEN.length).toBeGreaterThan(0);
            });
        });

        it('should have English titles under 60 characters', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.titleEN.length).toBeLessThanOrEqual(60);
            });
        });

        it('should have English descriptions under 160 characters', () => {
            Object.entries(seoConfig).forEach(([path, config]) => {
                expect(config.descriptionEN.length).toBeLessThanOrEqual(160);
            });
        });

        it('should have inLanguage property in LodgingBusiness schema', () => {
            expect(lodgingBusinessSchema.inLanguage).toBeDefined();
            expect(lodgingBusinessSchema.inLanguage).toContain('it');
            expect(lodgingBusinessSchema.inLanguage).toContain('en');
        });

        it('should have inLanguage property in apartment schemas', () => {
            apartmentSchemas.forEach(apartment => {
                expect(apartment.inLanguage).toBeDefined();
                expect(apartment.inLanguage).toContain('en');
            });
        });

        it('should have alternateName in LodgingBusiness schema', () => {
            expect(lodgingBusinessSchema.alternateName).toBeDefined();
            expect(lodgingBusinessSchema.alternateName).toContain('Charming Apartments');
        });

        it('should have English amenities in LodgingBusiness schema', () => {
            const amenityNames = lodgingBusinessSchema.amenityFeature.map(a => a.name);
            expect(amenityNames).toContain('High-Speed WiFi');
            expect(amenityNames).toContain('Fully Equipped Kitchen');
            expect(amenityNames).toContain('Air Conditioning');
            expect(amenityNames).toContain('Pet Friendly');
            expect(amenityNames).toContain('Self Check-in');
        });

    });

});

describe('Page Content SEO', () => {

    describe('Apartments Page', () => {
        let pageContent;

        beforeAll(async () => {
            const { Apartments } = await import('../pages/Apartments');
            pageContent = Apartments();
        });

        it('should have H2 with "Centro Storico" keyword for Gufolo Family', () => {
            expect(pageContent).toContain('Gufolo Family – Appartamento nel Centro Storico di Ferrara');
        });

        it('should have H2 with "Soggiornare a Ferrara" keyword for Gufolo Suite', () => {
            expect(pageContent).toContain('Gufolo Suite – Soggiornare a Ferrara in Coppia');
        });

        it('should have geo-localized alt text for main images', () => {
            expect(pageContent).toContain('alt="Soggiorno accogliente appartamento Gufolo Family vicino al Castello Estense Ferrara"');
            expect(pageContent).toContain('alt="Open space moderno Gufolo Suite nel centro storico di Ferrara"');
        });

        it('should have English alt text data attributes for main images', () => {
            expect(pageContent).toContain('data-alt-en="Cozy living room Gufolo Family apartment near Castello Estense Ferrara"');
            expect(pageContent).toContain('data-alt-en="Modern open space Gufolo Suite in Ferrara historic center"');
        });

        it('should have internal link to Experiences page', () => {
            expect(pageContent).toContain('href="/esperienze-ferrara/"');
            expect(pageContent).toContain('Scopri cosa fare a Ferrara durante il tuo soggiorno');
        });

    });

    describe('Home Page', () => {
        let pageContent;

        beforeAll(async () => {
            const { Home } = await import('../pages/Home');
            pageContent = Home();
        });

        it('should have H2 with "Appartamenti nel Centro Storico" keyword', () => {
            expect(pageContent).toContain('Appartamenti nel Centro Storico di Ferrara');
        });

        it('should have H2 with "Soggiornare a Ferrara" keyword', () => {
            expect(pageContent).toContain('Soggiornare a Ferrara: Esperienze Uniche');
        });

    });

    describe('Experiences Page', () => {
        let pageContent;

        beforeAll(async () => {
            const { Experiences } = await import('../pages/Experiences');
            pageContent = Experiences();
        });

        it('should have H1 with "Soggiornare a Ferrara" keyword', () => {
            expect(pageContent).toContain('Soggiornare a Ferrara: Esperienze da Non Perdere');
        });

        it('should have internal link to Apartments page', () => {
            expect(pageContent).toContain('href="/appartamenti/"');
            expect(pageContent).toContain('Scopri i Nostri Appartamenti');
        });

    });

});
