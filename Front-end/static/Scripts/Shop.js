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
        "Category": document.getElementById("Selecionar").value
    })

    localStorage.Shop = JSON.stringify(Loja)
    console.log("Salvando Itens");
}
var MyMoney = 2500
function Rodar() {
    var BuscarJs = JSON.parse(localStorage.getItem("Shop"))
    for (var i = 0; i < BuscarJs.length; i++) {
        var Div = document.createElement("div")
        var ItensH6 = document.createElement("h6")
        var Name = document.createElement("h1")
        var Texto = document.createElement("p")
        var Image = document.createElement("img")
        var Preco = document.createElement("h4")
        var Comprar = document.createElement("button")
        Name.innerText = BuscarJs[i].Name
        Div.id = "Caixa"
        ItensH6.innerText =  BuscarJs[i].Category || "Itens"
        Texto.innerText = BuscarJs[i].Description
        Image.src = BuscarJs[i].Image
        Preco.innerText = BuscarJs[i].Preco
        Comprar.innerText = "Comprar"
        Comprar.id = i
        Comprar.onclick = ComprarFunction
        Div.append(ItensH6, Image, Name, Texto, Preco, Comprar)
        document.getElementById("BuscarBody").append(Div)
    }
}

function ComprarFunction() {
    var BuscarJs = JSON.parse(localStorage.getItem("Shop"))
    var Buscar = JSON.parse(localStorage.getItem("Avatar"))
    if (BuscarJs[this.id].Preco < MyMoney) {
        Buscar[0].Itens?.push(BuscarJs[this.id].Name)
        console.log("Comprar");
        localStorage.Avatar = JSON.stringify(Buscar)
    } else {
        console.log("Não Tem dinheiro");
    }
}

document.onload = Rodar()