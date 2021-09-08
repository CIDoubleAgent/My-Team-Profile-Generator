const Employee = require("../lib/Employee");

it('creates a new employee object', () => {
    const employee = new Employee('Nick', '1', 'nick@fakemail.com', 'Engineer', 'github', 'UNH');
    expect(employee).toEqual({name: 'Nick', id: '1', email: 'nick@fakemail.com', role: 'Engineer', github: 'github', school:'UNH'});
})