const saoPaulo = 3000000
const chaGrande = 30000
const recife = 1500000
const amaraji = 18000

function verificarCidade(habitantes) {
    if (habitantes > 300000) {
        console.log("É uma cidade grande!")
    } else {
        console.log("é uma cidade pequena!")
    }

}

verificarCidade(chaGrande )