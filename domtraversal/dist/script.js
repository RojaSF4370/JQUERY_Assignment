$(document).ready(function () {
    $('#countElements').click(function () {
        var titleCount = $('.QA h2').length;
        var tagsCount = $('.QA h5').length;
        var dateInfoCount = $('.QA .QAdate').length;

        alert('Title Count: ' + titleCount + '\nTags Count: ' + tagsCount + '\nDate Info Count: ' + dateInfoCount);
    });

    $('#changeTagsColor').click(function () {
        $('.QA h5').css('color', 'red');
    });
});