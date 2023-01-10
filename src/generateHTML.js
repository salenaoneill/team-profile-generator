//generate manager card
const generateManager = function (manager) {
    return `
    <h3>${manager.name}</h3>
    <h2>Manager</h2>

    <div>
        <p> ID: ${manager.id}</p>
        <p> Email: <a href="${manager.email}">${manager.email}</a></p>
        <p> Office Number: ${manager.officeNumber}</p>
    </div>
    `
}

//generate engineer card
const generateEngineer = function (engineer) {
    return `
    <h3>${engineer.name}</h3>
    <h2>Engineer</h2>

    <div>
        <p> ID: ${engineer.id}</p>
        <p> Email: <a href="${engineer.email}">${engineer.email}</a></p>
        <p> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    `
}

//generate intern card
const generateIntern = function (intern) {
    return `
    <h3>${intern.name}</h3>
    <h2>Intern</h2>

    <div>
        <p> ID: ${intern.id}</p>
        <p> Email: <a href="${intern.email}">${intern.email}</a></p>
        <p> School: ${intern.school}</p>
    </div>
    `
}

generateHTML = (data) => {
//array for cards on HTML page.
    teamCards = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        console.log("start");
        console.log(data);
        console.log("end");
        const role = employee.getRole();

//add manager card to card array
        if (role === 'Manager') {
            const managerCard = generateManager(employee); 
            teamCards.push(managerCard);
        }
//add engineer card to card array
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee); 
            teamCards.push(engineerCard);
        }
//add intern card to card array
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            teamCards.push(internCard);
        }

    }

//return all cards to a function that will generate the page
const allCards = teamCards.join('');
return generatePage(allCards);

}



//html text that will appear on page
const generatePage = function (allCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        ${allCards}
    </body>
    </html>
    `
}

module.exports = generateHTML;