document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.animacao-telaini-dir').classList.add('fade-out');
    document.querySelector('.animacao-telaini-esq').classList.add('fade-out');
    document.querySelector('.animacao-telaini-meio').classList.add('fade-out');
    this.classList.add('fade-out');

    setTimeout(() => {
        document.querySelector('.animacao-telaini-dir').style.display = 'none';
        document.querySelector('.animacao-telaini-esq').style.display = 'none';
        document.querySelector('.animacao-telaini-meio').style.display = 'none';
        this.style.display = 'none';
        
        
    }, 500);
});
