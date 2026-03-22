/*
This is a list of products (array with all the products) the store is selling at the moment
*/

const products = [
{
    id: 1,
    images: ['./src/category1.png'],
    title: 'La Virtus',
    price: 170.00,
    category: 'bags',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa",    
    colors: ['black', 'white', 'pink', 'blue'] 
},
{
    id: 2,
    images: ['./src/category1.png'],
    title: 'La Cura',
    price: 60.00,
    category: 'selfCare',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa"
},
{
    id: 3,
    images: ['./src/tight-top.jpg'],
    title: 'La Flexa Top',
    price: 75.00,
    category: 'clothing',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa"

},
{
    id: 4,
    images: ['./src/perfume.jpg'],
    title: 'La Audacia',
    price: 100,
    category: 'selfCare',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit, eius itaque adipisci deserunt magnam at corrupti magni quibusdam molestias accusantium repellendus distinctio libero dolor ut numquam vero ex maiores.",
    details: "Available in: Green, White, Red <br> Material: Wool-blend body, faux leather sleeves <br> Lining: Satin finish <br>Only 10 pieces made <br> Designed & made in South Africa"
}
];

const productContainer = document.querySelector('.productContainer');
const cartBtn = document.getElementById('cartbtn');

/**This function uses the productlist/array to display the available products to the html */
const renderProducts = () => {

    products.forEach(product => {
    const prodHtml = `
    <a target="_self" href="productPage.html?id=${product.id}" class="product-card">
    <div class="productCard">
                    <div class="bestimg">
                        <img src="${product.images[0]}" alt="product picture">
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

