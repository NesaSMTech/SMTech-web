function setLanguage(language) {
    const elements = document.querySelectorAll('[data-en], [data-sr]');
    elements.forEach(element => {
        if (language === 'sr') {
            element.textContent = element.getAttribute('data-sr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}
