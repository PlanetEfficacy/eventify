function getEventInputsFromLastResponse() {
  var responses = FormApp.getActiveForm().getResponses();
  var lastResponse = responses[responses.length -1];
  var startDate = getResponse_(lastResponse, getStartDateItem_());
  var startTime = getResponse_(lastResponse, getStartTimeItem_());
  var endTime = getResponse_(lastResponse, getEndTimeItem_());
  
  return {
    title: getResponse_(lastResponse, getTitleItem_()),
    startDateTime: asDate_(startDate, startTime),
    endDateTime: asDate_(startDate, endTime)
  };
}

function asDate_(date, time) {
  return new Date(date + "T" + time + ":00");
}

function getResponse_(response, item) {
  return response.getResponseForItem(item).getResponse();
}

function getDocumentProperty_() {
  var documentProperties = PropertiesService.getDocumentProperties();
  return {
        titleId: documentProperties.getProperty(constants_().titleId),
    startDateId: documentProperties.getProperty(constants_().startDateId),
    startTimeId: documentProperties.getProperty(constants_().startTimeId),
      endTimeId: documentProperties.getProperty(constants_().endTimeId),
  };
}

function getItem_(id) {
  return FormApp.getActiveForm().getItemById(id)
}

function getTitleItem_() {
  var id = getDocumentProperty_().titleId;
  return getItem_(id);
}

function getStartDateItem_() {
  var id = getDocumentProperty_().startDateId;
  return getItem_(id);
}

function getStartTimeItem_() {
  var id = getDocumentProperty_().startTimeId;
  return getItem_(id);
}

function getEndTimeItem_() {
  var id = getDocumentProperty_().endTimeId;
  return getItem_(id);
}

// TEST
function setupFormResponseTest() {
  deleteFormItems();
  createFormQuestions();
  var form = FormApp.getActiveForm();
  
  form.setAcceptingResponses(true)
    .setCollectEmail(false)
    .setLimitOneResponsePerUser(false);
  
  var response = form.createResponse();
  var title = getTitleItem_().asTextItem().createResponse('test title');
  var startDate = getStartDateItem_().asDateItem().createResponse(new Date(2020, 05, 11));
  var startTime = getStartTimeItem_().asTimeItem().createResponse(12, 00);
  var endTime = getEndTimeItem_().asTimeItem().createResponse(13, 00);
  
  response.withItemResponse(title)
    .withItemResponse(startDate)
    .withItemResponse(startTime)
    .withItemResponse(endTime)
    .submit();
}

function tearDown() {
  deleteFormItems();
  FormApp.getActiveForm().deleteAllResponses();
}