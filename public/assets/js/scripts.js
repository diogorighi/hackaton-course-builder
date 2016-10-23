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
  }

  if($('.js-select-media-type')) {
    $('.js-select-media-type').on('change', function() {
      var mediaType = $(this).val();

      switch(mediaType) {
        case 'image':
        case 'audio':
        case 'video':
        case 'pdf':
          $('.js-html-content').hide();
          $('.js-upload').fadeIn(300);
          break
        case 'html':
          $('.js-upload').hide();
          $('.js-html-content').fadeIn(300);
          break
        default:
          $('.html-content').hide();
          $('.js-upload').hide();
      }

      $('.js-help').hide();
      $('.js-help--' + mediaType).fadeIn(300);
    })
  }
});
