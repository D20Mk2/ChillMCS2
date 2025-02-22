ServerEvents.recipes(event => {
    event.recipes.create.mixing('2x kubejs:artifact_alloy_t1', 
        [
            '2x minecraft:iron_ingot', 
            '2x minecraft:gold_ingot'
        ]
    ).heated()
    event.recipes.create.mixing('kubejs:artifact_alloy_t2',
        [
            '4x create:brass_ingot',
            '2x mekanism:alloy_infused'
        ]
    ).superheated()
    event.recipes.create.mixing('kubejs:artifact_alloy_t3', 
        [
            '2x mekanism:alloy_atomic', 
            'chemlib:dysprosium_ingot',
            'chemlib:iridium_ingot'
        ]
    ).superheated()
})
ServerEvents.recipes(event => {
    event.shaped('kubejs:artifact_core_t1', [
        'RER',
        'EDE',
        'RER'
    ], {
        D: 'minecraft:diamond',
        E: '#minecraft:emerald',
        R: 'minecraft:redstone',
    })
    event.recipes.create.mechanical_crafting('kubejs:artifact_core_t2', [
        ' III ',
        'IRERI',
        'IEDEI',
        'IRERI',
        ' III '
      ], {
        D: 'mekanism:elite_control_circuit',
        E: 'kubejs:artifact_alloy_t2',
        R: 'chemlib:titanium_ingot',
        I: 'mekanism:alloy_reinforced'
    })
    event.recipes.create.mechanical_crafting('kubejs:artifact_core_t3', [
        ' III ',
        'IRERI',
        'IEDEI',
        'IRERI',
        ' III '
      ], {
        D: 'minecraft:netherite_ingot',
        E: 'kubejs:artifact_alloy_t3',
        R: 'chemlib:europium_metal_block',
        I: 'chemlib:erbium_ingot'
    })
    event.shaped('artifacts:villager_hat', [
        'HHH',
        'HAH',
        'HHH'
    ], {
        A: 'kubejs:artifact_alloy_t1',
        H: 'minecraft:hay_block'
    })
    event.shaped('artifacts:cloud_in_a_bottle', [
        ' G ',
        ' A ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        G: 'minecraft:glass_bottle'
    })
    event.shaped('artifacts:cowboy_hat', [
        ' L ',
        'LAL',
        ' L '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:plastic_drinking_hat', [
        'G G',
        ' A ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        G: 'minecraft:glass_bottle'
    })
    event.shaped('artifacts:novelty_drinking_hat', [
        'G G',
        'GAG',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        G: 'minecraft:glass_bottle'
    })
    event.shaped('artifacts:night_vision_goggles', [
        'G G',
        'GAG',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        G: 'minecraft:glass'
    })
    event.shaped('enigmaticlegacy:enigmatic_eye', [
        'DDD',
        'DAD',
        'DDD'
    ], {
        A: 'kubejs:artifact_alloy_t1',
        D: 'minecraft:deepslate'
    })
    event.shaped('artifacts:snorkel', [
        'GGG',
        'GAG',
        'GGG'
    ], {
        A: 'kubejs:artifact_alloy_t1',
        G: 'minecraft:glass'
    })
    event.shaped('enigmaticlegacy:golem_heart', [
        ' I ',
        'IAI',
        ' I '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        I: 'minecraft:iron_block'
    })
    event.shaped('enigmaticaddons:lost_engine', [
        ' C ',
        'CAC',
        ' C '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        C: 'minecraft:copper_block'
    })
    event.shaped('artifacts:obsidian_skull', [
        ' O ',
        'OAO',
        ' O '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        O: 'minecraft:obsidian'
    })
    event.shaped('artifacts:digging_claws', [
        ' A ',
        ' P ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        P: Item.of('minecraft:stone_pickaxe', '{Damage:0}')
    })
    event.shaped('artifacts:panic_necklace', [
        '   ',
        ' A ',
        ' R '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        R: 'minecraft:redstone_block'
    })
    event.shaped('artifacts:umbrella', [
        ' A ',
        ' S ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        S: 'minecraft:stick'
    })
    event.shaped('artifacts:flippers', [
        'L  ',
        ' A ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:rooted_boots', [
        ' L ',
        ' A ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:aqua_dashers', [
        '  L',
        ' A ',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:snowshoes', [
        '   ',
        ' AL',
        '   '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:bunny_hoppers', [
        '   ',
        ' A ',
        'L  '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:kitty_slippers', [
    '   ',
    ' A ',
    ' L '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:running_shoes', [
    '   ',
    ' A ',
    '  L'
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'minecraft:leather'
    })
    event.shaped('artifacts:onion_ring', [
    ' L ',
    'LAL',
    ' L '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: 'farmersdelight:onion'
    })
    event.shaped('artifacts:pickaxe_heater', [
    ' F ',
    'FAF',
    ' F '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        F: 'minecraft:furnace'
    })
    event.shaped('artifacts:whoopee_cushion', [
    ' L ',
    'LAL',
    ' L '
    ], {
        A: 'kubejs:artifact_alloy_t1',
        L: '#forge:wool'
    })
})
ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:ocean_stone', [
        ' AA',
        'ACA',
        'AAA'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1'
    })
    event.shaped('enigmaticlegacy:blazing_core', [
        'A A',
        'ACA',
        'AAA'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1'
    })
    event.shaped('enigmaticlegacy:eye_of_nebula', [
        'AA ',
        'ACA',
        'AAA'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1'
    })
    event.shaped('enigmaticaddons:revival_leaf', [
        'AAA',
        ' CA',
        'AAA'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1'
    })
    event.shaped(Item.of('enigmaticlegacy:earth_heart', '{isTainted:1b}'), [
        ' A ',
        'ACA',
        ' A '
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1'
    })
    event.shaped('artifacts:superstitious_hat', [
        'EAE',
        'ACA',
        'MAM'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        E: 'minecraft:emerald',
        M: 'minecraft:moss_block'
    })
    event.shaped('artifacts:lucky_scarf', [
        'MAM',
        'ACA',
        'MAM'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        M: 'minecraft:moss_block',
    })
    event.shaped('artifacts:antidote_vessel', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        B: 'minecraft:glass_bottle'
    })
    event.shaped('artifacts:vampiric_glove', [
        'BAB',
        'ACA',
        'DAD'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        B: 'minecraft:amethyst_shard',
        D: 'minecraft:diamond'
    })
    event.shaped('artifacts:feral_claws', [
        'BAB',
        'ACA',
        'DAD'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        D: 'minecraft:amethyst_shard',
        B: 'minecraft:diamond'
    })
    event.shaped('artifacts:power_glove', [
        'BAB',
        'ACA',
        'DAD'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        D: 'minecraft:gold_ingot',
        B: 'minecraft:diamond'
    })
    event.shaped('artifacts:fire_gauntlet', [
        'BAB',
        'ACA',
        'DAD'
    ], {
        C: 'kubejs:artifact_core_t1',
        A: 'kubejs:artifact_alloy_t1',
        D: 'minecraft:fire_charge',
        B: 'minecraft:diamond'
    })
})
ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:angel_blessing', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:diamond_block'
    })
    event.shaped('enigmaticaddons:forgotten_ice', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:blue_ice'
    })
    event.shaped('enigmaticlegacy:darkest_scroll', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'enigmaticlegacy:thicc_scroll'
    })
    event.shaped(Item.of('minecraft:elytra', '{Damage:0}'), [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'mekanism:hdpe_sheet'
    })
    event.shaped('enigmaticlegacy:astral_dust', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'mekanism:yellow_cake_uranium'
    })
    event.shaped('artifacts:cross_necklace', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:gold_block'
    })
    event.shaped('artifacts:crystal_heart', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:redstone_block'
    })
    event.shaped('enigmaticlegacy:forbidden_fruit', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:golden_apple'
    })
    event.shaped('artifacts:scarf_of_invisibility', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: Item.of('minecraft:potion', '{Potion:"minecraft:long_invisibility"}')
    })
    event.shaped('artifacts:universal_attractor', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'minecraft:anvil'
    })
    event.shaped('enigmaticaddons:void_tome', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        C: 'kubejs:artifact_core_t2',
        A: 'kubejs:artifact_alloy_t2',
        B: 'enigmaticlegacy:the_acknowledgment'
    })
})
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('enigmaticlegacy:void_pearl', [
        ' III ',
        'IRERI',
        'IEDEI',
        'IRERI',
        ' III '
      ], {
        D: 'kubejs:artifact_core_t3',
        E: 'kubejs:artifact_alloy_t3',
        R: 'mekanism:ultimate_control_circuit',
        I: 'chemlib:tungsten_metal_block'
    })
    event.recipes.create.mechanical_crafting('enigmaticaddons:hell_blade_charm', [
        ' III ',
        'IRERI',
        'IEDEI',
        'IRERI',
        ' III '
      ], {
        D: 'kubejs:artifact_core_t3',
        E: 'kubejs:artifact_alloy_t3',
        R: 'mekanism:ultimate_control_circuit',
        I: 'chemlib:neodymium_metal_block'
    })
})
ServerEvents.recipes(event => {
    event.remove({id: 'enigmaticaddons:forger_gem'})
    event.shaped('enigmaticaddons:forger_gem', [
        ' D ',
        'IDI',
        'CRC'
    ], {
        D: 'minecraft:diamond',
        I: 'minecraft:iron_ingot',
        R: 'enigmaticaddons:quartz_ring',
        C: 'kubejs:artifact_alloy_t1'
    })
    event.shapeless('kubejs:void_core_shard', [
        'minecraft:cobblestone',
        'kubejs:void_core_shard'
    ])
    event.shapeless('16x kubejs:void_core_shard', [
        'kubejs:void_core'
    ])
    event.shapeless('minecraft:blaze_rod', [
        '4x minecraft:blaze_powder'
    ])
    event.recipes.create.mixing([
        Item.of('minecraft:diamond').withChance(0.05),
        Item.of('minecraft:emerald').withChance(0.04),
        Item.of('minecraft:quartz').withChance(0.15),
        Item.of('minecraft:amethyst_shard').withChance(0.15),
        Item.of('minecraft:redstone').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.35),
        Item.of('minecraft:glowstone_dust').withChance(0.15),
        Item.of('minecraft:blaze_powder').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.15),
        Item.of('minecraft:lapis_lazuli').withChance(0.20),
        Item.of('minecraft:raw_iron').withChance(0.35),
        Item.of('minecraft:raw_gold').withChance(0.15),
        Item.of('minecraft:raw_copper').withChance(0.45),
        Item.of('mekanism:raw_lead').withChance(0.35),
        Item.of('mekanism:raw_osmium').withChance(0.45),
        Item.of('mekanism:raw_tin').withChance(0.35),
        Item.of('mekanism:raw_uranium').withChance(0.15),
        Item.of('mekanism:fluorite_gem').withChance(0.25),
        Item.of('ae2:silicon').withChance(0.85),
        Item.of('ae2:fluix_crystal').withChance(0.15),
        Item.of('ae2:certus_quartz_crystal').withChance(0.35),
        Item.of('minecraft:ghast_tear').withChance(0.01),
        Item.of('minecraft:slime_ball').withChance(0.55),
        Item.of('minecraft:clay_ball').withChance(0.55),
        Item.of('ae2:sky_dust').withChance(0.15)
    ], [
        'kubejs:void_core_shard',
        Fluid.water(250)
    ])
})