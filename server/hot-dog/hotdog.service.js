const _ = require('lodash');
const HotdogSchema = require('./hotdog.schema');

const findAll = () => new Promise((resolve, reject) => {
    HotdogSchema.find((err, hotdogs) => {
        if(err) {
            console.log(err);
            reject(err)
            return;
        }
        resolve(hotdogs);
    });
});

const findById = (id) => new Promise((resolve, reject) => {
    HotdogSchema.findById(id, (err, response) => {
        if(err) {
            console.log(err);
            reject(err);
            return;
        }
        resolve(response);
    });
});

const create = (newHotdog) => {
    const hotdog = new HotdogSchema(newHotdog);
    return hotdog.save();
}

const update = async (id, hotdog) => new Promise((resolve, reject) => {    
    HotdogSchema.findById(id, (err, result) => {
        if(err) {
            reject('Hot Dog not Found');
            return;
        }
        Object.keys(hotdog).forEach(key => {
            result[key] = hotdog[key];
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