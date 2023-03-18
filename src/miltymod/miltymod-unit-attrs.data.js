module.exports = [
    // Unit upgrades.
{
    unit: "cruiser",
    upgradeLevel: 2,
    localeName: "unit.cruiser_2",
    triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/cruiser_2",
    spaceCombat: { hit: 6, extraHitsOn: { count: 1, value: 9 }},
    move: 3,
    capacity: 1,
},
{
    unit: "dreadnought",
    upgradeLevel: 2,
    localeName: "unit.dreadnought_2",
    triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/dreadnought_2",
    move: 2,
    spaceCombat: { hit : 4 },
    bombardment: { hit: 4},
},
{
    unit: "space_dock",
    upgradeLevel: 2,
    localeName: "unit.space_dock_2",
    triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/space_dock_2",
    production: -5,
},
{
    unit: "war_sun",
    upgradeLevel: 2,
    localeName: "unit.war_sun",
    triggerNsid: "card.technology.unit_upgrade:homebrew.miltymod/war_sun",
    disablePlanetaryShield: true,
    sustainDamage: true,
    bombardment: { dice: 3, hit: 3 },
    cost: 12,
    spaceCombat: { dice: 3, hit: 3 },
    move: 2,
    capacity: 6,
},
]