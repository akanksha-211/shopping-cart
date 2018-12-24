// Product category
class Category {
    constructor(name, key, description, enabled, order, imageUrl, id) {
        this.name = name;
        this.key = key;
        this.description =description;
        this.enabled = enabled;
        this.order = order;
        this.imageUrl = imageUrl;
        this.id = id;
    }
}

class CategoryService {
    constructor() {
        this.serviceUrl = 'http://localhost:5000/categories';
    }
    // load the data using javascript fecth service
    async findAll() {
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
}
module.exports = CategoryService;