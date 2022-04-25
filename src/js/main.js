import '../styles/main.scss';
import { readJson } from './api.js';
import products from './products/products.js';
import products_rendering from './products/products_rendering.js';
import basket from './basket/basket.js'



readJson();
products_rendering();

let basketAddButton = document.querySelectorAll('.order_details').forEach(item => {
  item.addEventListener('click', function (e) {
    basket.add(e.target.getAttribute('product_id'));
  })

});


