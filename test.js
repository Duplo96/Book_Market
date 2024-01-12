let utenti = [
  { nome: "Luca", hobby: ["calcio", "cinema"] },
  { nome: "Sara", hobby: ["lettura", "musica"] },
  { nome: "Marco", hobby: ["lettura", "musica"] },
];

let utenteConHobbyLettura = utenti.find((x) => x.hobby.includes("lettura"));
let { nome, hobby } = utenteConHobbyLettura;
console.log(nome, hobby[0]);
let [_, __, obj3] = utenti;
console.log(obj3.nome);
