let lista_ra = []
let lista_notas = []
let res = document.getElementById('res')
function inserir(){
    let ra = document.getElementById('ratxt')
    let p1 = document.getElementById('p1txt')
    let p2 = document.getElementById('p2txt')
    ra = ra.value
    p1 = Number(p1.value)
    p2 = Number(p2.value)
    media = (p1 + p2)/2
    lista_ra.push(ra)
    lista_notas.push(media)

    console.log(lista_ra)
    console.log(lista_notas)

}
function mediaaluno() {
    let ra = document.getElementById('ratxt')
    //let res = document.getElementById('res')
    ra = ra.value
    if(lista_ra.includes(ra)){
        let index = lista_ra.indexOf(ra)
        let nota = lista_notas[index]
        res.innerHTML = `A média do aluno com o RA ${ra} é ${nota}`
    }else{
        window.alert('O RA do aluno não existe')    
    }

}

function mediageral() {
    let media = 0
    let soma = 0
    for(let i = 0; i < lista_notas.length;i++){
        soma += lista_notas[i]
    }
    media = soma / lista_notas.length
    res.innerHTML = `A média da sala é ${media}`
}

function imprima() {

    res.innerHTML = 'Média de cada aluno foi: <br>'
    for(let i = 0; i < lista_notas.length;i++){
        res.innerHTML +=  `A média do aluno com o RA ${lista_ra[i]} É ${lista_notas[i]} <br>`
    }
    
}
