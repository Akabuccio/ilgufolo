export function ApartmentCard({ title, guests, description, link, image, features = [] }) {
  const featuresList = features.map(feature => `<li><small>• ${feature}</small></li>`).join('');

  return `
    <article class="apartment-card">
      <div class="card-image">
        <img src="${image}" alt="${title}" loading="lazy">
      </div>
      <div class="card-content">
        <h3>${title}</h3>
        <span class="card-meta"><i class="icon-guests"></i> ${guests} Ospiti</span>
        <ul class="card-features" style="list-style: none; padding: 0; margin-bottom: 1rem; color: var(--color-text-muted);">
          ${featuresList}
        </ul>
        <p>${description}</p>
        <a href="${link}" class="btn-outline">Scopri di più</a>
      </div>
    </article>
  `;
}
