function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en'); // Set default language to English
});

