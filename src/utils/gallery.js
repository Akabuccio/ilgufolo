
export const galleryIntervals = [];

export function cleanupGallery() {
    galleryIntervals.forEach(id => clearInterval(id));
    galleryIntervals.length = 0; // Clear array
}

export function initGalleryInteractions() {
    // Cleanup previous intervals before setting up new ones
    cleanupGallery();

    const galleries = document.querySelectorAll('.apartment-detail');
    galleries.forEach(gallery => {
        const miniGallery = gallery.querySelector('.mini-gallery');
        const mainImg = gallery.querySelector('.main-gallery-image');
        let autoPlayInterval;
        let isPaused = false;

        if (!miniGallery || !mainImg) return;

        const thumbnails = miniGallery.querySelectorAll('img');

        // Function to set active image
        const setActiveImage = (thumb) => {
            // Update Active Class
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');

            // Update Main Image
            const newSrc = thumb.src;
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = newSrc;
                mainImg.style.opacity = '1';
            }, 300);

            // Scroll thumbnail into view within the mini-gallery WITHOUT triggering page scroll
            const containerWidth = miniGallery.offsetWidth || 0;
            const thumbOffset = thumb.offsetLeft || 0;
            const thumbWidth = thumb.offsetWidth || 0;
            const targetScroll = thumbOffset - (containerWidth / 2) + (thumbWidth / 2);

            if (typeof miniGallery.scrollTo === 'function') {
                miniGallery.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
            } else {
                miniGallery.scrollLeft = targetScroll;
            }
        };

        // Auto Play Function
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                if (isPaused) return;

                const currentActive = miniGallery.querySelector('.active');
                let nextThumb = currentActive ? currentActive.nextElementSibling : thumbnails[0];

                if (!nextThumb) {
                    nextThumb = thumbnails[0]; // Loop back to start
                }

                setActiveImage(nextThumb);

            }, 3500); // Change every 3.5 seconds

            galleryIntervals.push(autoPlayInterval);
        };

        // Start initially
        startAutoPlay();

        // Pause on Hover
        gallery.onmouseenter = () => isPaused = true;
        gallery.onmouseleave = () => isPaused = false;

        // Click Handler (Delegated)
        miniGallery.onclick = (e) => {
            if (e.target.tagName === 'IMG') {
                isPaused = true; // Pause interaction on manual click
                setActiveImage(e.target);
            }
        };
    });
}
