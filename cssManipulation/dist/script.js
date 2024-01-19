

$(document).ready(function () {
    $('.button--serious').click(function () {
        $(this).css({
            'background-color': 'black'
        });
        $(this).closest('.grid').find('h2').css({
            'font-size': '30px'
        })
        $(this).closest('.grid').find('p').css({
            'font-size': '27px'
        })
        $(this).closest('.grid').find('img').css({
            'width': '250px'
        })
        $(this).closest('.grid').css({
            'width': 'auto',
            // 'height': 'auto'
        })
    });
});
$(document).ready(function () {
    $('.button--success').click(function () {
        $(this).closest('.grid').find('h2').css({
            'font-size': '40px'
        })
        $(this).closest('.grid').find('p').css({
            'font-size': '33px'
        })
        $(this).closest('.grid').find('img').css({
            'width': '300px'
        })
        $(this).css({
            'background-color': 'green',
            'color': 'white',
            'border': '2px solid transparent',
            'outline': '5px solid black',
            'height':'100px'
        })
    });
});

