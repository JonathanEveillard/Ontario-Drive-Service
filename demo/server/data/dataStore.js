// Data store

const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, 'users.json');
const appointmentsPath = path.join(__dirname, 'appointments.json')



function getUserById(id) {
    // Parse Json & Access parsed json based on ID
    const data = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    let user = data.find(item => item.id === id)
    return user
}

function getUserByName(userName){
    // Parse Json & Access parsed json based on ID
    const data = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const user = data.find(item => item.name === userName)
    return user
}

function getAppointmentsByUserId(userId){
    // Parse Json & Access parsed json based on ID
    const data = JSON.parse(fs.readFileSync(appointmentsPath, 'utf-8'))
    const user = data.filter(item => item.userId === userId)
    return user
}

module.exports = { getUserById, getAppointmentsByUserId, getUserByName };