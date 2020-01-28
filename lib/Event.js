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
