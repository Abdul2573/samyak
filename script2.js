document.addEventListener('DOMContentLoaded', function() {
    fetchJewelryItems();
});

function fetchJewelryItems() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://127.0.0.1:5000/api/jewelry';
    
    fetch(proxyUrl + apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data);
        displayJewelryItems(data);
    })
    .catch(error => {
        console.error('Error fetching jewelry items:', error);
        // Display a user-friendly error message on the page
        const productList = document.getElementById('product-list');
        productList.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });
}

function displayJewelryItems(items) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing items

    if (items.length === 0) {
        const noItemsMessage = document.createElement('p');
        noItemsMessage.textContent = 'No jewelry items found.';
        productList.appendChild(noItemsMessage);
        return;
    }

    items.forEach(item => {
        console.log('Processing item:', item);

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const category = document.createElement('h3');
        category.textContent = item.CategoryName;

        const goldWeight = document.createElement('p');
        goldWeight.textContent = `Gold Weight: ${item.GoldWeight} g`;

        const price = document.createElement('p');
        price.textContent = `Price: $${item.TagPrice}`;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.classList.add('add-to-cart-btn');

        productCard.appendChild(category);
        productCard.appendChild(goldWeight);
        productCard.appendChild(price);
        productCard.appendChild(addToCartBtn);

        productList.appendChild(productCard);
    });
}
