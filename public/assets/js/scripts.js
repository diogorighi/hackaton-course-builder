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


// ========================================================
  // On the fly ordering

  var output = '';
    function buildItem(item) {

        var html = "<li class='dd-item' data-id='" + item.id + "'>";
        html += "<div class='dd-handle'>" + item.title;

        if (item.type == "chapter") {
          html += '<div class="pull-right">';
            html += '<a href="/courses/' + item.course + '/chapters/' + item.id + '/contents/new" class="btn btn-success btn-xs btn-nestable dd-nodrag">';
            html += '<i class="fa fa-book"></i>';
            html += '</a>';
            html += '<a href="/courses/' + item.course + '/chapters/' + item.id + '/edit" class="btn btn-primary btn-xs btn-nestable dd-nodrag">';
            html += '<i class="fa fa-pencil"></i>';
            html += '</a>';
          html += '</div>';
        }

        if (item.type == "content") {
            html += '<div class="pull-right">';
              if(item.media == "html") {
                html += '<a class="btn btn-primary btn-xs btn-nestable dd-nodrag js-modal" data-id="' + item.id + '">';
                html += '<i class="fs-12 pg-search"></i>';
                html += '</a>';
              } else {
                html += '<a class="btn btn-primary btn-xs btn-nestable dd-nodrag" download="' + item.content + '" href="/uploads/' + item.content + '">';
                html += '<i class="fs-12 pg-download"></i>';
              html += '</a>';
              }
            html += '</div>';
        }
        html += "</div>";

        if (item.children) {

            html += "<ol class='dd-list'>";
            $.each(item.children, function (index, sub) {
                html += buildItem(sub);
            });
            html += "</ol>";
        }

        html += "</li>";
        return html;
    }

  if($('#nestable3').length) {
      var obj = $('#nestable3').data('json');
      $.each(obj, function (index, item) {
          output += buildItem(item);
      });

      //$("#nestable-unordered").hide();
    }

    $('#dd-empty-placeholder').html(output);
    $('#nestable3').nestable({maxDepth: 2});
    // ========================================================


    $('.nestable-list').nestable({maxDepth: 2});


    $('.dd').on('change', function(e) {
      var courseId = $(location).attr('href').split('/').pop();
      var chapterOrder = $('.dd').nestable('serialize');

      console.log( $(this).data("title") );

      console.log(JSON.stringify(chapterOrder));


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
