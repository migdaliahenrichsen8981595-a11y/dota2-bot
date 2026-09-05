// База данных героев Dota 2
const heroesData = {
    // S-Tier Heroes
    "Invoker": {
        tier: "S",
        icon: "🧙‍♂️",
        winrate: "54.2%",
        role: "Mid",
        counters: ["Anti-Mage", "Nyx Assassin", "Pugna"],
        counteredBy: ["Anti-Mage", "Nyx Assassin"],
        builds: {
            starting: [
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" },
                { icon: "🥭", name: "Mango" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Urn of Shadows" }
            ],
            core: [
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Refresher Orb" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Scythe of Vyse" },
                { icon: "🛡️", name: "Shiva's Guard" }
            ]
        },
        talents: [
            { level: "25", left: "+2 Chaos Meteor", right: "Cataclysm +2s Stun", recommended: "right" },
            { level: "20", left: "+50 Alacrity Damage", right: "+1.5s Tornado", recommended: "left" },
            { level: "15", left: "+125 Chaos Meteor Contact", right: "+1 Forge Spirit", recommended: "right" },
            { level: "10", left: "+20 Attack Speed", right: "+30 Ice Wall DPS", recommended: "left" }
        ],
        description: "Мощный маг с огромным количеством заклинаний и высоким потенциалом урона"
    },
    "Phantom Assassin": {
        tier: "S",
        icon: "🗡️",
        winrate: "52.8%",
        role: "Carry",
        counters: ["Crystal Maiden", "Lion", "Lina"],
        counteredBy: ["Axe", "Timbersaw", "Legion Commander"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
                { icon: "🌿", name: "Branches" },
                { icon: "💚", name: "Tango" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Power Treads" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Wraith Band" }
            ],
            core: [
                { icon: "⚔️", name: "Desolator" },
                { icon: "🔥", name: "Battle Fury" },
                { icon: "⚡", name: "Black King Bar" },
                { icon: "💀", name: "Skull Basher" }
            ],
            lategame: [
                { icon: "⚡", name: "Abyssal Blade" },
                { icon: "🌟", name: "Satanic" },
                { icon: "🗡️", name: "Monkey King Bar" }
            ]
        },
        talents: [
            { level: "25", left: "Triple Strike Stifling Dagger", right: "-4 Armor Stifling Dagger", recommended: "left" },
            { level: "20", left: "+20% Evasion", right: "-1.5s Phantom Strike CD", recommended: "right" },
            { level: "15", left: "+15 Strength", right: "+25 Attack Speed", recommended: "right" },
            { level: "10", left: "+175 Health", right: "+15% Blur Evasion", recommended: "left" }
        ],
        description: "Смертельный ассасин с критическими ударами и уклонением"
    },
    "Mars": {
        tier: "S",
        icon: "🛡️",
        winrate: "53.1%",
        role: "Offlane",
        counters: ["Sniper", "Drow Ranger", "Weaver"],
        counteredBy: ["Lifestealer", "Ursa", "Slardar"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Stout Shield" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "💪", name: "Soul Ring" },
                { icon: "🔱", name: "Magic Wand" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "⚡", name: "Assault Cuirass" },
                { icon: "🌟", name: "Aghanim's Scepter" }
            ],
            lategame: [
                { icon: "💫", name: "Refresher Orb" },
                { icon: "🛡️", name: "Heart of Tarrasque" },
                { icon: "⭐", name: "Overwhelming Blink" }
            ]
        },
        talents: [
            { level: "25", left: "+30 Arena of Blood Damage", right: "Spear Stun Pierces Immunity", recommended: "right" },
            { level: "20", left: "+2s Arena Duration", right: "+30 Movement Speed", recommended: "left" },
            { level: "15", left: "+18 Strength", right: "+20 God's Rebuke Damage", recommended: "left" },
            { level: "10", left: "+15 Damage", right: "+1.75 Mana Regen", recommended: "right" }
        ],
        description: "Танк и инициатор с мощным контролем и защитой команды"
    },
    "Crystal Maiden": {
        tier: "S",
        icon: "❄️",
        winrate: "51.7%",
        role: "Support",
        counters: ["Phantom Assassin", "Slark", "Riki"],
        counteredBy: ["Clockwerk", "Spirit Breaker", "Spectre"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Tranquil Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Wind Lace" }
            ],
            core: [
                { icon: "💫", name: "Glimmer Cape" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "🔥", name: "Blink Dagger" }
            ],
            lategame: [
                { icon: "🛡️", name: "Force Staff" },
                { icon: "⭐", name: "Aeon Disk" },
                { icon: "🌙", name: "Octarine Core" }
            ]
        },
        talents: [
            { level: "25", left: "+300 Crystal Nova AoE", right: "-7s Freezing Field CD", recommended: "right" },
            { level: "20", left: "+250 Health", right: "+300 Frostbite Cast Range", recommended: "right" },
            { level: "15", left: "+120 Gold/Min", right: "+100 Crystal Nova Damage", recommended: "left" },
            { level: "10", left: "+60 Damage", right: "+1.5 Mana Regen", recommended: "right" }
        ],
        description: "Саппорт с сильным контролем и глобальной аурой маны"
    },

    // A-Tier Heroes
    "Pudge": {
        tier: "A",
        icon: "🪝",
        winrate: "49.8%",
        role: "Support/Roamer",
        counters: ["Techies", "Sniper", "Zeus"],
        counteredBy: ["Lifestealer", "Ursa", "Naix"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "🏺", name: "Healing Salve" }
            ],
            early: [
                { icon: "👟", name: "Tranquil Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Urn of Shadows" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Blade Mail" },
                { icon: "🛡️", name: "Heart of Tarrasque" }
            ],
            lategame: [
                { icon: "💫", name: "Aghanim's Shard" },
                { icon: "⭐", name: "Aeon Disk" },
                { icon: "🌙", name: "Ethereal Blade" }
            ]
        },
        talents: [
            { level: "25", left: "+3s Dismember Duration", right: "2 Dismember Charges", recommended: "right" },
            { level: "20", left: "+180 Meat Hook Damage", right: "+14 Flesh Heap Stacks", recommended: "left" },
            { level: "15", left: "+7 Armor", right: "+120 Rot DPS", recommended: "left" },
            { level: "10", left: "+8 Strength", right: "+125 Cast Range", recommended: "right" }
        ],
        description: "Танк и роумер с хуком для захвата врагов"
    },
    "Juggernaut": {
        tier: "A",
        icon: "⚔️",
        winrate: "50.5%",
        role: "Carry",
        counters: ["Crystal Maiden", "Witch Doctor", "Warlock"],
        counteredBy: ["Axe", "Legion Commander", "Omniknight"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Wraith Band" }
            ],
            core: [
                { icon: "⚡", name: "Diffusal Blade" },
                { icon: "🗡️", name: "Manta Style" },
                { icon: "💀", name: "Skull Basher" },
                { icon: "🌟", name: "Aghanim's Scepter" }
            ],
            lategame: [
                { icon: "⚡", name: "Abyssal Blade" },
                { icon: "💫", name: "Butterfly" },
                { icon: "🗡️", name: "Monkey King Bar" }
            ]
        },
        talents: [
            { level: "25", left: "+5 Blade Dance Damage Multi", right: "Omnislash Strikes Twice", recommended: "right" },
            { level: "20", left: "+600 Health", right: "-12s Omnislash CD", recommended: "right" },
            { level: "15", left: "+25 Attack Speed", right: "+0.5s Blade Fury Duration", recommended: "left" },
            { level: "10", left: "+5 All Stats", right: "+20 Movement Speed", recommended: "right" }
        ],
        description: "Универсальный керри с сильным ранним игровым потенциалом"
    },
    "Earthshaker": {
        tier: "A",
        icon: "🪨",
        winrate: "51.2%",
        role: "Support/Initiator",
        counters: ["Phantom Lancer", "Chaos Knight", "Meepo"],
        counteredBy: ["Anti-Mage", "Lifestealer", "Ursa"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💪", name: "Soul Ring" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "💫", name: "Aghanim's Shard" },
                { icon: "🛡️", name: "Force Staff" }
            ],
            lategame: [
                { icon: "⭐", name: "Refresher Orb" },
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⚡", name: "Aeon Disk" }
            ]
        },
        talents: [
            { level: "25", left: "Aftershock Affects Buildings", right: "-1.75s Fissure CD", recommended: "right" },
            { level: "20", left: "+60 Fissure DPS", right: "+500 Mana", recommended: "right" },
            { level: "15", left: "+8 Armor", right: "+40 Echo Slam Echo Damage", recommended: "right" },
            { level: "10", left: "+30 Damage", right: "+7 Strength", recommended: "right" }
        ],
        description: "Мощный инициатор со способностью уничтожать группы врагов"
    },

    // B-Tier Heroes
    "Sniper": {
        tier: "B",
        icon: "🎯",
        winrate: "48.9%",
        role: "Carry",
        counters: ["Zeus", "Techies", "Tinker"],
        counteredBy: ["Spirit Breaker", "Storm Spirit", "Phantom Assassin"],
        builds: {
            starting: [
                { icon: "💎", name: "Wraith Band" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Power Treads" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Wraith Band" }
            ],
            core: [
                { icon: "⚡", name: "Hurricane Pike" },
                { icon: "🗡️", name: "Maelstrom" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "🌟", name: "Mjollnir" }
            ],
            lategame: [
                { icon: "💫", name: "Butterfly" },
                { icon: "🗡️", name: "Monkey King Bar" },
                { icon: "⭐", name: "Daedalus" }
            ]
        },
        talents: [
            { level: "25", left: "+6 Shrapnel Charges", right: "+40 Knockback Distance Assassinate", recommended: "left" },
            { level: "20", left: "+125 Attack Range", right: "-1.5s Shrapnel CD", recommended: "left" },
            { level: "15", left: "+40 Attack Speed", right: "+20 Shrapnel DPS", recommended: "left" },
            { level: "10", left: "+15 Damage", right: "+6 Strength", recommended: "left" }
        ],
        description: "Дальнобойный снайпер с высоким уроном на расстоянии"
    },
    "Lion": {
        tier: "B",
        icon: "🦁",
        winrate: "50.1%",
        role: "Support",
        counters: ["Phantom Assassin", "Wraith King", "Medusa"],
        counteredBy: ["Anti-Mage", "Lifestealer", "Pugna"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Tranquil Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Wind Lace" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Aether Lens" },
                { icon: "💫", name: "Glimmer Cape" }
            ],
            lategame: [
                { icon: "⭐", name: "Aeon Disk" },
                { icon: "🛡️", name: "Force Staff" },
                { icon: "🌙", name: "Octarine Core" }
            ]
        },
        talents: [
            { level: "25", left: "+1.25s Hex Duration", right: "+180 Finger of Death Damage", recommended: "right" },
            { level: "20", left: "+150 Gold/Min", right: "+200 Finger of Death AoE", recommended: "right" },
            { level: "15", left: "+12% Magic Resistance", right: "+90 Mana Drain Speed", recommended: "right" },
            { level: "10", left: "+90 Damage", right: "+8 Armor", recommended: "right" }
        ],
        description: "Саппорт с мгновенным уроном и сильным контролем"
    },

    // C-Tier Heroes
    "Techies": {
        tier: "C",
        icon: "💣",
        winrate: "45.3%",
        role: "Support/Nuker",
        counters: ["Melee Heroes", "Push Heroes"],
        counteredBy: ["Zeus", "Ancient Apparition", "Gem Carriers"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💪", name: "Soul Ring" }
            ],
            core: [
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚡", name: "Aether Lens" },
                { icon: "🛡️", name: "Force Staff" },
                { icon: "💫", name: "Aghanim's Shard" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Scythe of Vyse" },
                { icon: "🔥", name: "Bloodstone" }
            ]
        },
        talents: [
            { level: "25", left: "+250 Blast Off Damage", right: "3 Reactive Tazer Charges", recommended: "right" },
            { level: "20", left: "+25% Spell Lifesteal", right: "-4s Reactive Tazer CD", recommended: "right" },
            { level: "15", left: "+15% Magic Resistance", right: "+50 Proximity Mines DPS", recommended: "right" },
            { level: "10", left: "+100 Cast Range", right: "+30 Movement Speed", recommended: "left" }
        ],
        description: "Минер с ловушками и контролем территории"
    },
    "Dazzle": {
        tier: "C",
        icon: "💀",
        winrate: "47.5%",
        role: "Support",
        counters: ["Axe", "Ancient Apparition"],
        counteredBy: ["Ancient Apparition", "Axe", "Lion"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Wind Lace" }
            ],
            core: [
                { icon: "💫", name: "Glimmer Cape" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "🛡️", name: "Force Staff" },
                { icon: "⚡", name: "Aether Lens" }
            ],
            lategame: [
                { icon: "⭐", name: "Aeon Disk" },
                { icon: "🌙", name: "Solar Crest" },
                { icon: "🔥", name: "Guardian Greaves" }
            ]
        },
        talents: [
            { level: "25", left: "+2.5s Bad Juju Cooldown", right: "+35 Shadow Wave Heal", recommended: "left" },
            { level: "20", left: "+100 Poison Touch DPS", right: "-2s Shallow Grave CD", recommended: "right" },
            { level: "15", left: "+100 Cast Range", right: "+20 Shadow Wave Damage", recommended: "left" },
            { level: "10", left: "+8 Strength", right: "+1.5 Mana Regen", recommended: "right" }
        ],
        description: "Целитель и саппорт со спасительной способностью Shallow Grave"
    }
};

