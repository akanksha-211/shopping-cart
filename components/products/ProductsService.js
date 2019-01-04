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

export default class ProductService {
    constructor() {
        this.serviceUrl = 'http://localhost:5000';
    }
    // load the data using javascript fecth service
    async listAllProducts() {
        try {
            const response = await fetch(`${this.serviceUrl}/products`);
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
    async addToCart(id) {
        try {
            let response = '';
            $.ajax({
                url: `${this.serviceUrl}/addToCart`,
                type: "POST",
                data: {
                    "id": id
                },
                success: function(data, textStatus, res) {
                    response = res.responseText;
                    console.log(response)
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    throw new Error('Error occurred!');
                }
            });
            console.log(response)
            return await response.json() ;
        }
        catch (err) {
            throw (err);
        }
    }
}