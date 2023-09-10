const express = require('express');

const router = express.Router();

// Variable global para almacenar los elementos del carrito
const cart = [];

router.get('/nuevos', (request, response, next) => {
    response.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>
            Labs A01754959
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <header>
            <div class="box">
                <h1 class="title is-1-desktop">Tienda en linea</h1>
                <h2 class="subtitle is-1-desktop">Videojuegos</h2>
            </div>
        </header>
        <section class="products">
    <div class="product-item">
        <h2>Starfield</h2>
        <figure class="image is-128x128">
        <img src="https://www.eltiempo.com/files/article_main_1200/uploads/2022/04/28/626ac5051c60b.jpeg" alt="Starfield Game">
        </figure>
        <p>Price: $1800</p>
        <label for="QuantityProduct1">Quantity:</label>
        <form action="/tienda/addToCart" method="POST">
        <input type="hidden" name="nombre" value="Starfield">
        <input type="hidden" name="price" value="1800">
        <!-- Agregamos el campo de entrada para la cantidad -->
        <input type="number" name="cantidad" value="0" min="0">
        <input type="submit" value="Add to cart">
        </form>
        <p>Description: A stunning space exploration game set in a futuristic universe.</p>
    </div>

    <br>

    <div class="product-item">
        <h2>Alan Wake 2</h2>
        <figure class="image is-128x128">
        <img src="https://www.instant-gaming.com/images/products/7493/616x353/alan-wake-2-pc-game-cover.jpg?v=1657004400" alt="Alan Wake 2 Game">
        </figure>
        <p>Price: $1700</p>
        <label for="QuantityProduct2">Quantity:</label>
        <form action="/tienda/addToCart" method="POST">
        <input type="hidden" name="nombre" value="Alan Wake 2">
        <input type="hidden" name="price" value="1700">
        <!-- Agregamos el campo de entrada para la cantidad -->
        <input type="number" name="cantidad" value="0" min="0">
        <input type="submit" value="Add to cart">
        </form>
        <p>Description: A psychological thriller action-adventure game with a gripping storyline.</p>
    </div>

    <br>

    <div class="product-item">
        <h2>Assasins Creed Mirage</h2>
        <figure class="image is-128x128">
        <img src="https://image.api.playstation.com/vulcan/ap/rnd/202304/2714/d7a1f9339c13b4284fcba2acd8d5e4ba2867fa6ef3b8b857.png" alt="Assasins Creed Mirage Game">
        </figure>
        <p>Price: $1500</p>
        <label for="QuantityProduct3">Quantity:</label>
        <form action="/tienda/addToCart" method="POST">
        <input type="hidden" name="nombre" value="Assasins Creed Mirage">
        <input type="hidden" name="price" value="1500">
        <!-- Agregamos el campo de entrada para la cantidad -->
        <input type="number" name="cantidad" value="0" min="0">
        <input type="submit" value="Add to cart">
        </form>
        <p>Description: Mirage is principally set in 9th-century Baghdad during the anarchy at Samarra, and follows Basim Ibn Ishaq (a character first introduced in Valhalla) and his transition from street thief to fully-fledged member of the Assassin Brotherhood</p>
    </div>

    <br>

    <div class="summary">
         <h2>Purchase summary</h2>
        <form action="/tienda/summary" method="POST">
        <input type="submit" value="Summary">
        </form>
    </div>

</section>
    </body>
    </html>
    `); //Manda la respuesta
});

function addToCart(nombre, price) {
    const cantidad = parseInt(document.querySelector(`input[name="cantidad"]`).value);

    // Reiniciar el campo de entrada a 0
    document.querySelector(`input[name="cantidad"]`).value = 0;
  
    // Hacer la solicitud POST al servidor con la cantidad seleccionada
    fetch('/tienda/addToCart', {
      method: 'POST',
      body: JSON.stringify({ nombre, price, cantidad }), //Envia la cantidad
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message); // Muestra el mensaje de respuesta del servidor
    });
  }
  

router.post('/addToCart', (request, response, next) => {
    console.log(request.body.nombre);
    const { nombre, price, cantidad } = request.body;
    const existingItem = cart.find(item => item.nombre === nombre);

    if (existingItem) {
        // Si el producto ya existe en el carrito, no sumes la cantidad aqui
        existingItem.cantidad = cantidad;
      } else {
        // Si es un nuevo producto, agrégalo al carrito con cantidad 1
        cart.push({ nombre, price, cantidad });
      }

      response.json({ message: 'Agregado al carrito' }); // Enviar una respuesta JSON al cliente
});

router.post('/summary', (request, response, next) => {

    // Verificar si el carrito está vacío
    if (cart.length === 0) {
        response.send('<h1>El carrito está vacío</h1>');
        return;
    }


    console.log(request.body.nombre);

    let total = 0;
    const items = cart.map(item => {
        const subtotal = item.price * item.cantidad;
    total += subtotal;
    return `<p>${item.nombre}: $${item.price} x ${item.cantidad} = $${subtotal}</p>`;
  });

    response.send(`<h1>Purchase summary</h1> <div>${items.join('')}</div> <p>Total: $${total}</p>`); //Manda la respuesta
});

router.use('/', (request, response, next) => {
    response.send('<h1>Juegos nuevos</h1>'); //Manda la respuesta
});

module.exports = router;