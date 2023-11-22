// Add a new food emoji and it will automatically populate to the App!

const emojipedia = [
  {
    id: 1,
    emoji: "🍱",
    name: "Bento Box",
    meaning:
      "A Japanese bento, a lunch box divided into portions of rice, vegetables, and meat or seafood, such as sushi or fried shrimp."
  },

  {
    id: 2,
    emoji: "🍚",
    name: "Cooked Rice",
    meaning:
      "A bowl of steamed white rice, a staple component of cuisine throughout Asia. Bowl color varies across platforms, though is often white."
  },

  {
    id: 3,
    emoji: "🍛",
    name: "Curry Rice",
    meaning:
      "A plate of orange-brown curry with vegetables or meat, served with a mound of white rice. May represent kare-raisu, or Japanese curry, though commonly associated with India and other Asian cuisines."
  },

  {
    id: 4,
    emoji: "🍡",
    name: "Dango",
    meaning:
      "A Japanese sweet dumpling made from rice flour and served on a skewer. Depicted as a botchan dango, comprising a pink, white or light yellow, and green ball, as colored by red beans, egg, and green tea. Resembles the Oden and featured in the Moon Viewing Ceremony, used in the Japanese festival to celebrate the full moon. "
  },

  {
    id: 5,
    emoji: "🥟",
    name: "Dumpling",
    meaning:
      "A dumpling of dough and filling, as folded and pinched closed for steaming or frying. Associated with cuisines around the world, including China (jiaozi), Japan (gyoza or dango), Poland (pierogi), and Spain and Latin America (empanada). Facebook's design resembles a xiaolongbao, a Chinese soup dumpling."
  },

  {
    id: 6,
    emoji: "🍥",
    name: "Fish Cake with Swirl",
    meaning:
      "A slice of Japanese narutomaki, a ridged fishcake of processed whitefish with an iconic pink swirl, often served in ramen or oden. Thanks to its distinct swirl, may be used for flair."
  },

  {
    id: 7,
    emoji: "🥠",
    name: "Fortune Cookie",
    meaning:
      "A golden-brown, crescent-shaped, vanilla-flavored fortune cookie. Usually depicted with a strip of paper—on which a wise saying, lucky numbers, or Chinese vocabulary is written—peaking out of its hollow shell. Given at the end of meals at Chinese restaurants in the West."
  },

  {
    id: 8,
    emoji: "🍤",
    name: "Fried Shrimp",
    meaning:
      "A prawn or shrimp breaded and deep-fried golden-brown. Known as ebi furai in Japan but commonly called shrimp tempura and served in a bento box. Not to be confused with the Shrimp."
  },

  {
    id: 9,
    emoji: "🥮",
    name: "Moon Cake",
    meaning:
      "The round, golden-brown pastry of a Chinese mooncake, a traditional delicacy and lunar symbol of the Mid-Autumn Festival. Many platforms feature a design or character imprinted on the crust, and depict a slice cut out to show a brown paste with a duck egg yolk inside. Twitter displays the Chinese character for “fall/autumn” or “harvest” (秋) on top."
  },

  {
    id: 10,
    emoji: "🍢",
    name: "Oden",
    meaning:
      "A skewer of three bites of Japanese oden, a winter dish made with fishcakes, tofu, konnyaku, and a variety of other ingredients, including boiled eggs. Often served as a stew or skewered and dipped into soy sauce. Resembles the Dango and may be used for other skewered foods (e.g., shish kebab, roasting marshmallows) or spears."
  },

  {
    id: 11,
    emoji: "🍙",
    name: "Rice Ball",
    meaning:
      "A Japanese onigiri, a cone-shaped ball of white rice, a snack wrapped with a sheet of nori, or seaweed."
  },

  {
    id: 12,
    emoji: "🍘",
    name: "Rice Cracker",
    meaning:
      "A Japanese senbei, or rice cracker, wrapped with a sheet of nori, or seaweed, a snack commonly enjoyed with green tea."
  },

  {
    id: 13,
    emoji: "🍠",
    name: "Roasted Sweet Potato",
    meaning:
      "A sweet potato depicted with textured purple, orange, or brown skin and sliced in half to show its golden-brown flesh. Sometimes called a yam, though they are unrelated. Not to be confused with the Potato. Commonly roasted as a snack in East Asia during winter, much as squash and pumpkin are popular in the United States during fall/autumn. Used as an offering to the full moon in Japan during the Moon Viewing harvest festival."
  },

  {
    id: 14,
    emoji: "🍶",
    name: "Sake",
    meaning:
      "Japanese sake, an alcoholic beverage made from rice. Shown as a sake set with a carafe (tokkuri) and drinking cup (choko). Color varies widely by platform, with Apple, WhatsApp, and Twitter featuring blue, a traditional ceramic color. Samsung displays the Japanese script for “sake” in red."
  },

  {
    id: 15,
    emoji: "🍜",
    name: "Steaming Bowl",
    meaning:
      "A bowl of steaming-hot food. Depicted as Japanese ramen (noodles in broth) with chopsticks on most platforms, though it can represent a warm meal more generally."
  },

  {
    id: 16,
    emoji: "🍣",
    name: "Sushi",
    meaning:
      "Japanese sushi, generally depicted as two pieces of raw pinkish-orange fish, as tuna or salmon, on white rice (nigiri). Some platforms show the cylindrical maki, a piece of seafood, vegetables, and white rice wrapped in seaweed (nori)."
  },

  {
    id: 17,
    emoji: "🍵",
    name: "Teacup Without Handle",
    meaning:
      "A cup of green tea, as the minty-colored Japanese matcha, usually shown on a wooden mat. Matcha is traditionally served in a small bowl that resembles a cup without a handle. Often taken as a bowl of soup, such as a split pea."
  },

  {
    id: 18,
    emoji: "🥢",
    name: "Chopsticks",
    meaning:
      "A pair of equal-length chopsticks, an eating utensil used throughout East Asia. Design and color vary widely by platform, though often red or wood-colored and with tips angled together. Featured in many platforms' Steaming Bowl of Food and Takeout Box. A counterpart to utensils such as Fork and Knife and Spoon."
  },

  {
    id: 19,
    emoji: "🥡",
    name: "Takeout Box",
    meaning:
      "A tall, folded, paper carton, usually white, as used for takeout/takeaway food at Western Chinese restaurants. Most platforms depict chopsticks inside its open lid, labeled with a red, multi-tiered, traditional Chinese building. Also called an oyster pail."
  }
];

export default emojipedia;
