function setLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(function (el) {
        el.style.display = el.dataset.lang === lang ? '' : 'none';
    });
    ['btn-es', 'btn-en', 'btn-es-m', 'btn-en-m'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.classList.toggle('active', id.includes(lang));
    });
    document.documentElement.lang = lang;
}

function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    var burger = document.getElementById('hamburger');
    var isOpen = menu.classList.contains('open');
    menu.classList.toggle('open', !isOpen);
    burger.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';
}

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
    observer.observe(el);
});