const promptData = [
  {
    category: "Fantasy & Sci-Fi",
    prompts: [
      "A dragon flying over a volcanic mountain at sunset",
      "A sorcerer casting a spell in an ancient library",
      "A futuristic robot exploring a jungle",
      "A magical castle floating in the clouds",
      "A steampunk city powered by gears and steam",
      "An alien marketplace on a distant planet",
      "A cyberpunk warrior with neon lights in the rain",
      "A time traveler walking through different eras at once"
    ]
  },
  {
    category: "Nature & Landscape",
    prompts: [
      "A mountain range under the northern lights",
      "A peaceful river flowing through a golden forest",
      "A bamboo forest in the rain",
      "A desert with glowing crystals at night",
      "A frozen waterfall sparkling under moonlight",
      "A hidden cave with glowing bioluminescent plants",
      "A sunrise over endless lavender fields",
      "A stormy ocean with lightning striking waves"
    ]
  },
  {
    category: "Architecture & Cities",
    prompts: [
      "A futuristic city with floating highways",
      "An ancient temple hidden deep in the jungle",
      "A glass bridge between two skyscrapers in the clouds",
      "A medieval village with cobblestone streets",
      "A neon-lit cyberpunk alley",
      "A city built entirely on water",
      "A hidden underground metropolis",
      "A castle carved inside a giant mountain"
    ]
  },
  {
    category: "Creatures & Characters",
    prompts: [
      "A phoenix rising from ashes in the night sky",
      "A knight in glowing armor fighting a shadow beast",
      "A mermaid sitting on glowing corals",
      "A giant golem protecting an ancient forest",
      "A shapeshifter halfway between forms",
      "A fairy gathering starlight in a bottle",
      "A samurai with a flaming sword",
      "A pirate ship haunted by ghostly figures"
    ]
  },
  {
    category: "Mythology & Legends",
    prompts: [
      "Zeus holding thunder in his hand",
      "Medusa in her stone garden",
      "A Viking ship sailing into the mist",
      "Anubis guarding the gates of the underworld",
      "A centaur running through an enchanted forest",
      "A giant Kraken attacking a ship",
      "A golden temple of the sun god",
      "A hero battling a hydra under the moonlight"
    ]
  },
  {
    category: "Outer Space",
    prompts: [
      "An astronaut walking on a colorful alien planet",
      "A black hole devouring stars",
      "A space station orbiting Saturn",
      "A galaxy filled with glowing nebulae",
      "A spaceship entering hyperspace",
      "A cosmic battle between starships",
      "An alien jungle under two suns",
      "A crystal planet reflecting starlight"
    ]
  },
  {
    category: "Dreams & Surrealism",
    prompts: [
      "A staircase leading into the clouds",
      "A city floating upside down",
      "A giant clock melting in the desert",
      "A train running on water",
      "A floating island with a tree of light",
      "A man walking through a door into another dimension",
      "A mirror reflecting another universe",
      "A surreal landscape made of glass mountains"
    ]
  },
  {
    category: "Horror & Dark",
    prompts: [
      "A haunted mansion under a blood moon",
      "A ghostly figure standing in the fog",
      "A scarecrow coming alive in a cornfield",
      "A vampire castle in the middle of a storm",
      "A dark forest with glowing red eyes",
      "A cursed doll sitting on a chair",
      "A witch’s cauldron bubbling with green smoke",
      "An abandoned hospital filled with shadows"
    ]
  },
  {
    category: "Underwater World",
    prompts: [
      "A glowing coral reef full of colorful fish",
      "A sunken ship guarded by sharks",
      "A mermaid kingdom deep in the ocean",
      "A whale swimming near glowing jellyfish",
      "An underwater volcano erupting",
      "A scuba diver exploring a lost city",
      "A treasure chest guarded by octopus",
      "A giant sea turtle swimming through ruins"
    ]
  },
  {
    category: "Historical & Culture",
    prompts: [
      "An ancient Roman gladiator arena",
      "A samurai meditating under cherry blossoms",
      "An Egyptian pyramid glowing under stars",
      "A medieval knight’s tournament",
      "A Native American village near a river",
      "An old library filled with ancient scrolls",
      "A traditional Chinese dragon dance",
      "A renaissance painter working on a masterpiece"
    ]
  }
];

const imageStylesData = [
  {
    title: "Cyberpunk",
    description: "Futuristic neon visuals, glowing lights, dark cityscapes with high-tech and low-life aesthetics.",
    image: "/assets/styles/cyberpunk.jpeg"
  },
  {
    title: "Anime",
    description: "Colorful, stylized art inspired by Japanese animation, often featuring expressive characters and vibrant settings.",
    image: "/assets/styles/anime.jpeg"
  },
  {
    title: "Fantasy Art",
    description: "Imaginative worlds filled with mythical creatures, magical landscapes, and epic adventures.",
    image: "/assets/styles/fantasy.jpeg"
  },
  {
    title: "Realism",
    description: "Highly detailed and lifelike imagery that closely resembles real-world photography.",
    image: "/assets/styles/realism.jpeg"
  },
  {
    title: "Pixel Art",
    description: "Retro-style digital art created with tiny square pixels, often reminiscent of classic video games.",
    image: "/assets/styles/pixelart.jpeg"
  },
  {
    title: "Watercolor",
    description: "Soft, flowing brush strokes and blended colors that resemble traditional watercolor paintings.",
    image: "/assets/styles/watercolor.jpeg"
  }
];



export {promptData, imageStylesData}