var array = []
function Mudar() {
    document.getElementById("Criation").style.display = "block"
}

const ListName = []

function Metamorfose() {
    document.getElementById("FazendaPersonagens").style.display = "block"
    fetch("/ModsJson").then(res => res.json().then((data) => {
        var Random = Math.floor(Math.random() * (data.Sprites.length - 1))
        document.getElementById("PetGerar").src = "/BuscarSprites/" + data.Sprites[Random]
    }))
    fetch("/Name").then((response) => {
        response.json().then((dados) => {
            var Random = Math.floor(Math.random() * dados.Names.length)
            var Random1 = Math.floor(Math.random() * dados.Names.length)
            document.getElementById("Name").innerText = dados.Names[Random] + " " + dados.Names[Random1]
        })
    })
    fetch("/Data").then((response) => {
        response.json().then((data) => {
            for (var i = 0; i < data.Atribute.length; i++) {
                var Option = document.createElement("option")
                Option.innerText = Option.value = data.Atribute[i].Name
                document.getElementById("Atributo").append(Option)
            }
        })
    })
}

function Trocar_Laço() {
    if (document.getElementById("NamePersonagem").value === "") {
        console.log("Não Tem nada");
    } else {
        document.getElementById("Name").innerText = document.getElementById("NamePersonagem").value
    }

    if (document.getElementById("ImgPersonagem").value === "") {
        console.log("Não Tem nada");
    } else {
        document.getElementById("PetGerar").src = document.getElementById("ImgPersonagem").value
    }
}

function SalvarLaço() {
    var Configuration = JSON.parse(localStorage.getItem("Configuration"))
    Configuration.Fazenda?.push({
        "Name_Laço": document.getElementById("Name").innerText,
        "Image_Laço": document.getElementById("PetGerar").src,
        "Atributo": document.getElementById("Atributo").value,
        "Fome": 100,
        "Sono": 100,
        "Estado": "Acordado",
        "Requerimentos": ({
            "Força": Math.floor(Math.random() * 10),
            "Destreza": Math.floor(Math.random() * 10),
            "Constituição": Math.floor(Math.random() * 10),
            "Sabedoria": Math.floor(Math.random() * 10),
            "Agilidade": Math.floor(Math.random() * 10),
            "Carisma": Math.floor(Math.random() * 10),
            "Sorte": Math.floor(Math.random() * 10),
            "Vontade": Math.floor(Math.random() * 10)
        }),
        "Lvl": 0
    })
    localStorage.Configuration = JSON.stringify(Configuration)
}


function Rodar() {
    var Buscar = JSON.parse(localStorage.getItem("Configuration")).Fazenda
    for (i = 0; i < Buscar.length; i++) {
        var Div = document.createElement("div")
        var Name = document.createElement("h1")
        var Image = document.createElement("img")
        var Lvl = document.createElement("h2")
        Div.id = "Fazenda_Diva"
        Div.className = i
        var Food = JSON.parse(localStorage.getItem("Shop"))
        Div.addEventListener("click", function () {
            var Conteudo = `
            <h1>${Buscar[this.className].Name_Laço} LVL: ${Buscar[this.className].Lvl}</h1>
            <img src='${Buscar[this.className].Image_Laço}'/>
            <h6>Fome: ${Buscar[this.className].Fome}</h6>
            <h6>Sono: ${Buscar[this.className].Sono}</h6>
            <h2>${Buscar[this.className].Atributo}</h2>
            <div id='RequerimentosFazenda'></div>
            <select id='AddComida'></select>
            <button id='Comendo' class='${this.className}'>Comer </button>
            <button>Dormir</button>
            `
            var Req = `
            <h6>Força : ${Buscar[this.className].Requerimentos.Força}</h6>
            <h6>Destreza :${Buscar[this.className].Requerimentos.Destreza}</h6>
            <h6>Constituição :${Buscar[this.className].Requerimentos.Constituição}</h6>
            <h6>Sabedoria :${Buscar[this.className].Requerimentos.Sabedoria}</h6>
            <h6>Agilidade :${Buscar[this.className].Requerimentos.Agilidade}</h6>
            <h6>Carisma :${Buscar[this.className].Requerimentos.Carisma}</h6>
            <h6>Sorte :${Buscar[this.className].Requerimentos.Sorte}</h6>
            <h6>Vontade :${Buscar[this.className].Requerimentos.Vontade}</h6>
            `
            document.getElementById("StatusPet").style.display = "block"
            StatusPet.innerHTML = Conteudo
            document.getElementById("RequerimentosFazenda").innerHTML = Req
            var ShopBuscar = JSON.parse(localStorage.getItem("Shop"))
            for (var i = 0; i < ShopBuscar.length; i++) {
                var AddComida = document.getElementById("AddComida")
                var Opt = document.createElement("option")
                Opt.innerText = ShopBuscar[i].Name
                if (ShopBuscar[i].Category == "Comida") {
                    AddComida.append(Opt)
                    document.getElementById("FoodChoice").innerText = AddComida.value
                    console.log(i);
                    document.getElementById('Comendo').addEventListener("click",function(){
                        var ID = this.className
                        var Buscar = JSON.parse(localStorage.getItem("Configuration"))
                        Buscar.Fazenda[ID].Fome += parseInt(Math.floor(Math.random() * 100))
                        localStorage.Configuration = JSON.stringify(Buscar)
                    })
                }
            }
        })
        Name.innerText = Buscar[i].Name_Laço
        Image.src = Buscar[i].Image_Laço
        Lvl.innerText = "LVL: " + Buscar[i].Lvl
        Div.append(Image, Name, Lvl)
        document.getElementById("Created").append(Div)
    }
}



var Food = JSON.parse(localStorage.getItem("Shop"))



document.onload = Rodar()