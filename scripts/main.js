console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


//STYLING
//$('.text-section').viewportChecker({
//    classToAdd: 'animated slideInLeft',
//    classToRemove: 'hidden'
//});

$('.work-img').hover(
    function () {
        $(this).addClass('animated pulse')
    },
    function () {
        $(this).removeClass('animated pulse')
    }
)