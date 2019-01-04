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

export default class CategoryService {
    constructor() {
        this.serviceUrl = 'http://localhost:5000';
    }
    // load the data using javascript fecth service
    async findAll() {
        try {
            const response = await fetch(this.serviceUrl+'/categories');
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw new Error('Fetch failed');
        }
    }
    async getBanner() {
        try {
            const response = await fetch(this.serviceUrl+'/banners');
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
