document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        alert('Anda telah mengklik ' + this.textContent);
    });
});