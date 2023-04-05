# Aplicación Móvil con React Native Expo y Node.js

Este es el repositorio del proyecto de aplicación móvil desarrollado con React Native Expo y Node.js. En este repositorio se encuentra tanto el código del frontend como del backend, separados en diferentes directorios.

## Requisitos

Antes de comenzar a trabajar en este proyecto, es necesario tener instalado lo siguiente:

- Node.js v12 o superior
- Expo CLI
- MongoDB (para desarrollo tambien se puede usar con un contenedor de docker)

## Estructura del repositorio

- `frontend/`: Directorio que contiene el código del frontend desarrollado con React Native y Expo.
- `backend/`: Directorio que contiene el código del backend desarrollado con Node.js y Express.
- `README.md`: Archivo que describe el proyecto y cómo utilizarlo.
- `.gitignore`: Archivo que contiene los archivos y directorios que se deben ignorar al subir el proyecto al repositorio.
- `LICENSE`: Archivo que contiene la licencia del proyecto.

## Instalación

1. Clonar este repositorio.
3. Iniciar la base de datos (de ser necesario)
2. Iniciar el frontend con el comando `npm dev` en el directorio `frontend/`.
3. Iniciar el backend con el comando `npm start` en el directorio `backend/`.

## Configuración

El backend se inicia por defecto en `http://localhost:5000`, mientras que el frontend se inicia en `http://localhost:19002`. Desde aquí se puede acceder a las opciones de configuración de Expo y las herramientas de desarrollo.

Si se está utilizando una base de datos, es necesario configurar las credenciales de acceso en el archivo `backend/.env`.

## Uso

La aplicación proporciona las siguientes funcionalidades:

- Autenticación de usuarios
- Visualización de un listado de productos
- Detalle de productos individuales
- Carrito de compras
- Pago mediante tarjeta de crédito

## Contribución

Para contribuir en este proyecto, puedes hacer lo siguiente:

1. Clonar el repositorio completo.
2. Preguntar al encargado del respositorio acerca del manejo de la rama de frontend y usar la rama correspondiente.
3. Realizar pull antes de cualquier cambio.
4. Realizar cambios pequeños.
5. Nombrar el commit utilizando gitmoji con la siguiente nomenclatura:
```bash
MOBILE  ✨ :  agrega screen de administrador
^---^ ^--^   ^------------------------------^
│     │      │
│     │      └--> # Descripción de los cambios
│     │
│     └--> # Emoji para identificar el tipo de commit. seguir la guía de [gitmoji](https://gitmoji.dev/)
│      
└──------> # Información del microproyecto que es afectado por el commit.
```
6. Hacer push de la rama al repositorio (`git push origin nombre-de-la-rama`)
7. Crear un pull request en Github describiendo los cambios realizados y esperar a que sean revisados y aprobados.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.