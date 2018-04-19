function solve (knight, weatherCode) {
    knight = {
        attack: knight.attack,
        armor: knight.armor,
        agility: knight.agility,
        endurance: knight.endurance
    }

    const dragon = {};
    const knightDragonMapping = {
        attack: 'scaleThickness',
        armor: 'clawSharpness',
        agility: 'wingStrength',
        endurance: 'fireBreath'
    };


    if (weatherCode === 'HVA') {
        // Heavy rain: clawSharpness 10 and fireBreath 0
        return {
            dragon: {
                'scaleThickness': 5,
                'clawSharpness': 10,
                'wingStrength': 5,
                'fireBreath': 0
            },
            gameId: game.gameId
        }
    } else if (weatherCode === 'T E') {
        // Long dry: dragon's stats have to be balanced
        return {
            dragon: {
                'scaleThickness': 5,
                'clawSharpness': 5,
                'wingStrength': 5,
                'fireBreath': 5
            },
            gameId: game.gameId
        }
    } else if (weatherCode === 'SRO') {
        // Storm: dragon doesn't show up
        return {
            gameId: game.gameId
        }
    }

    Object.keys(knight).sort(function (b, a) {
        return knight[a] - knight[b]
    }).forEach(function (knightAttributeName, index) {
        var value = knight[knightAttributeName];
        var dragonAttributeName = knightDragonMapping[knightAttributeName];

        if (index === 0) {
            value += 2;
        } else if (index === 1 || index === 2) {
            value -= 1;
        }

        dragon[dragonAttributeName] = value;
    })

    return {dragon: dragon};
}

module.exports = { solve }