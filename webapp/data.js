// База данных героев Dota 2 - Патч 7.41e (Сентябрь 2026)
const heroesData = {
    // S-Tier Heroes (самые сильные в мете)
    "Lifestealer": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png",
        winrate: "58.2%",
        role: "Carry",
        counters: ["Crystal Maiden", "Lion", "Shadow Shaman"],
        counteredBy: ["Phantom Lancer", "Terrorblade", "Naga Siren"],
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
                { icon: "💎", name: "Armlet" }
            ],
            core: [
                { icon: "⚔️", name: "Desolator" },
                { icon: "💀", name: "Basher" },
                { icon: "⚡", name: "Shard (Infest Ancients)" },
                { icon: "🗡️", name: "Monkey King Bar" }
            ],
            lategame: [
                { icon: "⚡", name: "Abyssal Blade" },
                { icon: "🌟", name: "Assault Cuirass" },
                { icon: "💫", name: "Aghanim's Scepter" }
            ]
        },
        talents: [
            { level: "25", left: "+2s Rage Duration", right: "Feast Spreads", recommended: "right" },
            { level: "20", left: "+30 Feast Damage", right: "+40 Attack Speed", recommended: "left" },
            { level: "15", left: "+20 Strength", right: "+20 Movement Speed", recommended: "left" },
            { level: "10", left: "+20 Attack Speed", right: "+200 Health", recommended: "right" }
        ],
        description: "Самый сильный керри патча. Быстрые атаки, встроенный BKB, можно вселяться в Ancient крипов."
    },

    "Wraith King": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png",
        winrate: "58.0%",
        role: "Carry",
        counters: ["Anti-Mage", "Phantom Lancer", "Nyx Assassin"],
        counteredBy: ["Anti-Mage", "Phantom Lancer", "Terrorblade"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Power Treads" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💪", name: "Soul Ring" }
            ],
            core: [
                { icon: "⚡", name: "Radiance" },
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Aghanim's Shard" }
            ],
            lategame: [
                { icon: "🌟", name: "Assault Cuirass" },
                { icon: "💀", name: "Abyssal Blade" },
                { icon: "🗡️", name: "Aghanim's Scepter" }
            ]
        },
        talents: [
            { level: "25", left: "Reincarnation Casts Wraithfire Blast", right: "-35s Reincarnation Cooldown", recommended: "right" },
            { level: "20", left: "+40 Skeletons Attack Speed", right: "+1.5s Wraithfire Blast Stun", recommended: "left" },
            { level: "15", left: "+8 Strength", right: "+35 Attack Speed", recommended: "right" },
            { level: "10", left: "+20 Attack Damage", right: "+200 Health", recommended: "left" }
        ],
        description: "Второй лучший герой патча. Ультимейт 3 уровня стоит 0 маны, мощный Shard."
    },

    "Leshrac": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png",
        winrate: "56.8%",
        role: "Mid",
        counters: ["Phantom Lancer", "Broodmother", "Meepo"],
        counteredBy: ["Anti-Mage", "Pugna", "Nyx Assassin"],
        builds: {
            starting: [
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity" },
                { icon: "🥭", name: "Mango" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💪", name: "Kaya" }
            ],
            core: [
                { icon: "🔥", name: "Bloodstone" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Shiva's Guard" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Refresher Orb" },
                { icon: "🛡️", name: "Ethereal Blade" }
            ]
        },
        talents: [
            { level: "25", left: "+3s Lightning Storm Slow", right: "+3 Diabolic Edict Explosions", recommended: "right" },
            { level: "20", left: "+300 Cast Range", right: "+0.5s Split Earth Stun", recommended: "left" },
            { level: "15", left: "+15% Magic Resistance", right: "+100 Pulse Nova Damage", recommended: "right" },
            { level: "10", left: "+30 Movement Speed", right: "+1.5 Mana Regen", recommended: "right" }
        ],
        description: "Топ мидер. Diabolic Edict теперь уничтожает здания. Новый Bloodstone идеален на нем (+12% magic damage)."
    },

    "Doom": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png",
        winrate: "56.3%",
        role: "Offlane",
        counters: ["Storm Spirit", "Ember Spirit", "Weaver"],
        counteredBy: ["Lifestealer", "Oracle", "Abaddon"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "🏺", name: "Healing Salve" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Bracer" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🛡️", name: "Shiva's Guard" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Aghanim's Shard" }
            ],
            lategame: [
                { icon: "💀", name: "Refresher Orb" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⭐", name: "Heart of Tarrasque" }
            ]
        },
        talents: [
            { level: "25", left: "+666 Doom Damage", right: "-40s Doom Cooldown", recommended: "right" },
            { level: "20", left: "+40 Scorched Earth Damage/Heal", right: "+1.5s Doom Duration", recommended: "right" },
            { level: "15", left: "+16% Scorched Earth Movement Speed", right: "+150 Devour Bonus Gold", recommended: "left" },
            { level: "10", left: "+30 Damage", right: "+2 Armor", recommended: "left" }
        ],
        description: "Лучший оффлейнер. Регенерация 7 HP/сек на 1 уровне Scorched Earth. Все числа кратны 666."
    },

    "Spirit Breaker": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png",
        winrate: "53.9%",
        role: "Support/Roamer",
        counters: ["Sniper", "Tinker", "Nature's Prophet"],
        counteredBy: ["Lifestealer", "Faceless Void", "Slark"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "⚡", name: "Wind Lace" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Urn of Shadows" }
            ],
            core: [
                { icon: "⚔️", name: "Shadow Blade" },
                { icon: "💫", name: "Aghanim's Shard" },
                { icon: "🔥", name: "Aghanim's Scepter" },
                { icon: "💀", name: "Basher" }
            ],
            lategame: [
                { icon: "⚡", name: "Abyssal Blade" },
                { icon: "🌟", name: "Assault Cuirass" },
                { icon: "🛡️", name: "Black King Bar" }
            ]
        ],
        talents: [
            { level: "25", left: "+100 Greater Bash Damage", right: "+800 Nether Strike Cast Range", recommended: "left" },
            { level: "20", left: "+120 Nether Strike Damage", right: "+15 Armor", recommended: "left" },
            { level: "15", left: "+50 Charge Speed", right: "+25% Greater Bash Chance", recommended: "right" },
            { level: "10", left: "+200 Health", right: "+15 Damage", recommended: "left" }
        ],
        description: "Топ-1 на 4 позиции. Новый Shard и Scepter дают бесконечные станы. Innate ability ускоряет с каждого баша."
    },

    "Shadow Shaman": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png",
        winrate: "54.8%",
        role: "Support",
        counters: ["Phantom Lancer", "Storm Spirit", "Anti-Mage"],
        counteredBy: ["Earthshaker", "Silencer", "Dark Seer"],
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
                { icon: "⚡", name: "Aether Lens" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "💫", name: "Aghanim's Shard" },
                { icon: "💎", name: "Force Staff" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Refresher Orb" },
                { icon: "🛡️", name: "Aeon Disk" }
            ]
        },
        talents: [
            { level: "25", left: "+6 Mass Serpent Ward", right: "+1.25s Shackles Duration", recommended: "left" },
            { level: "20", left: "+300 Health", right: "+150 Cast Range", recommended: "right" },
            { level: "15", left: "+175 Ether Shock Damage", right: "+30 Movement Speed", recommended: "left" },
            { level: "10", left: "+8% Hex Slow", right: "+1.5 Mana Regen", recommended: "right" }
        ],
        description: "Лучший саппорт 5 позиции. Сильный пуш, двойной дизейбл, может соло убивать."
    },

    "Bounty Hunter": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png",
        winrate: "57.1%",
        role: "Support",
        counters: ["Techies", "Riki", "Weaver"],
        counteredBy: ["Slardar", "Zeus", "Bloodseeker"],
        builds: {
            starting: [
                { icon: "🔮", name: "Observer Ward" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "⚡", name: "Orb of Venom" }
            ],
            early: [
                { icon: "👟", name: "Tranquil Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "⚡", name: "Urn of Shadows" }
            ],
            core: [
                { icon: "⚔️", name: "Solar Crest" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "💫", name: "Aghanim's Shard" },
                { icon: "🗡️", name: "Desolator" }
            ],
            lategame: [
                { icon: "💀", name: "Nullifier" },
                { icon: "⭐", name: "Scythe of Vyse" },
                { icon: "🛡️", name: "Linkens Sphere" }
            ]
        },
        talents: [
            { level: "25", left: "+1s Jinada Slow", right: "Track True Sight AoE", recommended: "right" },
            { level: "20", left: "+30 Movement Speed", right: "+100 Shuriken Toss Damage", recommended: "right" },
            { level: "15", left: "+15% Evasion", right: "+80 Jinada Gold", recommended: "right" },
            { level: "10", left: "+40 Shuriken Damage", right: "+0.5s Shadow Walk Fade", recommended: "right" }
        ],
        description: "57% винрейт! Дает команде золото, Track видит инвизов, сильный харасс на лайне."
    },

    "Slark": {
        tier: "S",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png",
        winrate: "55.4%",
        role: "Carry",
        counters: ["Sniper", "Drow Ranger", "Crystal Maiden"],
        counteredBy: ["Bloodseeker", "Zeus", "Ancient Apparition"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
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
                { icon: "⚡", name: "Diffusal Blade" },
                { icon: "💀", name: "Silver Edge" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "💫", name: "Sange and Yasha" }
            ],
            lategame: [
                { icon: "⚔️", name: "Skadi" },
                { icon: "🗡️", name: "Abyssal Blade" },
                { icon: "⭐", name: "Butterfly" }
            ]
        },
        talents: [
            { level: "25", left: "+2s Pounce Leash", right: "+0.5s Shadow Dance Duration", recommended: "left" },
            { level: "20", left: "+1s Pounce Distance", right: "+150 Dark Pact Damage", recommended: "left" },
            { level: "15", left: "+35 Attack Speed", right: "+300 Health", recommended: "left" },
            { level: "10", left: "+8 Agility", right: "+30 Damage", recommended: "left" }
        ],
        description: "Топ керри. Dark Pact снимает все дебаффы, ультимейт дает регенерацию и инвиз."
    },

    "Faceless Void": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
        winrate: "52.2%",
        role: "Carry",
        counters: ["Phantom Lancer", "Chaos Knight", "Naga Siren"],
        counteredBy: ["Silencer", "Disruptor", "Vengeful Spirit"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Power Treads" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Mask of Madness" }
            ],
            core: [
                { icon: "⚡", name: "Maelstrom" },
                { icon: "🗡️", name: "Monkey King Bar" },
                { icon: "💀", name: "Mjollnir" },
                { icon: "🌟", name: "Aghanim's Scepter" }
            ],
            lategame: [
                { icon: "💫", name: "Butterfly" },
                { icon: "⭐", name: "Satanic" },
                { icon: "🛡️", name: "Skadi" }
            ]
        },
        talents: [
            { level: "25", left: "+1s Chronosphere Duration", right: "+50 Time Walk Cast Range", recommended: "left" },
            { level: "20", left: "+30 Time Walk Speed", right: "+15% Time Lock Chance", recommended: "right" },
            { level: "15", left: "+500 Health", right: "+30 Attack Speed", recommended: "right" },
            { level: "10", left: "+15 Damage", right: "+1.25s Time Lock Duration", recommended: "left" }
        ],
        description: "Сильный керри с массовым контролем. Chronosphere выигрывает файты."
    },

    "Phantom Lancer": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png",
        winrate: "52.9%",
        role: "Carry",
        counters: ["Anti-Mage", "Sven", "Crystal Maiden"],
        counteredBy: ["Earthshaker", "Leshrac", "Timbersaw"],
        builds: {
            starting: [
                { icon: "⚔️", name: "Quelling Blade" },
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" }
            ],
            early: [
                { icon: "👟", name: "Power Treads" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Wraith Band x2" }
            ],
            core: [
                { icon: "⚡", name: "Diffusal Blade" },
                { icon: "🗡️", name: "Manta Style" },
                { icon: "💫", name: "Heart of Tarrasque" },
                { icon: "🌟", name: "Butterfly" }
            ],
            lategame: [
                { icon: "⚔️", name: "Skadi" },
                { icon: "💀", name: "Abyssal Blade" },
                { icon: "⭐", name: "Satanic" }
            ]
        ],
        talents: [
            { level: "25", left: "+500 Phantom Rush Range", right: "+25% Phantom Rush Agility", recommended: "right" },
            { level: "20", left: "-4s Doppelganger CD", right: "+12% Juxtapose Illusion Damage", recommended: "right" },
            { level: "15", left: "+325 Health", right: "+20 Attack Speed", recommended: "right" },
            { level: "10", left: "+150 Phantom Lance Cast Range", right: "+20 Attack Speed", recommended: "right" }
        ],
        description: "Иллюзионист-убийца. Множество копий путают врагов и разрывают танков."
    },

    "Invoker": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
        winrate: "54.2%",
        role: "Mid",
        counters: ["Storm Spirit", "Ember Spirit", "Queen of Pain"],
        counteredBy: ["Anti-Mage", "Nyx Assassin", "Pugna"],
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
        description: "Второй по популярности мид. 10 заклинаний, огромный потенциал урона."
    },

    "Snapfire": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png",
        winrate: "51.8%",
        role: "Mid/Support",
        counters: ["Phantom Lancer", "Meepo", "Broodmother"],
        counteredBy: ["Anti-Mage", "Huskar", "Pudge"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "💧", name: "Clarity" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Bracer" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Shiva's Guard" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Refresher Orb" },
                { icon: "🛡️", name: "Heart of Tarrasque" }
            ]
        },
        talents: [
            { level: "25", left: "+2.5s Lil' Shredder Duration", right: "Firesnap Cookie Stuns", recommended: "right" },
            { level: "20", left: "+120 Scatterblast Damage", right: "+1.5s Mortimer Kisses Duration", recommended: "left" },
            { level: "15", left: "+20 Movement Speed", right: "+30 Damage", recommended: "left" },
            { level: "10", left: "+40 Damage", right: "+1.75 Mana Regen", recommended: "right" }
        ],
        description: "Третий топ-пик среди про-игроков. Универсальная на любой позиции."
    },

    "Enigma": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png",
        winrate: "53.0%",
        role: "Offlane",
        counters: ["Phantom Lancer", "Broodmother", "Meepo"],
        counteredBy: ["Silencer", "Rubick", "Disruptor"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "💧", name: "Clarity x2" }
            ],
            early: [
                { icon: "👟", name: "Arcane Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💪", name: "Soul Ring" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "🌟", name: "Aghanim's Scepter" },
                { icon: "⚔️", name: "Black King Bar" },
                { icon: "💫", name: "Refresher Orb" }
            ],
            lategame: [
                { icon: "🌙", name: "Octarine Core" },
                { icon: "⭐", name: "Shiva's Guard" },
                { icon: "🛡️", name: "Aghanim's Shard" }
            ]
        },
        talents: [
            { level: "25", left: "+8% Black Hole Damage", right: "-35s Black Hole Cooldown", recommended: "right" },
            { level: "20", left: "+100 Malefice Damage", right: "+5 Demonic Conversion Eidolons", recommended: "right" },
            { level: "15", left: "+30 Movement Speed", right: "+16% Magic Resistance", recommended: "left" },
            { level: "10", left: "+25% Magic Resistance", right: "+8 Strength", recommended: "left" }
        ],
        description: "Топ оффлейнер. Black Hole выигрывает файты, быстрый фарм через эйдолонов."
    },

    "Axe": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
        winrate: "51.6%",
        role: "Offlane",
        counters: ["Phantom Assassin", "Monkey King", "Lifestealer"],
        counteredBy: ["Venomancer", "Viper", "Necrophos"],
        builds: {
            starting: [
                { icon: "💚", name: "Tango" },
                { icon: "🌿", name: "Branches" },
                { icon: "🔮", name: "Faerie Fire" },
                { icon: "🏺", name: "Healing Salve" }
            ],
            early: [
                { icon: "👟", name: "Phase Boots" },
                { icon: "🔱", name: "Magic Wand" },
                { icon: "💎", name: "Vanguard" }
            ],
            core: [
                { icon: "🔥", name: "Blink Dagger" },
                { icon: "⚔️", name: "Blade Mail" },
                { icon: "💀", name: "Crimson Guard" },
                { icon: "🌟", name: "Aghanim's Scepter" }
            ],
            lategame: [
                { icon: "💫", name: "Heart of Tarrasque" },
                { icon: "⭐", name: "Assault Cuirass" },
                { icon: "🛡️", name: "Overwhelming Blink" }
            ]
        },
        talents: [
            { level: "25", left: "+35 Counter Helix Damage", right: "+100 Berserker's Call AoE", recommended: "right" },
            { level: "20", left: "+50 Attack Speed", right: "+2s Berserker's Call Duration", recommended: "right" },
            { level: "15", left: "+75 Culling Blade Threshold", right: "+12 Armor", recommended: "right" },
            { level: "10", left: "+30 Movement Speed", right: "+10 Strength", recommended: "right" }
        ],
        description: "Классический оффлейнер. Берсерк зовет врагов, контр-хеликс крутит."
    },

    "Crystal Maiden": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
        winrate: "49.4%",
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
        description: "Классический саппорт. Аура маны для всей команды, сильный контроль."
    },

    "Earthshaker": {
        tier: "A",
        image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png",
        winrate: "51.7%",
        role: "Support",
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
        description: "Мощный инициатор. Echo Slam уничтожает группы иллюзий и саммонов."
    }
};

