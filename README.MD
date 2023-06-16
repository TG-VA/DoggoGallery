# Doggo Gallery 🐩

> Desktop version

[![DesktopVideo]("assets\doggDesktop.gif")](assets\doggDesktop.gif"assets\doggDesktop.gif")

> Mobile version

![MobileVideo]("assets\doggMobile.gif")


### 📄 Content

The Canine Gallery project is a web application that utilizes a dog image API to showcase an interactive gallery of various dog breeds. It incorporates the following key aspects and practices:

API Integration: The application connects to a specialized dog image API using HTTP requests, leveraging JavaScript and the fetch() function.

Breed-based Image Search: Users can search for images by entering the name of a specific dog breed. The application sends a request to the API and receives a JSON response containing images corresponding to the searched breed.

Image Processing and Display: JavaScript and the Document Object Model (DOM) are used to process the API response and extract image URLs. Dynamic HTML elements are then generated to display the dog photos in the user interface.

Smooth Image Transitions: A smooth opacity transition is implemented using CSS to achieve a visually appealing effect when gradually displaying the images in the gallery.

Error Handling: Possible API errors, such as when a specified breed is not found, are appropriately handled. In such cases, an error alert is displayed to notify the user.

In summary, the Canine Gallery project utilizes a dog image API to present an interactive and visually engaging gallery of diverse dog breeds. It encompasses practices such as API integration, breed-based image search, data processing, dynamic HTML generation, and visual transitions. Proper error handling is also implemented to enhance the user experience.

```javascript
const getDog = async (breed) => {
  try {
    const queryGetDog = await fetch("https://dog.ceo/api/breed/" + breed + "/images");
    const jsonDog = await queryGetDog.json();

    if (jsonDog.status === "error") {
      alert("Error: No se encontró la raza de perro especificada");
      return;
    }

    console.log(jsonDog);

    jsonDog.message.forEach((dog) => {
      const item = document.createElement('div');
      item.className = 'item';

      const img = document.createElement('img');
      img.src = dog;

      img.addEventListener('load', () => {
        item.classList.add('loaded');
      });

      item.appendChild(img);
      fragment.appendChild(item);
    });

    grid.appendChild(fragment);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

The above code demonstrates how to make HTTP requests to a dog image API, handle JSON responses, manipulate the DOM to create and display HTML elements, load images, and handle potential errors throughout the process.

### Concepts and Practices:

- Asynchronous data fetching using Fetch API
- Handling JSON responses from APIs
- Manipulating the Document Object Model (DOM) with JavaScript
- Implementing responsive design for cross-device compatibility
- Incorporating smooth image transitions for enhanced user experience
- Error handling for API request errors and breed not found scenarios


<h3 align="left">Languages and Tools</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Author
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.

# Galería Canina 🐩

> Versión de Escritorio

![DesktopVideo]("assets\doggDesktop.gif")

> Versión de Móvil

![MobileVideo]("assets\doggMobile.gif")

### 📄 Introducción

El proyecto Galería Canina es una aplicación web que utiliza una API de imágenes de perros para mostrar una galería interactiva de diversas razas caninas. Los principales aspectos y prácticas del proyecto son los siguientes:

Conexión a la API: La aplicación se conecta a una API especializada en fotografías de perros mediante solicitudes HTTP utilizando JavaScript y la función fetch().

Búsqueda de imágenes por raza: Los usuarios pueden buscar imágenes ingresando el nombre de una raza de perro específica. La aplicación envía una solicitud a la API y recibe una respuesta en formato JSON con las imágenes correspondientes a la raza buscada.

Procesamiento y visualización de imágenes: Utilizando JavaScript y el Document Object Model (DOM), se procesa la respuesta de la API para extraer las URL de las imágenes. Luego, se generan elementos HTML dinámicamente para mostrar las fotos de los perros en la interfaz de usuario.

Transición suave de las imágenes: Se implementa una transición de opacidad utilizando CSS para lograr un efecto visual agradable al mostrar las imágenes gradualmente en la galería.

Gestión de errores: Se manejan los posibles errores de la API, como cuando no se encuentra la raza de perro especificada. En esos casos, se muestra una alerta de error para informar al usuario.

En resumen, el proyecto Galería Canina utiliza una API de imágenes de perros para mostrar una galería interactiva y atractiva de diversas razas caninas. Se aplican prácticas como la conexión a la API, la búsqueda de imágenes por raza, el procesamiento de datos, la generación dinámica de elementos HTML y la implementación de transiciones visuales. Además, se gestiona adecuadamente los errores para mejorar la experiencia del usuario.

```javascript
const getDog = async (breed) => {
  try {
    const queryGetDog = await fetch("https://dog.ceo/api/breed/" + breed + "/images");
    const jsonDog = await queryGetDog.json();

    if (jsonDog.status === "error") {
      alert("Error: No se encontró la raza de perro especificada");
      return;
    }

    console.log(jsonDog);

    jsonDog.message.forEach((dog) => {
      const item = document.createElement('div');
      item.className = 'item';

      const img = document.createElement('img');
      img.src = dog;

      img.addEventListener('load', () => {
        item.classList.add('loaded');
      });

      item.appendChild(img);
      fragment.appendChild(item);
    });

    grid.appendChild(fragment);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

El código anterior muestra cómo realizar solicitudes HTTP a una API de imágenes de perros, manejar las respuestas JSON, manipular el DOM para crear y mostrar elementos HTML, cargar imágenes y manejar posibles errores durante el proceso.

### Conceptos y Prácticas:

- Obtención de datos de forma asíncrona utilizando Fetch API
- Manejo de respuestas JSON de APIs
- Manipulación del Modelo de Objetos del Documento (DOM) con JavaScript
- Implementación de diseño responsive para compatibilidad en diferentes dispositivos
- Incorporación de transiciones suaves de imágenes para mejorar la experiencia de usuario
- Manejo de errores en caso de errores en las solicitudes a la API o cuando no se encuentra una raza especificada.


<h3 align="left">Tecnologías y herramientas</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.
