const Actors = require("./Actors");
const Directors = require("./Directors");
const Genre = require("./Genre");
const Movies = require("./Movies");


Movies.belongsToMany(Actors,{through:"movies_actors"});
Actors.belongsToMany(Movies,{through:"movies_actors"});

Movies.belongsToMany(Directors,{through:"movies_directors"});
Directors.belongsToMany(Movies,{through:"movies_directors"});

Movies.belongsToMany(Genre,{through:"movies_genre"});
Genre.belongsToMany(Movies,{through:"movies_genre"});

