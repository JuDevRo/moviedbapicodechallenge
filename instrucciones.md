# React Coding Challenge
El objetivo de este desafío de codificación es brindarle la oportunidad de mostrar sus conocimientos y mostrarnos cómo trabaja en un proyecto de la vida real.
No lo estamos forzando intencionalmente a usar ninguna biblioteca en particular (que no sea React) para que no tenga que aprender algo nuevo solo para un desafío de código, pero tenga en cuenta que incluso cuando no esperamos una aplicación lista para producción, lo hacemos. Espero que pueda explicar por qué eligió esas dependencias para el trabajo.
Además, tenga en cuenta no agregar funciones fuera del alcance de este desafío de código para que no termine invirtiendo más tiempo del necesario.
## Introducción
Su sala de cine local necesita urgentemente atraer una nueva audiencia.
Para hacer esto, le piden que cree una aplicación web simple que permita a los usuarios descubrir nuevas películas y buscarlas.
Dado que no tienen un servicio de backend, la primera versión de la aplicación se creará utilizando la API pública https://developers.themoviedb.org/3
## Características
El cine solicita las siguientes características para la primera versión
### Descubrir
Al abrir la aplicación web, los usuarios deberían poder ver una lista de películas sugeridas por la aplicación y ordenadas por popularidad.
por
No se requiere paginación para esta versión.
- Referencia de API: https://developers.themoviedb.org/3/discover/movie-discover
### Buscar
En la vista de descubrimiento, agregue una barra de búsqueda en la parte superior para permitir a los usuarios consultar información sobre películas.
por
Si el campo de búsqueda está vacío, muestra los resultados del descubrimiento.
- Referencia de API: https://developers.themoviedb.org/3/search/search-movies
### Filtrar por calificación
La calificación es un valor entre 0 y 10.
por
Agregue un filtro de calificación en forma de cinco estrellas como [aquí] (https://dribbble.com/shots/1053518-Filters).
por
Al seleccionar una estrella, también deben seleccionarse todas las estrellas de la izquierda.
por
El rango de cada estrella es 2, por lo que, si se selecciona la primera estrella, solo deberían aparecer las películas con clasificación 0-2. Si se selecciona la segunda estrella, solo deberían aparecer las películas con clasificación 2-4, y así sucesivamente.
por
Si la estrella en la que se hizo clic es la activa actualmente, deshabilite el filtro.
por
Realice este filtrado en el lado del cliente.
- Campo de calificación en el modelo de película: `vote_average`
### Vista de detalles
Al hacer clic, se debe mostrar una vista detallada, mostrando más información sobre la película.
## Diseño
No requerimos diseños asombrosos.
por
Una IU limpia y mínima servirá.
por
Queremos ver las imágenes de películas proporcionadas por la API.
[Aquí] (https://dribbble.com/shots/1682568-Flixus-Homepage-WIP/attachments/266476) una sugerencia de diseño, pero depende de usted.
## Requisitos de desarrollo
- Utilice `create-react-app` para este proyecto
- Utilice la última versión de React
- Proporcione todos los pasos necesarios para iniciar la aplicación.
## Entregables
- El código base del proyecto se entregó de alguna manera (tú eliges).
- Cualquier otra cosa que considere importante para comprender la aplicación.
## PREGUNTAS MÁS FRECUENTES
- ¿Necesito agregar pruebas?
  - No.
- ¿Necesito usar alguna dependencia específica?
  - Aparte de `React`, use lo que se sienta cómodo y lo que crea que es necesario para este proyecto
- ¿Qué tipo de funciones de React puedo usar?
  - Aquí no hay restricciones, enséñanos lo que sabes. Nos encanta React y nos encanta utilizar las funciones más recientes.
- ¿Tengo que seguir los diseños?
  - No, siéntete libre de crear la interfaz de usuario como quieras. Solo nos preocupamos por el código.