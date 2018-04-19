const assert = require('assert')
const solver = require('./index')

const knight = {
    name: 'Sir. Landon Glover of Yukon',
    attack: 5,
    armor: 2,
    agility: 6,
    endurance: 7
}

const res = solver.solve(knight, 'NMR')

assert.deepEqual(res, {
        dragon:
            {
                fireBreath: 9,
                wingStrength: 5,
                scaleThickness: 4,
                clawSharpness: 2
            }
    }
)
