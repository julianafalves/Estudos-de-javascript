function gerar(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    
    if(num.value.length == 0){
        window.alert('Por favor digite um número')
    }else{
        num = Number(num.value)
        res.innerHTML =''
        for(let i = 0; i <= 10; i++){
            res.innerHTML +=` ${i} x ${num} = ${i*num} <br>` 
        }
    }
    
}