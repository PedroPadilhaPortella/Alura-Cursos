var botaoBuscar = document.querySelector('#buscar-pacientes');
var erroAjax = document.querySelector('#erro-ajax');

botaoBuscar.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', () => {

        if(xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);
            erroAjax.classList.add('invisivel')
            pacientes.forEach(paciente => { 
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove('invisivel')
        }
    });
    xhr.send();
})