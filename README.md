
# TEST JAH

Proyecto destinado a la administracion y visualizacion de inmuebles para la venta.


## Instalación

Tecnologias utilizadas para el desarrollo de la apliación:

```bash
  Backend: NodeJS
  DB: MYSQL
  Frontend: Angular 14
```
    
Para el correcto despligue de la apliación deberá tener en cuenta las siguientes pautas.

Debemos desplegar el servidor Express donde se procesaran todas las solicitudes que se realizaran desde el Frontend. Para esto realizaremos los siguientes pasos

```bash
  cd back
  npm i 
  npm run serve ó npm run start
```
Tener presente los parametros de la conexion a la base de datos que se encuentran en el fichero `src/config/db.js`.

Siguiendo las anteriores pautas ya tendriamos desplegado el backend.


Para desplegar nuestro Frontend debemos seguir las siguientes pautas.

--------------------------------------------------------
```bash
  cd front
  npm i o npm i --legacy-peer-deps
  ng serve
```

## Autores

- [@jaiderbernal90](https://www.github.com/jaiderbernal90)

