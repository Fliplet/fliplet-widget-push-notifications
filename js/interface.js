var widgetId = Fliplet.Widget.getDefaultId();
var data = Fliplet.Widget.getData(widgetId) || {};

function hideSavedMessage() {
  setTimeout(function() {
    $('.settings-saved-app-msg').fadeOut(function() {
      Fliplet.Widget.autosize();
    });
  }, 5000);
}

function attachObservers() {
  $(document).on('click', '.show-settings', function (e) {
    e.preventDefault();
    $('#settings').show();
    $('.notifications-container').hide();
    Fliplet.Widget.autosize();
  });

  $(document).on('click', '.exit-settings', function (e) {
    e.preventDefault();
    $('#settings').hide();
    $('.notifications-container').show();
    Fliplet.Widget.autosize();
  });

  // Fired from Fliplet Studio when the external save button is clicked
  Fliplet.Widget.onSaveRequest(function() {
    if (!$('#settings-tab.active').length || !$('#settings').is(':visible')) {
      return;
    }

    $('#configuration').submit();
  });

  $(window).on('resize', Fliplet.Widget.autosize);

  $('#configuration').on('submit', function(event) {
    event.preventDefault();

    var $submit = $(this).find('[type="submit"]');

    if ($submit.hasClass('disabled')) {
      return;
    }

    $submit.addClass('disabled');

    data.showAutomatically = $('[name="showAutomatically"]').is(':checked');
    data.showOnceOnPortal = $('[name="showOnceOnPortal"]').is(':checked');
    data.popupTitle = $('[name="popup_title"]').val();
    data.popupMessage = $('[name="popup_message"]').val();

    Fliplet.Widget.save(data).then(function() {
      $('.settings-saved-app-msg').fadeIn();
      $submit.removeClass('disabled');
      Fliplet.Widget.autosize();
      hideSavedMessage();
    }).catch(function (error) {
      $submit.removeClass('disabled');
      Fliplet.Modal.alert({
        title: 'Error saving push notification settings',
        message: Fliplet.parseError(error)
      });
    });
  });
}

function init() {
  Fliplet.Studio.emit('widget-save-label-update', {
    text: ''
  });

  Fliplet.Widget.autosize();
}

attachObservers();
init();
