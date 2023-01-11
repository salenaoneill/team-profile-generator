const Engineer = require('../lib/engineer');

//engineer object gets created
test('creates engineer object', () => {
    const engineer = new Engineer('Salena', 420, 'salenaoneill@gmail.com', 'salenaoneill');

    expect(engineer.github).toEqual(expect.any(String));
});


//gets github from getGithub()
test('gets github username of engineer', () => {
    const engineer = new Engineer('Salena', 420, 'salenaoneill@gmail.com', 'salenaoneill');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//gets role from getRole()
test('gets engineer role', () => {
    const engineer = new Engineer('Salena', 420, 'salenaoneill@gmail.com', 'salenaoneill');

    expect(engineer.getRole()).toEqual("Engineer");
})