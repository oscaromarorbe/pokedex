// https://pokeapi.co/api/v2/pokemon?limit=20&offset=20
export const pokemon = {
  count: 1126,
  next: "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20",
  previous: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
  results: [
    { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon/21/" },
    { name: "fearow", url: "https://pokeapi.co/api/v2/pokemon/22/" },
    { name: "ekans", url: "https://pokeapi.co/api/v2/pokemon/23/" },
    { name: "arbok", url: "https://pokeapi.co/api/v2/pokemon/24/" },
    { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
    { name: "raichu", url: "https://pokeapi.co/api/v2/pokemon/26/" },
    { name: "sandshrew", url: "https://pokeapi.co/api/v2/pokemon/27/" },
    { name: "sandslash", url: "https://pokeapi.co/api/v2/pokemon/28/" },
    { name: "nidoran-f", url: "https://pokeapi.co/api/v2/pokemon/29/" },
    { name: "nidorina", url: "https://pokeapi.co/api/v2/pokemon/30/" },
    { name: "nidoqueen", url: "https://pokeapi.co/api/v2/pokemon/31/" },
    { name: "nidoran-m", url: "https://pokeapi.co/api/v2/pokemon/32/" },
    { name: "nidorino", url: "https://pokeapi.co/api/v2/pokemon/33/" },
    { name: "nidoking", url: "https://pokeapi.co/api/v2/pokemon/34/" },
    { name: "clefairy", url: "https://pokeapi.co/api/v2/pokemon/35/" },
    { name: "clefable", url: "https://pokeapi.co/api/v2/pokemon/36/" },
    { name: "vulpix", url: "https://pokeapi.co/api/v2/pokemon/37/" },
    { name: "ninetales", url: "https://pokeapi.co/api/v2/pokemon/38/" },
    { name: "jigglypuff", url: "https://pokeapi.co/api/v2/pokemon/39/" },
    { name: "wigglytuff", url: "https://pokeapi.co/api/v2/pokemon/40/" },
  ],
};

// https://pokeapi.co/api/v2/pokemon/clefairy
export const pokemonClefairy = {
  abilities: [
    {
      ability: {
        name: "cute-charm",
        url: "https://pokeapi.co/api/v2/ability/56/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "magic-guard",
        url: "https://pokeapi.co/api/v2/ability/98/",
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: "friend-guard",
        url: "https://pokeapi.co/api/v2/ability/132/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 113,
  forms: [
    { name: "clefairy", url: "https://pokeapi.co/api/v2/pokemon-form/35/" },
  ],
  game_indices: [
    {
      game_index: 4,
      version: { name: "red", url: "https://pokeapi.co/api/v2/version/1/" },
    },
    {
      game_index: 4,
      version: { name: "blue", url: "https://pokeapi.co/api/v2/version/2/" },
    },
    {
      game_index: 4,
      version: { name: "yellow", url: "https://pokeapi.co/api/v2/version/3/" },
    },
    {
      game_index: 35,
      version: { name: "gold", url: "https://pokeapi.co/api/v2/version/4/" },
    },
    {
      game_index: 35,
      version: { name: "silver", url: "https://pokeapi.co/api/v2/version/5/" },
    },
    {
      game_index: 35,
      version: { name: "crystal", url: "https://pokeapi.co/api/v2/version/6/" },
    },
    {
      game_index: 35,
      version: { name: "ruby", url: "https://pokeapi.co/api/v2/version/7/" },
    },
    {
      game_index: 35,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/",
      },
    },
    {
      game_index: 35,
      version: { name: "emerald", url: "https://pokeapi.co/api/v2/version/9/" },
    },
    {
      game_index: 35,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/",
      },
    },
    {
      game_index: 35,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/",
      },
    },
    {
      game_index: 35,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/",
      },
    },
    {
      game_index: 35,
      version: { name: "pearl", url: "https://pokeapi.co/api/v2/version/13/" },
    },
    {
      game_index: 35,
      version: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version/14/",
      },
    },
    {
      game_index: 35,
      version: {
        name: "heartgold",
        url: "https://pokeapi.co/api/v2/version/15/",
      },
    },
    {
      game_index: 35,
      version: {
        name: "soulsilver",
        url: "https://pokeapi.co/api/v2/version/16/",
      },
    },
    {
      game_index: 35,
      version: { name: "black", url: "https://pokeapi.co/api/v2/version/17/" },
    },
    {
      game_index: 35,
      version: { name: "white", url: "https://pokeapi.co/api/v2/version/18/" },
    },
    {
      game_index: 35,
      version: {
        name: "black-2",
        url: "https://pokeapi.co/api/v2/version/21/",
      },
    },
    {
      game_index: 35,
      version: {
        name: "white-2",
        url: "https://pokeapi.co/api/v2/version/22/",
      },
    },
  ],
  height: 6,
  held_items: [
    {
      item: { name: "moon-stone", url: "https://pokeapi.co/api/v2/item/81/" },
      version_details: [
        {
          rarity: 5,
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "firered",
            url: "https://pokeapi.co/api/v2/version/10/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "leafgreen",
            url: "https://pokeapi.co/api/v2/version/11/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
        {
          rarity: 5,
          version: { name: "x", url: "https://pokeapi.co/api/v2/version/23/" },
        },
        {
          rarity: 5,
          version: { name: "y", url: "https://pokeapi.co/api/v2/version/24/" },
        },
        {
          rarity: 5,
          version: {
            name: "omega-ruby",
            url: "https://pokeapi.co/api/v2/version/25/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version/26/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "sun",
            url: "https://pokeapi.co/api/v2/version/27/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "moon",
            url: "https://pokeapi.co/api/v2/version/28/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "ultra-sun",
            url: "https://pokeapi.co/api/v2/version/29/",
          },
        },
        {
          rarity: 5,
          version: {
            name: "ultra-moon",
            url: "https://pokeapi.co/api/v2/version/30/",
          },
        },
      ],
    },
    {
      item: { name: "leppa-berry", url: "https://pokeapi.co/api/v2/item/131/" },
      version_details: [
        {
          rarity: 50,
          version: {
            name: "ruby",
            url: "https://pokeapi.co/api/v2/version/7/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "sapphire",
            url: "https://pokeapi.co/api/v2/version/8/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version/9/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "diamond",
            url: "https://pokeapi.co/api/v2/version/12/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "pearl",
            url: "https://pokeapi.co/api/v2/version/13/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version/14/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "heartgold",
            url: "https://pokeapi.co/api/v2/version/15/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "soulsilver",
            url: "https://pokeapi.co/api/v2/version/16/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          rarity: 50,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
      ],
    },
    {
      item: { name: "comet-shard", url: "https://pokeapi.co/api/v2/item/624/" },
      version_details: [
        {
          rarity: 1,
          version: {
            name: "black",
            url: "https://pokeapi.co/api/v2/version/17/",
          },
        },
        {
          rarity: 1,
          version: {
            name: "white",
            url: "https://pokeapi.co/api/v2/version/18/",
          },
        },
        {
          rarity: 1,
          version: {
            name: "black-2",
            url: "https://pokeapi.co/api/v2/version/21/",
          },
        },
        {
          rarity: 1,
          version: {
            name: "white-2",
            url: "https://pokeapi.co/api/v2/version/22/",
          },
        },
      ],
    },
  ],
  id: 35,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/35/encounters",
  moves: [
    {
      move: { name: "pound", url: "https://pokeapi.co/api/v2/move/1/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "double-slap", url: "https://pokeapi.co/api/v2/move/3/" },
      version_group_details: [
        {
          level_learned_at: 18,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "ice-punch", url: "https://pokeapi.co/api/v2/move/8/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "thunder-punch", url: "https://pokeapi.co/api/v2/move/9/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "mega-kick", url: "https://pokeapi.co/api/v2/move/25/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "headbutt", url: "https://pokeapi.co/api/v2/move/29/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "body-slam", url: "https://pokeapi.co/api/v2/move/34/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "take-down", url: "https://pokeapi.co/api/v2/move/36/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "double-edge", url: "https://pokeapi.co/api/v2/move/38/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
      ],
    },
    {
      move: { name: "growl", url: "https://pokeapi.co/api/v2/move/45/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "sing", url: "https://pokeapi.co/api/v2/move/47/" },
      version_group_details: [
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 7,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 6,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "flamethrower", url: "https://pokeapi.co/api/v2/move/53/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "water-gun", url: "https://pokeapi.co/api/v2/move/55/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "ice-beam", url: "https://pokeapi.co/api/v2/move/58/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "blizzard", url: "https://pokeapi.co/api/v2/move/59/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "bubble-beam", url: "https://pokeapi.co/api/v2/move/61/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "submission", url: "https://pokeapi.co/api/v2/move/66/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "counter", url: "https://pokeapi.co/api/v2/move/68/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
      ],
    },
    {
      move: { name: "seismic-toss", url: "https://pokeapi.co/api/v2/move/69/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "strength", url: "https://pokeapi.co/api/v2/move/70/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "solar-beam", url: "https://pokeapi.co/api/v2/move/76/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "thunderbolt", url: "https://pokeapi.co/api/v2/move/85/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "thunder-wave", url: "https://pokeapi.co/api/v2/move/86/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "thunder", url: "https://pokeapi.co/api/v2/move/87/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "psychic", url: "https://pokeapi.co/api/v2/move/94/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "teleport", url: "https://pokeapi.co/api/v2/move/100/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
      ],
    },
    {
      move: { name: "double-team", url: "https://pokeapi.co/api/v2/move/104/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "minimize", url: "https://pokeapi.co/api/v2/move/107/" },
      version_group_details: [
        {
          level_learned_at: 24,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 10,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 8,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "defense-curl",
        url: "https://pokeapi.co/api/v2/move/111/",
      },
      version_group_details: [
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 26,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "light-screen",
        url: "https://pokeapi.co/api/v2/move/113/",
      },
      version_group_details: [
        {
          level_learned_at: 48,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 53,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 41,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "reflect", url: "https://pokeapi.co/api/v2/move/115/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "metronome", url: "https://pokeapi.co/api/v2/move/118/" },
      version_group_details: [
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 29,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 18,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "fire-blast", url: "https://pokeapi.co/api/v2/move/126/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "skull-bash", url: "https://pokeapi.co/api/v2/move/130/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "amnesia", url: "https://pokeapi.co/api/v2/move/133/" },
      version_group_details: [
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "soft-boiled", url: "https://pokeapi.co/api/v2/move/135/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
      ],
    },
    {
      move: { name: "dream-eater", url: "https://pokeapi.co/api/v2/move/138/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: { name: "flash", url: "https://pokeapi.co/api/v2/move/148/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "psywave", url: "https://pokeapi.co/api/v2/move/149/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: { name: "splash", url: "https://pokeapi.co/api/v2/move/150/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "tri-attack", url: "https://pokeapi.co/api/v2/move/161/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "substitute", url: "https://pokeapi.co/api/v2/move/164/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "nightmare", url: "https://pokeapi.co/api/v2/move/171/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
      ],
    },
    {
      move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
      ],
    },
    {
      move: { name: "protect", url: "https://pokeapi.co/api/v2/move/182/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "sweet-kiss", url: "https://pokeapi.co/api/v2/move/186/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "mud-slap", url: "https://pokeapi.co/api/v2/move/189/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: { name: "zap-cannon", url: "https://pokeapi.co/api/v2/move/192/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
      ],
    },
    {
      move: { name: "icy-wind", url: "https://pokeapi.co/api/v2/move/196/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "detect", url: "https://pokeapi.co/api/v2/move/197/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
      ],
    },
    {
      move: { name: "endure", url: "https://pokeapi.co/api/v2/move/203/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "charm", url: "https://pokeapi.co/api/v2/move/204/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "rollout", url: "https://pokeapi.co/api/v2/move/205/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "attract", url: "https://pokeapi.co/api/v2/move/213/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "sleep-talk", url: "https://pokeapi.co/api/v2/move/214/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "heal-bell", url: "https://pokeapi.co/api/v2/move/215/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "return", url: "https://pokeapi.co/api/v2/move/216/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "frustration", url: "https://pokeapi.co/api/v2/move/218/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "safeguard", url: "https://pokeapi.co/api/v2/move/219/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "dynamic-punch",
        url: "https://pokeapi.co/api/v2/move/223/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
      ],
    },
    {
      move: { name: "baton-pass", url: "https://pokeapi.co/api/v2/move/226/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "encore", url: "https://pokeapi.co/api/v2/move/227/" },
      version_group_details: [
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "iron-tail", url: "https://pokeapi.co/api/v2/move/231/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "moonlight", url: "https://pokeapi.co/api/v2/move/236/" },
      version_group_details: [
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 24,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "hidden-power",
        url: "https://pokeapi.co/api/v2/move/237/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "rain-dance", url: "https://pokeapi.co/api/v2/move/240/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "sunny-day", url: "https://pokeapi.co/api/v2/move/241/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "psych-up", url: "https://pokeapi.co/api/v2/move/244/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "shadow-ball", url: "https://pokeapi.co/api/v2/move/247/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "rock-smash", url: "https://pokeapi.co/api/v2/move/249/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "uproar", url: "https://pokeapi.co/api/v2/move/253/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "facade", url: "https://pokeapi.co/api/v2/move/263/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "focus-punch", url: "https://pokeapi.co/api/v2/move/264/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "follow-me", url: "https://pokeapi.co/api/v2/move/266/" },
      version_group_details: [
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 36,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "helping-hand",
        url: "https://pokeapi.co/api/v2/move/270/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "trick", url: "https://pokeapi.co/api/v2/move/271/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "role-play", url: "https://pokeapi.co/api/v2/move/272/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "magic-coat", url: "https://pokeapi.co/api/v2/move/277/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "recycle", url: "https://pokeapi.co/api/v2/move/278/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "brick-break", url: "https://pokeapi.co/api/v2/move/280/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "knock-off", url: "https://pokeapi.co/api/v2/move/282/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "endeavor", url: "https://pokeapi.co/api/v2/move/283/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "imprison", url: "https://pokeapi.co/api/v2/move/286/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "snatch", url: "https://pokeapi.co/api/v2/move/289/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "secret-power",
        url: "https://pokeapi.co/api/v2/move/290/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "hyper-voice", url: "https://pokeapi.co/api/v2/move/304/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "meteor-mash", url: "https://pokeapi.co/api/v2/move/309/" },
      version_group_details: [
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 50,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "fake-tears", url: "https://pokeapi.co/api/v2/move/313/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "cosmic-power",
        url: "https://pokeapi.co/api/v2/move/322/",
      },
      version_group_details: [
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "signal-beam", url: "https://pokeapi.co/api/v2/move/324/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "bounce", url: "https://pokeapi.co/api/v2/move/340/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "covet", url: "https://pokeapi.co/api/v2/move/343/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "magical-leaf",
        url: "https://pokeapi.co/api/v2/move/345/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "calm-mind", url: "https://pokeapi.co/api/v2/move/347/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "shock-wave", url: "https://pokeapi.co/api/v2/move/351/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "water-pulse", url: "https://pokeapi.co/api/v2/move/352/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "gravity", url: "https://pokeapi.co/api/v2/move/356/" },
      version_group_details: [
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "wake-up-slap",
        url: "https://pokeapi.co/api/v2/move/358/",
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "healing-wish",
        url: "https://pokeapi.co/api/v2/move/361/",
      },
      version_group_details: [
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 48,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "natural-gift",
        url: "https://pokeapi.co/api/v2/move/363/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: { name: "fling", url: "https://pokeapi.co/api/v2/move/374/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "lucky-chant", url: "https://pokeapi.co/api/v2/move/381/" },
      version_group_details: [
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "copycat", url: "https://pokeapi.co/api/v2/move/383/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "last-resort", url: "https://pokeapi.co/api/v2/move/387/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "drain-punch", url: "https://pokeapi.co/api/v2/move/409/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "zen-headbutt",
        url: "https://pokeapi.co/api/v2/move/428/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "captivate", url: "https://pokeapi.co/api/v2/move/445/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "stealth-rock",
        url: "https://pokeapi.co/api/v2/move/446/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "grass-knot", url: "https://pokeapi.co/api/v2/move/447/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "charge-beam", url: "https://pokeapi.co/api/v2/move/451/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "wonder-room", url: "https://pokeapi.co/api/v2/move/472/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "psyshock", url: "https://pokeapi.co/api/v2/move/473/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "telekinesis", url: "https://pokeapi.co/api/v2/move/477/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "after-you", url: "https://pokeapi.co/api/v2/move/495/" },
      version_group_details: [
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 58,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "echoed-voice",
        url: "https://pokeapi.co/api/v2/move/497/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "stored-power",
        url: "https://pokeapi.co/api/v2/move/500/",
      },
      version_group_details: [
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 4,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "ally-switch", url: "https://pokeapi.co/api/v2/move/502/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "incinerate", url: "https://pokeapi.co/api/v2/move/510/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "retaliate", url: "https://pokeapi.co/api/v2/move/514/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "bestow", url: "https://pokeapi.co/api/v2/move/516/" },
      version_group_details: [
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 19,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "disarming-voice",
        url: "https://pokeapi.co/api/v2/move/574/",
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "draining-kiss",
        url: "https://pokeapi.co/api/v2/move/577/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "misty-terrain",
        url: "https://pokeapi.co/api/v2/move/581/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "play-rough", url: "https://pokeapi.co/api/v2/move/583/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "moonblast", url: "https://pokeapi.co/api/v2/move/585/" },
      version_group_details: [
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 46,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 28,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 44,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "confide", url: "https://pokeapi.co/api/v2/move/590/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "mystical-fire",
        url: "https://pokeapi.co/api/v2/move/595/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "dazzling-gleam",
        url: "https://pokeapi.co/api/v2/move/605/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "power-up-punch",
        url: "https://pokeapi.co/api/v2/move/612/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: { name: "spotlight", url: "https://pokeapi.co/api/v2/move/671/" },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: { name: "life-dew", url: "https://pokeapi.co/api/v2/move/791/" },
      version_group_details: [
        {
          level_learned_at: 16,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: { name: "meteor-beam", url: "https://pokeapi.co/api/v2/move/800/" },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "misty-explosion",
        url: "https://pokeapi.co/api/v2/move/802/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
    {
      move: {
        name: "dual-wingbeat",
        url: "https://pokeapi.co/api/v2/move/814/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "sword-shield",
            url: "https://pokeapi.co/api/v2/version-group/20/",
          },
        },
      ],
    },
  ],
  name: "clefairy",
  order: 64,
  past_types: [
    {
      generation: {
        name: "generation-v",
        url: "https://pokeapi.co/api/v2/generation/5/",
      },
      types: [
        {
          slot: 1,
          type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        },
      ],
    },
  ],
  species: {
    name: "clefairy",
    url: "https://pokeapi.co/api/v2/pokemon-species/35/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
      },
    },
    versions: {
      "generation-i": {
        "red-blue": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/35.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/35.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/35.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/35.png",
        },
        yellow: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/35.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/35.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/35.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/35.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/35.png",
        },
      },
      "generation-ii": {
        crystal: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/35.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/35.png",
          back_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/35.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/35.png",
          front_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/35.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/35.png",
        },
        gold: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/35.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/35.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/35.png",
        },
        silver: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/35.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/35.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/35.png",
        },
      },
      "generation-iii": {
        emerald: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/35.png",
        },
        "firered-leafgreen": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/35.png",
        },
        "ruby-sapphire": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/35.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/35.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/35.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/35.png",
        },
      },
      "generation-iv": {
        "diamond-pearl": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/35.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/35.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/35.png",
          front_shiny_female: null,
        },
        "heartgold-soulsilver": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/35.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/35.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/35.png",
          front_shiny_female: null,
        },
        platinum: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/35.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/35.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/35.png",
          front_shiny_female: null,
        },
      },
      "generation-v": {
        "black-white": {
          animated: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/35.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/35.gif",
            front_shiny_female: null,
          },
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/35.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/35.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/35.png",
          front_shiny_female: null,
        },
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/35.png",
          front_shiny_female: null,
        },
        "x-y": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/35.png",
          front_shiny_female: null,
        },
      },
      "generation-vii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/35.png",
          front_female: null,
        },
        "ultra-sun-ultra-moon": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/35.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/35.png",
          front_shiny_female: null,
        },
      },
      "generation-viii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/35.png",
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 70,
      effort: 2,
      stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
    },
    {
      base_stat: 48,
      effort: 0,
      stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 35,
      effort: 0,
      stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
    },
  ],
  types: [
    {
      slot: 1,
      type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    },
  ],
  weight: 75,
};

// https://pokeapi.co/api/v2/type
export const types = {
  count: 20,
  next: null,
  previous: null,
  results: [
    { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
    { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
    { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
    { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    { name: "unknown", url: "https://pokeapi.co/api/v2/type/10001/" },
    { name: "shadow", url: "https://pokeapi.co/api/v2/type/10002/" },
  ],
};

// https://pokeapi.co/api/v2/type/grass
export const typeGrass = {
  damage_relations: {
    double_damage_from: [
      { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    ],
    double_damage_to: [
      { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    ],
    half_damage_from: [
      { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    ],
    half_damage_to: [
      { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    ],
    no_damage_from: [],
    no_damage_to: [],
  },
  game_indices: [
    {
      game_index: 22,
      generation: {
        name: "generation-i",
        url: "https://pokeapi.co/api/v2/generation/1/",
      },
    },
    {
      game_index: 22,
      generation: {
        name: "generation-ii",
        url: "https://pokeapi.co/api/v2/generation/2/",
      },
    },
    {
      game_index: 12,
      generation: {
        name: "generation-iii",
        url: "https://pokeapi.co/api/v2/generation/3/",
      },
    },
    {
      game_index: 12,
      generation: {
        name: "generation-iv",
        url: "https://pokeapi.co/api/v2/generation/4/",
      },
    },
    {
      game_index: 11,
      generation: {
        name: "generation-v",
        url: "https://pokeapi.co/api/v2/generation/5/",
      },
    },
    {
      game_index: 11,
      generation: {
        name: "generation-vi",
        url: "https://pokeapi.co/api/v2/generation/6/",
      },
    },
  ],
  generation: {
    name: "generation-i",
    url: "https://pokeapi.co/api/v2/generation/1/",
  },
  id: 12,
  move_damage_class: {
    name: "special",
    url: "https://pokeapi.co/api/v2/move-damage-class/3/",
  },
  moves: [
    { name: "vine-whip", url: "https://pokeapi.co/api/v2/move/22/" },
    { name: "absorb", url: "https://pokeapi.co/api/v2/move/71/" },
    { name: "mega-drain", url: "https://pokeapi.co/api/v2/move/72/" },
    { name: "leech-seed", url: "https://pokeapi.co/api/v2/move/73/" },
    { name: "razor-leaf", url: "https://pokeapi.co/api/v2/move/75/" },
    { name: "solar-beam", url: "https://pokeapi.co/api/v2/move/76/" },
    { name: "stun-spore", url: "https://pokeapi.co/api/v2/move/78/" },
    { name: "sleep-powder", url: "https://pokeapi.co/api/v2/move/79/" },
    { name: "petal-dance", url: "https://pokeapi.co/api/v2/move/80/" },
    { name: "spore", url: "https://pokeapi.co/api/v2/move/147/" },
    { name: "cotton-spore", url: "https://pokeapi.co/api/v2/move/178/" },
    { name: "giga-drain", url: "https://pokeapi.co/api/v2/move/202/" },
    { name: "synthesis", url: "https://pokeapi.co/api/v2/move/235/" },
    { name: "ingrain", url: "https://pokeapi.co/api/v2/move/275/" },
    { name: "needle-arm", url: "https://pokeapi.co/api/v2/move/302/" },
    { name: "aromatherapy", url: "https://pokeapi.co/api/v2/move/312/" },
    { name: "grass-whistle", url: "https://pokeapi.co/api/v2/move/320/" },
    { name: "bullet-seed", url: "https://pokeapi.co/api/v2/move/331/" },
    { name: "frenzy-plant", url: "https://pokeapi.co/api/v2/move/338/" },
    { name: "magical-leaf", url: "https://pokeapi.co/api/v2/move/345/" },
    { name: "leaf-blade", url: "https://pokeapi.co/api/v2/move/348/" },
    { name: "worry-seed", url: "https://pokeapi.co/api/v2/move/388/" },
    { name: "seed-bomb", url: "https://pokeapi.co/api/v2/move/402/" },
    { name: "energy-ball", url: "https://pokeapi.co/api/v2/move/412/" },
    { name: "leaf-storm", url: "https://pokeapi.co/api/v2/move/437/" },
    { name: "power-whip", url: "https://pokeapi.co/api/v2/move/438/" },
    { name: "grass-knot", url: "https://pokeapi.co/api/v2/move/447/" },
    { name: "wood-hammer", url: "https://pokeapi.co/api/v2/move/452/" },
    { name: "seed-flare", url: "https://pokeapi.co/api/v2/move/465/" },
    { name: "grass-pledge", url: "https://pokeapi.co/api/v2/move/520/" },
    { name: "horn-leech", url: "https://pokeapi.co/api/v2/move/532/" },
    { name: "leaf-tornado", url: "https://pokeapi.co/api/v2/move/536/" },
    { name: "cotton-guard", url: "https://pokeapi.co/api/v2/move/538/" },
    { name: "forests-curse", url: "https://pokeapi.co/api/v2/move/571/" },
    { name: "petal-blizzard", url: "https://pokeapi.co/api/v2/move/572/" },
    { name: "grassy-terrain", url: "https://pokeapi.co/api/v2/move/580/" },
    { name: "spiky-shield", url: "https://pokeapi.co/api/v2/move/596/" },
    {
      name: "bloom-doom--physical",
      url: "https://pokeapi.co/api/v2/move/644/",
    },
    { name: "bloom-doom--special", url: "https://pokeapi.co/api/v2/move/645/" },
    { name: "strength-sap", url: "https://pokeapi.co/api/v2/move/668/" },
    { name: "solar-blade", url: "https://pokeapi.co/api/v2/move/669/" },
    { name: "leafage", url: "https://pokeapi.co/api/v2/move/670/" },
    { name: "trop-kick", url: "https://pokeapi.co/api/v2/move/688/" },
    { name: "sappy-seed", url: "https://pokeapi.co/api/v2/move/738/" },
    { name: "max-overgrowth", url: "https://pokeapi.co/api/v2/move/773/" },
    { name: "drum-beating", url: "https://pokeapi.co/api/v2/move/778/" },
    { name: "snap-trap", url: "https://pokeapi.co/api/v2/move/779/" },
    { name: "branch-poke", url: "https://pokeapi.co/api/v2/move/785/" },
    { name: "apple-acid", url: "https://pokeapi.co/api/v2/move/787/" },
    { name: "grav-apple", url: "https://pokeapi.co/api/v2/move/788/" },
    { name: "grassy-glide", url: "https://pokeapi.co/api/v2/move/803/" },
    { name: "jungle-healing", url: "https://pokeapi.co/api/v2/move/816/" },
  ],
  name: "grass",
  names: [
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "くさ",
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      name: "풀",
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      name: "草",
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      name: "Plante",
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      name: "Pflanze",
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      name: "Planta",
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      name: "Erba",
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Grass",
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      name: "くさ",
    },
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      name: "草",
    },
  ],
  past_damage_relations: [],
  pokemon: [
    {
      pokemon: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      slot: 1,
    },
    {
      pokemon: {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "oddish", url: "https://pokeapi.co/api/v2/pokemon/43/" },
      slot: 1,
    },
    {
      pokemon: { name: "gloom", url: "https://pokeapi.co/api/v2/pokemon/44/" },
      slot: 1,
    },
    {
      pokemon: {
        name: "vileplume",
        url: "https://pokeapi.co/api/v2/pokemon/45/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "paras", url: "https://pokeapi.co/api/v2/pokemon/46/" },
      slot: 2,
    },
    {
      pokemon: {
        name: "parasect",
        url: "https://pokeapi.co/api/v2/pokemon/47/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "bellsprout",
        url: "https://pokeapi.co/api/v2/pokemon/69/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "weepinbell",
        url: "https://pokeapi.co/api/v2/pokemon/70/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "victreebel",
        url: "https://pokeapi.co/api/v2/pokemon/71/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "exeggcute",
        url: "https://pokeapi.co/api/v2/pokemon/102/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "exeggutor",
        url: "https://pokeapi.co/api/v2/pokemon/103/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "tangela",
        url: "https://pokeapi.co/api/v2/pokemon/114/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "chikorita",
        url: "https://pokeapi.co/api/v2/pokemon/152/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "bayleef",
        url: "https://pokeapi.co/api/v2/pokemon/153/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "meganium",
        url: "https://pokeapi.co/api/v2/pokemon/154/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "bellossom",
        url: "https://pokeapi.co/api/v2/pokemon/182/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "hoppip",
        url: "https://pokeapi.co/api/v2/pokemon/187/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "skiploom",
        url: "https://pokeapi.co/api/v2/pokemon/188/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "jumpluff",
        url: "https://pokeapi.co/api/v2/pokemon/189/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sunkern",
        url: "https://pokeapi.co/api/v2/pokemon/191/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sunflora",
        url: "https://pokeapi.co/api/v2/pokemon/192/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "celebi",
        url: "https://pokeapi.co/api/v2/pokemon/251/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "treecko",
        url: "https://pokeapi.co/api/v2/pokemon/252/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "grovyle",
        url: "https://pokeapi.co/api/v2/pokemon/253/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sceptile",
        url: "https://pokeapi.co/api/v2/pokemon/254/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "lotad", url: "https://pokeapi.co/api/v2/pokemon/270/" },
      slot: 2,
    },
    {
      pokemon: {
        name: "lombre",
        url: "https://pokeapi.co/api/v2/pokemon/271/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "ludicolo",
        url: "https://pokeapi.co/api/v2/pokemon/272/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "seedot",
        url: "https://pokeapi.co/api/v2/pokemon/273/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "nuzleaf",
        url: "https://pokeapi.co/api/v2/pokemon/274/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "shiftry",
        url: "https://pokeapi.co/api/v2/pokemon/275/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "shroomish",
        url: "https://pokeapi.co/api/v2/pokemon/285/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "breloom",
        url: "https://pokeapi.co/api/v2/pokemon/286/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "roselia",
        url: "https://pokeapi.co/api/v2/pokemon/315/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "cacnea",
        url: "https://pokeapi.co/api/v2/pokemon/331/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "cacturne",
        url: "https://pokeapi.co/api/v2/pokemon/332/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "lileep",
        url: "https://pokeapi.co/api/v2/pokemon/345/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "cradily",
        url: "https://pokeapi.co/api/v2/pokemon/346/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "tropius",
        url: "https://pokeapi.co/api/v2/pokemon/357/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "turtwig",
        url: "https://pokeapi.co/api/v2/pokemon/387/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "grotle",
        url: "https://pokeapi.co/api/v2/pokemon/388/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "torterra",
        url: "https://pokeapi.co/api/v2/pokemon/389/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "budew", url: "https://pokeapi.co/api/v2/pokemon/406/" },
      slot: 1,
    },
    {
      pokemon: {
        name: "roserade",
        url: "https://pokeapi.co/api/v2/pokemon/407/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "wormadam-plant",
        url: "https://pokeapi.co/api/v2/pokemon/413/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "cherubi",
        url: "https://pokeapi.co/api/v2/pokemon/420/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "cherrim",
        url: "https://pokeapi.co/api/v2/pokemon/421/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "carnivine",
        url: "https://pokeapi.co/api/v2/pokemon/455/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "snover",
        url: "https://pokeapi.co/api/v2/pokemon/459/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "abomasnow",
        url: "https://pokeapi.co/api/v2/pokemon/460/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "tangrowth",
        url: "https://pokeapi.co/api/v2/pokemon/465/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "leafeon",
        url: "https://pokeapi.co/api/v2/pokemon/470/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "shaymin-land",
        url: "https://pokeapi.co/api/v2/pokemon/492/",
      },
      slot: 1,
    },
    {
      pokemon: { name: "snivy", url: "https://pokeapi.co/api/v2/pokemon/495/" },
      slot: 1,
    },
    {
      pokemon: {
        name: "servine",
        url: "https://pokeapi.co/api/v2/pokemon/496/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "serperior",
        url: "https://pokeapi.co/api/v2/pokemon/497/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "pansage",
        url: "https://pokeapi.co/api/v2/pokemon/511/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "simisage",
        url: "https://pokeapi.co/api/v2/pokemon/512/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sewaddle",
        url: "https://pokeapi.co/api/v2/pokemon/540/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "swadloon",
        url: "https://pokeapi.co/api/v2/pokemon/541/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "leavanny",
        url: "https://pokeapi.co/api/v2/pokemon/542/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "cottonee",
        url: "https://pokeapi.co/api/v2/pokemon/546/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "whimsicott",
        url: "https://pokeapi.co/api/v2/pokemon/547/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "petilil",
        url: "https://pokeapi.co/api/v2/pokemon/548/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "lilligant",
        url: "https://pokeapi.co/api/v2/pokemon/549/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "maractus",
        url: "https://pokeapi.co/api/v2/pokemon/556/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "deerling",
        url: "https://pokeapi.co/api/v2/pokemon/585/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "sawsbuck",
        url: "https://pokeapi.co/api/v2/pokemon/586/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "foongus",
        url: "https://pokeapi.co/api/v2/pokemon/590/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "amoonguss",
        url: "https://pokeapi.co/api/v2/pokemon/591/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "ferroseed",
        url: "https://pokeapi.co/api/v2/pokemon/597/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "ferrothorn",
        url: "https://pokeapi.co/api/v2/pokemon/598/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "virizion",
        url: "https://pokeapi.co/api/v2/pokemon/640/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "chespin",
        url: "https://pokeapi.co/api/v2/pokemon/650/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "quilladin",
        url: "https://pokeapi.co/api/v2/pokemon/651/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "chesnaught",
        url: "https://pokeapi.co/api/v2/pokemon/652/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "skiddo",
        url: "https://pokeapi.co/api/v2/pokemon/672/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "gogoat",
        url: "https://pokeapi.co/api/v2/pokemon/673/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "phantump",
        url: "https://pokeapi.co/api/v2/pokemon/708/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "trevenant",
        url: "https://pokeapi.co/api/v2/pokemon/709/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "pumpkaboo-average",
        url: "https://pokeapi.co/api/v2/pokemon/710/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gourgeist-average",
        url: "https://pokeapi.co/api/v2/pokemon/711/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "rowlet",
        url: "https://pokeapi.co/api/v2/pokemon/722/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "dartrix",
        url: "https://pokeapi.co/api/v2/pokemon/723/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "decidueye",
        url: "https://pokeapi.co/api/v2/pokemon/724/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "fomantis",
        url: "https://pokeapi.co/api/v2/pokemon/753/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "lurantis",
        url: "https://pokeapi.co/api/v2/pokemon/754/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "morelull",
        url: "https://pokeapi.co/api/v2/pokemon/755/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "shiinotic",
        url: "https://pokeapi.co/api/v2/pokemon/756/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "bounsweet",
        url: "https://pokeapi.co/api/v2/pokemon/761/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "steenee",
        url: "https://pokeapi.co/api/v2/pokemon/762/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "tsareena",
        url: "https://pokeapi.co/api/v2/pokemon/763/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "dhelmise",
        url: "https://pokeapi.co/api/v2/pokemon/781/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "tapu-bulu",
        url: "https://pokeapi.co/api/v2/pokemon/787/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "kartana",
        url: "https://pokeapi.co/api/v2/pokemon/798/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "grookey",
        url: "https://pokeapi.co/api/v2/pokemon/810/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "thwackey",
        url: "https://pokeapi.co/api/v2/pokemon/811/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "rillaboom",
        url: "https://pokeapi.co/api/v2/pokemon/812/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "gossifleur",
        url: "https://pokeapi.co/api/v2/pokemon/829/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "eldegoss",
        url: "https://pokeapi.co/api/v2/pokemon/830/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "applin",
        url: "https://pokeapi.co/api/v2/pokemon/840/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "flapple",
        url: "https://pokeapi.co/api/v2/pokemon/841/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "appletun",
        url: "https://pokeapi.co/api/v2/pokemon/842/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "zarude",
        url: "https://pokeapi.co/api/v2/pokemon/893/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "calyrex",
        url: "https://pokeapi.co/api/v2/pokemon/898/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "shaymin-sky",
        url: "https://pokeapi.co/api/v2/pokemon/10006/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "rotom-mow",
        url: "https://pokeapi.co/api/v2/pokemon/10012/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "pumpkaboo-small",
        url: "https://pokeapi.co/api/v2/pokemon/10027/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "pumpkaboo-large",
        url: "https://pokeapi.co/api/v2/pokemon/10028/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "pumpkaboo-super",
        url: "https://pokeapi.co/api/v2/pokemon/10029/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gourgeist-small",
        url: "https://pokeapi.co/api/v2/pokemon/10030/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gourgeist-large",
        url: "https://pokeapi.co/api/v2/pokemon/10031/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "gourgeist-super",
        url: "https://pokeapi.co/api/v2/pokemon/10032/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venusaur-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10033/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "abomasnow-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10060/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "sceptile-mega",
        url: "https://pokeapi.co/api/v2/pokemon/10065/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "exeggutor-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10114/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "lurantis-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10128/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "zarude-dada",
        url: "https://pokeapi.co/api/v2/pokemon/10192/",
      },
      slot: 2,
    },
    {
      pokemon: {
        name: "venusaur-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10195/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "rillaboom-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10209/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "flapple-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10216/",
      },
      slot: 1,
    },
    {
      pokemon: {
        name: "appletun-gmax",
        url: "https://pokeapi.co/api/v2/pokemon/10217/",
      },
      slot: 1,
    },
  ],
};

// https://pokeapi.co/api/v2/ability
export const abilities = {
  count: 327,
  next: "https://pokeapi.co/api/v2/ability?offset=20&limit=20",
  previous: null,
  results: [
    { name: "stench", url: "https://pokeapi.co/api/v2/ability/1/" },
    { name: "drizzle", url: "https://pokeapi.co/api/v2/ability/2/" },
    { name: "speed-boost", url: "https://pokeapi.co/api/v2/ability/3/" },
    { name: "battle-armor", url: "https://pokeapi.co/api/v2/ability/4/" },
    { name: "sturdy", url: "https://pokeapi.co/api/v2/ability/5/" },
    { name: "damp", url: "https://pokeapi.co/api/v2/ability/6/" },
    { name: "limber", url: "https://pokeapi.co/api/v2/ability/7/" },
    { name: "sand-veil", url: "https://pokeapi.co/api/v2/ability/8/" },
    { name: "static", url: "https://pokeapi.co/api/v2/ability/9/" },
    { name: "volt-absorb", url: "https://pokeapi.co/api/v2/ability/10/" },
    { name: "water-absorb", url: "https://pokeapi.co/api/v2/ability/11/" },
    { name: "oblivious", url: "https://pokeapi.co/api/v2/ability/12/" },
    { name: "cloud-nine", url: "https://pokeapi.co/api/v2/ability/13/" },
    { name: "compound-eyes", url: "https://pokeapi.co/api/v2/ability/14/" },
    { name: "insomnia", url: "https://pokeapi.co/api/v2/ability/15/" },
    { name: "color-change", url: "https://pokeapi.co/api/v2/ability/16/" },
    { name: "immunity", url: "https://pokeapi.co/api/v2/ability/17/" },
    { name: "flash-fire", url: "https://pokeapi.co/api/v2/ability/18/" },
    { name: "shield-dust", url: "https://pokeapi.co/api/v2/ability/19/" },
    { name: "own-tempo", url: "https://pokeapi.co/api/v2/ability/20/" },
  ],
};

// https://pokeapi.co/api/v2/ability/sturdy
export const abilitySturdy = {
  effect_changes: [
    {
      effect_entries: [
        {
          effect: "Verhindert keine regulären K.O. bei vollen hp.",
          language: {
            name: "de",
            url: "https://pokeapi.co/api/v2/language/6/",
          },
        },
        {
          effect: "Does not prevent regular KOs from full HP.",
          language: {
            name: "en",
            url: "https://pokeapi.co/api/v2/language/9/",
          },
        },
      ],
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
  ],
  effect_entries: [
    {
      effect:
        "Wenn das Pokémon volle hp hat, lässt jeder Treffer der das Pokémon besiegt hätte ein hp übrig. Das Pokémon ist immun gegen die K.O.-Attacken fissure, guillotine, horn drill und sheer cold.\n\nHält das Pokémon ein focus sash, hat die Fähigkeit Vorrang und das Item wird nicht verbraucht.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      short_effect:
        "Verhindert K.O.-Treffer bei vollen hp, das Pokémon behält 1 hp. Schützt gegen K.O.-Attacken.",
    },
    {
      effect:
        "When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      short_effect:
        "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
    },
  ],
  flavor_text_entries: [
    {
      flavor_text: "Negates 1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "ruby-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/5/",
      },
    },
    {
      flavor_text: "Negates 1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version-group/6/",
      },
    },
    {
      flavor_text: "Negates 1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "firered-leafgreen",
        url: "https://pokeapi.co/api/v2/version-group/7/",
      },
    },
    {
      flavor_text: "The Pokémon is protected\nagainst 1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "diamond-pearl",
        url: "https://pokeapi.co/api/v2/version-group/8/",
      },
    },
    {
      flavor_text: "The Pokémon is protected\nagainst 1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version-group/9/",
      },
    },
    {
      flavor_text: "It is protected against\n1-hit KO attacks.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "heartgold-soulsilver",
        url: "https://pokeapi.co/api/v2/version-group/10/",
      },
    },
    {
      flavor_text: "Protège des capacités\nmettant K.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      flavor_text: "It cannot be knocked\nout with one hit.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "black-white",
        url: "https://pokeapi.co/api/v2/version-group/11/",
      },
    },
    {
      flavor_text: "It cannot be knocked\nout with one hit.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "black-2-white-2",
        url: "https://pokeapi.co/api/v2/version-group/14/",
      },
    },
    {
      flavor_text: "いちげきで\nたおされない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "일격으로\n쓰러지지 않는다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Protège des capacités mettant\nK.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Bietet Schutz gegen K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Evita que el rival pueda debilitarle\nde un solo golpe.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "Evita che il Pokémon vada KO\nin un sol colpo.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "It cannot be knocked\nout with one hit.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "一撃で　倒されない。\n",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "x-y",
        url: "https://pokeapi.co/api/v2/version-group/15/",
      },
    },
    {
      flavor_text: "いちげきで\nたおされない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "일격으로\n쓰러지지 않는다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Protège des capacités mettant\nK.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Bietet Schutz gegen K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Evita que el rival pueda debilitarle\nde un solo golpe.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "Evita che il Pokémon vada KO\nin un sol colpo.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "It cannot be knocked\nout with one hit.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text: "一撃で　倒されない。\n",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "omega-ruby-alpha-sapphire",
        url: "https://pokeapi.co/api/v2/version-group/16/",
      },
    },
    {
      flavor_text:
        "あいての　わざを　うけても\nいちげきで　たおされることが　ない。\nいちげきひっさつわざも　きかない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "상대 기술을 받아도\n일격으로 쓰러지지 않는다.\n일격필살 기술도 효과 없다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "受到對手的招式攻擊時\n不會被一擊打倒。\n一擊必殺的招式也沒有效果。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "Le Pokémon encaisse toujours au moins une attaque\ns’il a tous ses PV. Il est également immunisé contre\nles capacités pouvant mettre K.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP\nübersteht das Pokémon auch K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "Evita que el rival pueda debilitarlo de un solo golpe\ncuando tiene los PS al máximo.\nTambién anula los movimientos fulminantes.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "Se il Pokémon ha tutti i PS, evita che vada KO\nin un sol colpo. Inoltre, è immune alle mosse\nche causano KO immediato.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "It cannot be knocked out with one hit. One-hit KO\nmoves cannot knock it out, either.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "相手の　技を　受けても\n一撃で　倒されることが　ない。\n一撃必殺技も　効かない。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "即使受到对手的招式攻击，\n也不会被一击打倒。\n一击必杀的招式也没有效果。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "sun-moon",
        url: "https://pokeapi.co/api/v2/version-group/17/",
      },
    },
    {
      flavor_text:
        "あいての　わざを　うけても\nいちげきで　たおされることが　ない。\nいちげきひっさつわざも　きかない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "상대 기술을 받아도\n일격으로 쓰러지지 않는다.\n일격필살 기술도 효과 없다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "受到對手的招式攻擊時\n不會被一擊打倒。\n一擊必殺的招式也沒有效果。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "Le Pokémon encaisse toujours au moins une attaque\ns’il a tous ses PV. Il est également immunisé contre\nles capacités pouvant mettre K.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP\nübersteht das Pokémon auch K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "Evita que el rival pueda debilitarlo de un solo golpe\ncuando tiene los PS al máximo.\nTambién anula los movimientos fulminantes.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "Se il Pokémon ha tutti i PS, evita che vada KO\nin un sol colpo. Inoltre, è immune alle mosse\nche causano KO immediato.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "It cannot be knocked out with one hit. One-hit KO\nmoves cannot knock it out, either.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "相手の　技を　受けても\n一撃で　倒されることが　ない。\n一撃必殺技も　効かない。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "即使受到对手的招式攻击，\n也不会被一击打倒。\n一击必杀的招式也没有效果。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "ultra-sun-ultra-moon",
        url: "https://pokeapi.co/api/v2/version-group/18/",
      },
    },
    {
      flavor_text:
        "あいての　わざを　うけても\nいちげきで　たおされることが　ない。\nいちげきひっさつわざも　きかない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "상대 기술을 받아도\n일격으로 쓰러지지 않는다.\n일격필살 기술도 효과 없다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "受到對手的招式攻擊時\n不會被一擊打倒。\n一擊必殺的招式也沒有效果。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "Le Pokémon encaisse toujours au moins une attaque\ns’il a tous ses PV. Il est également immunisé contre\nles capacités pouvant mettre K.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP\nübersteht das Pokémon auch K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "Evita que el rival pueda debilitarlo de un solo golpe\ncuando tiene los PS al máximo.\nTambién anula los movimientos fulminantes.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "Se il Pokémon ha tutti i PS, evita che vada KO\nin un sol colpo. Inoltre, è immune alle mosse\nche causano KO immediato.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "It cannot be knocked out with one hit. One-hit KO\nmoves cannot knock it out, either.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "相手の　技を　受けても\n一撃で　倒されることが　ない。\n一撃必殺技も　効かない。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "即使受到对手的招式攻击，\n也不会被一击打倒。\n一击必杀的招式也没有效果。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "lets-go-pikachu-lets-go-eevee",
        url: "https://pokeapi.co/api/v2/version-group/19/",
      },
    },
    {
      flavor_text:
        "あいての　わざを　うけても\nいちげきで　たおされることが　ない。\nいちげきひっさつわざも　きかない。",
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "상대 기술을 받아도\n일격으로 쓰러지지 않는다.\n일격필살 기술도 효과 없다.",
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "受到對手的招式攻擊時\n不會被一擊打倒。\n一擊必殺的招式也沒有效果。",
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "Le Pokémon encaisse toujours au moins une attaque\ns’il a tous ses PV. Il est également immunisé contre\nles capacités pouvant mettre K.O. en un coup.",
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "Bietet Schutz gegen K.O.-Attacken. Bei vollen KP\nübersteht das Pokémon auch K.O.-Treffer.",
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "Evita que el rival pueda debilitarlo de un solo golpe\ncuando tiene los PS al máximo.\nTambién evita los movimientos fulminantes.",
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "Evita che il Pokémon vada KO in un sol colpo se ha\ntutti i PS, e lo rende immune alle mosse che causano\nKO immediato.",
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "It cannot be knocked out with one hit. One-hit KO\nmoves cannot knock it out, either.",
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "相手の　技を　受けても\n一撃で　倒されることが　ない。\n一撃必殺技も　効かない。",
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
    {
      flavor_text:
        "即使受到对手的招式攻击，\n也不会被一击打倒。\n一击必杀的招式也没有效果。",
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      version_group: {
        name: "sword-shield",
        url: "https://pokeapi.co/api/v2/version-group/20/",
      },
    },
  ],
  generation: {
    name: "generation-iii",
    url: "https://pokeapi.co/api/v2/generation/3/",
  },
  id: 5,
  is_main_series: true,
  name: "sturdy",
  names: [
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "がんじょう",
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      name: "옹골참",
    },
    {
      language: {
        name: "zh-Hant",
        url: "https://pokeapi.co/api/v2/language/4/",
      },
      name: "結實",
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      name: "Fermeté",
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      name: "Robustheit",
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      name: "Robustez",
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      name: "Vigore",
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Sturdy",
    },
    {
      language: { name: "ja", url: "https://pokeapi.co/api/v2/language/11/" },
      name: "がんじょう",
    },
    {
      language: {
        name: "zh-Hans",
        url: "https://pokeapi.co/api/v2/language/12/",
      },
      name: "结实",
    },
  ],
  pokemon: [
    {
      is_hidden: false,
      pokemon: {
        name: "geodude",
        url: "https://pokeapi.co/api/v2/pokemon/74/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "graveler",
        url: "https://pokeapi.co/api/v2/pokemon/75/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: { name: "golem", url: "https://pokeapi.co/api/v2/pokemon/76/" },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "magnemite",
        url: "https://pokeapi.co/api/v2/pokemon/81/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "magneton",
        url: "https://pokeapi.co/api/v2/pokemon/82/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: { name: "onix", url: "https://pokeapi.co/api/v2/pokemon/95/" },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "sudowoodo",
        url: "https://pokeapi.co/api/v2/pokemon/185/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "pineco",
        url: "https://pokeapi.co/api/v2/pokemon/204/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "forretress",
        url: "https://pokeapi.co/api/v2/pokemon/205/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "steelix",
        url: "https://pokeapi.co/api/v2/pokemon/208/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "shuckle",
        url: "https://pokeapi.co/api/v2/pokemon/213/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "skarmory",
        url: "https://pokeapi.co/api/v2/pokemon/227/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "donphan",
        url: "https://pokeapi.co/api/v2/pokemon/232/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "nosepass",
        url: "https://pokeapi.co/api/v2/pokemon/299/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: { name: "aron", url: "https://pokeapi.co/api/v2/pokemon/304/" },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "lairon",
        url: "https://pokeapi.co/api/v2/pokemon/305/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "aggron",
        url: "https://pokeapi.co/api/v2/pokemon/306/",
      },
      slot: 1,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "relicanth",
        url: "https://pokeapi.co/api/v2/pokemon/369/",
      },
      slot: 3,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "regirock",
        url: "https://pokeapi.co/api/v2/pokemon/377/",
      },
      slot: 3,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "shieldon",
        url: "https://pokeapi.co/api/v2/pokemon/410/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "bastiodon",
        url: "https://pokeapi.co/api/v2/pokemon/411/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "bonsly",
        url: "https://pokeapi.co/api/v2/pokemon/438/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "magnezone",
        url: "https://pokeapi.co/api/v2/pokemon/462/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "probopass",
        url: "https://pokeapi.co/api/v2/pokemon/476/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "roggenrola",
        url: "https://pokeapi.co/api/v2/pokemon/524/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "boldore",
        url: "https://pokeapi.co/api/v2/pokemon/525/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "gigalith",
        url: "https://pokeapi.co/api/v2/pokemon/526/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: { name: "sawk", url: "https://pokeapi.co/api/v2/pokemon/539/" },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "dwebble",
        url: "https://pokeapi.co/api/v2/pokemon/557/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "crustle",
        url: "https://pokeapi.co/api/v2/pokemon/558/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "tirtouga",
        url: "https://pokeapi.co/api/v2/pokemon/564/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "carracosta",
        url: "https://pokeapi.co/api/v2/pokemon/565/",
      },
      slot: 2,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "tyrunt",
        url: "https://pokeapi.co/api/v2/pokemon/696/",
      },
      slot: 3,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "carbink",
        url: "https://pokeapi.co/api/v2/pokemon/703/",
      },
      slot: 3,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "bergmite",
        url: "https://pokeapi.co/api/v2/pokemon/712/",
      },
      slot: 3,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "avalugg",
        url: "https://pokeapi.co/api/v2/pokemon/713/",
      },
      slot: 3,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "togedemaru",
        url: "https://pokeapi.co/api/v2/pokemon/777/",
      },
      slot: 3,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "cosmoem",
        url: "https://pokeapi.co/api/v2/pokemon/790/",
      },
      slot: 1,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "geodude-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10109/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "graveler-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10110/",
      },
      slot: 2,
    },
    {
      is_hidden: false,
      pokemon: {
        name: "golem-alola",
        url: "https://pokeapi.co/api/v2/pokemon/10111/",
      },
      slot: 2,
    },
    {
      is_hidden: true,
      pokemon: {
        name: "togedemaru-totem",
        url: "https://pokeapi.co/api/v2/pokemon/10154/",
      },
      slot: 3,
    },
  ],
};

