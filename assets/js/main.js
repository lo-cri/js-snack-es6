// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bici = [
    {
        nome: 'Rossi',
        peso: 8.5
    },
    {
        nome: 'Verdi',
        peso: 6.3
    },
    {
        nome: 'Bianchi',
        peso: 6.9
    },
    {
        nome: 'Loreti',
        peso: 7.0
    },
    {
        nome: 'Mariani',
        peso: 8.0
    }
]


let PesoBici = bici[0]

    
for(let i = 0; i < bici.length; i++){
    if(bici[i].peso > PesoBici.peso){
        PesoBici = bici[i]
    }
}

let {nome, peso} = PesoBici;

document.querySelector('.container').innerHTML += `
    <p>La bici con peso maggiore è : ${nome} </p>
    <p>Il suo peso è : ${peso}</p>
    `

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams =  [
    {
        team: 'Roma',
        punteggio: 0,
        fallo: 0,
    },
    {
        team: 'Lazio',
        punteggio: 0,
        fallo: 0,
    },
    {
        team: 'Frosinone',
        punteggio: 0,
        fallo: 0,
    },
    {
        team: 'Latina',
        punteggio: 0,
        fallo: 0,
    },
    {
        team: 'Rieti',
        punteggio: 0,
        fallo: 0,
    },
];

teams.forEach( ( data ) => {
    data.punteggio = Math.floor(Math.random() * 100) + 1;
    data.fallo = Math.floor(Math.random() * 100) + 1;
});

const teamFallo = teams.map( ( {team, fallo} ) => 
    ({team, fallo}));
     
console.log(teamFallo);


// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const arrayNomi = ['Daniela', 'Cristina', 'Emanuele', 'Kaveh', 'Lisa', 'Nikolaj',]

let min = parseInt(prompt(`Inserisci un numero tra 0 e ${arrayNomi.length - 1}`))
let max = parseInt(prompt(`Inserisci un numero tra 0 e 5`))

let arrayAggiunto = arrayNomi.filter((element, index) => {
    if(min < index && max > index){
        return element
    }
})

console.log(arrayAggiunto)