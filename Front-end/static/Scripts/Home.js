function Set() {
    if (localStorage.Avatar && localStorage.AvatarLVL) {
        var Avatar = localStorage.getItem("Avatar")
        var LVL = localStorage.getItem("AvatarLVL")
        const Container = `
        <div>
        <img src='${JSON.parse(Avatar)[0].ImagePersonagem}'/>
        <h3>${JSON.parse(Avatar)[0].Name}</h3>
        <h3>${JSON.parse(Avatar)[0].Sintonia}</h3>
        </div>
        <div>
        <h1>${JSON.parse(LVL)}</h1>
        <div id='CreateSelect'></div>
        </div>
        `
        document.getElementById("Set_Create").innerHTML = Container
    }
}


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
document.onload = Set()