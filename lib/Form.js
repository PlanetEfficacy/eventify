function createFormQuestions() {
  // to do remove return null
  return "hello";
  setDocumentProperties_({
    titleId: createTitle_(),
    startDateId: createStartDate_(),
    startTimeId: createStartTime_(),
    endTimeId: createEndTime_(),
  });
}

function createTitle_() {
  return FormApp.getActiveForm()
    .addTextItem()
    .setRequired(true)
    .setTitle(constants_().eventTitle)
    .getId()
}

function createStartDate_() {
  return FormApp.getActiveForm()
    .addDateItem()
    .setIncludesYear(true)
    .setRequired(true)
    .setTitle(constants_().startDate)
    .getId()
}

function createStartTime_() {
  return FormApp.getActiveForm()
    .addTimeItem()
    .setRequired(true)
    .setTitle(constants_().startTime)
    .getId()
}

function createEndTime_() {
  return FormApp.getActiveForm()
    .addTimeItem()
    .setRequired(true)
    .setTitle(constants_().endTime)
    .getId()
}

function setDocumentProperties_(properties) {
  PropertiesService.getDocumentProperties().setProperties(properties, true)
}

// to do delete?
function deleteFormItems() {
  var form = FormApp.getActiveForm();
  form.getItems().forEach(function(item){
    form.deleteItem(item);
  });
}