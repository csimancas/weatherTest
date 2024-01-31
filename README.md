Nombre de la Aplicación Blog de React Native

Una aplicación de React Native que muestra una lista de entradas en el blog y permite a los usuarios ver los detalles de cada entrada.
Requisitos Previos

Asegúrate de tener los siguientes elementos instalados antes de comenzar:

    Node.js (versión X.X.X o superior)
    npm (generalmente se instala junto con Node.js)
    Expo CLI (opcional, pero recomendado para el desarrollo)

Instalación

Sigue estos pasos para instalar y configurar la aplicación:

    Clona este repositorio en tu máquina local utilizando Git: https://github.com/csimancas/weatherTest

    Entramos a la carpeta del proyecto: cd BlogTest

    Hacemos un yarn o npm install para instalar las dependencias del proyecto. npm install || yarn
    En caso de correr el proyecto en ios sera necesario entrar a la carpeta de ios y hacer correr el siguiente comando: pod install

    Para correr el proyecto en macos y linux:
        npm start && npm run android

    

    Es necesario mencionar en la carpeta de utils, esta el archivo api.ts, tiene una pequeña validación dependiendo como se quiera utilizar el app, puede ser corriendo el servidor en local, o utilizar el back que esta en heroku, solo sera necesario poner la constante dev en true para local, o en false para utilizarla con el servidor.

** Nota **

Para acceder a un servidor local en tu máquina de desarrollo desde el emulador de Android, debes utilizar una dirección IP especial que apunte a la interfaz de red de tu máquina. En el caso de emuladores Android, la dirección IP que debes usar es 10.0.2.2. Esta dirección IP actúa como un puente entre el emulador y la máquina de desarrollo, permitiendo que el emulador acceda a los recursos locales de la máquina de desarrollo.

** Nota **

Es necesario correr el proyecto de back antes de iniciar la aplicacion movil, para poder ver la informacion que esta en las apis.