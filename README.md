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
            "name": "Diana Prince",
            "alterEgo": "Wonder Woman",
            "phone": 916542,
            "email": "prince@justiceleage.dc"
        },
        {
            "name": "Bruce Wayne",
            "alterEgo": "Batman",
            "phone": 916542,
            "email": "wayne@justiceleage.dc"
        },
        {
            "name": "Dinah Lance",
            "alterEgo": "Black Canary",
            "phone": 785235,
            "email": "lance@justiceleage.dc"
        },
        {
            "name": "Clark Kent",
            "alterEgo": "Superman",
            "phone": 654786,
            "email": "kent@justiceleage.dc"
        }
    ]
    ```