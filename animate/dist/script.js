

$(document).ready(function(){
    $('.button').click(function(){
        $(this).prev('p').animate({
            fontSize:'40px'
        },3000)
    })
})