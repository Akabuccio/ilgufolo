
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { initGalleryInteractions, cleanupGallery, galleryIntervals } from '../utils/gallery';

describe('Gallery Interactions', () => {
    let container;

    beforeEach(() => {
        // Setup DOM
        container = document.createElement('div');
        container.classList.add('apartment-detail');

        // Create Main Image
        const mainImg = document.createElement('img');
        mainImg.classList.add('main-gallery-image');
        mainImg.src = 'img1.jpg';
        container.appendChild(mainImg);

        // Create Mini Gallery (Thumbnails)
        const miniGallery = document.createElement('div');
        miniGallery.classList.add('mini-gallery');

        ['img1.jpg', 'img2.jpg', 'img3.jpg'].forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            miniGallery.appendChild(img);
        });

        container.appendChild(miniGallery);
        document.body.appendChild(container);

        // Mock Timers
        vi.useFakeTimers();

        // Mock scrollIntoView
        Element.prototype.scrollIntoView = vi.fn();
    });

    afterEach(() => {
        cleanupGallery();
        document.body.innerHTML = '';
        vi.restoreAllMocks();
    });

    it('should initialize auto-play', () => {
        initGalleryInteractions();
        expect(galleryIntervals.length).toBe(1);
    });

    it('should change active image after 3.5 seconds', () => {
        initGalleryInteractions();

        const thumbnails = document.querySelectorAll('.mini-gallery img');
        const mainImg = document.querySelector('.main-gallery-image');

        expect(thumbnails[0].classList.contains('active')).toBe(true);
        expect(mainImg.src).toContain('img1.jpg');

        // Advance time
        vi.advanceTimersByTime(3500);

        expect(thumbnails[0].classList.contains('active')).toBe(false);
        expect(thumbnails[1].classList.contains('active')).toBe(true);

        // Main image update is delayed by 300ms for fade effect
        vi.advanceTimersByTime(300);
        expect(mainImg.src).toContain('img2.jpg');
    });

    it('should loop back to the first image', () => {
        initGalleryInteractions();
        const thumbnails = document.querySelectorAll('.mini-gallery img');

        // Move to last image
        vi.advanceTimersByTime(3500 * 2);
        expect(thumbnails[2].classList.contains('active')).toBe(true);

        // Move past last image
        vi.advanceTimersByTime(3500);
        expect(thumbnails[0].classList.contains('active')).toBe(true);
    });

    it('should pause on mouseenter and resume on mouseleave', () => {
        initGalleryInteractions();
        const thumbnails = document.querySelectorAll('.mini-gallery img');
        const gallery = document.querySelector('.apartment-detail');

        // Trigger mouse enter
        gallery.dispatchEvent(new MouseEvent('mouseenter'));

        // Advance time - should NOT change
        vi.advanceTimersByTime(3500);
        expect(thumbnails[0].classList.contains('active')).toBe(true);

        // Trigger mouse leave
        gallery.dispatchEvent(new MouseEvent('mouseleave'));

        // Advance time - should change
        vi.advanceTimersByTime(3500);
        expect(thumbnails[1].classList.contains('active')).toBe(true);
    });

    it('should change image on thumbnail click', () => {
        initGalleryInteractions();
        const thumbnails = document.querySelectorAll('.mini-gallery img');
        const miniGallery = document.querySelector('.mini-gallery');

        // Click 3rd image
        thumbnails[2].click();
        // Or dispatch event on container as it uses delegation but target needs to be correct
        // The click handler is on miniGallery, but checks e.target
        // simple .click() on the img element should bubble up

        expect(thumbnails[2].classList.contains('active')).toBe(true);
    });
});
