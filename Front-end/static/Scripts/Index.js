function Load() {
    var EscolhaBK = localStorage.getItem("Config")
    document.querySelector("body").style.backgroundImage = EscolhaBK
}

document.getElementById("BtnSidebarFechar").addEventListener("click",function(){
    document.getElementById("Sidebar").style.display = "none"
    BtnSidebarAbir.style.display = "block"
    BtnSidebarFechar.style.display = "none"
})

document.getElementById("BtnSidebarAbir").addEventListener("click",function(){
    document.getElementById("Sidebar").style.display = "block"
    BtnSidebarAbir.style.display = "none"
    BtnSidebarFechar.style.display = "block"
})


document.onload = Load()