function showSquares() {
    document.getElementById('squareContainer').classList.toggle('show');
}

document.getElementById("verificarnome").onclick = function(){
    verificarCampo()
}

const nomeInput = document.getElementById("nomeUser")
const startBotao = document.getElementById("start")

function verificarCampo(){
    if(nomeInput.value.trim() !== "" && nomeInput.value.length >= 3 && isNaN(nomeInput.value) ){
        sessionStorage.setItem("nomeUser", nomeInput.value)
        startBotao.style.visibility = "visible"
    }else{
        startBotao.style.visibility = "hidden"
         alert("Digite seu nome corretamente")
        nomeInput.value = ""
    }
}