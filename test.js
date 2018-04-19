const assert = require('assert')
const solver = require('./index')

const knight = {
    name: 'Sir. Landon Glover of Yukon',
    attack: 5,
    armor: 2,
    agility: 6,
    endurance: 7
}

// Normal weather
assert.deepEqual(solver.solve(knight, 'NMR'), {
    fireBreath: 9,
    wingStrength: 5,
    scaleThickness: 4,
    clawSharpness: 2
})

// Storm
assert.equal(solver.solve(knight, 'SRO'), null)

// Heavy rain
assert.deepEqual(solver.solve(knight, 'HVA'), {
    fireBreath: 0,
    wingStrength: 5,
    scaleThickness: 5,
    clawSharpness: 10
})

// Long dry
assert.deepEqual(solver.solve(knight, 'T E'), {
    fireBreath: 5,
    wingStrength: 5,
    scaleThickness: 5,
    clawSharpness: 5
})

