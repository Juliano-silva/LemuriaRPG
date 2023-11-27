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
    if(localStorage.Laço){
        array = JSON.parse(localStorage.getItem("Laço"))
    }
    array.push({
        "Name_Laço": document.getElementById("Name").innerText,
        "Image_Laço": document.getElementById("PetGerar").src,
        "Lvl": 0
    })

    localStorage.Laço = JSON.stringify(array)
}

function Rodar(){
    var Buscar = JSON.parse(localStorage.getItem("Laço"))
    for(i = 0 ; i < Buscar.length; i++){
        var Name = document.createElement("h1")
        var Image = document.createElement("img")
        var Lvl = document.createElement("h2")
        Name.innerText = Buscar[i].Name_Laço
        Image.src = Buscar[i].Image_Laço
        Lvl.innerText = Buscar[i].Lvl
        document.getElementById("Created").append(Name,Image,Lvl)
    }
}


document.onload = Rodar()