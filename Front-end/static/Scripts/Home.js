function Set(){
    if (localStorage.Avatar && localStorage.AvatarLVL) {
        var Avatar = localStorage.getItem("Avatar")
        var LVL = localStorage.getItem("AvatarLVL")
        const Container = `
        <div>
        <img src='${JSON.parse(Avatar)[0].ImagePersonagem}'/>
        <h3>${JSON.parse(Avatar)[0].Name}</h3>
        <hr>
        <img src='${JSON.parse(Avatar)[0].ImageLaço}'/>
        <h3>${JSON.parse(Avatar)[0].Laço}</h3>
        </div>
        <div>
        <h1>${JSON.parse(LVL)}</h1>
        </div>
        `
        document.getElementById("Set_Create").innerHTML = Container
    }
   }

document.onload = Set()