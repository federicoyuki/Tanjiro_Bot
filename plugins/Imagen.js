google_images.py
```
import requests
import json
import os

def buscar_imagenes(query, api_key, cse_id):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": api_key,
        "cx": cse_id,
        "q": query,
        "searchType": "image"
    }
    response = requests.get(url, params=params)
    data = json.loads(response.text)
    return data["items"]

def descargar_imagen(url, filename):
    response = requests.get(url)
    with open(filename, 'wb') as file:
        file.write(response.content)

if __name__ == "__main__":
    api_key = "TU_API_KEY"
    cse_id = "TU_SECID"
    extension = input("Ingrese la extensión deseada (.jpg, .png, .foto, .ft): ")
    query = input("Ingrese la búsqueda: ")
    imagenes = buscar_imagenes(query, api_key, cse_id)
    folder_name = query.replace(" ", "_")
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    for i, imagen in enumerate(imagenes):
        filename = f"{folder_name}/{i+1}{extension}"
        descargar_imagen(imagen["link"], filename)
        print(f"Imagen {i+1} descargada")

README.md

# Google Images
Buscador de imágenes utilizando la API de Google Social Graph Search

## Uso
1. Obtén una API Key de Google Custom Search
2. Crea un Motor de Búsqueda Personalizado y obtén el CSE ID
3. Reemplaza `TU_API_KEY` y `TU_CSE_ID` en `google_images.py`
4. Ejecuta `python google_images.py`
5. Ingresa la extensión deseada (.jpg, .png, .foto, .ft)
6. Ingresa la búsqueda y obtén los resultados

## Notas
* Las imágenes se guardarán en una carpeta con el nombre de la búsqueda.
* Puedes elegir la extensión de las imágenes al ejecutar el script.
```

Ahora puedes elegir la extensión de las imágenes al ejecutar el script, incluyendo `.foto` y `.ft`. Recuerda reemplazar `TU_API_KEY` y `TU_CSE_ID` con tus credenciales reales.
