function getCalendarData() {
  return CalendarApp.getAllOwnedCalendars().map(pluckIdName_);
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