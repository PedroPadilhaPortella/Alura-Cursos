const teclas = document.querySelectorAll('.tecla');

teclas.forEach(tecla => {
    const nomeSom = tecla.classList[1].split('_')[1];
    const som = document.querySelector(`#som_tecla_${nomeSom}`);

    tecla.addEventListener('keydown', (event) => {
        if(event.code == 'Space' || event.key == 'Enter') {
            tecla.classList.add('ativa');
        }
    });

    tecla.addEventListener('keyup', () => tecla.classList.remove('ativa'));

    tecla.addEventListener('click', () =>  som.play());
});