function createCalendarEvent() {
  var eventData = getEventInputsFromLastResponse();
  var calendar = CalendarApp.getCalendarById(getCalendarId_());

  try {
    calendar.createEvent(eventData.title, eventData.startDateTime, eventData.endDateTime)
  } catch(error) {
    showAlert('Something went wrong', 'We could not create event with title: ' + eventData.title + ' at this time.')
    console.log(error)
  }
}

function getCalendarId_() {
  return PropertiesService.getDocumentProperties().getProperty(constants_().calendarId);
}

/**
 * Responds to a form when submitted.
 * @param {event} e The Form submit event.
 */
function onFormSubmit(e) {
  var addonTitle = 'Pretty Good Booking';
  var props = PropertiesService.getDocumentProperties();
  var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);

  // Check if the actions of the trigger requires authorization that has not
  // been granted yet; if so, warn the user via email. This check is required
  // when using triggers with add-ons to maintain functional triggers.
  if (authInfo.getAuthorizationStatus() == ScriptApp.AuthorizationStatus.REQUIRED) {
    // Re-authorization is required. In this case, the user needs to be alerted
    // that they need to re-authorize; the normal trigger action is not
    // conducted, since it requires authorization first. Send at most one
    // "Authorization Required" email per day to avoid spamming users.
    var lastAuthEmailDate = props.getProperty('lastAuthEmailDate');
    var today = new Date().toDateString();
    if (lastAuthEmailDate != today) {
      if (MailApp.getRemainingDailyQuota() > 0) {
        var html = HtmlService.createTemplateFromFile('authorization/index');
        html.url = authInfo.getAuthorizationUrl();
        html.addonTitle = addonTitle;
        var message = html.evaluate();
        MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
            'Authorization Required',
            message.getContent(), {
                name: addonTitle,
                htmlBody: message.getContent()
            }
        );
      }
      props.setProperty('lastAuthEmailDate', today);
    }
  } else {
    // Authorization has been granted, so continue to respond to the trigger.
    // Main trigger logic here.
    createCalendarEvent();
  }
}
