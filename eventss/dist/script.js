$(function(){
    $("button").on("click",function(e){
        var paragraphText = $(this).prev('p').text();
        alert(paragraphText);
    })
})