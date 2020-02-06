let x = require('readline')
let y = x.createInterface({
    input: process.stdin,
    output: process.stdout
})

y.question('quanto deve essere grande la scacchiera? ', (size) => {
    let black = "#"; //riga che comincia con il nero
    let white = " "; //riga che comincia con il bianco
    let check = 1; //variabile di controllo sull'inizializzazione
    for (let i = 0; i < size - 1; i++) {    //crea le prime 2 righe in base alla dimensione di size
        if (black[i] === "#" && white[i] === " ") {
            black += " "
            white += "#"
        }
        else if (black[i] === " " && white[i] === "#") {
            black += "#"
            white += " "
        } else { check = 0 }
    }


    if (check) //controllo sull'inizializzazione
    {
        if (size % 2 === 0) //stampa la scacchiera combinando riga bianca e riga nera
        {
            for (let j = 0; j < (size / 2); j++)
                console.log(black + "\n" + white)
        } else {
            for (let j = 0; j < (size / 2) - 1; j++) //per size disparo stampo una coppia in meno e ne aggiungo una sola
                console.log(black + "\n" + white)
            console.log(black)
        }
    } else console.log("errore di inzializzazione")

    y.close()

})