function togglePronounStatus() {
    $( 'div.pronoun input' ).each( function() {
        if( $( this ).prop('disabled') == true) {
            $( this ).prop('disabled', false);
            console.log('changed status to not disabled');
        } else {
            $( this ).prop('disabled', true);
            console.log('changed status to disabled');
        }
        if( $( '#togglePronounStatusButton' ).length == true) {
            $( '#togglePronounStatusButton' ).toggle();
            $( '#editWordFormButton' ).toggle();
        }
    });
}


// new method to add new words (display hidden form, enable form fields)
function toggleNewWordForm() {
    if( $( 'div.newWordForm' ).css('display') == 'none') {
        $( '#newWordFormToggleButton' ).html( 'Hide new word form');
    } else {
        $( '#newWordFormToggleButton' ).html('Add a new word');
    }
    togglePronounStatus();
    $( 'div.newWordForm' ).toggle();
}

function updateFormActionAttribute() {
    let wordId = $( '#_id' ).val();
    console.log(wordId);
    $( '#findByIdForm' ).attr('action', `/words/${wordId}`);
}
