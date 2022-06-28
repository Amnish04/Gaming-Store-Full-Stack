const fs = require("fs");

/* A class to hold the app data */
class Data {
    constructor(categories, products) {
        this.categories = categories;
        this.products = products;
    }
};

let dataCollection = null;

/* Functions for module */

module.exports.initializeContent =  function () {
    return new Promise((resolve ,reject) => {
        fs.readFile("./data/categories.json", 'utf-8', (err, catData) => {
            if (err) {
                reject("Unable to load categories!");
            }
            fs.readFile("./data/products.json", 'utf-8', (err, prodData) => {
                if (err) {
                    reject("Unable to load products!");
                }

                dataCollection = new Data(JSON.parse(catData), JSON.parse(prodData));
                resolve();
            })
        });
    });
}

module.exports.getAllCategories = function() {
    return new Promise((reject, resolve) => {
        if (dataCollection.categories.length == 0) {
            reject("No categories retrieved!");
            return;
        }
        resolve(dataCollection.categories);
    })
}

module.exports.getAllProducts = function() {
    return new Promise((reject, resolve) => {
        if (dataCollection.products.length == 0) {
            reject("No products retrieved!");
            return;
        }
        resolve(dataCollection.products);
    })
}

module.exports.getProductsByCategory = function(cat) {
    return new Promise((resolve, reject) => {
        var filteredProds = dataCollection.products.filter((prod) => prod.categories.includes(cat) && !prod.discontinued);
        if (filteredProds.length == 0) {
            reject("No Valid Products");
            return;
        }
        let categoryName = dataCollection.categories.filter((category) => category.id == cat)[0].name;
        const obj = { products: filteredProds, category: categoryName };
        resolve(obj);
    });
}
