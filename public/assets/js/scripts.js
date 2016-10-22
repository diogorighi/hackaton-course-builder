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

  $('.js-form-course').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function (json) {
        console.log(json);
        if (!json.errors) {
          window.location = '/courses/' + json._id;
        } else {
          alert('Deu erro! ' + json.message);
        }
      },
      dataType: 'json'
    });
  })
})
