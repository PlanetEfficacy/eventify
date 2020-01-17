function createCalendarEvent() {

  var eventData = getEventInputsFromLastResponse();
  var calendar = CalendarApp.getCalendarById(getCalendarId_());

  calendar.createEvent(eventData.title, eventData.startDateTime, eventData.endDateTime)
}

function getCalendarId_() {
  return PropertiesService.getDocumentProperties().getProperty(constants_().calendarId);
}