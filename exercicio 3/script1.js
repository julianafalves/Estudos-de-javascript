function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    let res = document.getElementById('res')

    for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
    }


}