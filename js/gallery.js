(function() {
  'use strict';

  var filters = document.querySelectorAll('.gallery-filter');
  var items = document.querySelectorAll('.gallery-item');

  filters.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = btn.dataset.filter;
      filters.forEach(function(b) {
        b.classList.remove('btn--primary');
        b.classList.add('btn--secondary');
      });
      btn.classList.remove('btn--secondary');
      btn.classList.add('btn--primary');
      items.forEach(function(item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  var lightboxImages = document.querySelectorAll('[data-lightbox]');
  if (lightboxImages.length > 0) {
    var lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:none;align-items:center;justify-content:center;cursor:pointer;';
    lightbox.innerHTML = '<img style="max-width:90%;max-height:90%;object-fit:contain;border-radius:8px;" alt="">';
    document.body.appendChild(lightbox);
    var lightboxImg = lightbox.querySelector('img');
    lightboxImages.forEach(function(img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', function() {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  var sliders = document.querySelectorAll('[data-before-after]');
  sliders.forEach(function(slider) {
    var handle = slider.querySelector('.ba-slider__handle');
    var before = slider.querySelector('.ba-slider__before');
    if (!handle || !before) return;
    var isDragging = false;
    var updatePosition = function(x) {
      var rect = slider.getBoundingClientRect();
      var pos = (x - rect.left) / rect.width;
      pos = Math.max(0.05, Math.min(0.95, pos));
      before.style.width = (pos * 100) + '%';
      handle.style.left = (pos * 100) + '%';
    };
    handle.addEventListener('mousedown', function() { isDragging = true; });
    handle.addEventListener('touchstart', function() { isDragging = true; }, { passive: true });
    window.addEventListener('mousemove', function(e) { if (isDragging) { e.preventDefault(); updatePosition(e.clientX); } });
    window.addEventListener('touchmove', function(e) { if (isDragging) { updatePosition(e.touches[0].clientX); } }, { passive: true });
    window.addEventListener('mouseup', function() { isDragging = false; });
    window.addEventListener('touchend', function() { isDragging = false; });
  });
})();
