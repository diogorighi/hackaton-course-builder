$(function(){
  if($('#summernote')) {
    $('#summernote').summernote({
        height: 200,
        onfocus: function(e) {
            $('body').addClass('overlay-disabled');
        },
        onblur: function(e) {
            $('body').removeClass('overlay-disabled');
        }
    });
  }

  if($('.nestable-list')) {
    $('.nestable-list').nestable();

    $('.dd').on('change', function() {
      $.ajax({
        url: '/courses/setChapterOrder',
        method: "POST",
        data: JSON.stringify($('.dd').nestable('serialize'))
      }).done( function(){
        console.log('Ajax Done!');
      })
    });

  }



});
