let size = 8;
let black = "#"; //riga che comincia con il nero
let white = "#"; //riga che comincia con il bianco
for (let i=0;i<size-1;i++)
{    //crea le prime 2 righe in base alla dim di size
    if (black[i]==="#"&&white[i]===" ") 
    {
      black+=" "
      white+="#"
    }
    else 
    {
      black+="#"
      white+=" "
    }
} 
//stampa la scacchiera combinando riga bianca e riga nera
for (let j=0; j<size/2;j++)
console.log(black + "\n" + white) 

