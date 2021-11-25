// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// [x] Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const studente = {
    nome: 'Dejan',
    cognome: 'Nikolic',
    eta: 24
}


// [x] Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (const key in studente) {
    console.log(key);  // stampo le proprietà dell'oggetto 
    console.log(studente[key]);  // stampo i valori delle proprietà dell'oggetto
}


// [x] Creare un array di oggetti di studenti.
const studenti = 
[
    {
        nome: 'Dejan',
        cognome: 'Nikolic',
        eta: 24
    },
    {
        nome: 'Paolo',
        cognome: 'Rossi',
        eta: 23
    },
    {
        nome: 'Francesco',
        cognome: 'Golia',
        eta: 25
    },
    {
        nome: 'John',
        cognome: 'Doe',
        eta: 22
    }
];


// [x] Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(let i = 0; i < studenti.length; i++) {
    let thisStudent = studenti[i];

    for (let key in thisStudent) {
        if(key !== 'eta') {
            console.log(thisStudent[key]);
        }
    }
}


// [x] Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Chiedo all'utente di inserire il nome del nuovo oggetto studente
const userObjectName = prompt('Inserisci il nome del nuovo oggetto studente');
// console.log(userObjectName);

// Chiedo all'utente di inserire il cognome del nuovo oggetto studente
const userObjectLastName = prompt('Inserisci il cognome del nuovo oggetto studente');
// console.log(userObjectLastName);

// Chiedo all'utente di inserire l'età del nuovo oggetto studente
const userObjectAge = parseInt( prompt('Inserisci l\'età del nuovo oggetto studente') );
// console.log(userObjectAge);

const userStudent = {
    nome: userObjectName,
    cognome: userObjectLastName,
    eta: userObjectAge
}


// Aggiungo il nuovo oggetto con le proprietà nome, cognome e età passati dall'utente all'array di studenti
studenti.push(userStudent);

// Stampo in console l'array completo di studenti, dopo che l'utente ha creato il nuovo oggetto
console.log(studenti);