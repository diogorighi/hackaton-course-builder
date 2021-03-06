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
    $('.nestable-list').nestable({maxDepth: 2});


    $('.dd').on('change', function(e) {
      var courseId = $(location).attr('href').split('/').pop();
      var chapterOrder = $('.dd').nestable('serialize');

      //console.log(JSON.stringify(chapterOrder));
      //console.log( $(this).attr("data-id") );

      // ======================================================================
      // Update via Ajax Chapter Order
      $.ajax({
        url: '/api/v1/courses/setChapterOrder/' + courseId,
        method: "POST",
        data: JSON.stringify(chapterOrder),
        contentType: 'application/json'}).done(
          function() {
            console.log("Done");
      });
    });
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

  $('.js-modal').on('click', function() {
    var target = $(this).data('id');
    $('#' + target).modal('show');
  });

  $('.autonumeric').autoNumeric('init');
});
