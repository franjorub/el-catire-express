const SaleSchema = require('./sales.schema');

const findAll = () => new Promise((resolve, reject) => {
    console.log('sales llamado')
    SaleSchema.find((err, sales) => {
        if(err) {
            console.log(err);
            reject(err)
            return;
        }
        console.log(sales)
        resolve(sales);
    });
});

const findById = (id) => new Promise((resolve, reject) => {
    SaleSchema.findById(id, (err, response) => {
        if(err) {
            console.log(err);
            reject(err);
            return;
        }
        resolve(response);
    });
});

const create = (newSale) => {
    const sale = new SaleSchema(newSale);
    return sale.save();
}

const update = async (id, sale) => new Promise((resolve, reject) => {    
    SaleSchema.findById(id, (err, result) => {
        if(err) {
            reject('Hot Dog not Found');
            return;
        }
        Object.keys(sale).forEach(key => {
            result[key] = sale[key];
        })
        console.log(result)
        result.save();
        resolve(result);
    });
});

module.exports = {
    findAll,
    findById,
    create,
    update
}