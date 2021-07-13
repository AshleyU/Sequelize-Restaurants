const {sequelize} = require('./sequelize_index');
const {Menu} = require('./menu');

describe('menu model', () => {
    beforeAll(async () => {
        await sequelize.sync({
            force: true
        })
    })
    test('title should be of type string',async () => {
        const testMenu = await Menu.create({
            title: "Breakfast Menu"
        })
        expect(typeof testMenu.title).toBe("string");
    })
})