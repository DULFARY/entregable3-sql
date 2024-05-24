const { getAll, create, getOne, remove, update, setMoviesGenres, setMoviesActors, setMoviesdirectors } = require('../controllers/movies.controllers');
const express = require('express');

const moviesRouter = express.Router();

moviesRouter.route('/movies')
    .get(getAll)
    .post(create);

moviesRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

moviesRouter.route('/movies/:id/genres')
    .post(setMoviesGenres);


moviesRouter.route('/movies/:id/actors')
    .post(setMoviesActors);

moviesRouter.route('/movies/:id/directors')
    .post(setMoviesdirectors);

module.exports = moviesRouter;