// Расширенные данные контрпиков
const counterData = {
    "Invoker": {
        goodAgainst: [
            { hero: "Storm Spirit", reason: "Tornado и Cold Snap эффективны против мобильности Storm", advantage: "+6.2%" },
            { hero: "Ember Spirit", reason: "EMP сжигает ману, нужную для Sleight of Fist", advantage: "+5.8%" },
            { hero: "Queen of Pain", reason: "Silence и EMP не дают использовать способности", advantage: "+4.9%" }
        ],
        counters: [
            { hero: "Anti-Mage", reason: "Spell Shield и Mana Break крайне эффективны против мага", advantage: "-8.3%" },
            { hero: "Nyx Assassin", reason: "Carapace и Mana Burn наказывают за использование заклинаний", advantage: "-7.1%" },
            { hero: "Pugna", reason: "Nether Ward карает за каст дорогих спеллов", advantage: "-6.5%" }
        ]
    },
    "Phantom Assassin": {
        goodAgainst: [
            { hero: "Crystal Maiden", reason: "Blur и высокая мобильность позволяют легко убить", advantage: "+9.2%" },
            { hero: "Lion", reason: "Blur делает PA трудной целью для нюкеров", advantage: "+7.8%" },
            { hero: "Lina", reason: "Высокая мобильность и критические удары", advantage: "+6.9%" }
        ],
        counters: [
            { hero: "Axe", reason: "Berserker's Call игнорирует Blur и провоцирует атаки", advantage: "-11.2%" },
            { hero: "Timbersaw", reason: "Reactive Armor и Pure урон игнорируют физическую защиту", advantage: "-8.7%" },
            { hero: "Legion Commander", reason: "Duel заставляет атаковать и наказывает критами", advantage: "-7.9%" }
        ]
    },
    "Pudge": {
        goodAgainst: [
            { hero: "Techies", reason: "Hook может вытащить героя из минного поля", advantage: "+5.3%" },
            { hero: "Sniper", reason: "Hook нейтрализует преимущество дальности", advantage: "+4.8%" },
            { hero: "Zeus", reason: "Высокий запас HP против магического урона", advantage: "+4.2%" }
        ],
        counters: [
            { hero: "Lifestealer", reason: "Feast наносит процентный урон от HP Pudge", advantage: "-9.1%" },
            { hero: "Ursa", reason: "Fury Swipes быстро убивает даже танков", advantage: "-7.6%" },
            { hero: "Slark", reason: "Dark Pact снимает Dismember", advantage: "-6.3%" }
        ]
    }
};