// Расширенные данные контрпиков
const counterData = {
    "Lifestealer": {
        goodAgainst: [
            { hero: "Wraith King", reason: "Feast наносит % урон от HP, Rage избегает стан", advantage: "+8.2%" },
            { hero: "Pudge", reason: "Feast разрывает танков с большим HP", advantage: "+9.1%" },
            { hero: "Timbersaw", reason: "Rage игнорирует все спеллы, физ урон добивает", advantage: "+7.3%" }
        ],
        counters: [
            { hero: "Phantom Lancer", reason: "Иллюзии путают таргет, нет AoE урона", advantage: "-8.9%" },
            { hero: "Terrorblade", reason: "Sunder обменивает HP, быстрее в фарме", advantage: "-7.5%" },
            { hero: "Naga Siren", reason: "Song останавливает драки, иллюзии фармят быстрее", advantage: "-6.8%" }
        ]
    },
    "Leshrac": {
        goodAgainst: [
            { hero: "Phantom Lancer", reason: "Pulse Nova и Edict убивают все иллюзии", advantage: "+11.2%" },
            { hero: "Broodmother", reason: "AoE урон убивает пауков моментально", advantage: "+9.8%" },
            { hero: "Meepo", reason: "Все клоны в куче - легкая цель для ульта", advantage: "+8.5%" }
        ],
        counters: [
            { hero: "Anti-Mage", reason: "Mana Break и Counterspell против мага", advantage: "-10.3%" },
            { hero: "Pugna", reason: "Nether Ward наказывает за дорогие спеллы", advantage: "-8.7%" },
            { hero: "Nyx Assassin", reason: "Mana Burn и Carapace убивают кастеров", advantage: "-7.9%" }
        ]
    },
    "Doom": {
        goodAgainst: [
            { hero: "Storm Spirit", reason: "Doom отключает все абилки Storm", advantage: "+9.5%" },
            { hero: "Ember Spirit", reason: "Scorched Earth догоняет, Doom убивает", advantage: "+8.2%" },
            { hero: "Weaver", reason: "Doom проходит сквозь Time Lapse", advantage: "+7.6%" }
        ],
        counters: [
            { hero: "Lifestealer", reason: "Rage снимает Doom, Feast режет HP", advantage: "-9.8%" },
            { hero: "Oracle", reason: "False Promise спасает от Doom", advantage: "-8.3%" },
            { hero: "Abaddon", reason: "Aphotic Shield диспеллит Doom", advantage: "-6.9%" }
        ]
    },
    "Spirit Breaker": {
        goodAgainst: [
            { hero: "Sniper", reason: "Charge пробегает дистанцию, нет спасения", advantage: "+10.2%" },
            { hero: "Tinker", reason: "Постоянно ганкает, не дает фармить", advantage: "+9.7%" },
            { hero: "Nature's Prophet", reason: "Видит телепорт, сразу чарджит", advantage: "+8.4%" }
        ],
        counters: [
            { hero: "Lifestealer", reason: "Rage игнорирует станы, Feast убивает", advantage: "-8.9%" },
            { hero: "Faceless Void", reason: "Backtrack уклоняется, Chrono ловит", advantage: "-7.5%" },
            { hero: "Slark", reason: "Dark Pact снимает заряд", advantage: "-6.8%" }
        ]
    }
};

