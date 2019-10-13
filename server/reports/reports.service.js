const salesSchema = require('./../sales/sales.schema');

const findAll = () => new Promise((resolve, reject) => {
    salesSchema.aggregate([
        {
            $group: {
                _id: "$date",
                total: { $sum: 1 }
            }
        },
        {
            $sort: {
                '_id': 1
            }
        }
    ]).then(res => {
        console.log(res);
        resolve(res)
    }).catch(err => {
        console.log(err)
        reject(err)
    })
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



module.exports = {
    findAll,
    findById,

}