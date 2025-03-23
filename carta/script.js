$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $('#open');
    var btn_reset = $('#reset');
    var letterDiv = $('.letter');
    
    // Texto fijo dentro de la carta
    var fixedText = "Hace 365 dias que nos conocemos, hace 365 dias que me tenes enamorado\n quiero que sepas que este solo es uno de los muchos años que quiero \n pasar con vos mi monse te amo <3";
    
    btn_open.click(function () {
        openEnvelope();
    });
    
    btn_reset.click(function () {
        closeEnvelope();
    });
    
    function openEnvelope() {
        envelope.addClass('open').removeClass('close');
        
        // Mostrar el mensaje fijo sin edición y permitir ajuste dinámico
        letterDiv.empty().append('<p class="letter-text">' + fixedText.replace(/\n/g, '<br>') + '</p>');
        
        // Ajustar la carta para que se vea sobre el sobre, sea más ancha y esté más arriba
        letterDiv.css({
            position: 'absolute',
            top: '-10%', /* Ajustado para que esté más arriba */
            left: '50%',
            width: 'auto', /* Se ajusta según el texto */
            maxWidth: '80%', /* No sobrepasar el 80% del contenedor */
            minWidth: '500px', /* Ancho mínimo para mantener forma */
            transform: 'translate(-50%, -50%) scale(1.2)',
            transition: 'transform 0.5s ease-out, top 0.5s ease-out',
            zIndex: '10', /* Asegurar que esté por encima */
            padding: '10px',
            boxSizing: 'border-box', /* Evitar que el padding afecte el tamaño */
            textAlign: 'center', /* Centrar el texto */
            wordWrap: 'break-word', /* Permitir que el texto se ajuste automáticamente */
            whiteSpace: 'pre-line', /* Mantener saltos de línea */
            //backgroundColor: '#eb9898', /* Ajuste del fondo de la carta */
            borderRadius: '6px', /* Mantener bordes redondeados */
            
        });
    }
    
    function closeEnvelope() {
        envelope.addClass('close').removeClass('open');
        
        // Vaciar la carta al cerrarla
        letterDiv.empty();
        
        // Regresar la carta a su posición original
        letterDiv.css({
            position: 'relative',
            top: '5%',
            left: 'auto',
            width: '90%', /* Ajuste dinámico */
            maxWidth: '500px', /* Mantener un límite */
            minWidth: '300px',
            transform: 'translate(0, 0) scale(1)',
            transition: 'transform 0.5s ease-in, top 0.5s ease-in',
            zIndex: '1', /* Regresa a su nivel normal */
            textAlign: 'center', /* Centrar el texto */
            wordWrap: 'break-word', /* Permitir ajuste automático */
            whiteSpace: 'pre-line', /* Mantener saltos de línea */
           // backgroundColor: '#eb9898', /* Ajuste del fondo de la carta */
            borderRadius: '6px', /* Mantener bordes redondeados */
          
        });
    }
});








