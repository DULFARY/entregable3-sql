const express = require('express');
const genreRouter = require('./genre.router');
const moviesRouter = require('./movies.router');
const actorsRouter = require('./actors.ruter');
const directorsRouter = require('./directors.router');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter);
router.use(moviesRouter);
router.use(actorsRouter);
router.use(directorsRouter);






module.exports = router;