var Point = 15

function Set() {
    if (localStorage.Avatar) {
        var Avatar = JSON.parse(localStorage.getItem("Avatar"))
        var Diva = document.createElement("div")
        const Container = `
        <div id='Container'>
        <img src='${Avatar.ImagePersonagem}'/>
        <h3>${Avatar.Name} Lvl 0</h3>
        <div id='Status'>
        <div id='ContainerChild'>
        <h3>${Avatar.Sintonia}</h3>
        <div id="Atributos"></div>
        <h4>R$ ${Avatar.Dinheiro}</h4>
        <div id='CreateSelect'></div> 
        </div>
        </div>
        `
        Diva.innerHTML = Container
        document.getElementById("Set_Create").append(Diva)
    }
}

document.getElementById("Home").addEventListener("keypress",function(evento){
    if(evento.code == "KeyI"){
        document.getElementById("Status").style.display = "block"
    }
})

document.getElementById("KeyBtn").addEventListener("click",function(){
    document.getElementById("Status").style.display = "block"
})

if (localStorage.Shop) {
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
        "Point_Lvl": [],
        "LVLATRIBUTE": [],
        "Dinheiro": []
    })

    localStorage.Avatar = JSON.stringify(array)
}



function ContadorPoint() {
    fetch("/Data").then((response) => {
        response.json().then((data) => {
            Point--
            document.getElementById("Points").innerText = Point
            if (Point < 0) {
                return false
            }
            var ID = this.id
            var Create = document.createElement("h1")
            Create.id = ID
            Create.innerText = ID
            var DadosList = []
            document.getElementById("Criar").append(Create)
            var Criar = document.getElementById("Criar")
            var Avatar = JSON.parse(localStorage.getItem("Avatar"))
            for (var i = 0; i < data.Status.length; i++) {
                DadosList.push(data.Status[i] + " " + Criar.querySelectorAll("#" + data.Status[i]).length)
                Avatar.AvatarAtributos = DadosList
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
    if (localStorage.Avatar) {
        var Avatar = JSON.parse(localStorage.getItem("Avatar"))
        for (var i = 0; i < Avatar.AvatarAtributos.length; i++) {
            var Name = document.createElement("h4")
            Name.innerText = Avatar.AvatarAtributos[i]
            document.getElementById("Atributos").append(Name)
        }
    }
}

function ItensSalvos() {
    var Avatar = JSON.parse(localStorage.getItem("Avatar"))
    Avatar.Arma = Arma.value || "Espada de Madeira"
    Avatar.Equipamento = Equipamento.value || "Elmo de Madeira"
    Avatar.Forma = Forma.value || "Nenhuma Forma"
    Avatar.LVL = "0" || "0"
    Avatar.Laço = Laços.value || "Nenhum Laço"
    Avatar.Magia1 = Magia1.value || "Bola de Fogo Padrão"
    Avatar.Magia2 = Magia2.value || "Bola de Fogo Padrão"
    Avatar.Magia3 = Magia3.value || "Bola de Fogo Padrão"
    Avatar.Magia4 = Magia4.value || "Bola de Fogo Padrão"
    Avatar.Skill = Skill.value || "Nenhuma Skill"
    localStorage.Avatar = JSON.stringify(Avatar)
}

function LVLATRIBUTE() {
    if (localStorage.Avatar) {
        var Avatar = JSON.parse(localStorage.getItem("Avatar"))
        var AvatarInt = String(Avatar.AvatarAtributos).replace(/([^\d])+/gim, "")
        Avatar.LVLATRIBUTE = ({
            "LifeMax": (AvatarInt[0] * 10) + (AvatarInt[7] * 10) + (AvatarInt[2] * 10) / 2,
            "Ataque": (AvatarInt[0] * 10) + (AvatarInt[1] * 10) / 2,
            "Defesa": (AvatarInt[2] * 10) + (AvatarInt[4] * 10) / 2,
            "ManaMax": (AvatarInt[6] * 10) + (AvatarInt[3] * 10) + (AvatarInt[5] * 10) / 2
        })
        localStorage.Avatar = JSON.stringify(Avatar)
    }
}


document.onload = Set(), SintoniaFunc(), LVLATRIBUTE()