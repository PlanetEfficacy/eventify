function getCalendarData() {
  return CalendarApp.getAllOwnedCalendars().map(pluckIdName_);
}

function getCalendarId() {
  return PropertiesService.getDocumentProperties().getProperty(constants_().calendarId)
}

function setCalendarId(id) {
  PropertiesService.getDocumentProperties().setProperty(constants_().calendarId, id);
}

function pluckIdName_(calendar) {
  return {
    id: calendar.getId(),
    name: calendar.getName()
  }
}
