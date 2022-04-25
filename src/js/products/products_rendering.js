
import products from "./products.js";

export default () => {
    let productCards = document.querySelector('.product_cards');
    products.forEach(product => {
        productCards.innerHTML += `
     <div class="product_card">
        <div class="product_img">
            <div class="property_icons">
                <img src="src/images/rollicons/Property=Spicy.svg" alt="#">
                <img src="src/images/rollicons/Property=Hot.svg" alt="#">
                <img src="src/images/rollicons/Property=Vegan.svg" alt="#">
            </div>
            <img class="roll_img" src="${product.img}" alt="#">
        </div>
        <div class="order_sidebar">
            <div class="textin_grid">
                <div class="rollsname">${product.title}</div>
                <div class="amount">${product.amount}</div>
            </div>
            <div class="order_details">
                <div class="price1">${product.oldPrice}</div>
                <button class="price2">${product.price}</button>
            </div>
        </div>
    </div>
   `
    })
    
}

