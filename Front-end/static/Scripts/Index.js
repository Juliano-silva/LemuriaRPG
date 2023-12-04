function Load() {
    var EscolhaBK = JSON.parse(localStorage.getItem("Configuration")).EscolhaBK
    document.querySelector("body").style.backgroundImage = EscolhaBK
}


if(localStorage.Avatar){
    console.log("Nada");
}else{
    document.getElementById("BtnSidebarAbir").style.display = "none"
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