var tabLinks = document.getElementsByClassName("tablink");
var tabContents = document.getElementsByClassName("tabcontent");

function openTab(event, tabname) {
  for (var tabLink of tabLinks) {
    tabLink.classList.remove("activelink");
  }
  for (var tabContent of tabContents) {
    tabContent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}