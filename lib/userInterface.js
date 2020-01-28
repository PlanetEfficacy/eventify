function onOpen(e) {
  var menu = FormApp.getUi().createAddonMenu();
  menu.addItem('ClearForm', 'deleteFormItems') // to do delete this
    .addItem('Eventify', 'openEventify').addToUi();
    // .addItem('Select Calendar', 'openSelectCalendarView')
    // .addItem('Create Form', 'openCreateFormView')
    // .addItem('Enable/Disable', 'openEnableDisableView')
    // .addItem('Support', 'openSupportView').addToUi();
}

function openEventify() {
  var title = constants_().title;
  var htmlOutput = HtmlService.createTemplateFromFile('client/selectCalendar/index')
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
  return HtmlService.createTemplateFromFile('client/enableDisable/index').evaluate().getContent();
}

function getSupportViewFromServer() {
  return HtmlService.createHtmlOutputFromFile('client/support/index').getContent();
}

function showAlert(title, message) {
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.CLOSE)
}

//
// // todo - delete this
// function openSelectCalendarView() {
//   var title = constants_().title;
//   var htmlOutput = HtmlService.createTemplateFromFile('client/selectCalendar/index').evaluate().setTitle(title);
//   FormApp.getUi().showSidebar(htmlOutput)
// }
//
// // todo - delete this
// function openCreateFormView() {
//   var title = constants_().title;
//   var htmlOutput = HtmlService.createTemplateFromFile('client/createForm/index').evaluate().setTitle(title);
//   FormApp.getUi().showSidebar(htmlOutput)
// }
//
// // todo - delete this
// function openEnableDisableView() {
//   var title = constants_().title;
//   var htmlOutput = HtmlService.createTemplateFromFile('client/enableDisable/index').evaluate().setTitle(title);
//   FormApp.getUi().showSidebar(htmlOutput)
// }
//
// // todo - delete this
// function openSupportView() {
//   var title = constants_().title;
//   var htmlOutput = HtmlService.createTemplateFromFile('client/support/index').evaluate().setTitle(title);
//   FormApp.getUi().showSidebar(htmlOutput)
// }
