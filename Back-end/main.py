from flask import *
import urllib.request,ctypes,random,os,glob
app = Flask(__name__,template_folder="../Front-end/templates",static_folder="../Front-end/static")

# Folders
Backgrounds = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Backgrounds"
BackgroundsR = r"C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Backgrounds"

Music = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Music"
MusicR = r"C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Music"

Sprite = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Sprites"
SpriteR = r"C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Sprites"

Cenario = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Cenários"
CenarioR = r"C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\Cenários"

JsonFolder = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Jsons\\ModsSalvar.json"
# Routes
@app.route("/",methods=['GET','POST'])
def index():
    return render_template("index.html")

@app.route("/Home",methods=['GET','POST'])
def home():
    return render_template("Home.html")

@app.route("/Batalhas",methods=['GET','POST'])
def Batalhas():
    return render_template("Batalhas.html")

@app.route("/Add",methods=['GET','POST'])
def Add():
    return render_template("Add.html")

@app.route("/Fazenda",methods=['GET','POST'])
def Fazenda():
    return render_template("Fazenda.html")

@app.route("/Shop",methods=['GET','POST'])
def Shop():
    return render_template("Shop.html")


@app.route("/Mods",methods=['GET','POST'])
def Mods():
    Galeria = list(filter(os.path.isfile,glob.glob(Backgrounds + "\\*")))
    ReGaleria = str(Galeria).replace(BackgroundsR,"")
    Sprites = list(filter(os.path.isfile,glob.glob(Sprite + "\\*")))
    RESprites = str(Sprites).replace(SpriteR,"")
    Musics = list(filter(os.path.isfile,glob.glob(Music + "\\*")))
    ReMusics = str(Musics).replace(MusicR,"")
    Cenarios = list(filter(os.path.isfile,glob.glob(Cenario + "\\*")))
    ReCenario = str(Cenarios).replace(CenarioR,"")
    with open(JsonFolder,'w',encoding='utf-8') as arq:
        Escrito = str('{"Galeria":'f"{ReGaleria},'Sprites':{RESprites},'Music':{ReMusics},'Cenario':{ReCenario}"'}')
        arq.write(Escrito.replace("'",'"').replace("\\",""))
    return render_template("AddMods.html")

@app.route('/AddURL', methods=['POST'])
def AddUrl():
   datas = request.get_json()
   result = datas['value']
   ctypes.windll.user32.SystemParametersInfoW(20,0,result,0)
   Random = random.randint(0,100000)
   extensao = os.path.splitext(result)
   if extensao == ".jpg" or extensao == ".png" or extensao == ".gif":
       urllib.request.urlretrieve(result, Backgrounds + "\\" + f"{Random}{extensao}")   
   else:
       urllib.request.urlretrieve(result, Backgrounds + "\\" + f"{Random}.jpg")
   return '',201

@app.route("/Data",methods=["GET","POST"])
def Buscar():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/Configuration.json",encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)

@app.route("/ModsJson",methods=["GET","POST"])
def ModsJson():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/ModsSalvar.json",encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)

@app.route("/BuscarSprites/<path:filename>")
def SearcSprites(filename):
    return send_from_directory(Sprite + "\\",filename)

@app.route("/BuscarCenario/<path:filename>")
def SearchCenario(filename):
    return send_from_directory(Cenario + "\\",filename)

@app.route("/BuscarMusic/<path:filename>")
def SearchMusic(filename):
    return send_from_directory(Music + "\\",filename)

@app.route("/BuscarMods/<path:filename>")
def SearchMods(filename):
    return send_from_directory(Backgrounds + "\\",filename)

@app.route("/Name",methods=["GET","POST"])
def Name():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/Names.json",encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)
if __name__ == "__main__":
    app.run(debug=True,port=1245)