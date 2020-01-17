function onOpen(e) {
  var menu = FormApp.getUi().createAddonMenu();
  menu.addItem('ClearForm', 'deleteFormItems'); // to do delete this
  menu.addItem('Eventify', 'openEventify').addToUi();
}

function openEventify() {
  var title = constants_().title;
  var htmlOutput = HtmlService.createTemplateFromFile('client/setup/index')
      .evaluate()
      .setTitle(title);

  FormApp.getUi().showSidebar(htmlOutput)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent()
}

function getSelectCalendarViewFromServer() {
  return HtmlService.createTemplateFromFile('client/selectCalendar/index').evaluate().getContent();
}

function getCreateFormViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('client/createForm/index').getContent();
}

function getEnableDisableViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('client/enableDisable/index').getContent();
}

function getSupportViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('client/support/index').getContent();
}
