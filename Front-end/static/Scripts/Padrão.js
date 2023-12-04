if (localStorage.Configuration) {
    console.log("Nada");
} else {
    var array = ({
        "Backgrounds": [],
        "Stage": 0,
        "EscolhaBK": [],
        "Fazenda": []
    })
    localStorage.Configuration = JSON.stringify(array)
}

if (localStorage.Avatar) {
    document.getElementById("Add_Button").addEventListener("click", function () {
        document.getElementById("Adicionar_Conteudo").setAttribute("id", "Adicionar_ConteudoAparecer")
    })
} else {
    document.getElementById("Add_ButtonDiv").addEventListener("click", function () {
        document.getElementById("Adicionar_Conteudo").setAttribute("id", "Adicionar_ConteudoAparecer")
    })
}

if (localStorage.Avatar) {
    document.getElementById("Add_ButtonDiv").style.display = "none"
} else {
    document.querySelectorAll("#Add_Button").forEach(el => el.style.display = "none")
}
