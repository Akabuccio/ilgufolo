/**
 * SEO Configuration Module for Il Gufolo
 * Manages meta tags, Schema.org JSON-LD, and page-specific SEO settings
 */

// Ferrara coordinates
const FERRARA_COORDS = {
    latitude: 44.8378,
    longitude: 11.6199
};

// SEO configuration for each page (bilingual: IT/EN)
export const seoConfig = {
    '/': {
        title: 'Il Gufolo | Appartamenti nel Centro di Ferrara',
        description: 'Scopri Il Gufolo: appartamenti di charme nel centro storico di Ferrara. Soggiorna a due passi dal Castello Estense, WiFi fibra, cucina attrezzata.',
        titleEN: 'Il Gufolo | Charming Apartments in Ferrara, Italy',
        descriptionEN: 'Discover Il Gufolo: boutique apartments in Ferrara\'s historic center. Stay near Castello Estense, fiber WiFi, fully equipped kitchen.',
        schema: 'lodgingBusiness'
    },
    '/appartamenti/': {
        title: 'Appartamenti di Charme a Ferrara | Il Gufolo',
        description: 'Due appartamenti esclusivi nel cuore di Ferrara: Gufolo Family per famiglie e Suite per coppie. Prenota il tuo soggiorno indimenticabile.',
        titleEN: 'Charming Apartments in Ferrara, Italy | Il Gufolo',
        descriptionEN: 'Two exclusive apartments in the heart of Ferrara: Gufolo Family for families and Suite for couples. Book your unforgettable Italian stay.',
        schema: 'apartments'
    },
    '/esperienze-ferrara/': {
        title: 'Esperienze a Ferrara | Il Gufolo',
        description: 'Cosa fare a Ferrara: dal Castello Estense alle vie medievali. Scopri le esperienze a pochi passi dagli appartamenti Il Gufolo.',
        titleEN: 'Things to Do in Ferrara | Il Gufolo',
        descriptionEN: 'What to do in Ferrara: from Castello Estense to medieval streets. Discover experiences near Il Gufolo apartments.',
        schema: 'lodgingBusiness'
    },
    '/richiesta-soggiorno/': {
        title: 'Richiedi Soggiorno | Il Gufolo Ferrara',
        description: 'Contattaci per prenotare il tuo soggiorno negli appartamenti Il Gufolo nel centro storico di Ferrara.',
        titleEN: 'Book Your Stay | Il Gufolo Ferrara',
        descriptionEN: 'Contact us to book your stay at Il Gufolo apartments in Ferrara\'s historic center.',
        schema: 'lodgingBusiness'
    }
};

// LodgingBusiness Schema (bilingual IT/EN)
export const lodgingBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Il Gufolo",
    "description": "Appartamenti di charme nel centro storico di Ferrara, a pochi passi dal Castello Estense",
    "alternateName": "Il Gufolo - Charming Apartments Ferrara",
    "inLanguage": ["it", "en"],
    "url": "https://ilgufolo.it",
    "telephone": "+39 XXX XXX XXXX",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Saraceno",
        "addressLocality": "Ferrara",
        "postalCode": "44121",
        "addressRegion": "Emilia-Romagna",
        "addressCountry": "IT"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": FERRARA_COORDS.latitude,
        "longitude": FERRARA_COORDS.longitude
    },
    "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fully Equipped Kitchen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Washing Machine", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Self Check-in", "value": true }
    ],
    "priceRange": "€65 - €100"
};

