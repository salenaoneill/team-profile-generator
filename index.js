const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js'); 
const Intern = require('./lib/intern.js');

//team member array
const teamMembers = [];

//manager prompt
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'enter name of manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter manager ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter manager email'
        },
        {
            type: 'input',
            name: 'officeNumber', 
            message: 'enter manager office number'
        }
//save manager info and add it to team member array.
    ]).then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);
        teamMembers.push(manager);
        addEmployee();
    })
};


//emgineer or intern prompt
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'role',
            message: 'choose an employee type',
            choices: ['Add intern', 'Add engineer']
        }, 
        {
            type: 'input',
            name: 'name',
            message: 'enter name of employee'
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter employee id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter employee email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter employee github username'
        },
        {
            type: 'input',
            name: 'school',
            message: 'enter employee school'
        },
        {
            type: 'checkbox',
            name: 'addEmployee',
            message: 'select an option',
            choices: ['add team member', 'finish building team']
        }
//save employee info add it to team member array
    ]).then(employeeInfo => {
        const {name, id, email, role, github, school, addEmployee} = employeeInfo;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
        }
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        
        teamMembers.push(employee);

//call addEmployee function if user wishes to add another employee
//if they do not, return team member array.
        if (addEmployee === "add team member") {
            return addEmployee(teamMembers);
        }
        else {
            return teamMembers;
        }
    })
}

//generate HTML based on user given data. 
//if error, console log the error. if not, profile has been generated.
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, null, (err) => {
       err ? console.error(err) : console.log("Your team profile has been generated.")
    })
};

//call addManager, then call addEmployee.
//once all information is gathered, generateHTML (function in generateHTML.js) is called
//to generate the HTML,
//writeFile is called
addManager()
    .then(addEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(indexHTML => {
        return writeFile(indexHTML);
    })
