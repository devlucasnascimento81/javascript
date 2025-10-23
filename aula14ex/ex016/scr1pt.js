function contar() {
let ini = document.getElementById('txtini')
let fin = document.getElementById('txtfim')
let passo = document.getElementByI('txtpass')
let res = document.getElementById('res')

if (ini.value.length == 0 || fin.value.length == 0 || passo.value.lenght == 0){
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML =  'Impossível contar!'
} else {
    res.innerHTML = 'Contando'
    let i = Number(ini.value)  
    let f = Number(fin.value)
    let p = Number(passo.value) 
    if (i < f){
        for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \U{1F449}`
        }
    } else  {
        for(let c = i; c >= f; c += p) {
            res.innerHTML += `${c} \U{1F449}`
        }
    }
    res.innerHTML += `\U{1F3C1}`
}    
}
