import googletrans

def traducir(texto, idioma_origen, idioma_destino):
    translator = googletrans.Translator()
    resultado = translator.translate(texto, src=idioma_origen, dest=idioma_destino)
    return resultado.text

def mostrar_idiomas():
    print("Idiomas disponibles:")
    print("1. Español (es)")
    print("2. Inglés (en)")
    print("3. Francés (fr)")
    print("4. Alemán (de)")
    print("5. Italiano (it)")
    print("6. Portugués (pt)")
    print("7. Chino (zh-cn)")
    print("8. Japonés (ja)")
    print("9. Coreano (ko)")

def obtener_idioma(opcion):
    idiomas = {
        "1": "es",
        "2": "en",
        "3": "fr",
        "4": "de",
        "5": "it",
        "6": "pt",
        "7": "zh-cn",
        "8": "ja",
        "9": "ko"
    }
    return idiomas.get(opcion)

if __name__ == "__main__":
    print("Traductor de idiomas")
    mostrar_idiomas()
    opcion_origen = input("Seleccione el idioma origen: ")
    idioma_origen = obtener_idioma(opcion_origen)
    opcion_destino = input("Seleccione el idioma destino: ")
    idioma_destino = obtener_idioma(opcion_destino)
    texto = input("Ingrese el texto a traducir: ")
    traduccion = traducir(texto, idioma_origen, idioma_destino)
    print(traduccion)
```

requirements.txt
```
googletrans==4.0.0-rc1
```
Ahora puedes elegir el idioma origen y destino desde una lista de opciones.
