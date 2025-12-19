console.log("Application Student Helper chargée");
document.getElementById("app").innerHTML +=
  "<p>Application prête à être utilisée.</p>";
document.getElementById("btnOk").addEventListener("click", function () {
  const prenom = document.getElementById("prenom").value;
  document.getElementById("app").innerHTML += `<p>Bonjour ${prenom} !</p>`;
});
