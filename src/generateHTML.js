//generate manager card
const generateManager = function (manager) {
    return `
    <h3>${manager.name}</h3>
    <h2>Manager</h2>

    <div>
        <p> ID: ${manager.id}</p>
        <p> Email: <a href="${manager.email}>${manager.email}</a></p>
        <p> Office Number: ${manager.officeNumber}</p>
    <div>
    `
}

//generate engineer card
const generateEngineer = function (engineer) {
    return `
    <h3>${engineer.name}</h3>
    <h2>Engineer</h2>

    <div>
        <p> ID: ${engineer.id}</p>
        <p> Email: <a href="${engineer.email}>${engineer.email}</a></p>
        <p> Github: <a href="http://github.com/${engineer.github}>${engineer.github}</a></p>
    <div>
    `
}

//generate intern card
const generateIntern = function (intern) {
    return `
    <h3>${intern.name}</h3>
    <h2>Intern</h2>

    <div>
        <p> ID: ${intern.id}</p>
        <p> Email: <a href="${intern.email}>${intern.email}</a></p>
        <p> School: ${intern.school}</p>
    <div>
    `
}

