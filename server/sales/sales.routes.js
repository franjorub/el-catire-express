const salesRoutes = require('express').Router();
const { findAll, findById, create, update } = require('./sales.service');

salesRoutes.route('/create')
    .post(async (req, res) => {
        const sale = req.body;
        console.log(req.body)
        try{
            const result = await create(sale);
            res.send(result);
        } catch (err) {
            console.log(err);
            res.sendStatus();
        }
    });

salesRoutes.route('/update/:id')
    .post(async (req, res) => {
        try {
            const id = req.params.id;
            const sale = req.body;
            const result = await update(id, sale);
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });


salesRoutes.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        try {
            const result = await findById(id);
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });

salesRoutes.route('/')
    .get(async (req, res) => {
        try{
            const result = await findAll();
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    })






module.exports = salesRoutes;