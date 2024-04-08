//Aqui é para o carrinho rodar e parar e aumenta e diminuir tamanha com teclas up e down
//sit timeout
const carro = document.getElementById("carro")
// const btn_esquerda = document.getElementById("btn_esquerda")
// const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")
const btn_rodar = document.getElementById("btn_rodar")

const init =()=>{
    carro.style="position:relative;left:0px;width:100px;height:40px"
    tamCarro= parseInt(carro.style.width)
    tamMax= window.innerWidth - tamCarro
}

let anima = null
let tamMax= null
let tamCarro=null
let dir = 0

const move =()=>{

    if(parseInt(carro.style.left) >= tamMax){
        dir=-1
        carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
        anima=setTimeout(move,40,dir)
    }else if (parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
    anima=setTimeout(move,40)

btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
})
}

btn_rodar.addEventListener("click",()=>{
    move()
})

// btn_esquerda.addEventListener("click",()=>{
//     clearTimeout(anima)
//     move(-1)
// })

// btn_direita.addEventListener("click",()=>{
//     clearTimeout(anima)
//     move(1)
// })

// window.onload=init
window.addEventListener("laod",init())
window.addEventListener("resize",()=>{
    tamMax= window.innerWidth - parseInt(carro.style.width)
})
//aqui e o codigo para movimentacao up e down
window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width) + 10 + "px"
        carro.style.height=parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width) - 10 + "px"
        carro.style.height=parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro= parseInt(carro.style.width)
    tamMax= window.innerWidth - tamCarro
})


//#############################################################
//aqui vem a movimentacao com carrinho com botoes direita esquerda e parar
// //sit timeout
// const carro = document.getElementById("carro")
// const btn_esquerda = document.getElementById("btn_esquerda")
// const btn_direita = document.getElementById("btn_direita")
// const btn_parar = document.getElementById("btn_parar")

// const init =()=>{
//     carro.style="position:relative;left:0px;width:100px;"
//     tamMax= window.innerWidth - parseInt(carro.style.width)
// }

// let anima = null
// let tamMax= null

// const move =(dir)=>{
//     if(dir > 0){
//         if(parseInt(carro.style.left) <= tamMax){
//             carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
//             anima=setTimeout(move,20,dir)
//         }else {
//             clearTimeout(anima)
//         }
//     }else if (dir < 0 ){
//         if(parseInt(carro.style.left) >= 0){
//             carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
//             anima=setTimeout(move,20,dir)
//     }}else{
//         clearTimeout(anima)
//     }    
    
// }

// btn_parar.addEventListener("click",()=>{
//     clearTimeout(anima)
// })

// btn_esquerda.addEventListener("click",()=>{
//     clearTimeout(anima)
//     move(-1)
// })

// btn_direita.addEventListener("click",()=>{
//     clearTimeout(anima)
//     move(1)
// })

// // window.onload=init
// window.addEventListener("laod",init())
// window.addEventListener("resize",()=>{
//     tamMax= window.innerWidth - parseInt(carro.style.width)
// })




//###################################################
// set inteval

// const carro = document.getElementById("carro")
// const btn_esquerda = document.getElementById("btn_esquerda")
// const btn_direita = document.getElementById("btn_direita")
// const btn_parar = document.getElementById("btn_parar")

// const init =()=>{
//     carro.style="position:relative;left:0px"
// }

// let anima = null
// const move =(dir)=>{
//     carro.style.left=parseInt(carro.style.left) + (10*dir) + "px"
// }

// btn_parar.addEventListener("click",()=>{
//     clearInterval(anima)
// })

// btn_esquerda.addEventListener("click",()=>{
//     clearInterval(anima)
//     anima=setInterval(move,10,-1)
// })

// btn_direita.addEventListener("click",()=>{
//     clearInterval(anima)
//     anima=setInterval(move,10,1)
// })

// window.onload=init
