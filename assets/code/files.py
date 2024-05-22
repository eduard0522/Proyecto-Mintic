import pandas as pd

# Ruta del archivo Excel
ruta_excel = r'assets\datosEspecies.xlsx'

# Cargar el archivo Excel
excel = pd.ExcelFile(ruta_excel)

# Leer la primera hoja del archivo Excel
df = excel.parse(excel.sheet_names[0])

# Eliminar espacios en blanco de las celdas
df = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)

# Reemplazar cadenas vacías con NaN
df.replace("", pd.NA, inplace=True)

# Convertir las columnas de fecha y hora, si las hay
for col in df.columns:
    if 'fecha' in col.lower() or 'date' in col.lower():
        df[col] = pd.to_datetime(df[col], errors='coerce')

# Eliminar filas y columnas completamente vacías
df.dropna(how='all', inplace=True)
df.dropna(axis=1, how='all', inplace=True)

# Convertir el DataFrame a JSON
datos_json = df.to_json(orient='records', lines=True)

# Guardar el JSON en un archivo
with open('datos.json', 'w', encoding='UTF-8') as json_file:
    json_file.write(datos_json)

print("Archivo JSON generado exitosamente.")