from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def consultar_curp_renapo(curp):
    options = Options()
    # Quitar headless para ver el navegador y que las capturas se vean completas
    # options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')

    service = Service('C:/Users/BRYANNURIELGUTIÉRREZ/Desktop/chromedriver-win64/chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get('https://www.gob.mx/curp/')

    try:
        campo_curp = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'curp'))
        )

        try:
            campo_curp.clear()
            campo_curp.send_keys(curp)
            print(" CURP enviada con send_keys.")
        except:
            driver.execute_script("arguments[0].value = arguments[1];", campo_curp, curp)
            print("  CURP forzada con JavaScript.")

        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'buscarCurp'))
        ).click()

        # Espera y captura pantalla antes de cualquier otro intento
        time.sleep(5)
        try:
            driver.save_screenshot('resultado_curp.png')
            print("=ø Captura guardada como 'resultado_curp.png'")
        except Exception as err:
            print("  No se pudo guardar la captura:", err)

        # Buscar el resultado
        resultado = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'col-md-8'))
        ).text

        driver.quit()

        datos = {}
        for linea in resultado.split('\n'):
            if ':' in linea:
                clave, valor = linea.split(':', 1)
                datos[clave.strip().lower()] = valor.strip()

        return datos

    except Exception as e:
        try:
            driver.save_screenshot('error_curp.png')
            print("=ø Captura de error guardada como 'error_curp.png'")
        except:
            print("  No se pudo guardar captura de error.")
        driver.quit()
        print("L Error durante la consulta:", e)
        return None

# CURP de prueba
curp = "GUAB940531HDFTGR03"
datos = consultar_curp_renapo(curp)

if datos:
    print("\n Datos encontrados:")
    for clave, valor in datos.items():
        print(f"{clave.capitalize()}: {valor}")
else:
    print("L CURP no válida o no encontrada.")
