ServerEvents.recipes(event => {
    event.remove({ id: 'translocators:item_translocator'})
    event.remove({ id: 'translocators:fluid_translocator'})

    event.shaped(Item.of('translocators:item_translocator', 2), // arg 1: output
        [
          'ABA',
          'CDC', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'gtceu:aluminium_foil',
          B: 'gtceu:red_alloy_plate',  //arg 3: the mapping object
          C: 'gtceu:brass_normal_item_pipe',
          D: 'minecraft:ender_pearl'
        }
      )

      event.shaped(Item.of('translocators:fluid_translocator', 2), // arg 1: output
        [
          'ABA',
          'CDC', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'gtceu:aluminium_foil',
          B: 'gtceu:red_alloy_plate',  //arg 3: the mapping object
          C: 'gtceu:steel_normal_fluid_pipe',
          D: 'minecraft:ender_pearl'
        }
      )
      
})
