var Contador = 100
setInterval(() => {
    var Config = JSON.parse(localStorage.getItem("Configuration"))
    for(var i = 0 ; i < Config.Fazenda.length; i++){
        Config.Fazenda[i].Fome--
        Config.Fazenda[i].Sono--
        if(Config.Fazenda[i].Fome <= 0){
            Config.Fazenda[i].Fome = 0
        }

        if(Config.Fazenda[i].Sono <= 0){
            Config.Fazenda[i].Sono = 0
        }
    }
    localStorage.Configuration = JSON.stringify(Config)
},10000)