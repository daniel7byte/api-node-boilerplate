## Instalacion
Para instalar el proyecto, hemos preparado los contenedores en Docker para facilitar los pasos. Asi que es importante que tengas instalado tanto Docker como docker compose en tu sistema operativo, ya sea Windows, Mac o Linux. Si no lo tienes, puedes hacerlo [siguiendo la documentacion de Docker](https://docs.docker.com/engine/install/) 🐋

<blockquote>
<span>
💡
</span>
<span>
Si instalas Docker Desktop (en Windows y Mac), ya viene con docker compose, pero si lo haces en Linux debes instalarlo a parte.
</span>
</blockquote>


#### Paso 1
Clonar el proyecto
```
$ git clone 
```

#### Paso 2
Duplicar el archivo `.env.example` y renombrar al nuevo archivo `.env` y llenar los datos.

#### Paso 3
Montar la infraestructura con los contenedores de docker, esto lo haces ejecutando el siguiente comando en la terminal, estando desde el path del proyecto.
```
$ docker-compose up -d
```
Este comando construirá una serie de contenedores conectados que hacen posible el funcionamiento del proyecto.

#### Paso 4
Instalar dependencias
```
$ npm install
```

#### Paso 5
Realizar las migraciones de la base de datos ejecutando el siguiente comando
```
$ npm run db:migrate
```

#### Paso 6
Levantar el servidor
```
$ npm run local
```

#### Paso 7
[Probar instalacion](http://localhost:3000)
