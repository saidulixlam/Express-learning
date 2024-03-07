// const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFile = cb => {
    fs.readFile(p, (err, data) => {
        if (err) {
            cb([]);
        } else {
            return cb(JSON.parse(data));
        }
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchProducts(cb) {
        getProductsFile(cb);
    }
}