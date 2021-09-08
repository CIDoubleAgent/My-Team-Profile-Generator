const Manager = require("../lib/Manager");

it('creates a new manager object', () => {
    const manager = new Manager('Nick', '1', 'nick@fakemail.com', '1');
    expect(manager).toEqual({name: 'Nick', id: '1', email: 'nick@fakemail.com', office: '1'});
})