// Базовые данные для всех остальных героев (можно расширить)
const allHeroesShort = [
    "Anti-Mage", "Axe", "Bane", "Bloodseeker", "Bounty Hunter",
    "Brewmaster", "Bristleback", "Centaur", "Chaos Knight", "Chen",
    "Clinkz", "Clockwerk", "Dark Seer", "Dazzle", "Death Prophet",
    "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earthshaker",
    "Elder Titan", "Enchantress", "Enigma", "Faceless Void", "Grimstroke",
    "Gyrocopter", "Hoodwink", "Huskar", "Invoker", "IO",
    "Jakiro", "Juggernaut", "Keeper of the Light", "Kunkka", "Legion Commander",
    "Leshrac", "Lich", "Lifestealer", "Lina", "Lion",
    "Lone Druid", "Luna", "Lycan", "Magnus", "Mars",
    "Medusa", "Meepo", "Mirana", "Monkey King", "Morphling",
    "Naga Siren", "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin",
    "Ogre Magi", "Omniknight", "Oracle", "Outworld Destroyer", "Pangolier",
    "Phantom Assassin", "Phantom Lancer", "Phoenix", "Puck", "Pudge",
    "Pugna", "Queen of Pain", "Razor", "Riki", "Rubick",
    "Sand King", "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer",
    "Skywrath Mage", "Slardar", "Slark", "Snapfire", "Sniper",
    "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies",
    "Templar Assassin", "Terrorblade", "Tidehunter", "Timbersaw", "Tinker",
    "Tiny", "Treant Protector", "Troll Warlord", "Tusk", "Underlord",
    "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper",
    "Visage", "Void Spirit", "Warlock", "Weaver", "Windranger",
    "Winter Wyvern", "Witch Doctor", "Wraith King", "Zeus", "Crystal Maiden"
];
