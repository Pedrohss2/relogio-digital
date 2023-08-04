function relogio() {
    let container = document.querySelector('.container');
    let relogio = document.querySelector('.relogio');
    let iniciar = document.querySelector('.iniciar');
    let pausar = document.querySelector('.pausar');
    let zerar = document.querySelector('.zerar')
    
    function criHoraSegundos(segundos) {
        const data = new Date(segundos * 1000);
    
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    let timer;
    let segundos = 0
    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criHoraSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        let elemento = e.target;
    
        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer)
            
            iniciarRelogio();
        }
    
        if(elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    
        if(elemento.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });    
}

relogio();
