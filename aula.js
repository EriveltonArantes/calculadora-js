const data = new Date
const divdata = document.getElementById("data")
const relogio = document.getElementById("relogio")
const diaSemana =data.getDate()<10?"0"+data.getDate():data.getDate()
const diaMes =data.getDate()<10?"0"+data.getDate():data.getDate()


const dataFor = diaSemana + " / " + diaMes + " / " + data.getFullYear()
divdata.innerHTML = dataFor

const rel=()=>{
    const data = new Date
    let hora = data.getHours()
    hora=hora<10?"0"+hora:hora

    let min = data.getMinutes()
    min=min<10?"0"+min:min

    let sec = data.getSeconds()
    sec=sec<10?"0"+sec:sec

    const hora_completa = hora+":"+min+":"+sec
    relogio.innerHTML = hora_completa
}

const intervalo=setInterval(rel,1000)
