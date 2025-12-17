console.log("Application Student Helper chargée");

function afficherMessage(message) {
  document.getElementById("app").innerHTML += `<p>${message}</p>`;
}

document.getElementById("app").innerHTML +=
  "<p>Application prête à être utilisée.</p>";

document.getElementById("btnOk").addEventListener("click", function () {
  const prenom = document.getElementById("prenom").value;
  if (prenom === "") {
    alert("Veuillez entrer un prénom");
    return;
  }
  afficherMessage(`Bonjour ${prenom} !`);
});

let compteur = 0;

document.getElementById("btnOk").addEventListener("click", function () {
  compteur++;
  console.log("Nombre de clics :", compteur);
  afficherMessage(`Nombre de clics : ${compteur}`);
});


