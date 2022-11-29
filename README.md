# API de la Liga de la Justicia
Este es un proyecto sencillo en donde tenemos una API REST que a través de un endpoint nos muestra los datos de algunos super heroes que hacen parte de la liga de la justicia
![justice league](./img/jus.jpg)
## Cómo correr el proyecto
### Pre requisitos
- Node
- NPM
- GIT
- Un cliente para consumir nuestra API como Postman o Insomnia
### Paso a paso 
1. Clona el proyecto en tu maquina local usando este comando:
```
git clone https://github.com/LeonidasRQ/demoTesting.git
```
2. Instala las dependencias que vienen en nuestro proyecto usando el comando `npm install` en tu terminal
3. Corre el proyecto en modo de desarrollo usando `npm run watch`
4. Abre tu navegador o un cliente (Postman o Insomnia) para verificar que nuestro endpoint esté funcionando correctamente
   1. Configura tu cliente API para hacer peticiones a `http://localhost:8000/v1/users` con un encabezado `GET`
   2. Nuestro endpoint de usuarios debería retornar un objeto con esta estructura:
    ```
    [
        {
            "id": 1,
            "name": "Diana Prince",
            "alter_ego": "Wonder Woman",
            "phone": 916542,
            "email": "prince@justiceleage.dc"
        },
        {
            "id": 2,
            "name": "Bruce Wayne",
            "alter_ego": "Batman",
            "phone": 916542,
            "email": "wayne@justiceleage.dc"
        },
        {
            "id": 3,
            "name": "Dinah Lance",
            "alter_ego": "Black Canary",
            "phone": 785235,
            "email": "lance@justiceleage.dc"
        },
        {
            "id": 4,
            "name": "Clark Kent",
            "alter_ego": "Superman",
            "phone": 654786,
            "email": "kent@justiceleage.dc"
        }
    ]
    ```