var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true

setInterval(()=>{
    proximoImg()
}, 3000)

function proximoImg(){ 
   cont++
   if(cont>3){
    cont = 1
   }
   document.getElementById('radio'+ cont).checked = true
}

