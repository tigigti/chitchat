var settingsBtn = document.getElementById("settings-btn");
var modalFenster = document.getElementById("modal-fenster");
var modalVisible = false;

settingsBtn.addEventListener("click",function(){
    modalFenster.className = modalVisible == false ? "visible" : "";
    modalVisible = !modalVisible;
});