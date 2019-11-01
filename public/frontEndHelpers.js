function togglePronounStatus() {
    $( 'div.pronoun input' ).each( function() {
        if( $( this ).prop('disabled') == true) {
            $( this ).prop('disabled', false);
            console.log('changed status to not disabled');
        } else {
            $( this ).prop('disabled', true);
            console.log('changed status to disabled');
        }
    });
}

// new method to add new words (display hidden form, enable form fields)
function showNewWordForm() {
    if( $( 'div.hidden' ).attr('display') != 'none') {
        $( '#newWordFormToggle' ).html('Hide new word form');
    } else {
        $( '#newWordFormToggle' ).html('Add a new word');
    }
    $( 'div.hidden' ).toggle();
}
