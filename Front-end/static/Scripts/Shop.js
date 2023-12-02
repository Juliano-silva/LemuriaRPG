var Loja = []

fetch("/Data").then((response) => {
    response.json().then((dados) => {
        dados.Status.map((data) => {
            var Btn = document.createElement("button")
            Btn.innerText = data
            Btn.id = data
            Btn.onclick = ContadorPoint
            document.getElementById("Criar").append(Btn)
        })
    })
})

fetch("/Data").then((response) => {
    response.json().then((dados) => {
        dados.Equipamentos.map((data) => {
            var Opt = document.createElement("option")
            Opt.innerText = data
            Opt.value = data
            Selecionar.append(Opt)
        })
    })
})

function ContadorPoint() {
    fetch("/Data").then((response) => {
        response.json().then((data) => {
            var ID = this.id
            var Listar = []
            var Create = document.createElement("h1")
            Create.id = ID
            Create.innerText = ID
            document.getElementById("Criar").append(Create)
            var Criar = document.getElementById("Criar")
            Add = JSON.parse(localStorage.getItem("Shop"))
            for (var i = 0; i < data.Status.length; i++) {
                Listar.push(data.Status[i] + " " + Criar.querySelectorAll("#" + data.Status[i]).length)
            }
            localStorage.setItem("Dados",JSON.stringify(Listar))
        })
    })
}


function Salvar() {
    if (localStorage.Shop) {
        Loja = JSON.parse(localStorage.getItem("Shop"))
    }
    Loja.push({
        "Name": document.getElementById("Name").value,
        "Description": document.getElementById("Description").value,
        "Requerimentos": JSON.parse(localStorage.getItem("Dados")),
        "Image": document.getElementById("Image").value,
        "Preco": document.getElementById("Preco").value,
        "Category": document.getElementById("Selecionar").value,
        "RequerimentosSoma":[]
    })

    localStorage.Shop = JSON.stringify(Loja)
    console.log("Salvando Itens");
}
var MyMoney = JSON.parse(localStorage.getItem("Avatar")).Dinheiro
var sum = 0
function Rodar() {
    if(localStorage.Shop){
        var BuscarJs = JSON.parse(localStorage.getItem("Shop"))
        for (var i = 0; i < BuscarJs.length; i++) {
            var Div = document.createElement("div")
            var ItensH6 = document.createElement("h6")
            var Name = document.createElement("h1")
            var Texto = document.createElement("p")
            var Image = document.createElement("img")
            var Preco = document.createElement("h4")
            var Req = document.createElement("h4")
            var Comprar = document.createElement("button")
            var Shop = JSON.parse(localStorage.getItem("Shop"))
            var somarShop = 0
            for(var j = 0 ; j < BuscarJs[i].Requerimentos.length; j ++){
                var Requerimentos = Shop[i].Requerimentos[j].replace(/([^\d])+/gim, "")
                somarShop += parseInt(Requerimentos) 
            }
            Shop[i].RequerimentosSoma = somarShop
            localStorage.Shop = JSON.stringify(Shop)
            Name.innerText = BuscarJs[i].Name
            Div.id = "Caixa"
            ItensH6.innerText =  BuscarJs[i].Category || "Itens"
            Texto.innerText = BuscarJs[i].Description
            Image.src = BuscarJs[i].Image
            Preco.innerText = "Preço: " + BuscarJs[i].Preco
            Comprar.innerText = "Comprar"
            Comprar.id = i
            Comprar.onclick = ComprarFunction
            Req.innerText = "Requerimentos: " +  somarShop
            Div.append(ItensH6, Image, Name, Texto, Preco , Req, Comprar)
            document.getElementById("BuscarBody").append(Div)
        }
    }
    var Buscar = JSON.parse(localStorage.getItem("Avatar"))
    document.getElementById("Dinheiro").innerText = Buscar.Dinheiro
    for(var i = 0 ; i < Buscar.AvatarAtributos.length; i++){
        var Componets = parseInt(Buscar.AvatarAtributos[i].replace(/([^\d])+/gim, ""))
        sum += Componets
    }
    document.getElementById("Components").innerText = sum
}

function ComprarFunction() {
    var BuscarJs = JSON.parse(localStorage.getItem("Shop"))
    var Buscar = JSON.parse(localStorage.getItem("Avatar"))
    var MyComponents = parseInt(document.getElementById("Components").innerText)
    if (BuscarJs[this.id].Preco < MyMoney && BuscarJs[this.id].RequerimentosSoma < MyComponents) {
        Buscar.Itens?.push(BuscarJs[this.id].Name)
        console.log("Comprar");
        localStorage.Avatar = JSON.stringify(Buscar)
    } else {
        console.log("Não Tem dinheiro");
    }
}

document.onload = Rodar()