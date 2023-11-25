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