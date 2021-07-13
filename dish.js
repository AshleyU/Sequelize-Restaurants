const {sequelize, DataTypes, Model} = require('./sequelize_index');

class Dish extends Model {

}

Dish.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(3,2),
    vegetarian: DataTypes.BOOLEAN
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Dish};