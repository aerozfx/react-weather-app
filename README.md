# Weather App

Aplicación desarrollada en la librería `React`, usando `useState` y `useEffect`.

## Uso

Si el usuario permite usar su localización, lo primero que se verá será el tiempo en los próximos días, junto con la temperatura máxima y mínima previstas para cada día.
Incluye un `input` de tipo texto con un botón para que el usuario pueda buscar la ciudad que le plazca y conocer el tiempo metereológico previsto para los 6 próximos días.
Tiene iconos e imágenes que responden al estado del tiempo que esté seleccionado.

## Contenido

- [Vista general](#vista-general)
  - [Capturas de pantalla](#captura-de-pantalla)
  - [Links](#links)
- [Proceso](#proceso)
  - [Tecnologías de desarrollo](#tecnologías-de-desarrollo)
  - [A mejorar](#a-mejorar)
  - [Recursos](#recursos)
- [Autor](#autor)
- [Desarrollo](#desarrollo)

## Vista general

En esta pequeña aplicación, el usuario podrá:

- Si no introduce ninguna ciudad, y permite usar la localización del navegador, consultar el tiempo en su zona durante los siguientes días
- Comprobar el estado del tiempo en la ciudad que introduzca en el `input`

### Capturas de pantalla

![](./src/assets/images/1.png)
![](./src/assets/images/2.png)
![](./src/assets/images/3.png)
![](./src/assets/images/4.png)
![](./src/assets/images/5.png)

### Links

- [Repositorio de GitHub](https://github.com/aerozfx/react-weather-app.git)
- [Demo](https://thunderous-entremet-40506e.netlify.app/)

## Proceso

### Tecnologías de desarrollo

- Uso de HTML5 semántico
- CSS personalizado
- Flexbox
- Aplicación desarrollada siguiendo la estrategia de diseño `mobile first`
- [React](https://reactjs.org/) - JS library

### A mejorar

Falta añadir un `slider` para que la experiencia de usuario sea más satisfactoria

### Recursos

- [MDN: Scroll into view](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) - Emular efecto de slider
- [Ejemplo de slider con React](https://codesandbox.io/s/32xjhx?file=/App.js:155-176&utm_medium=sandpack) - Sandbox del efecto a emular

## Desarrollo

En caso de que quieras personalizar a tu manera este proyecto, puedes hacerlo de la siguiente manera

Para instalar las dependencias necesarias, primero deberemos ejecutar `npm install` en nuestra terminal

```console
  npm install
```

Antes de continuar, en el archivo `.env.example`, hay que renombrarlo por `.env` y añadir tu `VITE_API_KEY` personal.
Una vez hecho esto, se puede continuar con los pasos.

Cuando se hayan instalado las dependencias necesarias, para ejecutar nuestro servidor en tiempo real debemos usar `npm run dev`

```console
  npm run dev
```

Para comprobar nuestra aplicación en su versión de producción podemos usar `npm run build`

```console
  npm run build
```

Si queremos ver nuestra aplicación tal y como se va a subir a producción debemos usar `npm run preview`

```console
npm run preview
```

Las imágenes o SVG que se usen, se deberán colocar en la carpeta `./public`. Ya que al preparar la aplicación para producción, usa esa ruta de manera predeterminada.

## Autor

- Website - [Fernando Mariño](https://github.com/aerozfx)
