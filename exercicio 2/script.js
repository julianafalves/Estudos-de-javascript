function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =document.getElementById('res')

    var img = document.getElementById('img')
    console.log(img)
    if(img===null) 
        img = document.createElement('img')
    
    img.setAttribute('id','img')
    img.setAttribute('style','margin-top:15px;')
    if(fano.value.length ==0 || fano.value > ano ){
        window.alert('[erro] Digite o ano novamente!')
    }else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade <10) {
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if(idade >=21 && idade <65){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade>=0 && idade <10) {
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if(idade >=10 && idade <21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade >=21 && idade <65){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.appendChild(img)
    }
}