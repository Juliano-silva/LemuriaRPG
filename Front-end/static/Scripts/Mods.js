var array = []
function SalvarURL() {
    $.ajax({
        url: '/AddURL',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'value': document.getElementById("UrlImg").value })
    });
}

fetch("/ModsJson").then(res => res.json().then((data) => {
    data.Galeria.map((data) => {
        var Img = document.createElement("img")
        Img.src = "/BuscarMods/" + data
        Img.id = data
        Img.addEventListener("click",function(){
            document.querySelector("body").style.backgroundImage = `url(${"/BuscarMods/" + this.id})`
            localStorage.setItem("Config",document.querySelector("body").style.backgroundImage)
        })
        Conteudo.append(Img)
    })
}))

