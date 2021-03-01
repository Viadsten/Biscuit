$('.cabinet-input__wrp').slideUp(0);

$('.cabinet-btn').click( function() {
    Valid = true;
    userAuth ();
})

let Valid = true;
let Tab_index = 0;

function userAuth () {
    if ( Tab_index == 0 && Valid == true ) {
        $('.basket-input__before--hidden').removeClass('basket-input__before--hidden');
        $('.cabinet-btn')
            .removeClass('cabinet-btn--UpTo150')
            .text('Войти');
            
        Tab_index = 1;
        Valid = false;
    }

    if ( Tab_index == 1 && Valid == true ) {
        $('.cabinet-input__wrp').slideDown(300);
        $('.cabinet-login').slideUp(300);
    }
}