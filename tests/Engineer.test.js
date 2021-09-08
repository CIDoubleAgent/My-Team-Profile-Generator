const Engineer = require("../lib/Engineer");

it('creates a new engineer object', () => {
    const engineer = new Engineer('Nick', '1', 'nick@fakemail.com', 'github');
    expect(engineer).toEqual({name: 'Nick', id: '1', email: 'nick@fakemail.com', github: 'github'});
})