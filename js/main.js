(function() {
  'use strict';

  // ========== NAVBAR SCROLL BEHAVIOR ==========
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function() {
      if (window.scrollY > 80) {
        nav.classList.remove('nav--transparent');
        nav.classList.add('nav--solid');
      } else {
        nav.classList.add('nav--transparent');
        nav.classList.remove('nav--solid');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ========== MOBILE MENU TOGGLE ==========
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded',
        links.classList.contains('nav__links--open'));
    });

    links.querySelectorAll('.nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ========== SCROLL REVEAL ANIMATIONS ==========
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function(el) { observer.observe(el); });
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 72;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // ========== CONTACT FORM HANDLING ==========
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(form);
      var nombre = data.get('nombre');
      var tipo = data.get('tipo');
      var area = data.get('area');
      var mensaje = data.get('mensaje');

      var waMsg = encodeURIComponent(
        'Hola, soy ' + nombre + '. Me interesa una cotizacion para ' + tipo +
        (area ? ' (aprox. ' + area + ' m2)' : '') +
        (mensaje ? '. ' + mensaje : '.')
      );

      var waNumber = '526623478040';
      if (waNumber.indexOf('{{') === 0) {
        alert('Gracias por tu interes. Nos pondremos en contacto pronto.');
      } else {
        window.open('https://wa.me/' + waNumber + '?text=' + waMsg, '_blank');
      }
    });
  }

})();
