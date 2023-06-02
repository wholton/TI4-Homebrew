const { world } = require("@tabletop-playground/api");

const factions = [    {
  faction: "xxcha",
  abilities: ["peace_accords", "quash"],
  commodities: 4,
  home: 14,
  leaders: {
      agents: ["ggrocuto_rinn"],
      commanders: ["elder_qanoj"],
      heroes: ["xxekir_grom"],
  },
  promissoryNotes: ["political_favor"],
  icon: "global/factions/xxcha_icon.png",
  source: "base",
  startingTech: ["graviton_laser_system"],
  startingUnits: {
      carrier: 1,
      cruiser: 2,
      fighter: 3,
      infantry: 4,
      pds: 1,
      space_dock: 1,
  },
  techs: ["instinct_training", "nullification_field"],
  units: ["loncara_ssodu", "indomitus"],
}];

 const nsidToTemplateId = {
    "sheet.faction:base/xxcha": "39E83B1BCC064F24B08B599AA524851A",
};

const replace = {
  "card.technology.green.xxcha:base/instinct_training" : "card.technology.green.xxcha:homebrew.little-omega/instinct_training",
  "card.technology.yellow.xxcha:base/nullification_field" : "card.technology.red.xxcha:homebrew.little-omega/nullification_field",
  "card.promissory.xxcha:base/political_favor" : "card.promissory.xxcha:homebrew.little-omega/political_favor",
  "card.leader.agent.xxcha:pok/ggrocuto_rinn" : "card.leader.agent.xxcha:homebrew.little-omega/ggrocuto_rinn",
  "card.leader.hero.xxcha:pok/xxekir_grom" : "card.leader.hero.xxcha:homebrew.little-omega/xxekir_grom",
  "card.leader.hero.xxcha:codex.vigil/xxekir_grom.omega" : "card.leader.hero.xxcha:homebrew.little-omega/xxekir_grom",
};

const technologies = [
  {
    localeName: "technology.name.instinct_training",
    cardNsid:
        "card.technology.green.xxcha:homebrew.little-omega/instinct_training",
    type: "Green",
    requirements: { Green: 1 },
    source: "homebrew.little-omega",
    faction: "xxcha"
  },
  {
    localeName: "technology.name.nullification_field",
    cardNsid:
        "card.technology.green.xxcha:homebrew.little-omega/nullification_field",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.little-omega",
    faction: "xxcha"
  },
];

const unitAttrs = [];

const unitModifiers = [];

world.TI4.homebrew.inject({
  factions,
  nsidToTemplateId,
  technologies,
  unitAttrs,
  unitModifiers,
  replace,
});