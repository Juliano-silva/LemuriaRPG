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
  var array = []

  array.push({
    "Name": document.getElementById("Personagem").value,
    "ImagePersonagem": document.getElementById("PersonagemImg").value,
    "Sintonia": document.getElementById("Sintonia").value,
    "Laço":[],
    "Arma": [],
    "Magia": [],
    "Equipamento": [],
    "Skill": [],
    "Forma": [],
  })

  localStorage.Avatar = JSON.stringify(array)
}

function ContadorPoint(){
  fetch("/Data").then((response) => {
    response.json().then((data) => {
      var array = []
      var ID = this.id
      var Create = document.createElement("h1")
      Create.id = ID
      Create.innerText = ID
      document.getElementById("Criar").append(Create)
      var Criar = document.getElementById("Criar")
      for (var i = 0; i < data.Status.length; i++) {
        array.push(data.Status[i] + " " + Criar.querySelectorAll("#" + data.Status[i]).length)
      }
      localStorage.AvatarLVL = JSON.stringify(array)
    })
  })
}

function SintoniaFunc(){
  fetch("/Data").then((response) => {
    response.json().then((data) => {
      for(var i = 0 ; i < data.Atribute.length;i++){
        var Option = document.createElement("option")
        Option.innerText = Option.value = data.Atribute[i].Name
        document.getElementById("Sintonia").append(Option)
      }
    })})
}

document.onload = SintoniaFunc()