// // Selectors
// let title = document.getElementById('title');
// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let discount = document.getElementById('discount');
// let total = document.getElementById('total');
// let count = document.getElementById('count');
// let category = document.getElementById('category');
// let submit = document.getElementById('submit');

// let mood = "create";
// let tempIndex;


// // get total function
// function getTotal() {
//     if (price.value != '') {
//         let priceValue = parseFloat(price.value)? parseFloat(price.value): 0;
//         let taxesValue = parseFloat(taxes.value)? parseFloat(taxes.value): 0;
//         let adsValue = parseFloat(ads.value)? parseFloat(ads.value): 0;
//         let discountValue = parseFloat(discount.value)? parseFloat(discount.value): 0;
//         let totalValue = (priceValue + taxesValue + adsValue) - discountValue;
        
//         total.innerHTML = `${totalValue}$`;
//         total.style.backgroundColor = 'green';
//     }
//     else {
//         total.innerHTML = '';
//         total.style.backgroundColor = '#a00d02';
//     }
// }

// let dataProducts;
// if(localStorage.getItem('products')) {
//     dataProducts = JSON.parse(localStorage.getItem('products'));
// }
// else {
//     dataProducts = [];
// }


// // create product function
// submit.addEventListener('click', function() {

//     // prevent empty values
//     if (title.value == '' || price.value == '' || category.value == '') {
//         alert('Please fill all the fields');
//         return;
//     }

//     let newProduct = {
//         title: title.value,
//         price: price.value,
//         taxes: taxes.value? taxes.value: 0,
//         ads: ads.value? ads.value: 0,
//         discount: discount.value? discount.value: 0,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value
//     };

//     if (mood == "create") {
//         if(newProduct.count > 1) {
//             for (let i = 0; i < newProduct.count; i++) {
//                 dataProducts.push(newProduct);
//             }
//         }
//         else {
//             newProduct.count = 1;
//             dataProducts.push(newProduct);
//         }
//     }
//     else { 
//         dataProducts[tempIndex] = newProduct;
//         mood = "create";
//         count.style.display = 'block';
//         submit.innerHTML = 'Create';
//     }
    

//     localStorage.setItem('products', JSON.stringify(dataProducts));
//     clearInputs();
//     showProducts();
// });

// // clear inputs
// function clearInputs() {
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     total.innerHTML = '';
//     count.value = '';
//     category.value = '';
// }

// function showProducts() {

//     getTotal(); // to remove the total value if the price is empty

//     let table = '';

//     for (let i = 0; i < dataProducts.length; i++) {
//         table += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${dataProducts[i].title}</td>
//             <td>${dataProducts[i].price}</td>
//             <td>${dataProducts[i].taxes}</td>
//             <td>${dataProducts[i].ads}</td>
//             <td>${dataProducts[i].discount}</td>
//             <td>${dataProducts[i].total}</td>
//             <td>${dataProducts[i].category}</td>
//             <td><i class="fas fa-edit update"></i></td>
//             <td><i class="fas fa-trash delete"></i></td>
//         </tr>
//         `;
//     }

//     document.getElementById('tbody').innerHTML = table;

//     let btnDelete = document.getElementById('delete-all');
//     if (dataProducts.length > 0) {
//         btnDelete.innerHTML = `<button onclick="deleteAll()">Delete All (${dataProducts.length})</button>`;
//     }
//     else {
//         btnDelete.innerHTML = '';
//     }
// }


// showProducts();


// // delete product
// document.getElementById('tbody').addEventListener('click', function(e) {
//     if (e.target.classList.contains('delete')) {
//         let index = e.target.parentElement.parentElement.firstElementChild.innerHTML - 1;
//         dataProducts.splice(index, 1);
//         localStorage.setItem('products', JSON.stringify(dataProducts));
//         showProducts();
//     }
// });

// // delete all products
// function deleteAll() {
//     // notify the user
//     let confirmDelete = confirm('Are you sure you want to delete all products?');
//     if (!confirmDelete) {
//         return;
//     }
//     dataProducts = [];
//     localStorage.setItem('products', JSON.stringify(dataProducts));
//     showProducts();
// }

// // update product
// document.getElementById('tbody').addEventListener('click', function(e) {
//     if (e.target.classList.contains('update')) {
//         let index = e.target.parentElement.parentElement.firstElementChild.innerHTML - 1;
        
//         title.value = dataProducts[index].title;
//         price.value = dataProducts[index].price;
//         taxes.value = dataProducts[index].taxes;
//         ads.value = dataProducts[index].ads;
//         discount.value = dataProducts[index].discount;
//         category.value = dataProducts[index].category;
        
//         getTotal();

//         count.style.display = 'none';

//         submit.innerHTML = 'Update';

//         mood = "update";

//         tempIndex = index;

//         scroll({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }
// });


// // search
// let searchMode = "title";

// function getSearchMode(id) {
//     let search = document.getElementById('search');

//     if(id == 'search-title') {
//         searchMode = "title";
//         search.placeholder = 'Search by title';
//     }
//     else {
//         searchMode = "category";
//         search.placeholder = 'Search by category';
//     }
    
//     search.focus();

//     search.value = '';
// }

// function search(value) {
//     let searchValue = value.toLowerCase();
//     let filteredProducts = dataProducts.filter(product => {
//         if (searchMode == "title") {
//             return product.title.toLowerCase().includes(searchValue);
//         }
//         else {
//             return product.category.toLowerCase().includes(searchValue);
//         }
//     });

