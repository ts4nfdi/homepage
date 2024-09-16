$(document).ready(function() {     
    // $('#eventsPageContainer').load('./events.html');
    window.scrollTo(0,0);
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
        let section = $(this).attr('data-page');
        if (section == "external-link"){
            return true;
        }        
        $('.nav-link').removeClass('active');
        $(this).addClass('active');        
        $('.section-container').hide();
        $('#' + section).show();
        let cUrl = window.location.href;        
        let newUrl = cUrl.split('#')[0];
        window.history.pushState(null, null, newUrl + '#' + section);
    });

    $('.footer-link').click(function() {
        let section = $(this).attr('data-page');        
        $('.section-container').hide();
        $('#' + section).show();
        let cUrl = window.location.href;
        let newUrl = cUrl.split('#')[0];
        window.history.pushState(null, null, newUrl + '#' + section);
        $('.nav-link').removeClass('active');
        $('.nav-link[data-page="' + section + '"]').addClass('active');
        window.scrollTo(0,0);
    });

});