const products = [
    {
        id: 1,
        name: 'Wet Specimens',
        price: 100.00,
        image: 'images/crestie-wet-spec.jpg'
    },
    {
        id: 2,
        name: 'Badger Claw Necklace',
        price: 35.00,
        image: 'images/necklace.jpg'
    },
    {
        id: 3,
        name: 'Coyote Bone Earrings',
        price: 45.00,
        image: 'images/coyote-earrings.jpg'
    }
];

function displayProducts() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added ${product.name} to cart!`);
}

document.addEventListener('DOMContentLoaded', displayProducts);
