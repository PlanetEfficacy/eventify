function onOpen(e) {
  var menu = FormApp.getUi().createAddonMenu();
  menu.addItem('Eventify', 'openEventify').addToUi();
}

function constants() {
  this.title = 'Eventify';
  return this;
}

function openEventify() {
  var title = constants().title;
  var htmlOutput = HtmlService.createTemplateFromFile('Page')
      .evaluate()
      .setTitle(title);
  
  FormApp.getUi().showSidebar(htmlOutput)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent()
}

function getPageTwoFromServer() {
  return HtmlService.createHtmlOutputFromFile('PageTwo').getContent();
}

function getPageThreeFromServer() {
  return HtmlService.createHtmlOutputFromFile('PageThree').getContent();
}

function helloWorld() {
  return "hello world!"
}