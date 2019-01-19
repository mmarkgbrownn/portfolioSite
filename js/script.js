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
}


function linkTo(page) {
    window.location.replace(page + ".html");
}