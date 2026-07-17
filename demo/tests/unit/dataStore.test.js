const { getUserById, getUserByName, getAppointmentsByUserId } = require('../../server/data/dataStore');

// getUserById
test('getUserById returns the correct user when the id exists', () => {
    const result = getUserById('u1')
    expect(result.name).toBe('Konkordia Algoulkin');
})
test('getUserById returns undefined when id does not exists', () => {
    const result = getUserById('u99')
    expect(result).toBe(undefined)
})

// getUserByName
test('getUserByName returns the correct user when the name exists', () =>{
    const result = getUserByName('Konkordia Algoulkin')
    expect(result.id).toBe('u1')
})

test('getUserByName returns undefined when the name  does not exists', () =>{
    const result = getUserByName('James bond')
    expect(result).toBe(undefined)
})

// getAppointmentsByUserId
test('getAppointmentsByUserId returns the correct appointment array of objects when id exsist', () => {
    const result = getAppointmentsByUserId('u1')
    expect(result).toHaveLength(2)
})

test('getAppointmentsByUserId returns the empty appointment array of objects when id does not exsist', () => {
    const result = getAppointmentsByUserId('u99')
    expect(result).toHaveLength(0)
})