// Полный список героев для выбора
const allHeroesShort = [
    "Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden",
    "Axe", "Bane", "Batrider", "Beastmaster", "Bloodseeker",
    "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", "Centaur Warrunner",
    "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden",
    "Dark Seer", "Dark Willow", "Dawnbreaker", "Dazzle", "Death Prophet",
    "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit",
    "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress", "Enigma",
    "Faceless Void", "Grimstroke", "Gyrocopter", "Hoodwink", "Huskar",
    "Invoker", "Io", "Jakiro", "Juggernaut", "Keeper of the Light",
    "Kunkka", "Legion Commander", "Leshrac", "Lich", "Lifestealer",
    "Lina", "Lion", "Lone Druid", "Luna", "Lycan",
    "Magnus", "Marci", "Mars", "Medusa", "Meepo",
    "Mirana", "Monkey King", "Morphling", "Muerta", "Naga Siren",
    "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin", "Ogre Magi",
    "Omniknight", "Oracle", "Outworld Destroyer", "Pangolier", "Phantom Assassin",
    "Phantom Lancer", "Phoenix", "Primal Beast", "Puck", "Pudge",
    "Pugna", "Queen of Pain", "Razor", "Riki", "Rubick",
    "Sand King", "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer",
    "Skywrath Mage", "Slardar", "Slark", "Snapfire", "Sniper",
    "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies",
    "Templar Assassin", "Terrorblade", "Tidehunter", "Timbersaw", "Tinker",
    "Tiny", "Treant Protector", "Troll Warlord", "Tusk", "Underlord",
    "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper",
    "Visage", "Void Spirit", "Warlock", "Weaver", "Windranger",
    "Winter Wyvern", "Witch Doctor", "Wraith King", "Zeus"
];
