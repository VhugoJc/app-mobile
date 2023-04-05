# Proyecto de Backend con Node.js, Express y MongoDB

Este es un proyecto de backend para una aplicación web desarrollado utilizando Node.js, Express y MongoDB. La aplicación utiliza una base de datos local de MongoDB para almacenar y gestionar los datos.

## Requisitos

Antes de ejecutar la aplicación, es necesario tener instalado lo siguiente:

- Node.js v12 o superior
- MongoDB v4 o superior

## Instalación

1. Clonar este repositorio
2. Instalar las dependencias del proyecto utilizando el comando `npm install`
3. Iniciar el servidor con el comando `npm dev`

## Configuración

La aplicación se ejecuta en el puerto 5000 de forma predeterminada. Para cambiar el puerto, se puede modificar la variable `PORT` en el archivo `.env`.

La conexión a la base de datos de MongoDB se realiza a través de la URL `mongodb://localhost:27017/app-mobile`. Para cambiar el nombre de la base de datos o la URL de conexión, se puede modificar la variable `MONGODB_URL` en el archivo `.env`.

## Uso

La aplicación proporciona los siguientes endpoints:

- `GET /usuarios`: Obtiene una lista de todos los usuarios registrados en la base de datos.
- `GET /usuarios/:id`: Obtiene los datos del usuario con el ID especificado.
- `POST /usuarios`: Registra un nuevo usuario en la base de datos.
- `PUT /usuarios/:id`: Actualiza los datos del usuario con el ID especificado.
- `DELETE /usuarios/:id`: Elimina el usuario con el ID especificado de la base de datos.
## Contribución

Para contribuir en este proyecto, puedes hacer lo siguiente:

1. Clonar el repositorio completo.
2. Preguntar al encargado del respositorio acerca del manejo de la rama de backend y usar la rama correspondiente.
3. Realizar pull antes de cualquier cambio.
4. Realizar cambios pequeños.
5. Nombrar el commit utilizando gitmoji con la siguiente nomenclatura:
```bash
BACK  ✨ :  agrega muddleware de administrador
^---^ ^--^   ^---------------------------------^
│     |      │
│     |      └--> # Descripción de los cambios
│     |
|	 └--> # Emoji para identificar el tipo de commit. seguir la guía de [gitmoji](https://gitmoji.dev/)
|      
└──------> # Información del microproyecto que es afectado por el commit.
```

6. Hacer push de la rama al repositorio (`git push origin nombre-de-la-rama`)
7. Crear un pull request en Github describiendo los cambios realizados y esperar a que sean revisados y aprobados.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.