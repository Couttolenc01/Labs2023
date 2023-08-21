console.log("Hola desde node!");

//fs es el modulo de filesystem de node, que sirve para acceder a los metodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un metodo que sirve para escribir en un archivo de manera sincrona.
//Por default, los metodos de node son asincronos
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabe de escribir el archivo!");

//Imprime a los 11 segundos el mensaje
setTimeout(
    () => {
        console.error("Ya te hackie jojo");
    }, 11000
);

//el siguiente codigo imrpime de manera asincrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}


//El modulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');

const server = http.createServer( (request, response) => {
    //console.log(request);
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pagina Personal</title>
        <link rel="stylesheet" href="style.css" />
        <style>
          header {
            background-color: whitesmoke;
          }
        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        
      </head>
      <body>
        <header>
          <h1 style="color: black">Mi Página de Introducción Personal</h1>
          <h2 id="Francisco">Francisco Couttolenc Ortiz</h2>
          <ul class="menu">
            <li><a href="general.html">Inicio</a></li>
            <li><a href="labs.html">Labs</a></li>
        </ul>
    
        </header>
    
        <div class="content">
          <p>
            Hola, me llamo Francisco Couttolenc Ortiz, tengo 22 años, me gusta mucho
            escuchar musica, jugar videojuegos, ver peliculas y series, me gusta
            mucho la tecnologia y
            <strong>me apasiona mucho la IA y el Machine Learning.</strong>
            Actualmente estoy estudiando la carrera de ITC en el Instituto
            Tecnologico de Monterrey Campus Queretaro. Tengo un perro llamado
            <strong>Otto</strong> es un bulldog ingles y es muy dormilon.
          </p>

          <figure class="image is-128x128">
            <img class ="is-rounded" src="https://mail.google.com/mail/u/0?ui=2&ik=9515b537b4&attid=0.1.1&permmsgid=msg-f:1773716780219238798&th=189d8203991e098e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8G7Djl59565BeaXf3iu6xrKN563B13bCugCh_Dq2R6t0riWpPHzjpqdnAkX-K3BdPiakTXzCShAEudQCAmBmGwU0-NWqFtSdne4hPFcCG3AtjoFrmpgiS43rY&disp=emb/34x34">
          <figure>

        </div>

        

    <div class="box"
        <div class="preguntas">
          <div class="scrollable">
            <p>
              <strong
                >¿Cuál es la diferencia entre Internet y la World Wide Web? <br
              /></strong>
              Internet es una red global de redes de computadoras interconectadas
              que permite la comunicación y el intercambio de información entre
              dispositivos en todo el mundo La World Wide Web (WWW) es un servicio
              específico en Internet que utiliza hipervínculos para acceder a
              documentos, imágenes y otros recursos multimedia a través de
              navegadores web <br /> <br>
    
              <strong>¿Cuáles son las partes de un URL?</strong> <br />
              <strong>Protocolo:</strong> Especifica cómo se accederá al recurso.
              Ejemplos comunes son "http://" para páginas web normales y "https://"
              para páginas seguras. <br />
              <strong>Dominio:</strong> Es la dirección web principal que identifica
              la ubicación del recurso en Internet <br />
              <strong>Ruta:</strong> Especifica la ubicación exacta del recurso
              dentro del servidor. <br />
              <strong>Parámetros:</strong> Son datos adicionales que se pueden pasar
              a la página web. <br />
              <strong>Fragmento:</strong> Especifica una ubicación específica dentro
              de la página web. <br /> <br>
    
              <strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong> <br>
              <strong> GET: </strong> Solicita la recuperación de datos o recursos del servidor. Es seguro y no debe tener efectos secundarios en el estado del servidor ni en los datos. <br>
              <strong> HEAD: </strong> Similar a GET, pero solicita solo los encabezados de respuesta, sin el cuerpo de datos. Útil para obtener información sobre el recurso sin descargarlo completo. <br>
              <strong> POST: </strong> Envia datos al servidor para su procesamiento. Se utiliza para crear nuevos recursos o realizar acciones que pueden cambiar el estado del servidor. <br>
              <strong> PUT: </strong> Envía datos al servidor para actualizar o crear un recurso en una ubicación específica. Reemplaza completamente el recurso existente si ya existe. <br>
              <strong> PATCH: </strong> Similar a PUT, pero se utiliza para enviar solo los cambios necesarios para actualizar un recurso, en lugar de reemplazarlo por completo. <br>
              <strong> DELETE: </strong>  Solicita la eliminación de un recurso en el servidor. Se utiliza para eliminar recursos específicos. <br> <br>
    
              <strong>Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong> <br>
              El método POST es la elección adecuada para enviar formularios con datos sensibles debido a su mayor seguridad y capacidad para ocultar los datos del formulario de manera efectiva. <br> <br>
    
              <strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong> <br>
              El navegador envía una solicitud GET al servidor correspondiente para obtener la página solicitada y su contenido asociado. <br> <br>
    
              <strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</strong> <br>
              El código de estado 200 se utiliza para indicar que la solicitud se procesó correctamente y que el servidor está respondiendo con el contenido solicitado, ya sea una página web, una imagen u otro tipo de recurso. <br> <br>
    
              <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</strong> <br>
              Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404, ya es esencial para proporcionar una experiencia positiva a los usuarios, mantener la accesibilidad y la integridad del sitio web. <br> <br>
    
              <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</strong> <br>
              Sí, es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500, ya que es esencial para brindar una experiencia positiva a los usuarios, mantener la integridad y seguridad del sitio, y asegurar su buen funcionamiento en general. <br> <br>
    
              <strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</strong> <br>
              Cuando un atributo HTML5 está "depreciado" o "desaprobado" (deprecated), significa que si bien todavía es compatible y funcional, se recomienda no utilizarlo en el código HTML, ya que en futuras versiones podría dejar de ser soportado o ser reemplazado por mejores prácticas y estándares. <br> <br>
    
              <strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong> <br>
              HTML5 es una evolución significativa de HTML 4, con un enfoque en la semántica, multimedia, interactividad y adaptabilidad a las tecnologías modernas y dispositivos. <br> <br>
    
              <strong>¿Qué componentes de estructura y estilo tiene una tabla?</strong> <br>
              <strong>Componentes de Estructura:</strong> <br>
              <strong>table:</strong> El elemento contenedor principal que define la tabla. <br>
              <strong>tr: </strong> Representa una fila en la tabla. <br>
              <strong>td: </strong> Representa una celda en una fila, contiene datos de la tabla. <br>
              <strong>th: </strong> Representa una celda de encabezado en una fila, se utiliza para títulos de columna o fila. <br> <br>
    
              <strong>Componentes de Estilo:</strong> <br>
              <strong>Bordes y Separación:</strong> CSS se usa para aplicar bordes y ajustar la separación entre celdas y filas. <br>
              <strong> Colores y Fondos:</strong> Puedes establecer colores de fondo y texto para celdas, filas y columnas. <br>
              <strong>Alineación:</strong> Puedes alinear el contenido de las celdas horizontalmente y verticalmente. <br>
              <strong>Espaciado y Relleno:</strong> CSS permite controlar el espaciado alrededor de celdas y contenido con márgenes y relleno. <br>
              <strong> Tipografía:</strong> Puedes aplicar estilos de fuente, tamaño y formato de texto en las celdas. <br>
              <strong>Bordes de Celda:</strong> Es posible aplicar bordes individuales a las celdas para lograr diseños específicos. <br> <br>
    
              <strong>¿Cuáles son los principales controles de una forma HTML5?</strong>  <br>
              <strong> input type="text": </strong> Campo de texto para ingresar datos alfanuméricos. <br>
              <strong> input type="password": </strong> Campo de contraseña que oculta el texto ingresado. <br>
              <strong> input type="radio": </strong> Botón de opción para seleccionar una opción de una lista. <br>
              <strong> input type="checkbox": </strong> Casilla de verificación para seleccionar una o más opciones de una lista. <br>
              <strong> input type="submit": </strong> Botón para enviar el formulario. <br> <br>
    
              <strong>¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</strong> <br>
              476 de 555 puntos <br> <br>
    
              <strong>PREGUNTAS LAB 3</strong> <br>
              <strong>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</strong>
              !important puede ser útil en situaciones específicas, pero su uso debe ser limitado y justificado. En la mayoría de los casos, es preferible ajustar la especificidad de las reglas y mantener un enfoque ordenado y legible en el código CSS. <br>  <br>
    
              <strong>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</strong> <br>
              seleccionar una imagen de fondo adecuada es esencial para garantizar una experiencia de usuario positiva, accesibilidad, rendimiento y coherencia visual en tu sitio web. <br> <br>
    
              <strong>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</strong> <br>
              La elección de unidades depende de tus objetivos y del diseño específico del proyecto. Es importante encontrar un equilibrio entre diseño, adaptabilidad y rendimiento para brindar la mejor experiencia posible a los usuarios. <br> <br>
    
              <strong>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</strong> <br>
              el uso de una versión minimizada del CSS beneficia el rendimiento del sitio al reducir el tamaño del archivo, acelerar los tiempos de carga y mejorar la experiencia general del usuario al optimizar la velocidad de navegación. <br> <br>
    
              <strong>PREGUNTAS LAB 4</strong> <br> <br>
              <strong>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</strong> <br>
              Java se utiliza ampliamente en desarrollo de aplicaciones en diversos ámbitos, mientras que JavaScript es esencial para la interactividad en la web y, con la aparición de Node.js, también en aplicaciones de servidor. <br> <br>
    
              <strong>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</strong> <br>
              <strong>getDate</strong> Devuelve el día del mes (número) de una fecha. <br>
              <strong>getMonth</strong> Devuelve el mes (número) de una fecha (0 para enero, 1 para febrero, etc.) <br>
              <strong>getFullYear</strong> Devuelve el año (a cuatro dígitos) de una fecha <br>
              <strong>getHours</strong> Devuelve la hora (0-23) de una fecha. <br>
              <strong>getMinutes</strong> Devuelve los minutos (0-59) de una fecha. <br> <br>
    
              <strong>¿Cómo se declara una variable con alcance local dentro de una función?</strong> <br>
              Una variable declarada dentro de una función tendrá un alcance limitado a esa función, lo que significa que solo se podrá acceder y manipular dentro de ella y depende del lenguaje de programación. <br> 
    
              <strong>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</strong> <br>
              Falta de encapsulación, Colisiones de nombres, Dificultad en el mantenimiento, Menor modularidad, Impacto en el rendimiento <br> <br>
    
              <strong>hola</strong>
    
              
    
    
            </p>
          </div>
        </div>
      </div>
    

        <footer class="footer">
         <div class="content has-text-centered">
            <p>
             <strong>Bulma</strong> by <a href="https://jgthms.com">Francisco Couttolenc Ortiz</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">TEC</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
         </div>
        </footer>
    
        <br>
        <br>
    
        
      </body>
    </html>
    `);
    response.end();

});

server.listen(3000);