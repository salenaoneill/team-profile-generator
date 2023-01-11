const Employee = require('../lib/employee');

//employee object gets created
test('creates employee object', () => {
    const employee = new Employee('Salena', 420, 'salenaoneill@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number)); 
    expect(employee.email).toEqual(expect.any(String));
})

//gets name from getName()
test('gets employee name', () => {
    const employee = new Employee('Salena', 420, 'salenaoneill@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId()
test('gets employee id', () => {
    const employee = new Employee('Salena', 420, 'salenaoneill@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Salena', 420, 'salenaoneill@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//gets role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Salena', 420, 'salenaoneill@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});