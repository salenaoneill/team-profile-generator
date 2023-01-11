const Manager = require('../lib/manager');

//manager object gets created 
test('creates manager object', () => {
    const manager = new Manager('Salena', 420, 'salenaoneill@gmail.com', 420);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


//gets role from getRole()
test('gets role of manager', () => {
    const manager = new Manager('Salena', 420, 'salenaoneill@gmail.com', 420);

    expect(manager.getRole()).toEqual("Manager");
});
