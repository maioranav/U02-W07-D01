const Utente = function (nome, cognome, dataDiNascita) {
   this.name = nome;
   this.surname = cognome;
   this.dob = dataDiNascita;
   this.showMe = function () {
      return `Ho aggiunto ${this.name} ${this.surname}, nato il ${this.dob}`
   }
}

Utente.prototype.id = 0
const elencoUtenti = []

const datePrint = (object) => {
   options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
   }
   dataRaw = new Date(object)
   return new Intl.DateTimeFormat("it-IT", options).format(dataRaw)
}

const aggiungi = () => {
   let nuovoNome = document.getElementById("name")
   let nuovoCognome = document.getElementById("surname")
   let nuovaData = document.getElementById("dob")
   let righeTabella = document.querySelectorAll("#utenti > tr")
   let tabella = document.getElementById("utenti")

   if (nuovoNome.value && nuovoCognome.value && nuovaData.value) {
      nuovoUtente = new Utente(nuovoNome.value, nuovoCognome.value, nuovaData.value)
      nuovoUtente.id = righeTabella.length + 1
      nuovaRiga = document.createElement('tr');

      dateString = datePrint(nuovoUtente.dob);

      nuovaRiga.innerHTML = `<th scope="row">${nuovoUtente.id}</th>
      <td> ${nuovoUtente.name}</td>
      <td>${nuovoUtente.surname}</td>
      <td>${dateString}</td>`;
      tabella.appendChild(nuovaRiga)
      console.log(nuovoUtente.showMe())

      nuovoNome.value = ''
      nuovoCognome.value = ''
      nuovaData.value = ''

      if (nuovoUtente.id == 1) {
         document.querySelector("table").classList.toggle("d-none")
      }

      elencoUtenti.push(nuovoUtente);
      console.log(elencoUtenti)

   } else {
      alert("Compila i campi richiesti!")
   }

}

document.querySelector("button[type=button]").addEventListener("click", aggiungi);