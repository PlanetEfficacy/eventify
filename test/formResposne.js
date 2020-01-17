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
