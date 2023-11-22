// Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.

const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const {info: {name, age}, grades, grades:{math, science}} = student; //non capisco se la traccia richiede un'unica variabile per i voti e che quindi ritorni in output l'oggetto nidificato o se richiede due variabili separate per math e science, quindi le ho create entrambe.

console.log(name)
console.log(age)
console.log(grades)
console.log(math)
console.log(science)