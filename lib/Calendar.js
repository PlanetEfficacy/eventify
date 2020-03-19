function getCalendarOptions() {
  var data = getCalendarData();
  var calendarId = PropertiesService.getDocumentProperties().getProperty('calendarId')  == null ? 'jspevack@gmail.com' : PropertiesService.getDocumentProperties().getProperty('calendarId');
  var html = '<option value="">Select Calendar</option>';
  for(var i = 0; i < data.length; i += 1) {
    html += '<option value="' + data[i].id + '"';
    if (data[i].id == calendarId) {
      html += ' selected '
    }

    html += '>' + data[i].name + '</option>'
  }
  return html
}

function getCalendarData() {
  return CalendarApp.getAllOwnedCalendars().map(pluckIdName_);
}

function getCalendarId() {
  if (PropertiesService.getDocumentProperties().getProperty('calendarId') == null) {
    return '';
  }

  try {
    var id = PropertiesService.getDocumentProperties().getProperty(constants_().calendarId);
    Logger.log("Calendar id = " + id);
    return id;
  } catch (e) {
    Logger.log(e)
    return '';
  }
}

function setCalendarId(id) {
  PropertiesService.getDocumentProperties().setProperty(constants_().calendarId, id);
}

function deleteCalendarId() {
  PropertiesService.getDocumentProperties().deleteProperty(constants_().calendarId)
}

function pluckIdName_(calendar) {
  return {
    id: calendar.getId(),
    name: calendar.getName()
  }
}

function testGetCalendarId() {
  setCalendarId('jspevack@gmail.com')
  var test = getCalendarId();
  var hello = 1 + 1;
}
