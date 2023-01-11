const Intern = require('../lib/intern');

//creates intern object
test('creates intern object', () => {
    const intern = new Intern('Salena', 420, 'salenaoneill@gmail.com', 'university of minnesota');

    expect(intern.school).toEqual(expect.any(String));
});


//gets school from getSchool()
test('gets school of intern', () => {
    const intern = new Intern('Salena', 420, 'salenaoneill@gmail.com', 'university of minnesota');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

//gets role from getRole()
test('gets intern role', () => {
    const intern = new Intern('Salena', 420, 'salenaoneill@gmail.com', 'university of minnesota');

    expect(intern.getRole()).toEqual("Intern");
});
