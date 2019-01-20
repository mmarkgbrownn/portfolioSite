$(init);

function init() {
    $('#adamTile').click( function() {
        linkTo('adam');
    });
    
    $('#travelcastTile').click( function() {
        linkTo('travelcast');
    });
    
    $('#maestroTile').click( function() {
        linkTo('maestro');
    });

    $('#footerAdam').click( function() {
        linkTo('adam');
    });

    $('#footerMaestro').click( function() {
        linkTo('maestro');
    });

    $('#footerTravelcast').click( function() {
        linkTo('travelcast');
    });

    // Activate Carousel
    $("#myCarousel").carousel();
        
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
        
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
}



function linkTo(page) {
    window.location.replace(page + ".html");
}