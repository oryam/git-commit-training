# Git commit training

## Présentation du projet

L’objectif principal de ce projet n’est pas la complexité du code JavaScript, mais l’apprentissage des bonnes pratiques de travail collaboratif avec Git et GitHub :
- création de branches,
- commits réguliers et explicites,
- push vers un dépôt distant,
- fusion (merge) de branches,
- résolution de conflits simples.

Le projet est volontairement simple afin de se concentrer sur le workflow Git.


## Objectifs pédagogiques

À l’issue de cet exercice, chaque personne devra être capable de :
- cloner un dépôt GitHub,
- créer et utiliser une branche de travail,
- modifier du code HTML, CSS ou JavaScript simple,
- effectuer des commits clairs et fréquents,
- pousser son travail sur GitHub,
- créer une Pull Request,
- fusionner une branche dans la branche principale,
- comprendre l’évolution d’un projet collaboratif.


## Prérequis

- Connaissances de base en HTML, CSS et JavaScript
- Avoir suivi les sessions du module "Outils de développement"
- Git installé sur la machine
- Un compte GitHub actif
- Un navigateur web moderne (Chrome, Firefox, Edge)


## Structure du projet

```
├── index.html
├── style.css
├── script.js
└── README.md
```


## Organisation du travail

- Le projet est réalisé par une équipe de plusieurs développeurs.
- Chaque personne travaille sur une fonctionnalité différente.
- Chaque fonctionnalité est développée sur une branche dédiée.
- La branche `master` (ou `main`) contient la version stable du projet.
- Les branches de travail suivent la convention :

Exemples :
- feature-input-prenom
- feature-bonjour-message
- feature-style-form


## Scénario global du projet

Le projet évolue progressivement grâce aux modifications successives, chacune réalisée par une personne différente.

Chaque modification suit le cycle :
1. Création d’une branche
2. Modification du code
3. Commit avec message explicite
4. Push vers GitHub
5. Pull Request
6. Fusion dans la branche principale


## Détail des scénarios de modification

### Scénario 1 : Message de bienvenue dynamique
Ajout d’un message affiché dynamiquement via JavaScript au chargement de la page.

Branche : `feature-welcome-message`

```javascript
document.getElementById("app").innerHTML +=
  "<p>Application prête à être utilisée.</p>";
```


---

### Scénario 2 : Champ de saisie du prénom
Ajout d’un champ de saisie permettant à l’utilisateur d’entrer son prénom.

Branche : `feature-input-prenom`

```html
<input type="text" id="prenom" placeholder="Entrez votre prénom">
<button id="btnOk">OK</button>
```

---

### Scénario 3 : Bouton fonctionnel
Ajout d’un bouton et gestion du clic avec un gestionnaire d’événement JavaScript.

Branche : `feature-bouton-action`

```javascript
document.getElementById("btnOk").addEventListener("click", function () {
  console.log("Bouton cliqué");
});
```

---

### Scénario 4 : Message personnalisé
Affichage d’un message "Bonjour <prénom>" après la saisie et le clic sur le bouton.

Branche : `feature-bonjour-prenom`

```javascript
document.getElementById("btnOk").addEventListener("click", function () {
  const prenom = document.getElementById("prenom").value;
  document.getElementById("app").innerHTML += `<p>Bonjour ${prenom} !</p>`;
});
```

---

### Scénario 5 : Validation de la saisie
Ajout d’une vérification empêchant l’affichage du message si le champ prénom est vide.

Branche : `feature-validation-input`

```javascript
if (prenom === "") {
  alert("Veuillez entrer un prénom");
  return;
}
```

---

### Scénario 6 : Amélioration du style CSS
Amélioration de l’interface utilisateur (espaces, tailles, lisibilité).

Branche : `feature-style-form`

```css
input, button {
  padding: 8px;
  margin: 5px;
}
```

---

### Scénario 7 : Compteur de clics
Ajout d’un compteur permettant de compter le nombre de clics sur le bouton.

Branche : `feature-compteur`

```javascript
let compteur = 0;

document.getElementById("btnOk").addEventListener("click", function () {
  compteur++;
  console.log("Nombre de clics :", compteur);
});
```

---

### Scénario 8 : Affichage du compteur
Affichage dynamique du compteur de clics dans la page web.

Branche : `feature-affichage-compteur`

```javascript
document.getElementById("app").innerHTML +=
  `<p>Nombre de clics : ${compteur}</p>`;
```

---

### Scénario 9 : Refactorisation du code JavaScript
Nettoyage et amélioration du code :
- suppression des répétitions,
- création de fonctions réutilisables,
- amélioration de la lisibilité.

Branche : `feature-refactor`

```javascript
function afficherMessage(message) {
  document.getElementById("app").innerHTML += `<p>${message}</p>`;
}
```

---

### Scénario 10 : Documentation du projet
Amélioration de la documentation du projet dans le fichier README.md.

Branche : `feature-readme`

```
## Fonctionnalités
- Message de bienvenue
- Saisie du prénom
- Message personnalisé
- Compteur de clics
```

---

### Workflow Git attendu

```
git checkout -b feature-xxx
git add .
git commit -m "Ajout de la fonctionnalité xxx"
git push origin feature-xxx
```

Puis :
- Pull Request sur GitHub
- Revue rapide
- Merge dans master


## Bonnes pratiques attendues

- Un commit correspond à une modification logique.
- Le message de commit doit être clair et explicite.
- Tester le projet dans un navigateur avant chaque commit.
- Mettre à jour sa branche avec la branche principale si nécessaire.
- Ne pas modifier le travail d’une autre personne sans coordination.


## Résultat attendu

À la fin de l’exercice :
- l’application est fonctionnelle,
- le code est lisible et structuré,
- l’historique Git est clair,
- toutes les fonctionnalités sont intégrées dans la branche principale,
- chaque personne a participé activement au projet.


## Lancement du projet

Ouvrir simplement le fichier `index.html` dans un navigateur web. Aucune installation spécifique n’est requise.

