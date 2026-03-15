/*
This is a list of products (array with all the products) the store is selling at the moment
*/

const products = [
{
    id: 1,
    prodPicture: './src/category1.png',
    title: 'La Virtus',
    price: 170.00,
    category: 'bags',
    colors: ['black', 'white', 'pink', 'blue'] 
},
{
    id: 2,
    prodPicture: './src/category1.png',
    title: 'La Cura',
    price: 60.00,
    category: 'selfCare'
},
{
    id: 3,
    prodPicture: './src/tight-top.jpg',
    title: 'La Flexa Top',
    price: 75.00,
    category: 'clothing'
},
{
    id: 4,
    prodPicture: './src/perfume.jpg',
    title: 'La Audacia',
    price: 100,
    category: 'selfCare'
}
];

const productContainer = document.querySelector('.productContainer');
const cartBtn = document.getElementById('cartbtn');

/**This function uses the productlist/array to display the available products to the html */
const renderProducts = () => {

    products.forEach(product => {
    const prodHtml = `
    <a href="productPage.html?id=${product.id}" class="product-card">
    <div class="productCard">
                    <div class="bestimg">
                        <img src="${product.prodPicture}" alt="product picture">
                    </div>
                    <div class="productDetails">
                        <div class="title">
                            <p>${product.title}</p>
                        </div>
                        <div class="price">
                            <p>R${product.price}</p>
                        </div>
                    </div>
                    <div class="addToCart">
                        <button id="cartbtn">ADD TO CART</button>
                    </div>
                </div>
                </a>`;

                productContainer.innerHTML += prodHtml;
})

}
renderProducts();
