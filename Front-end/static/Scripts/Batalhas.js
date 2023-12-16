// Valores
var BuscarAvatar = JSON.parse(localStorage.getItem("Avatar"))
var Stage = parseInt(JSON.parse(localStorage.getItem("Configuration")).Stage)
document.getElementById("Stages").innerText = "Stage: " + Stage
var sum = 0
// MyPerson
var Life = BuscarAvatar.LVLATRIBUTE.LifeMax
var ATKP = BuscarAvatar.LVLATRIBUTE.Ataque
var DefesaP = BuscarAvatar.LVLATRIBUTE.Defesa
var ManaP = BuscarAvatar.LVLATRIBUTE.ManaMax
var Invocar = document.createElement("img")
var InvocarName = document.createElement("h1")

function Random(tamanho) {
  return tamanho * Math.floor(Math.random() * 100)
}

// MyEnemy
var LifeAdv = Random(2)
var ATKAdv = Random(2)
var DefesaAdv = Random(2)
var ManaAdv = Random(2)
sum += Life + ATKP + DefesaP + ManaP
function InimigoCarregar() {

  var Dados_Inimigo = `
  <div>
  <h1 id='Life_Inimigo'>Life: ${LifeAdv}</h1>
  <h1>Atk: ${ATKAdv}</h1>
  <h1>Def: ${DefesaAdv}</h1>
  <h1>Mana: ${ManaAdv}</h1>
  </div>
  `

  fetch("/Name").then((response) => {
    response.json().then((dados) => {
      var Random = Math.floor(Math.random() * dados.Names.length)
      var Random1 = Math.floor(Math.random() * dados.Names.length)
      document.getElementById("Villain_Name").innerText = dados.Names[Random] + " " + dados.Names[Random1]
    })
  })

  fetch("/ModsJson").then((response) => {
    response.json().then((dados) => {
      var RandomImg = Math.floor(Math.random() * dados.Enimies.length)
      Villain_Img.src = "/BuscarEnemies/" + dados.Enimies[RandomImg]
    })
  })

  document.getElementById("Villain_Status").innerHTML = Dados_Inimigo

}

function UserCarregar() {
  var Dados_Protagonista = `
  <div>
  <h1>Life: <span id='LifePersonagem'>${Life} </span></h1>
  <h1>Atk: <span id='AtkPersonagem'>${ATKP}</span></h1>
  <h1>Def: <span id='DefesaPersonagem'>${DefesaP}</span></h1>
  <h1>Mana: <span id='ManaPersonagem'>${ManaP}</span></h1>
  </div>
  `

  Protagonista.src = BuscarAvatar.ImagePersonagem
  PersonagemName.innerText = BuscarAvatar.Name
  // Btn Atk
  document.getElementById("ATACAR_BTN").addEventListener("click", function () {
    var Jogador = (Life -= parseInt(ATKAdv / 2))
    var Computador = (LifeAdv -= parseInt(ATKP / 2))

    document.getElementById("Life_Inimigo").innerText = Computador
    document.getElementById("LifePersonagem").innerText = Jogador

    if (Jogador < 0) {
      alert("Jogador Perdeu")
    }
    else if (Computador < 0) {
      location.reload()
      alert("Computador Perdeu")
      Stage += 1
      var Avatar = JSON.parse(localStorage.getItem("Avatar"))
      Avatar.Dinheiro += parseInt(50)
      localStorage.Avatar = JSON.stringify(Avatar)
      var Config = JSON.parse(localStorage.getItem("Configuration"))
      Config.Stage = Stage
      localStorage.Configuration = JSON.stringify(Config)
    }

  })

  function Calcular(StatusInfo) {
    return parseInt((StatusInfo * Math.floor(Math.random() * 20)) / 3)
  }

  document.getElementById("Form_BTN").addEventListener("click", function () {
    document.getElementById("Protagonista").src = "https://i.pinimg.com/736x/a6/ce/eb/a6ceeb3d7fe1bc0508d6b7ecca8c8a1f.jpg"
    document.getElementById("LifePersonagem").innerText = parseInt(Life / 2)
    document.getElementById("AtkPersonagem").innerText = Calcular(ATKP)
    document.getElementById("DefesaPersonagem").innerText = Calcular(DefesaP)
    document.getElementById("ManaPersonagem").innerText = Calcular(ManaP)
  })


  document.getElementById("Invocar_BTN").addEventListener("click", function () {
    Invocar.src = "https://i.pinimg.com/736x/8d/1d/2c/8d1d2ca0ee8958aa30b305718eaa74be.jpg"
    InvocarName.innerText = "Divino General Mahoraga"
    ATKP += Math.floor(Math.random() * (sum / 3))
    Laço.append(Invocar, InvocarName)
  })

  document.getElementById("Magics").addEventListener("click", function () {
    var Buscar = JSON.parse(localStorage.getItem("Avatar"))
    if (Buscar.Magia1.length < 0) {
      var MagicsButton = `
    <button>Bola de Fogo</button>
    <button>Bola de Fogo</button>
    <button>Bola de Fogo</button>
    <button>Bola de Fogo</button>
    `
    } else {
      var MagicsButton = `
    <button>${Buscar.Magia1}</button>
    <button>${Buscar.Magia2}</button>
    <button>${Buscar.Magia3}</button>
    <button>${Buscar.Magia4}</button>
    `
    }
    Magics.innerHTML = MagicsButton
  })

  document.getElementById("UserStatus").innerHTML = Dados_Protagonista
}


document.onload = InimigoCarregar(), UserCarregar()