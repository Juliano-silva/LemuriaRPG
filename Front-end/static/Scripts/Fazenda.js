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

function Trocar_Laço(){
    if(document.getElementById("NamePersonagem").value === ""){
        console.log("Não Tem nada");
    }else{
        document.getElementById("Name").innerText = document.getElementById("NamePersonagem").value
    }

    if(document.getElementById("ImgPersonagem").value === ""){
        console.log("Não Tem nada");
    }else{
        document.getElementById("PetGerar").src = document.getElementById("ImgPersonagem").value
    }
}

function SalvarLaço(){

    var Configuration = JSON.parse(localStorage.getItem("Configuration"))
    Configuration.Fazenda?.push({
        "Name_Laço": document.getElementById("Name").innerText,
        "Image_Laço": document.getElementById("PetGerar").src,
        "Atributo": document.getElementById("Atributo").value,
        "Lvl": 0
    })
    localStorage.Configuration = JSON.stringify(Configuration)
}

function Rodar(){
    var Buscar = JSON.parse(localStorage.getItem("Configuration")).Fazenda
    for(i = 0 ; i < Buscar.length; i++){
        var Div = document.createElement("div")
        var Name = document.createElement("h1")
        var Image = document.createElement("img")
        var Lvl = document.createElement("h2")
        Div.id = "Fazenda_Diva"
        Name.innerText = Buscar[i].Name_Laço
        Image.src = Buscar[i].Image_Laço
        Lvl.innerText = "LVL: " + Buscar[i].Lvl
        Div.append(Image,Name,Lvl)
        document.getElementById("Created").append(Div)
    }
}


document.onload = Rodar()