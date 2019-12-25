$('#load-more').click (function(){
    $('.products-row').removeClass('hidden');   
});
$(window).resize( function(){
    if($(window).width() <= 1280){
        $('.products-row:not(:first-of-type)').addClass('hidden'); 
    }
});