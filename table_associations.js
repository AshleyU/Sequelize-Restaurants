const {sequelize} = require('./sequelize_index');
const {Menu} = require('./menu');
const {Dish} = require('./dish');

Menu.hasMany(Dish);

Dish.belongsTo(Menu);

module.exports = {Menu, Dish};
