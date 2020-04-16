import tokenService from './tokenService'

const BASE_URL = '/api/admin/';

function createProduct(product) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(product)
    };
    return fetch(`${BASE_URL}createProduct`, options).then(indexProducts());
    
}

function updateProduct(product) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(product)
    };
    return fetch(`${BASE_URL}product/${product._id}/update`, options).then(indexProducts());
    
}

function indexProducts() {
    const options = {
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(`${BASE_URL}indexProducts`, options).then(res => res.json());
}

function viewProduct(product) {
    const options = {
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(`${BASE_URL}product/${product._id}`, options).then(res => res.json());
}

function deleteProduct(product) {
    console.log('PRODUCT:', product)
    const options = {
        method: 'DELETE',
        header: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(`${BASE_URL}product/${product._id}/delete`, options).then(res => res.json());
}


export default {
    createProduct,
    indexProducts,
    viewProduct,
    updateProduct,
    deleteProduct
};