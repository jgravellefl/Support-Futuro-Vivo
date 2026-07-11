/* ============================================
   NEWS PAGE — renders cards from NEWS_POSTS and
   drives the post modal + gallery lightbox.
   ============================================ */
(function () {
  const grid = document.getElementById('news-grid');
  if (!grid || typeof NEWS_POSTS === 'undefined') return;

  const posts = [...NEWS_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  function fmtDate(iso) {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function cardHtml(post) {
    return `
      <article class="news-card fade-in" data-post-id="${escapeHtml(post.id)}" tabindex="0" role="button" aria-haspopup="dialog">
        <div class="news-card-img"><img src="${escapeHtml(post.cover)}" alt="${escapeHtml(post.title)}"></div>
        <div class="news-card-body">
          <span class="news-card-date">${fmtDate(post.date)}</span>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.excerpt)}</p>
          <span class="news-card-link">Read more →</span>
        </div>
      </article>`;
  }

  function galleryHtml(post) {
    const photos = [{ src: post.cover, alt: post.title }, ...(post.gallery || [])];
    return `
      <div class="photo-grid news-modal-gallery">
        ${photos.map(p => `<div class="photo-grid-item"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt)}"></div>`).join('')}
      </div>`;
  }

  function modalContentHtml(post) {
    return `
      <span class="news-modal-date">${fmtDate(post.date)}</span>
      <h2 id="news-modal-title">${escapeHtml(post.title)}</h2>
      <div class="news-modal-body">
        ${post.body.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
      </div>
      ${galleryHtml(post)}`;
  }

  grid.innerHTML = posts.length
    ? posts.map(cardHtml).join('')
    : '<p class="news-empty">More stories coming soon.</p>';

  const modal        = document.getElementById('news-modal');
  const modalContent  = document.getElementById('news-modal-content');
  const modalClose    = document.getElementById('news-modal-close');
  const modalOverlay  = document.getElementById('news-modal-overlay');
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');

  function bindGalleryLightbox() {
    modalContent.querySelectorAll('.photo-grid-item img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  function openPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;
    modalContent.innerHTML = modalContentHtml(post);
    bindGalleryLightbox();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    history.replaceState(null, '', '#' + post.id);
  }

  function closePost() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    history.replaceState(null, '', location.pathname);
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('.news-card');
    if (card) openPost(card.dataset.postId);
  });
  grid.addEventListener('keydown', e => {
    const card = e.target.closest('.news-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openPost(card.dataset.postId);
    }
  });

  modalClose?.addEventListener('click', closePost);
  modalOverlay?.addEventListener('click', closePost);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open') && !lightbox.classList.contains('open')) {
      closePost();
    }
  });

  if (location.hash) openPost(location.hash.slice(1));
})();
