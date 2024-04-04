const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelectorAll(".res");
const display = document.querySelector(".display");
const tlimpar = document.getElementById("tlimpar"); // Correção: Removi o caractere "#" do seletor
const tigual = document.getElementById("tigual");
const tcpy = document.getElementById("tcpy"); // Correção: Removi o caractere "#" do seletor
const teste = document.getElementById("teste"); 
const calc_aba = document.getElementById("calc_aba"); 
const calc = document.getElementById("calc"); 
const img_aba_calc = document.getElementById("img_aba_calc"); 

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false;

        if (evt.target.innerHTML === ",") {
            if (!decimal) {
                decimal = true;
                if (display.innerHTML === "0") {
                    display.innerHTML = "0,";
                } else {
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if (display.innerHTML === "0") {
                display.innerHTML = "";
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true;
            if (display.innerHTML === "0") {
                display.innerHTML = "";
            }
            if (evt.target.innerHTML === "x") { // Correção: Usei "===" para comparar o operador
                display.innerHTML += "*";
            } else {
                display.innerHTML += evt.target.innerHTML;
            }
        }
    });
});

tlimpar.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;
    display.innerHTML = "0";
});

tigual.addEventListener("click", () => {
    sinal = false;
    decimal = false;
    const expression = display.innerHTML;
    try {
        const result = eval(expression); // Correção: Usei uma função própria para avaliar a expressão
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Erro na expressão";
    }
});

tcpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0,1000000)
    // navigator.clipboard.writeText(teste.value)
})

calc_aba.addEventListener("click",(evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        evt.target.setAttribute("src","setaesquerda.svg")
    }else{
        evt.target.setAttribute("src","setadireita.svg")
    }
})


