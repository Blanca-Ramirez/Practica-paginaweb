//$(function(){alert();}); //PARA VERIFICAR SI FUNCIONA DENTRO DE LA PAGINA

$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active'); //Al elemento que le des click ponle la clase active y a los demas quitasela
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');

        }else{
            $('.cont-work').not('.'+ valor).hide('1000');
            $('.cont-work').filter('.'+ valor).show('1000');
        }
    });

    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){ // PARA HACERSE RESPONSIVA 
        equipo = $('#equipo').offset().top;
        servicio = $('#servicio').offset().top;
        trabajo = $('#trabajo').offset().top;
        contacto = $('#contacto').offset().top;    
    });

    $('#enlace-inicio').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0 //nos mande a la parte mas alta de la pagina
        },600);
    });

    $('#enlace-equipo').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-servicio').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-trabajo').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: contacto 
        },600);
    });
});