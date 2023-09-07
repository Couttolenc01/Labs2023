const express = require('express');

const router = express.Router();

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
        <from action="addToCart" method="POST">
        <input type="number" id="QuantityProduct1" value="0" min="0">
        <p>Description: A stunning space exploration game set in a futuristic universe.</p>
        <button onclick="addToCart('Starfield', 1800)">Add to cart</button>
    </div>

    <br>

    <div class="product-item">
        <h2>Alan Wake 2</h2>
        <figure class="image is-128x128">
        <img src="https://www.instant-gaming.com/images/products/7493/616x353/alan-wake-2-pc-game-cover.jpg?v=1657004400" alt="Alan Wake 2 Game">
        </figure>
        <p>Price: $1700</p>
        <label for="QuantityProduct2">Quantity:</label>
        <from action="addToCart" method="POST">
        <input type="number" id="QuantityProduct2" value="0" min="0">
        <button onclick="addToCart('Alan Wake 2', 1700)">Add to cart</button>
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
        <from action="addToCart" method="POST">
        <input type="number" id="QuantityProduct3" value="0" min="0">
        <form action="/tienda/addToCart" method="POST">
    
        <input type="submit" value="Add to cart">
        </form>
        <p>Description: Mirage is principally set in 9th-century Baghdad during the anarchy at Samarra, and follows Basim Ibn Ishaq (a character first introduced in Valhalla) and his transition from street thief to fully-fledged member of the Assassin Brotherhood</p>
    </div>

    <br>

    <div class="summary">
        <h2>Purchase summary</h2>
        <p>Total: <span id="total">$0</span></p>
        <p>IVA (16%): <span id="iva">$0</span></p>
    </div>

</section>
    </body>
    </html>
    `); //Manda la respuesta
});

router.post('/addToCart', (request, response, next) => {
    console.log(request.body.nombre);
    response.send('<h1>Agregado al carrito</h1>'); //Manda la respuesta
});

router.use('/', (request, response, next) => {
    response.send('<h1>Juegos nuevos</h1>'); //Manda la respuesta
});

module.exports = router;