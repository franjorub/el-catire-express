const hotdogRoutes = require('express').Router();
const { findAll, findById, create, update } = require('./hotdog.service');

hotdogRoutes.route('/create')
    .post(async (req, res) => {
        const hotdog = req.body;
        try{
            const result = await create(hotdog);
            res.send(result);
        } catch (err) {
            console.log(err);
            res.sendStatus();
        }
    });

hotdogRoutes.route('/update/:id')
    .post(async (req, res) => {
        try {
            const id = req.params.id;
            const hotdog = req.body;
            const result = await update(id, hotdog);
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });


hotdogRoutes.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        try {
            const result = await findById(id);
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });

hotdogRoutes.route('/')
    .get(async (req, res) => {
        try{
            const result = await findAll();
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    })






module.exports = hotdogRoutes;