function enableEventify() {
  ScriptApp.newTrigger('createCalendarEvent')
      .forForm(FormApp.getActiveForm())
      .onFormSubmit()
      .create();
}

function disableEventify() {
  ScriptApp.getUserTriggers(FormApp.getActiveForm()).forEach(function(trigger) {
    ScriptApp.deleteTrigger(trigger);
  });
} 