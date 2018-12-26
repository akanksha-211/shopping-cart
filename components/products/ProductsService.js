// Product category
class Product {
    constructor(name, description, imageUrl, price, stock, category, sku, id) {
        this.name = name;
        this.description =description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.stock= stock;
        this.category = category;
        this.sku = sku;
        this.id = id;
    }
}

class ProductService {
    constructor() {
        this.serviceUrl = 'http://localhost:5000/products';
    }
    // load the data using javascript fecth service
    async listAllProducts() {
        try {
            const response = await fetch(this.serviceUrl);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }
    async listProductsByCategory(category) {
        try {
            const response = await fetch(`${this.serviceUrl}?category=${category}`);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }
}
module.exports = ProductService;