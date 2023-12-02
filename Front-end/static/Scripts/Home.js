var Point = 15
function Set() {
    if (localStorage.Avatar) {
        var Avatar = JSON.parse(localStorage.getItem("Avatar"))
        var Diva = document.createElement("div")
        const Container = `
        <div id='Container'>
        <img src='${Avatar.ImagePersonagem}'/>
        <h3>${Avatar.Name}</h3>
        <h3>${Avatar.Sintonia}</h3>
        <h4>${Avatar.Dinheiro}</h4>
        <h2>Lvl 0</h2>
        <div>
        <div id='CreateSelect'></div>
        </div>
        `
        Diva.innerHTML = Container
        document.getElementById("Set_Create").append(Diva)
    }
}


if(localStorage.Shop){
    var BuscarJson = JSON.parse(localStorage.getItem("Shop"))
for (var i = 0; i < BuscarJson.length; i++) {
    var Opt = document.createElement("option")
    Opt.innerText = BuscarJson[i].Name
    if (BuscarJson[i].Category == "Arma") {
        document.getElementById("Arma").append(Opt)
    }

    if (BuscarJson[i].Category == "Equipamento") {
        document.getElementById("Equipamento").append(Opt)
    }

    if (BuscarJson[i].Category == "Skill") {
        document.getElementById("Skill").append(Opt)
    }

    if (BuscarJson[i].Category == "Forma") {
        document.getElementById("Forma").append(Opt)
    }

    if (BuscarJson[i].Category == "Magia") {
        var Opt = document.createElement("option")
        var Opt1 = document.createElement("option")
        var Opt2 = document.createElement("option")
        var Opt3 = document.createElement("option")
        Opt.innerText = Opt2.innerText = Opt3.innerText = Opt1.innerText = BuscarJson[i].Name
        document.getElementById('Magia1').append(Opt)
        document.getElementById('Magia2').append(Opt1)
        document.getElementById('Magia3').append(Opt2)
        document.getElementById('Magia4').append(Opt3)
    }
}

}
if (localStorage.Laço) {
    var LaçoCont = JSON.parse(localStorage.getItem("Laço"))
    for (var k = 0; k < LaçoCont.length; k++) {
        var Opts = document.createElement("option")
        Opt.innerText = LaçoCont[k].Name_Laço
        document.getElementById("Laço").append(Opt)
    }
}

fetch("/Data").then((response) => {
    response.json().then((data) => {
        data.Status.map((data) => {
            var Btn = document.createElement("button")
            Btn.innerText = data
            Btn.id = data
            Btn.onclick = ContadorPoint
            document.getElementById("Criar").append(Btn)
        })
    })
})

function Add() {
    var array = ({
        "Name": document.getElementById("Personagem").value,
        "ImagePersonagem": document.getElementById("PersonagemImg").value,
        "Sintonia": document.getElementById("Sintonia").value,
        "Laço": [],
        "Arma": [],
        "Magia1": [],
        "Magia2": [],
        "Magia3": [],
        "Magia4": [],
        "Equipamento": [],
        "Skill": [],
        "Forma": [],
        "AvatarAtributos": [],
        "LVL": [],
        "LVLATRIBUTE": [],
        "Dinheiro": []
    })

    localStorage.Avatar = JSON.stringify(array)
}

function ContadorPoint() {
    fetch("/Data").then((response) => {
        response.json().then((data) => {
            Point--
            if (Point < 0) {
                return false
            }
            var ID = this.id
            var Create = document.createElement("h1")
            Create.id = ID
            Create.innerText = ID
            document.getElementById("Criar").append(Create)
            var Criar = document.getElementById("Criar")
            var Avatar = JSON.parse(localStorage.getItem("Avatar"))
            for (var i = 0; i < data.Status.length; i++) {
                Avatar.AvatarAtributos?.push(data.Status[i] + " " + Criar.querySelectorAll("#" + data.Status[i]).length)
                Avatar.Dinheiro = "500"
            }
            document.getElementById("Salvar").addEventListener("click", function () {
                localStorage.Avatar = JSON.stringify(Avatar)

            })
        })
    })
}

function SintoniaFunc() {
    fetch("/Data").then((response) => {
        response.json().then((data) => {
            for (var i = 0; i < data.Atribute.length; i++) {
                var Option = document.createElement("option")
                Option.innerText = Option.value = data.Atribute[i].Name
                document.getElementById("Sintonia").append(Option)
            }
        })
    })
    var Avatar = JSON.parse(localStorage.getItem("Avatar"))
    document.getElementById("Atributos").innerHTML = Avatar.AvatarAtributos
}

function ItensSalvos() {
    var Avatar = JSON.parse(localStorage.getItem("Avatar"))
    Avatar[0].Arma = Arma.value || "Espada de Madeira"
    Avatar[0].Equipamento = Equipamento.value || "Elmo de Madeira"
    Avatar[0].Forma = Forma.value || "Nenhuma Forma"
    Avatar[0].LVL = "0" || "0"
    Avatar[0].Laço = Laço.value || "Nenhum Laço"
    Avatar[0].Magia1 = Magia1.value || "Bola de Fogo Padrão"
    Avatar[0].Magia2 = Magia2.value || "Bola de Fogo Padrão"
    Avatar[0].Magia3 = Magia3.value || "Bola de Fogo Padrão"
    Avatar[0].Magia4 = Magia4.value || "Bola de Fogo Padrão"
    Avatar[0].Skill = Skill.value || "Nenhuma Skill"
    localStorage.Avatar = JSON.stringify(Avatar)
}

function LVLATRIBUTE() {
    if (localStorage.Avatar) {
        var Avatar = JSON.parse(localStorage.getItem("Avatar"))
        var AvatarInt = String(Avatar.AvatarAtributos).replace(/([^\d])+/gim, "")
        Avatar.LVLATRIBUTE = ({
            "LifeMax": (AvatarInt[0] * 10) + (AvatarInt[7] * 10) + (AvatarInt[2] * 10) / 2,
            "Ataque": (AvatarInt[0] * 10) + (AvatarInt[1] * 10)  / 2,
            "Defesa": (AvatarInt[2] * 10) + (AvatarInt[4] * 10) / 2,
            "ManaMax": (AvatarInt[6] * 10) + (AvatarInt[3] * 10) + (AvatarInt[5] * 10) / 2
        })
        localStorage.Avatar = JSON.stringify(Avatar)
    }
}


document.onload = Set(), SintoniaFunc(), LVLATRIBUTE()