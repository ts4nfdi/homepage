$(document).ready(function() {
    let cUrl = window.location.href;
    let urlAndSections = cUrl.split('#');
    if(urlAndSections.length !== 1){
        let section = urlAndSections[1];
        $('.section-container').hide();
        $('#' + section).show();
        $('.nav-link').removeClass('active');
        $('.nav-link[data-page="' + section + '"]').addClass('active');
    }else{
        $('.section-container').hide();
        $('#index').show();
        $('.nav-link').removeClass('active');
        $('.nav-link[data-page="index"]').addClass('active');
    }
    
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        let section = $(this).attr('data-page');
        $('.section-container').hide();
        $('#' + section).show();
        let cUrl = window.location.href;        
        let newUrl = cUrl.split('#')[0];
        window.history.pushState(null, null, newUrl + '#' + section);
    });

});