// https://pokeapi.co/api/v2/stat/
export const stats = {
  count: 8,
  next: null,
  previous: null,
  results: [
    { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
    { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
    { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
    { name: "special-attack", url: "https://pokeapi.co/api/v2/stat/4/" },
    { name: "special-defense", url: "https://pokeapi.co/api/v2/stat/5/" },
    { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
    { name: "accuracy", url: "https://pokeapi.co/api/v2/stat/7/" },
    { name: "evasion", url: "https://pokeapi.co/api/v2/stat/8/" },
  ],
};

// https://pokeapi.co/api/v2/stat/attack
export const stat2 = {
  affecting_moves: {
    decrease: [
      {
        change: -1,
        move: { name: "growl", url: "https://pokeapi.co/api/v2/move/45/" },
      },
      {
        change: -1,
        move: {
          name: "aurora-beam",
          url: "https://pokeapi.co/api/v2/move/62/",
        },
      },
      {
        change: -2,
        move: { name: "charm", url: "https://pokeapi.co/api/v2/move/204/" },
      },
      {
        change: -1,
        move: {
          name: "superpower",
          url: "https://pokeapi.co/api/v2/move/276/",
        },
      },
      {
        change: -2,
        move: {
          name: "feather-dance",
          url: "https://pokeapi.co/api/v2/move/297/",
        },
      },
      {
        change: -1,
        move: { name: "tickle", url: "https://pokeapi.co/api/v2/move/321/" },
      },
      {
        change: -1,
        move: {
          name: "noble-roar",
          url: "https://pokeapi.co/api/v2/move/568/",
        },
      },
      {
        change: -1,
        move: {
          name: "parting-shot",
          url: "https://pokeapi.co/api/v2/move/575/",
        },
      },
      {
        change: -1,
        move: {
          name: "play-rough",
          url: "https://pokeapi.co/api/v2/move/583/",
        },
      },
      {
        change: -1,
        move: { name: "play-nice", url: "https://pokeapi.co/api/v2/move/589/" },
      },
      {
        change: -1,
        move: {
          name: "venom-drench",
          url: "https://pokeapi.co/api/v2/move/599/",
        },
      },
      {
        change: -1,
        move: {
          name: "baby-doll-eyes",
          url: "https://pokeapi.co/api/v2/move/608/",
        },
      },
      {
        change: -1,
        move: {
          name: "strength-sap",
          url: "https://pokeapi.co/api/v2/move/668/",
        },
      },
      {
        change: -1,
        move: { name: "lunge", url: "https://pokeapi.co/api/v2/move/679/" },
      },
      {
        change: -1,
        move: { name: "trop-kick", url: "https://pokeapi.co/api/v2/move/688/" },
      },
      {
        change: -1,
        move: {
          name: "tearful-look",
          url: "https://pokeapi.co/api/v2/move/715/",
        },
      },
      {
        change: -1,
        move: {
          name: "breaking-swipe",
          url: "https://pokeapi.co/api/v2/move/784/",
        },
      },
    ],
    increase: [
      {
        change: 2,
        move: {
          name: "swords-dance",
          url: "https://pokeapi.co/api/v2/move/14/",
        },
      },
      {
        change: 1,
        move: { name: "growth", url: "https://pokeapi.co/api/v2/move/74/" },
      },
      {
        change: 1,
        move: { name: "meditate", url: "https://pokeapi.co/api/v2/move/96/" },
      },
      {
        change: 1,
        move: { name: "sharpen", url: "https://pokeapi.co/api/v2/move/159/" },
      },
      {
        change: 2,
        move: { name: "swagger", url: "https://pokeapi.co/api/v2/move/207/" },
      },
      {
        change: 1,
        move: {
          name: "metal-claw",
          url: "https://pokeapi.co/api/v2/move/232/",
        },
      },
      {
        change: 1,
        move: {
          name: "ancient-power",
          url: "https://pokeapi.co/api/v2/move/246/",
        },
      },
      {
        change: 1,
        move: {
          name: "meteor-mash",
          url: "https://pokeapi.co/api/v2/move/309/",
        },
      },
      {
        change: 1,
        move: {
          name: "silver-wind",
          url: "https://pokeapi.co/api/v2/move/318/",
        },
      },
      {
        change: 1,
        move: { name: "howl", url: "https://pokeapi.co/api/v2/move/336/" },
      },
      {
        change: 1,
        move: { name: "bulk-up", url: "https://pokeapi.co/api/v2/move/339/" },
      },
      {
        change: 1,
        move: {
          name: "dragon-dance",
          url: "https://pokeapi.co/api/v2/move/349/",
        },
      },
      {
        change: 1,
        move: {
          name: "ominous-wind",
          url: "https://pokeapi.co/api/v2/move/466/",
        },
      },
      {
        change: 1,
        move: {
          name: "hone-claws",
          url: "https://pokeapi.co/api/v2/move/468/",
        },
      },
      {
        change: 1,
        move: { name: "coil", url: "https://pokeapi.co/api/v2/move/489/" },
      },
      {
        change: 1,
        move: {
          name: "shift-gear",
          url: "https://pokeapi.co/api/v2/move/508/",
        },
      },
      {
        change: 1,
        move: { name: "work-up", url: "https://pokeapi.co/api/v2/move/526/" },
      },
      {
        change: 1,
        move: {
          name: "rototiller",
          url: "https://pokeapi.co/api/v2/move/563/",
        },
      },
      {
        change: 1,
        move: {
          name: "power-up-punch",
          url: "https://pokeapi.co/api/v2/move/612/",
        },
      },
      {
        change: 1,
        move: { name: "gear-up", url: "https://pokeapi.co/api/v2/move/674/" },
      },
      {
        change: 2,
        move: {
          name: "extreme-evoboost",
          url: "https://pokeapi.co/api/v2/move/702/",
        },
      },
      {
        change: 1,
        move: {
          name: "clangorous-soulblaze",
          url: "https://pokeapi.co/api/v2/move/728/",
        },
      },
      {
        change: 1,
        move: {
          name: "no-retreat",
          url: "https://pokeapi.co/api/v2/move/748/",
        },
      },
      {
        change: 1,
        move: {
          name: "clangorous-soul",
          url: "https://pokeapi.co/api/v2/move/775/",
        },
      },
      {
        change: 2,
        move: { name: "decorate", url: "https://pokeapi.co/api/v2/move/777/" },
      },
      {
        change: 1,
        move: { name: "coaching", url: "https://pokeapi.co/api/v2/move/811/" },
      },
    ],
  },
  affecting_natures: {
    decrease: [
      { name: "bold", url: "https://pokeapi.co/api/v2/nature/2/" },
      { name: "modest", url: "https://pokeapi.co/api/v2/nature/3/" },
      { name: "calm", url: "https://pokeapi.co/api/v2/nature/4/" },
      { name: "timid", url: "https://pokeapi.co/api/v2/nature/5/" },
    ],
    increase: [
      { name: "lonely", url: "https://pokeapi.co/api/v2/nature/6/" },
      { name: "adamant", url: "https://pokeapi.co/api/v2/nature/11/" },
      { name: "naughty", url: "https://pokeapi.co/api/v2/nature/17/" },
      { name: "brave", url: "https://pokeapi.co/api/v2/nature/21/" },
    ],
  },
  characteristics: [
    { url: "https://pokeapi.co/api/v2/characteristic/2/" },
    { url: "https://pokeapi.co/api/v2/characteristic/8/" },
    { url: "https://pokeapi.co/api/v2/characteristic/14/" },
    { url: "https://pokeapi.co/api/v2/characteristic/20/" },
    { url: "https://pokeapi.co/api/v2/characteristic/26/" },
  ],
  game_index: 2,
  id: 2,
  is_battle_only: false,
  move_damage_class: {
    name: "physical",
    url: "https://pokeapi.co/api/v2/move-damage-class/2/",
  },
  name: "attack",
  names: [
    {
      language: {
        name: "ja-Hrkt",
        url: "https://pokeapi.co/api/v2/language/1/",
      },
      name: "こうげき",
    },
    {
      language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
      name: "공격",
    },
    {
      language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
      name: "Attaque",
    },
    {
      language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
      name: "Angriff",
    },
    {
      language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
      name: "Ataque",
    },
    {
      language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
      name: "Attacco",
    },
    {
      language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
      name: "Attack",
    },
  ],
};
