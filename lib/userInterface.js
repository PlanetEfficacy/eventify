function onOpen(e) {
  var menu = FormApp.getUi().createAddonMenu();
  menu.addItem('ClearForm', 'deleteFormItems'); // to do delete this
  menu.addItem('Eventify', 'openEventify').addToUi();
}

function openEventify() {
  var title = constants_().title;
  var htmlOutput = HtmlService.createTemplateFromFile('views/Setup')
      .evaluate()
      .setTitle(title);
  
  FormApp.getUi().showSidebar(htmlOutput)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent()
}

function getSelectCalendarViewFromServer() {
  return HtmlService.createTemplateFromFile('views/SelectCalendar').evaluate().getContent();
}

function getCreateFormViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('views/CreateForm').getContent();
}

function getEnableDisableViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('views/EnableDisable').getContent();
}

function getSupportViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('views/Support').getContent();
}