const axios = require('axios');

const TAX = 0.125;
const PRICE_API_URL = "http://localhost:3001/products";

class Cart {
    constructor() {
        this.items = [];
    }

    async addProduct(product, quantity) {
        if (!product || quantity <= 0) {
            throw new Error("Invalid product name or quantity");
        }

        try {
            // Fetch all products and filter by product ID
            const response = await axios.get(`${PRICE_API_URL}?id=${product}`);
            const productData = response.data[0]; // json-server returns an array

            if (!productData) {
                throw new Error(`Product '${product}' not found`);
            }

            const price = productData.price;

            const existingProduct = this.items.find(item => item.product === product);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                this.items.push({ product, quantity, price });
            }
        } catch (error) {
            throw new Error(`Error fetching price for ${product}: ${error.message}`);
        }
    }

}