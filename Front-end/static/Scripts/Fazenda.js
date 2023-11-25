var array = []
function Mudar(){
    document.getElementById("Criation").style.display = "block"
}

const ListName = []

function Metamorfose(){
    document.getElementById("PetGerar").src = "https://i.pinimg.com/564x/e8/5f/bb/e85fbb6f69a4a386b134c6f9aa6283f0.jpg"
    fetch("/Name").then((response) => {
        response.json().then((dados) => {
            var Random = Math.floor(Math.random() * dados.Names.length)
            var Random1 = Math.floor(Math.random() * dados.Names.length)
            document.getElementById("Name").innerText = dados.Names[Random] + " " + dados.Names[Random1]
        })
    })
}

