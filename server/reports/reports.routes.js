const reportsRoutes = require('express').Router();
const { findAll, findById, } = require('./reports.service');


reportsRoutes.route('/:id')
    .get(async (req, res) => {
        const id = req.params.id;
        try {
            const result = await findById(id);
            res.send(result);
        } catch (err) {
            res.status(500).send(err);
        }
    });

reportsRoutes.route('/')
    .get(async (req, res) => {
        try{
            const result = await findAll();
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    })






module.exports = reportsRoutes;