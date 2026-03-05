📷 Galería de Fotos — Ionic / Angular
Aplicación híbrida desarrollada con Ionic y Angular que permite tomar fotos con la cámara del dispositivo, visualizarlas en una galería tipo grilla y ampliarlas a pantalla completa. Funciona tanto en navegador web como en dispositivos Android.

✅ Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:

1. Node.js (versión LTS)
Descárgalo desde https://nodejs.org
Para verificar que está instalado, abre una terminal y ejecuta:

text
node --version
npm --version
Ambos deben mostrar un número de versión.

2. Ionic CLI

text
npm install -g @ionic/cli
Para verificar:

text
ionic --version
3. Android Studio
Descárgalo desde https://developer.android.com/studio
Durante la instalación, asegúrate de instalar:

Android SDK

Android SDK Platform-Tools

Un emulador Android (AVD) o conecta un dispositivo físico

4. Java JDK 17 o superior
Descárgalo desde https://adoptium.net
Para verificar:

text
java -version
🚀 Instalación del proyecto
Paso 1 — Clona o descarga el repositorio


Paso 2 — Instala las dependencias

text
npm install
Este comando descarga todos los paquetes necesarios definidos en el package.json. Puede tardar unos minutos la primera vez.

Paso 3 — Agrega la plataforma Android

text
npx cap add android
🌐 Ejecutar en el navegador
text
ionic serve
Abre el navegador en http://localhost:8100

En el navegador, al presionar el botón de cámara se abre el explorador de archivos para seleccionar una imagen. Las fotos seleccionadas aparecen en la grilla. Al tocar una foto se abre en pantalla completa.

📱 Ejecutar en Android (dispositivo físico o emulador)
Paso 1 — Construye la app

text
ionic build
Paso 2 — Sincroniza con Capacitor

text
npx cap sync
Paso 3 — Abre en Android Studio

text
npx cap open android
Paso 4 — Ejecuta la app

Conecta tu dispositivo Android por USB y habilita la depuración USB, o

Inicia un emulador desde el AVD Manager de Android Studio

Presiona el botón ▶ Run en Android Studio

En el dispositivo, al presionar el botón de cámara se abre directamente la cámara del dispositivo para tomar una foto.
