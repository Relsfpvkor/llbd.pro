
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

document.getElementById("rt_value").oninput = function () {
  document.getElementById("rt_display").innerText = this.value + "mm";
};
document.getElementById("dz_value").oninput = function () {
  document.getElementById("dz_display").innerText = this.value + "mm";
};
document.getElementById("db_value").oninput = function () {
  document.getElementById("db_display").innerText = this.value + "ms";
};

function connectDevice() {
  alert("WebUSB connection placeholder. Real USB connection logic goes here.");
}
