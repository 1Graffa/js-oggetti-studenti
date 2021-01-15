// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso il for in tutte le proprietà.
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto che descrive uno studente
  var superEroe = {
    name : "Ciclope",
    power : "Optic Blasts",
    group : "X-Men"
  }
//stampo a schermo attraverso il for in tutte le proprietà
  for (var k in superEroe) {
    document.getElementById("nome").innerHTML = "Name : " + superEroe.name;
    document.getElementById("potere").innerHTML = "Super Ability : " + superEroe.power;
    document.getElementById("gruppo").innerHTML = "Group : " + superEroe.group;
  }
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var superEroi =  [
  { name : "Mr.Fantastic",
    power : "Elastic Body",
    group : "Fantastic 4"
  },
  { name : "Dottor Octopus",
    power : "Cyber Tentacles",
    group : "Sinister Six"
  },
  { name : "Thor",
    power : "Magic Hammer",
    group : "Avangers"
  }
];
for (var i = 0; i < superEroi.length; i++) {
    for (var k in superEroi[i]) {
      document.getElementById("prova").innerHTML = superEroi[0].name + " of " + superEroi[0].group + " , " + superEroi[1].name + " of " + superEroi[1].group + " , " + superEroi[2].name + " of " + superEroi[2].group;
      }
  }
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeUtente = prompt("Insert your name");
var potereUtente = prompt("Qual è il tuo superpotere?")
var gruppoUtente = prompt("A che gruppo appartieni?")

superEroi.push({name : nomeUtente , power : potereUtente , group : gruppoUtente});

console.log(superEroi);