// Apartment Schemas (bilingual IT/EN)
export const apartmentSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Apartment",
        "name": "Gufolo Family",
        "description": "Bright 3-room apartment in Ferrara's historic center, perfect for families up to 4 guests",
        "inLanguage": ["it", "en"],
        "numberOfRooms": 3,
        "occupancy": {
            "@type": "QuantitativeValue",
            "value": 4,
            "unitText": "guests"
        },
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": 65,
            "unitCode": "MTK"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Eat-in Kitchen", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Washing Machine", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Exposed Beams", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Self Check-in", "value": true }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Saraceno",
            "addressLocality": "Ferrara",
            "postalCode": "44121",
            "addressCountry": "IT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": FERRARA_COORDS.latitude,
            "longitude": FERRARA_COORDS.longitude
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "Apartment",
        "name": "Gufolo Suite",
        "description": "Suite in Ferrara's historic center, ideal for couples and smart workers",
        "inLanguage": ["it", "en"],
        "numberOfRooms": 1,
        "occupancy": {
            "@type": "QuantitativeValue",
            "value": 2,
            "unitText": "guests"
        },
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": 40,
            "unitCode": "MTK"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "High-Speed WiFi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Smart Working Desk", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Kitchenette", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Private Courtyard", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Self Check-in", "value": true }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Saraceno",
            "addressLocality": "Ferrara",
            "postalCode": "44121",
            "addressCountry": "IT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": FERRARA_COORDS.latitude,
            "longitude": FERRARA_COORDS.longitude
        }
    }
];

/**
 * Get the SEO config for a given path
 */
export function getSeoConfig(path) {
    // Normalize path
    let normalizedPath = path;
    if (!normalizedPath.endsWith('/') && normalizedPath !== '/') {
        normalizedPath += '/';
    }

    // Find matching config
    if (seoConfig[normalizedPath]) {
        return seoConfig[normalizedPath];
    }

    // Fallback matching
    if (path.includes('appartamenti')) return seoConfig['/appartamenti/'];
    if (path.includes('esperienze')) return seoConfig['/esperienze-ferrara/'];
    if (path.includes('richiesta')) return seoConfig['/richiesta-soggiorno/'];

    return seoConfig['/'];
}

/**
 * Get Schema.org JSON-LD for a given path
 */
export function getSchemaForPath(path) {
    const config = getSeoConfig(path);

    if (config.schema === 'apartments') {
        return [lodgingBusinessSchema, ...apartmentSchemas];
    }

    return [lodgingBusinessSchema];
}

/**
 * Update document head with SEO meta tags
 */
export function updatePageSEO(path) {
    const config = getSeoConfig(path);

    // Update title
    document.title = config.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Add English meta description for international SEO
    let metaDescriptionEN = document.querySelector('meta[name="description:en"]');
    if (!metaDescriptionEN) {
        metaDescriptionEN = document.createElement('meta');
        metaDescriptionEN.setAttribute('name', 'description:en');
        document.head.appendChild(metaDescriptionEN);
    }
    metaDescriptionEN.setAttribute('content', config.descriptionEN);

    // Add OpenGraph locale tags for international targeting
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
        const newOgLocale = document.createElement('meta');
        newOgLocale.setAttribute('property', 'og:locale');
        newOgLocale.setAttribute('content', 'it_IT');
        document.head.appendChild(newOgLocale);
    }

    // Add alternate locales for English
    const ogLocaleAltUS = document.querySelector('meta[property="og:locale:alternate"][content="en_US"]');
    if (!ogLocaleAltUS) {
        const newOgLocaleAltUS = document.createElement('meta');
        newOgLocaleAltUS.setAttribute('property', 'og:locale:alternate');
        newOgLocaleAltUS.setAttribute('content', 'en_US');
        document.head.appendChild(newOgLocaleAltUS);

        const newOgLocaleAltGB = document.createElement('meta');
        newOgLocaleAltGB.setAttribute('property', 'og:locale:alternate');
        newOgLocaleAltGB.setAttribute('content', 'en_GB');
        document.head.appendChild(newOgLocaleAltGB);
    }

    // Add OpenGraph title and description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', config.titleEN);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', config.descriptionEN);

    // Update or create Schema.org JSON-LD
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
    }

    const schemas = getSchemaForPath(path);
    schemaScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2);
}
