const {sequelize} = require('./sequelize_index');
const {Dish} = require('./dish');

describe('dish model', () => {
    beforeAll(async () => {
        await sequelize.sync({
            force: true
        })
    })
    test('name should be of type string',async () => {
        const testDish = await Dish.create({
            name: "veggie pizza",
            price: 12.99,
            vegetarian: true
        })
        expect(typeof testDish.name).toBe("string");
        expect(testDish.price).toBe(12.99);
        expect(testDish.vegetarian).toBe(true);
    })
})