#  PokeApi

**PokeApi** es el sitio web que muestra al usuario la pokedex y permite crear equipos con ellos. 

# Tecnologías

- Este proyecto fue generado con [React](https://github.com/facebook/react).
- Como manejador de paquetes **npm**.
- Para estilos **material-ui** , **sass**  y **css** 

# Variables de entorno

La aplicación necesita estas variables de entornos para funcionar. Si lo está ejecutando en modo de desarrollo, debe crear un archivo `.env` en la carpeta raíz del proyecto y configurar las variables en desarrollo.

- `REACT_APP_POKEAPI`: Url de donde se obtiene toda la información de los pokemons.

# Servidor de desarrollo

- Clonar el repositorio del proyecto. 
- Ejecutar `npm install` para instalar las dependencias del proyecto. 
- Ejecutar `npm start` para iniciar el servidor de desarrollo. Navegar a `http://localhost:3000/`
<br>La aplicación recargará en cuanto detecte un cambio en el código fuente.

# Configuración de implementación

Hay solo un entorno: Producción para las versiones lanzadas para los usuarios finales.

# Gitflow

El Gitflow está configurado de la siguiente manera: 

- Push a `main`: ejecuta el pipeline de despliegue en Prod.

# Despliegue

La implementación de producción está utilizando un servicio de Cloud Run. La URL pública es: https://audrylopez.github.io/

