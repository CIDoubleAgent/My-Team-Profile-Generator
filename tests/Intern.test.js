const Intern = require("../lib/Intern");

it('creates a new intern object', () => {
    const intern = new Intern('Nick', '1', 'nick@fakemail.com', 'UNH');
    expect(intern).toEqual({name: 'Nick', id: '1', email: 'nick@fakemail.com', school: 'UNH'});
})