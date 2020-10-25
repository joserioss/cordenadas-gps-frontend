# CordenadasGPS

El proyecto consta de de diferentes modulos, componentes y servicios que permiten ingresar una imagen mediante esta interfaz, la cual se conecta con el backend y su servicio rest que se encarga de guardar la imagen en una carpeta local y ademas cargar los datos necesarios en una base de datos.

Para revisar el backend del proyecto, acceder al siguiente enlace: https://github.com/joserioss/cordenadas-gps-backend .

## Vista Previa

si se corre el programa con el comando ng s --o y se abre la url: localhost:4200.

Se puede acceder a dos pantallas:
- pantalla principal
- pantalla mantenedora: para subir, eliminar y descargar imagenes.

## Pantalla principal (http://localhost:4200/principal/ o http://localhost:4200/)
![Alt text](https://github.com/joserioss/cordenadas-gps-frontend/blob/main/src/assets/pantallaprincipal.png)

## Pantalla mantenedora: (http://localhost:4200/principal/uploadFiles)
![Alt text](https://github.com/joserioss/cordenadas-gps-frontend/blob/main/src/assets/pantallauploadfiles.png)

### Cuando se sube una imagen se visualizan las siguientes opciones
- Descargar
- Eliminar
- Info: al seleccionar esta opcion se veran los datos de latitud y longitud que posee la imagen (en el caso de tener esos metadatos )
![Alt text](https://github.com/joserioss/cordenadas-gps-frontend/blob/main/src/assets/imagenesCargadas.png)

### A volver a la pantalla principal se vera una tabla con todas las imagenes cargadas en el mantenedor:
![Alt text](https://github.com/joserioss/cordenadas-gps-frontend/blob/main/src/assets/PantallaPrincipalConImagenesCargadas.png)

### Al seleccionar una de las imagenes:
![Alt text](https://github.com/joserioss/cordenadas-gps-frontend/blob/main/src/assets/MapaConSeleccionDeCordenadas.png)

observacion: Actualmente, en estos momentos solo permite la seleccion de solo un marcador en el mapa. 
