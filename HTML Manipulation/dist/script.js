
$(document).ready(function() {
    $('.grid--one').append('<button class="button ">Learn more</button>');
    $('.grid--two').append('<button class="button ">Learn more</button>');
    $('.grid--three').append('<button class="button">Learn more</button>');
    $('.button').on('click', function() {
        var $parentGrid = $(this).closest('.grid');
        var title = $parentGrid.find('.title').val();
        var content = $parentGrid.find('.content').val();

        // Append the content to the appropriate elements within the grid
        $parentGrid.find('h2').text(title);
        $parentGrid.find('p').text(content);
    });
});