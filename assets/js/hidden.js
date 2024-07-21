document.getElementById('showMoreBtn', 'showMoreBtn2').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.classList.contains('show')) {
        hiddenContent.classList.remove('show');
        this.textContent = 'Ver Más';
    } else {
        hiddenContent.classList.add('show');
        this.textContent = 'Ver Menos';
    }
});
