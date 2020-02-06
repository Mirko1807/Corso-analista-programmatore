let x = require('readline')
let y = x.createInterface({
    input: process.stdin,
    output: process.stdout
})

y.question('quanto lo vuoi lungo? ', (lenght) => {

    let base = "#";
    let space = ""
    let spacel = lenght
    for (let i = 0; i < lenght; i++) {
        for (let j = 0; j < spacel; j++) {
            space += " ";
        }
        spacel--;

        console.log(space + base);
        base += "##"
        space = "";
    }


    y.close()

})
