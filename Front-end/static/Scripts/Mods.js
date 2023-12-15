var Lista = []

function SalvarURL() {
    if(document.getElementById("UrlImg").value){
    var Configuration = JSON.parse(localStorage.getItem("Configuration"))
    Configuration.Backgrounds?.push(document.getElementById("UrlImg").value)
    localStorage.Configuration = JSON.stringify(Configuration)
    }
    if(document.getElementById("AddSprites").value){
        document.getElementById("Sprite_Input").submit()
    }
    if(document.getElementById("CenarioAdd").value){
        document.getElementById("Cenario_Input").submit()
    }
    if(document.getElementById("AddEnimies").value){
        document.getElementById("EnimiesAdd").submit()
    }
    if(document.getElementById("MusicAdd").value){
        document.getElementById("Music_Input").submit()
    }
}

function BackgroundBuscar() {
    var Background = JSON.parse(localStorage.getItem("Configuration")).Backgrounds
    for (var i = 0; i < Background.length; i++) {
        var Img = document.createElement("img")
        Img.src = Background[i]
        Img.id = i
        Img.addEventListener("click", function () {
            document.querySelector("body").style.backgroundImage = `url(${Background[this.id]})`
            var Configuration = JSON.parse(localStorage.getItem("Configuration"))
            Configuration.EscolhaBK = document.querySelector("body").style.backgroundImage
            localStorage.Configuration = JSON.stringify(Configuration)
        })
        Conteudo.append(Img)
    }
}

function Escolhas() {
    var Escolha_Add = document.getElementById("Escolha_Add").value
    if (Escolha_Add == "Background") {
        document.getElementById("Background_Input").style.display = "block"
    } else if (Escolha_Add == "Sprites") {
        document.getElementById("Sprite_Input").style.display = "block"
    } else if (Escolha_Add == "Cenário") {
        document.getElementById("Cenario_Input").style.display = "block"
    } else {
        document.getElementById("Music_Input").style.display = "block"
    }
}


document.onload = BackgroundBuscar()