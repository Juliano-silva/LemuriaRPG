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
        Conteudo.append(Img)
    })
}))

fetch("/ModsJson").then(res => res.json().then((data) => {
    data.Music.map((data) => {
        var Audio = document.createElement("audio")
        Audio.src = "/BuscarMusic/" + data
        // Audio.autoplay = true
        localStorage.setItem("Music","/BuscarMusic/" + data)
        ConteudoMusic.append(Audio)
    })
}))
