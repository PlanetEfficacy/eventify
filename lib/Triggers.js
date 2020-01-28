function enableEventify() {
  ScriptApp.newTrigger('onFormSubmit')
      .forForm(FormApp.getActiveForm())
      .onFormSubmit()
      .create();

  return isEnabled();
}

function disableEventify() {
  ScriptApp.getUserTriggers(FormApp.getActiveForm()).forEach(function(trigger) {
    ScriptApp.deleteTrigger(trigger);
  });

  return isEnabled();
}

function isEnabled() {
  return ScriptApp.getUserTriggers(FormApp.getActiveForm()).some(function(trigger) {
    return trigger.getHandlerFunction() == 'onFormSubmit'
  })
}