//     let table = '';

//     for (let i = 0; i < filteredProducts.length; i++) {
//         table += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${filteredProducts[i].title}</td>
//             <td>${filteredProducts[i].price}</td>
//             <td>${filteredProducts[i].taxes}</td>
//             <td>${filteredProducts[i].ads}</td>
//             <td>${filteredProducts[i].discount}</td>
//             <td>${filteredProducts[i].total}</td>
//             <td>${filteredProducts[i].category}</td>
//             <td><i class="fas fa-edit update"></i></td>
//             <td><i class="fas fa-trash delete"></i></td>
//         </tr>
//         `;
//     }

//     document.getElementById('tbody').innerHTML = table;
// }


































// Select DOM elements
const title = document.getElementById('title');
const price = document.getElementById('price');
const taxes = document.getElementById('taxes');
const ads = document.getElementById('ads');
const discount = document.getElementById('discount');
const total = document.getElementById('total');
const count = document.getElementById('count');
const category = document.getElementById('category');
const submit = document.getElementById('submit');
const searchInput = document.getElementById('search');
const tbody = document.getElementById('tbody');

// App state variables
let mood = 'create'; // 'create' or 'update' mode
let tempIndex; // Stores the index of the product being updated
let dataProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

// Function to calculate and display the total price
function getTotal() {
    if (price.value !== '') {
        const priceValue = parseFloat(price.value) || 0;
        const taxesValue = parseFloat(taxes.value) || 0;
        const adsValue = parseFloat(ads.value) || 0;
        const discountValue = parseFloat(discount.value) || 0;
        const totalValue = (priceValue + taxesValue + adsValue) - discountValue;
        
        total.innerHTML = `${totalValue}$`;
        total.style.backgroundColor = 'green';
    } else {
        total.innerHTML = '';
        total.style.backgroundColor = '#a00d02';
    }
}

// Clear form inputs
function clearInputs() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// Create or update a product
submit.addEventListener('click', function() {
    if (title.value === '' || price.value === '' || category.value === '') {
        alert('Please fill all the fields');
        return;
    }

    const newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value || 0,
        ads: ads.value || 0,
        discount: discount.value || 0,
        total: total.innerHTML,
        count: count.value || 1,
        category: category.value
    };

    if (mood === 'create') {
        if (newProduct.count > 1) {
            for (let i = 0; i < newProduct.count; i++) {
                dataProducts.push(newProduct);
            }
        } else {
            dataProducts.push(newProduct);
        }
    } else {
        dataProducts[tempIndex] = newProduct;
        mood = 'create';
        count.style.display = 'block';
        submit.innerHTML = 'Create';
    }

    localStorage.setItem('products', JSON.stringify(dataProducts));
    clearInputs();
    showProducts();
});

// Display all products in the table
function showProducts() {
    getTotal(); // Reset the total if price is empty
    let table = '';
    dataProducts.forEach((product, index) => {
        table += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.ads}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><i class="fas fa-edit update"></i></td>
                <td><i class="fas fa-trash delete"></i></td>
            </tr>
        `;
    });

    tbody.innerHTML = table;

    const btnDeleteAll = document.getElementById('delete-all');
    if (dataProducts.length > 0) {
        btnDeleteAll.innerHTML = `<button onclick="deleteAll()">Delete All (${dataProducts.length})</button>`;
    } else {
        btnDeleteAll.innerHTML = '';
    }
}

// Delete a single product
tbody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const index = e.target.parentElement.parentElement.firstElementChild.innerHTML - 1;
        dataProducts.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(dataProducts));
        showProducts();
    }
});

// Delete all products
function deleteAll() {
    if (confirm('Are you sure you want to delete all products?')) {
        dataProducts = [];
        localStorage.setItem('products', JSON.stringify(dataProducts));
        showProducts();
    }
}

// Update a product
tbody.addEventListener('click', function(e) {
    if (e.target.classList.contains('update')) {
        const index = e.target.parentElement.parentElement.firstElementChild.innerHTML - 1;
        const product = dataProducts[index];

        title.value = product.title;
        price.value = product.price;
        taxes.value = product.taxes;
        ads.value = product.ads;
        discount.value = product.discount;
        category.value = product.category;

        getTotal();

        count.style.display = 'none';
        submit.innerHTML = 'Update';
        mood = 'update';
        tempIndex = index;

        scroll({ top: 0, behavior: 'smooth' });
    }
});

// Search functionality
let searchMode = 'title';

function getSearchMode(id) {
    if (id === 'search-title') {
        searchMode = 'title';
        searchInput.placeholder = 'Search by title';
    } else {
        searchMode = 'category';
        searchInput.placeholder = 'Search by category';
    }
    searchInput.focus();
    searchInput.value = '';
}

function search(value) {
    const searchValue = value.toLowerCase();
    const filteredProducts = dataProducts.filter(product => {
        return searchMode === 'title' 
            ? product.title.toLowerCase().includes(searchValue) 
            : product.category.toLowerCase().includes(searchValue);
    });

    let table = '';
    filteredProducts.forEach((product, index) => {
        table += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.ads}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><i class="fas fa-edit update"></i></td>
                <td><i class="fas fa-trash delete"></i></td>
            </tr>
        `;
    });

    tbody.innerHTML = table;
}

// Initialize by displaying any existing products
showProducts();
