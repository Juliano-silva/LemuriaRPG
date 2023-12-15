from flask import *
from werkzeug.utils import secure_filename
import urllib.request
import ctypes
import random
import os
import glob
app = Flask(__name__, template_folder="../Front-end/templates",
            static_folder="../Front-end/static")
# Folders
Folder = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\"
FolderR = r"C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Mods\\"

JsonFolder = "C:\\Users\\sustu\\OneDrive\\Imagens\\Programação\\Projetos com diferentes linguagens\\LemuriaRPG\\Back-end\\Jsons\\ModsSalvar.json"

# Routes

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("index.html")


@app.route("/Home", methods=['GET', 'POST'])
def home():
    return render_template("Home.html")


@app.route("/Batalhas", methods=['GET', 'POST'])
def Batalhas():
    return render_template("Batalhas.html")


@app.route("/Fazenda", methods=['GET', 'POST'])
def Fazenda():
    return render_template("Fazenda.html")


@app.route("/Shop", methods=['GET', 'POST'])
def Shop():
    return render_template("Shop.html")


@app.route("/Mods", methods=['GET', 'POST'])
def Mods():
    RESprites = str(list(filter(os.path.isfile, glob.glob(Folder + "Sprites" + "\\*")))).replace(FolderR + "Sprites", "")
    ReMusics = str(list(filter(os.path.isfile, glob.glob(Folder + "Music" + "\\*")))).replace(FolderR + "Music", "")
    ReCenario = str(list(filter(os.path.isfile, glob.glob(Folder + "Cenários" + "\\*")))).replace(FolderR + "Cenários", "")
    ReEnemies = str(list(filter(os.path.isfile, glob.glob(Folder + "Enemies" + "\\*")))).replace(FolderR + "Enemies", "")
    with open(JsonFolder, 'w', encoding='utf-8') as arq:
        Escrito = str(
            '{'f"'Enimies':{ReEnemies},'Sprites':{RESprites},'Music':{ReMusics},'Cenario':{ReCenario}"'}')
        arq.write(Escrito.replace("'", '"').replace("\\", ""))
    return render_template("AddMods.html")


# Jsons

@app.route("/Data", methods=["GET", "POST"])
def Buscar():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/Configuration.json", encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)


@app.route("/ModsJson", methods=["GET", "POST"])
def ModsJson():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/ModsSalvar.json", encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)


@app.route("/Name", methods=["GET", "POST"])
def Name():
    with open("C:/Users/sustu/OneDrive/Imagens/Programação/Projetos com diferentes linguagens/LemuriaRPG/Back-end/Jsons/Names.json", encoding="utf-8") as meu_json:
        dados = json.load(meu_json)
        return jsonify(dados)


@app.route("/BuscarSprites/<path:filename>")
def SearcSprites(filename):
    return send_from_directory(Folder + "Sprites" + "\\", filename)


@app.route("/BuscarEnemies/<path:filename>")
def SearchEnemies(filename):
    return send_from_directory(Folder + "Enemies" + "\\", filename)


@app.route("/BuscarCenario/<path:filename>")
def SearchCenario(filename):
    return send_from_directory(Folder + "Cenario" + "\\", filename)


@app.route("/BuscarMusic/<path:filename>")
def SearchMusic(filename):
    return send_from_directory(Folder + "Music" + "\\", filename)


# Salvar Jsons

@app.route("/SpriteAdd", methods=["GET", "POST"])
def SpriteAdd():
    file = request.files['AddSprites']
    savePath = os.path.join(os.path.join(
        os.getcwd(), Folder + "Sprites"), secure_filename(file.filename))
    file.save(savePath)
    return '', 201


@app.route("/EnimiesAdd", methods=["GET", "POST"])
def EnimiesAdd():
    file = request.files['AddEnimies']
    savePath = os.path.join(os.path.join(
        os.getcwd(), Folder + "Enemies"), secure_filename(file.filename))
    file.save(savePath)
    return '', 201


@app.route("/CenarioAdd", methods=["GET", "POST"])
def CenarioAdd():
    file = request.files['CenarioAdd']
    savePath = os.path.join(os.path.join(
        os.getcwd(), Folder + "Cenários"), secure_filename(file.filename))
    file.save(savePath)
    return '', 201


@app.route("/MusicAdd", methods=["GET", "POST"])
def MusicAdd():
    file = request.files['MusicAdd']
    savePath = os.path.join(os.path.join(
        os.getcwd(), Folder + "Music"), secure_filename(file.filename))
    file.save(savePath)
    return '', 201


if __name__ == "__main__":
    app.run(debug=True, port=1245)
