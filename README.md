- Crear carpeta "nombredelproyecto"
- Ingresar a la carpeta con `cd nombredelproyecto`
- Ejecutar el comando `npm init -y`
- Instalar todas la dependencias necesarias para iniciar el proyecto
  ```
  npm install express dotenv ejs
  ```
  Dependencias de desarollo
  ```
  npm install -D @types/express @types/node
  ```
- Crear archivo tsconfig.json

```
{
    "compilerOptions": {
        "target": "ES2018",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
    }
}
```

- Crear estructara

```
test-mvc-express/
  ├─ src/
  │   ├─ controllers/
  │   ├─ views/
  │   ├─ routes/
  │   ├─ models/
  ├─ server.ts
  ├─ package.json
  ├─ tsconfig.json

```

- agregar script en el package.json

```
		"dev": "nodemon server.ts"
```

- Crear repositorio en git con github Desktop
  Clonar proyecto
  Instalar depencias npm install
  Configurar variables de entorno en el archivo .env
  Ejecutar docker-compose up -d
  ++++++++++++

### Instalacion de typeORM

`npm install typeorm --save`
`npm install reflect-metadata --save`
`npm install mysql2 --save`

### Sessions
```npm install express-session@1.17.0 cookie-parser```
```npm i --save-dev @types/express-session @types/cookie-parser``` 
