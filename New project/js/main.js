const LV_IMAGES = {
  hero: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
  steak: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  sushi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80",
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
  brunch: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
  bar: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  city: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
};

Object.assign(LV_IMAGES, {
  risotto: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80",
  curry: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  mezze: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80",
  chicken: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
  tartine: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80"
});

const dishes = [
  { id: "truffle-pappardelle", name: "Truffle Pappardelle", cuisine: "Italian", category: "Signature", price: 28, rating: 4.9, image: LV_IMAGES.pasta, tag: "Chef icon", time: "18 min", description: "Silk egg pasta, black truffle cream, aged parmesan, and toasted hazelnut.", ingredients: ["Egg pappardelle", "Black truffle", "Parmigiano", "Hazelnut"], calories: 620 },
  { id: "wagyu-pepper-steak", name: "Wagyu Pepper Steak", cuisine: "Dubai Grill", category: "Chef Specials", price: 48, rating: 4.9, image: LV_IMAGES.steak, tag: "Prime", time: "24 min", description: "Charred wagyu, espresso pepper jus, burnt onion, and olive oil potato puree.", ingredients: ["Wagyu", "Espresso jus", "Onion", "Potato puree"], calories: 780 },
  { id: "sicilian-citrus-salad", name: "Sicilian Citrus Salad", cuisine: "Mediterranean", category: "Wellness", price: 18, rating: 4.8, image: LV_IMAGES.salad, tag: "Fresh", time: "10 min", description: "Blood orange, shaved fennel, herbs, olives, burrata, and lemon blossom dressing.", ingredients: ["Burrata", "Fennel", "Blood orange", "Olives"], calories: 390 },
  { id: "golden-tiramisu", name: "Golden Tiramisu", cuisine: "Italian", category: "Dessert", price: 16, rating: 4.9, image: LV_IMAGES.dessert, tag: "House sweet", time: "8 min", description: "Mascarpone cloud, espresso-soaked savoiardi, cocoa, and champagne caramel.", ingredients: ["Mascarpone", "Espresso", "Cocoa", "Caramel"], calories: 470 },
  { id: "velvet-espresso", name: "Velvet Espresso Ritual", cuisine: "Café", category: "Cafe", price: 9, rating: 4.7, image: LV_IMAGES.coffee, tag: "Roasted", time: "6 min", description: "Single-origin espresso with vanilla cream, dark chocolate, and biscotti.", ingredients: ["Arabica", "Vanilla cream", "Chocolate", "Biscotti"], calories: 180 },
  { id: "tokyo-amber-sushi", name: "Tokyo Amber Sushi", cuisine: "Japanese", category: "Global", price: 31, rating: 4.8, image: LV_IMAGES.sushi, tag: "Global", time: "16 min", description: "Premium salmon, yuzu kosho, warm rice, nori crisp, and sesame glaze.", ingredients: ["Salmon", "Yuzu", "Sushi rice", "Nori"], calories: 520 },
  { id: "napoli-burrata-pizza", name: "Napoli Burrata Pizza", cuisine: "Italian", category: "Signature", price: 24, rating: 4.8, image: LV_IMAGES.pizza, tag: "Wood fire", time: "20 min", description: "Slow dough, San Marzano tomato, basil oil, burrata, and roasted cherry tomato.", ingredients: ["Slow dough", "Burrata", "Tomato", "Basil"], calories: 690 },
  { id: "parisian-brunch-board", name: "Parisian Brunch Board", cuisine: "French", category: "Cafe", price: 26, rating: 4.7, image: LV_IMAGES.brunch, tag: "All day", time: "14 min", description: "Croissant, soft eggs, cultured butter, preserves, fruit, and café au lait.", ingredients: ["Croissant", "Eggs", "Butter", "Seasonal fruit"], calories: 610 }
];

dishes.push(
  { id: "saffron-wild-mushroom-risotto", name: "Saffron Wild Mushroom Risotto", cuisine: "Italian", category: "Chef Specials", price: 34, rating: 4.9, image: LV_IMAGES.risotto, tag: "Saffron", time: "22 min", description: "Carnaroli rice, saffron butter, wild mushrooms, parmesan crisp, and herb oil.", ingredients: ["Carnaroli rice", "Saffron", "Wild mushrooms", "Parmesan"], calories: 640 },
  { id: "malabar-royal-prawn-curry", name: "Malabar Royal Prawn Curry", cuisine: "Indian Coastal", category: "Global", price: 36, rating: 4.8, image: LV_IMAGES.curry, tag: "Coastal", time: "21 min", description: "Tiger prawns, coconut curry, curry leaf oil, steamed rice, and lime.", ingredients: ["Tiger prawns", "Coconut", "Curry leaves", "Rice"], calories: 710 },
  { id: "levantine-gold-mezze", name: "Levantine Gold Mezze", cuisine: "Middle Eastern", category: "Global", price: 22, rating: 4.8, image: LV_IMAGES.mezze, tag: "Shareable", time: "12 min", description: "Hummus, labneh, olives, zaatar crisp, pickles, and warm flatbread.", ingredients: ["Hummus", "Labneh", "Olives", "Flatbread"], calories: 540 },
  { id: "korean-glazed-chicken", name: "Korean Glazed Chicken", cuisine: "Korean", category: "Global", price: 27, rating: 4.7, image: LV_IMAGES.chicken, tag: "Glazed", time: "19 min", description: "Crisp chicken, gochujang glaze, sesame, scallion, and pickled cucumber.", ingredients: ["Chicken", "Gochujang", "Sesame", "Cucumber"], calories: 690 },
  { id: "avocado-sourdough-tartine", name: "Avocado Sourdough Tartine", cuisine: "Cafe", category: "Cafe", price: 17, rating: 4.7, image: LV_IMAGES.tartine, tag: "Brunch", time: "9 min", description: "Toasted sourdough, avocado, soft herbs, lemon, chilli, and feta crumble.", ingredients: ["Sourdough", "Avocado", "Feta", "Lemon"], calories: 430 },
  { id: "dubai-date-caramel-cake", name: "Dubai Date Caramel Cake", cuisine: "Dessert", category: "Dessert", price: 15, rating: 4.9, image: LV_IMAGES.cake, tag: "New sweet", time: "8 min", description: "Warm date cake, salted caramel, vanilla cream, and toasted pistachio.", ingredients: ["Dates", "Caramel", "Vanilla cream", "Pistachio"], calories: 520 }
);

const launchHighlights = {
  "truffle-pappardelle": { originalPrice: 32, discount: "12% off" },
  "wagyu-pepper-steak": { originalPrice: 56, discount: "Launch offer" },
  "velvet-espresso": { originalPrice: 11, discount: "Cafe deal" },
  "napoli-burrata-pizza": { originalPrice: 28, discount: "Aperitivo save" },
  "saffron-wild-mushroom-risotto": { originalPrice: 39, discount: "Chef save" },
  "malabar-royal-prawn-curry": { originalPrice: 42, discount: "New launch" },
  "dubai-date-caramel-cake": { originalPrice: 18, discount: "Sweet deal" }
};

dishes.forEach((dish) => {
  Object.assign(dish, launchHighlights[dish.id] || {});
  if (dish.id === "velvet-espresso") dish.cuisine = "Cafe";
  if (dish.id === "parisian-brunch-board") dish.description = "Croissant, soft eggs, cultured butter, preserves, fruit, and cafe au lait.";
});

const dishReviews = {
  "truffle-pappardelle": [
    { name: "Aarav M.", context: "Anniversary dinner", rating: 5, text: "The truffle cream was rich without feeling heavy, and the pappardelle had that handmade silkiness you hope for in a premium Italian plate." },
    { name: "Naina S.", context: "Late dinner order", rating: 5, text: "It arrived warm, glossy, and beautifully packed. The hazelnut crunch made the truffle pasta feel restaurant-level at home." },
    { name: "Dev R.", context: "Chef tasting", rating: 4.9, text: "A luxurious pasta with real depth. Parmesan, truffle, and the soft egg pasta all felt balanced rather than overpowering." }
  ],
  "wagyu-pepper-steak": [
    { name: "Kabir A.", context: "Business dinner", rating: 5, text: "The wagyu had a perfect char and the espresso pepper jus gave it a smoky, polished finish. It felt like a proper steakhouse plate." },
    { name: "Mira J.", context: "Private dining", rating: 4.9, text: "The potato puree was velvety and the onion sweetness cut through the richness beautifully. Premium, bold, and very satisfying." },
    { name: "Sameer K.", context: "Weekend order", rating: 4.8, text: "The steak stayed tender through delivery, which is rare. The sauce was the standout, deep and peppery without being sharp." }
  ],
  "sicilian-citrus-salad": [
    { name: "Isha P.", context: "Wellness lunch", rating: 4.9, text: "Bright, fresh, and elegant. The blood orange and fennel made it refreshing, while the burrata gave it a soft luxury." },
    { name: "Rohan B.", context: "Light dinner", rating: 4.8, text: "The salad felt composed, not casual. Crisp herbs, citrus, olives, and creamy burrata made every bite clean and layered." },
    { name: "Anika T.", context: "Cafe meeting", rating: 4.8, text: "Perfect for a lighter order that still feels special. The lemon blossom dressing was delicate and not too sweet." }
  ],
  "golden-tiramisu": [
    { name: "Priya N.", context: "Dessert after dinner", rating: 5, text: "The mascarpone was cloud-like and the espresso came through clearly. The champagne caramel made it feel signature." },
    { name: "Arjun V.", context: "Celebration box", rating: 4.9, text: "Elegant, not overly sweet, and beautifully finished. It tasted like a dessert from a luxury hotel cafe." },
    { name: "Megha C.", context: "Coffee pairing", rating: 4.8, text: "The cocoa and espresso balance was excellent. It is the kind of tiramisu you order again without thinking." }
  ],
  "velvet-espresso": [
    { name: "Tara D.", context: "Morning cafe run", rating: 4.8, text: "Strong espresso, smooth vanilla cream, and a small chocolate note that made it feel indulgent without becoming dessert." },
    { name: "Neil S.", context: "Work meeting", rating: 4.7, text: "The roast tasted clean and premium. The biscotti pairing was simple, useful, and exactly right for a cafe order." },
    { name: "Ritika G.", context: "After lunch", rating: 4.8, text: "A polished espresso ritual. It gives that Italian cafe feeling but still has a modern La Vuerte finish." }
  ],
  "tokyo-amber-sushi": [
    { name: "Karan L.", context: "Global tasting", rating: 4.9, text: "The salmon was buttery and the yuzu lifted the whole bite. Clean, precise, and beautifully restrained." },
    { name: "Sana Q.", context: "Dinner delivery", rating: 4.8, text: "The rice texture held well and the sesame glaze added warmth. It felt premium without being fussy." },
    { name: "Rhea M.", context: "Sharing plate", rating: 4.8, text: "Fresh, balanced, and easy to share. The nori crisp made the sushi feel more memorable than a standard roll." }
  ],
  "napoli-burrata-pizza": [
    { name: "Vihaan S.", context: "Family dinner", rating: 4.9, text: "The slow dough had a proper chew, the tomato was bright, and the burrata made the pizza feel generous and premium." },
    { name: "Alia F.", context: "Weekend order", rating: 4.8, text: "Loved the basil oil and roasted cherry tomato. It tasted fresh and wood-fired, not heavy." },
    { name: "Manav D.", context: "Aperitivo night", rating: 4.8, text: "This is the pizza I would order with espresso or a dessert. Simple ingredients, very well handled." }
  ],
  "parisian-brunch-board": [
    { name: "Zoya R.", context: "Sunday brunch", rating: 4.8, text: "The croissant was buttery, the eggs were soft, and the preserves made the board feel thoughtful and complete." },
    { name: "Aditya P.", context: "Cafe meeting", rating: 4.7, text: "A very useful brunch order: polished enough for guests, relaxed enough for a slow morning." },
    { name: "Leena K.", context: "Breakfast delivery", rating: 4.8, text: "The fruit, butter, and cafe au lait made it feel like a hotel breakfast without leaving home." }
  ]
};

const categoryImages = {
  Starters: LV_IMAGES.mezze,
  Soups: LV_IMAGES.salad,
  Salads: LV_IMAGES.salad,
  "Main Course": LV_IMAGES.steak,
  "Indian Cuisine": LV_IMAGES.curry,
  "Chinese Cuisine": LV_IMAGES.chicken,
  "Italian Cuisine": LV_IMAGES.pasta,
  "Fast Food": LV_IMAGES.pizza,
  Desserts: LV_IMAGES.dessert,
  Beverages: LV_IMAGES.coffee,
  Mocktails: LV_IMAGES.brunch,
  "Chef Specials": LV_IMAGES.risotto,
  "Seasonal Specials": LV_IMAGES.tartine,
  "Premium Signature Dishes": LV_IMAGES.steak
};

[
  ["Starters", "Crisp Zaatar Halloumi", "Golden halloumi, zaatar crumb, lemon honey, mint, and warm olive oil.", 14, "Veg", ["Halloumi", "Zaatar", "Lemon", "Mint"]],
  ["Starters", "Smoked Burrata Crostini", "Toasted sourdough, smoked burrata, tomato confit, basil oil, and sea salt.", 16, "Veg", ["Burrata", "Sourdough", "Tomato", "Basil"]],
  ["Starters", "Truffle Parmesan Fries", "Hand-cut fries, parmesan snow, black truffle oil, parsley, and garlic aioli.", 12, "Veg", ["Potato", "Parmesan", "Truffle oil", "Aioli"]],
  ["Starters", "Harissa Lamb Kofta Bites", "Charred lamb kofta, harissa glaze, labneh, pickled onion, and herbs.", 21, "Non-Veg", ["Lamb", "Harissa", "Labneh", "Onion"]],
  ["Starters", "Tempura Prawn Jewels", "Crisp prawns, yuzu mayo, chilli salt, sesame, and fresh lime.", 24, "Non-Veg", ["Prawns", "Yuzu", "Sesame", "Lime"]],
  ["Starters", "Avocado Lime Tartare", "Avocado, cucumber, lime, jalapeno, micro herbs, and rice crisp.", 15, "Vegan", ["Avocado", "Cucumber", "Lime", "Rice crisp"]],
  ["Starters", "Saffron Arancini", "Risotto spheres, mozzarella, saffron, tomato fonduta, and basil.", 17, "Veg", ["Rice", "Mozzarella", "Saffron", "Tomato"]],
  ["Starters", "Korean Sesame Cauliflower", "Crisp cauliflower, gochujang sesame glaze, scallion, and pickles.", 15, "Vegan", ["Cauliflower", "Gochujang", "Sesame", "Scallion"]],
  ["Soups", "Roasted Tomato Basil Soup", "Slow-roasted tomato, basil cream, olive oil, and parmesan crostini.", 13, "Veg", ["Tomato", "Basil", "Cream", "Parmesan"]],
  ["Soups", "Wild Mushroom Cappuccino", "Forest mushrooms, thyme, garlic, truffle foam, and sourdough crumb.", 16, "Veg", ["Mushroom", "Thyme", "Truffle", "Sourdough"]],
  ["Soups", "Thai Coconut Lemongrass Soup", "Coconut broth, lemongrass, galangal, mushroom, herbs, and chilli oil.", 15, "Vegan", ["Coconut", "Lemongrass", "Galangal", "Mushroom"]],
  ["Soups", "Chicken Consomme Royale", "Clear chicken broth, herbs, soft vegetables, and parmesan toast.", 17, "Non-Veg", ["Chicken", "Herbs", "Vegetables", "Parmesan"]],
  ["Soups", "Sweet Corn Truffle Veloute", "Sweet corn, butter, truffle oil, chives, and toasted corn.", 14, "Veg", ["Corn", "Butter", "Truffle", "Chives"]],
  ["Soups", "Seafood Saffron Broth", "Prawn, fish, saffron tomato broth, fennel, and parsley oil.", 22, "Non-Veg", ["Prawn", "Fish", "Saffron", "Fennel"]],
  ["Soups", "Pumpkin Sage Soup", "Roasted pumpkin, sage butter, pumpkin seed, and smoked paprika.", 13, "Veg", ["Pumpkin", "Sage", "Seeds", "Paprika"]],
  ["Salads", "Burrata Garden Salad", "Burrata, heirloom tomato, basil, rocket, balsamic pearls, and olive oil.", 19, "Veg", ["Burrata", "Tomato", "Rocket", "Balsamic"]],
  ["Salads", "Quinoa Citrus Bowl", "Quinoa, orange, avocado, almond, greens, and lemon tahini dressing.", 17, "Vegan", ["Quinoa", "Orange", "Avocado", "Tahini"]],
  ["Salads", "Charred Chicken Caesar", "Grilled chicken, romaine, parmesan, sourdough crisp, and caesar dressing.", 21, "Non-Veg", ["Chicken", "Romaine", "Parmesan", "Sourdough"]],
  ["Salads", "Greek Island Salad", "Feta, cucumber, olives, tomato, oregano, onion, and extra virgin olive oil.", 16, "Veg", ["Feta", "Cucumber", "Olives", "Tomato"]],
  ["Salads", "Spiced Watermelon Feta", "Watermelon, feta, mint, chilli, lime, pistachio, and aged balsamic.", 15, "Veg", ["Watermelon", "Feta", "Mint", "Pistachio"]],
  ["Salads", "Asian Crunch Salad", "Cabbage, carrot, edamame, sesame, peanut, herbs, and ginger dressing.", 16, "Vegan", ["Cabbage", "Edamame", "Sesame", "Peanut"]],
  ["Salads", "Smoked Salmon Nicoise", "Smoked salmon, egg, beans, potato, olives, and mustard vinaigrette.", 24, "Non-Veg", ["Salmon", "Egg", "Potato", "Olives"]],
  ["Main Course", "Herb Butter Roast Chicken", "Roasted chicken, herb butter, jus, baby carrots, and potato puree.", 32, "Non-Veg", ["Chicken", "Herb butter", "Carrots", "Potato"]],
  ["Main Course", "Peppercorn Tenderloin", "Tenderloin, green peppercorn sauce, asparagus, and gratin potato.", 46, "Non-Veg", ["Tenderloin", "Peppercorn", "Asparagus", "Potato"]],
  ["Main Course", "Pan-Seared Sea Bass", "Sea bass, lemon caper butter, greens, fennel, and olive oil potato.", 42, "Non-Veg", ["Sea bass", "Lemon", "Capers", "Fennel"]],
  ["Main Course", "Stuffed Portobello Steak", "Portobello, spinach, ricotta, tomato jus, parmesan, and herbs.", 26, "Veg", ["Portobello", "Spinach", "Ricotta", "Tomato"]],
  ["Main Course", "Miso Glazed Salmon", "Salmon, miso glaze, bok choy, sesame rice, and pickled ginger.", 39, "Non-Veg", ["Salmon", "Miso", "Bok choy", "Rice"]],
  ["Main Course", "Vegan Aubergine Ragu", "Roasted aubergine, tomato ragu, basil, cashew cream, and polenta.", 24, "Vegan", ["Aubergine", "Tomato", "Cashew", "Polenta"]],
  ["Main Course", "Rosemary Lamb Rack", "Lamb rack, rosemary jus, smoked mash, peas, and charred onion.", 52, "Non-Veg", ["Lamb", "Rosemary", "Peas", "Onion"]],
  ["Indian Cuisine", "Butter Chicken Royale", "Tandoor chicken, tomato makhani, fenugreek, cream, and basmati.", 29, "Non-Veg", ["Chicken", "Tomato", "Cream", "Basmati"]],
  ["Indian Cuisine", "Paneer Lababdar", "Paneer, rich tomato onion gravy, kasuri methi, butter, and cream.", 23, "Veg", ["Paneer", "Tomato", "Onion", "Cream"]],
  ["Indian Cuisine", "Dal Bukhara Reserve", "Slow-cooked black lentils, butter, cream, and smoked chilli.", 20, "Veg", ["Black lentils", "Butter", "Cream", "Chilli"]],
  ["Indian Cuisine", "Awadhi Lamb Biryani", "Fragrant rice, lamb, saffron, mint, fried onion, and raita.", 34, "Non-Veg", ["Lamb", "Rice", "Saffron", "Mint"]],
  ["Indian Cuisine", "Goan Fish Curry", "Fish, coconut kokum curry, curry leaves, rice, and lime.", 31, "Non-Veg", ["Fish", "Coconut", "Kokum", "Rice"]],
  ["Indian Cuisine", "Tandoori Broccoli Malai", "Broccoli, hung curd, cashew, cardamom, and charred lemon.", 19, "Veg", ["Broccoli", "Curd", "Cashew", "Cardamom"]],
  ["Indian Cuisine", "Jackfruit Pepper Fry", "Young jackfruit, pepper masala, curry leaves, coconut, and appam.", 24, "Vegan", ["Jackfruit", "Pepper", "Curry leaves", "Coconut"]],
  ["Chinese Cuisine", "Cantonese Chilli Prawns", "Prawns, chilli garlic glaze, scallion, sesame, and jasmine rice.", 33, "Non-Veg", ["Prawns", "Chilli", "Garlic", "Rice"]],
  ["Chinese Cuisine", "Silken Mapo Tofu", "Tofu, Sichuan pepper, chilli bean sauce, mushroom, and rice.", 24, "Vegan", ["Tofu", "Sichuan pepper", "Mushroom", "Rice"]],
  ["Chinese Cuisine", "Honey Sesame Chicken", "Crisp chicken, honey sesame glaze, scallion, and pickled cucumber.", 27, "Non-Veg", ["Chicken", "Honey", "Sesame", "Cucumber"]],
  ["Chinese Cuisine", "Black Bean Vegetable Wok", "Broccoli, peppers, mushroom, black bean sauce, and noodles.", 22, "Vegan", ["Broccoli", "Peppers", "Mushroom", "Noodles"]],
  ["Chinese Cuisine", "Peking Duck Pancakes", "Roasted duck, cucumber, scallion, hoisin, and soft pancakes.", 38, "Non-Veg", ["Duck", "Cucumber", "Scallion", "Hoisin"]],
  ["Chinese Cuisine", "Truffle Edamame Dumplings", "Edamame, truffle, soy ginger dip, sesame, and chilli oil.", 21, "Vegan", ["Edamame", "Truffle", "Soy", "Ginger"]],
  ["Chinese Cuisine", "Dan Dan Noodles", "Wheat noodles, sesame chilli sauce, greens, peanut, and scallion.", 23, "Veg", ["Noodles", "Sesame", "Peanut", "Greens"]],
  ["Italian Cuisine", "Cacio e Pepe", "Tonnarelli pasta, pecorino, black pepper, butter, and olive oil.", 23, "Veg", ["Pasta", "Pecorino", "Pepper", "Butter"]],
  ["Italian Cuisine", "Pesto Genovese Linguine", "Linguine, basil pesto, pine nuts, parmesan, and extra virgin oil.", 24, "Veg", ["Linguine", "Basil", "Pine nuts", "Parmesan"]],
  ["Italian Cuisine", "Seafood Arrabbiata", "Prawns, calamari, spicy tomato sauce, parsley, and spaghetti.", 34, "Non-Veg", ["Prawns", "Calamari", "Tomato", "Spaghetti"]],
  ["Italian Cuisine", "Four Cheese Ravioli", "Stuffed ravioli, parmesan cream, sage butter, and walnut crumb.", 28, "Veg", ["Ravioli", "Cheese", "Sage", "Walnut"]],
  ["Italian Cuisine", "Tuscan Chicken Alfredo", "Chicken, fettuccine, parmesan cream, spinach, and sun-dried tomato.", 30, "Non-Veg", ["Chicken", "Fettuccine", "Parmesan", "Spinach"]],
  ["Italian Cuisine", "Margherita Classica", "Neapolitan dough, San Marzano tomato, mozzarella, and basil.", 21, "Veg", ["Dough", "Tomato", "Mozzarella", "Basil"]],
  ["Italian Cuisine", "Porcini Truffle Gnocchi", "Potato gnocchi, porcini cream, truffle, parmesan, and chives.", 30, "Veg", ["Gnocchi", "Porcini", "Truffle", "Parmesan"]],
  ["Fast Food", "La Vuerte Wagyu Burger", "Wagyu patty, cheddar, caramelized onion, truffle aioli, and brioche.", 32, "Non-Veg", ["Wagyu", "Cheddar", "Onion", "Brioche"]],
  ["Fast Food", "Crispy Chicken Brioche", "Crisp chicken, slaw, pickles, spicy mayo, and toasted brioche.", 24, "Non-Veg", ["Chicken", "Slaw", "Pickles", "Brioche"]],
  ["Fast Food", "Loaded Truffle Nachos", "Corn chips, cheese, beans, jalapeno, truffle cream, and salsa.", 19, "Veg", ["Corn chips", "Cheese", "Beans", "Salsa"]],
  ["Fast Food", "Sourdough Grilled Cheese", "Sourdough, three cheese blend, tomato jam, and basil butter.", 18, "Veg", ["Sourdough", "Cheese", "Tomato", "Basil"]],
  ["Fast Food", "Peri Peri Fries Bowl", "Fries, peri peri spice, garlic dip, herbs, and parmesan.", 12, "Veg", ["Fries", "Peri peri", "Garlic", "Parmesan"]],
  ["Fast Food", "Vegan Smash Burger", "Plant patty, vegan cheese, lettuce, onion jam, and brioche.", 23, "Vegan", ["Plant patty", "Vegan cheese", "Lettuce", "Brioche"]],
  ["Fast Food", "Luxury Fish Tacos", "Crisp fish, avocado crema, cabbage, pico, and lime.", 26, "Non-Veg", ["Fish", "Avocado", "Cabbage", "Lime"]],
  ["Desserts", "Pistachio Rose Panna Cotta", "Silky panna cotta, pistachio praline, rose syrup, and berries.", 15, "Veg", ["Cream", "Pistachio", "Rose", "Berries"]],
  ["Desserts", "Belgian Chocolate Fondant", "Warm chocolate fondant, vanilla cream, cocoa soil, and berry compote.", 17, "Veg", ["Chocolate", "Vanilla", "Cocoa", "Berries"]],
  ["Desserts", "Mango Saffron Cheesecake", "Cream cheese, mango compote, saffron, biscuit base, and mint.", 16, "Veg", ["Mango", "Cream cheese", "Saffron", "Biscuit"]],
  ["Desserts", "Coconut Jaggery Creme Brulee", "Coconut custard, jaggery caramel, toasted coconut, and lime zest.", 15, "Veg", ["Coconut", "Jaggery", "Lime", "Custard"]],
  ["Desserts", "Vegan Chocolate Mousse", "Dark chocolate, avocado silk, almond crumble, and sea salt.", 15, "Vegan", ["Chocolate", "Avocado", "Almond", "Sea salt"]],
  ["Desserts", "Classic Affogato", "Vanilla gelato, espresso shot, biscotti crumb, and dark chocolate.", 12, "Veg", ["Gelato", "Espresso", "Biscotti", "Chocolate"]],
  ["Desserts", "Lemon Olive Oil Cake", "Olive oil sponge, lemon curd, mascarpone, and candied zest.", 14, "Veg", ["Lemon", "Olive oil", "Mascarpone", "Zest"]],
  ["Beverages", "Single Origin Espresso", "Balanced espresso with crema, roasted almond notes, and dark chocolate finish.", 7, "Veg", ["Arabica", "Water", "Crema", "Roast"]],
  ["Beverages", "Iced Vanilla Latte", "Espresso, chilled milk, vanilla, ice, and a soft cream finish.", 9, "Veg", ["Espresso", "Milk", "Vanilla", "Ice"]],
  ["Beverages", "Cardamom Cappuccino", "Espresso, milk foam, cardamom dust, and raw sugar.", 9, "Veg", ["Espresso", "Milk", "Cardamom", "Sugar"]],
  ["Beverages", "Belgian Hot Chocolate", "Dark chocolate, steamed milk, cocoa, vanilla, and cream.", 11, "Veg", ["Chocolate", "Milk", "Cocoa", "Vanilla"]],
  ["Beverages", "Matcha Cream Latte", "Ceremonial matcha, milk, vanilla cream, and ice.", 11, "Veg", ["Matcha", "Milk", "Vanilla", "Ice"]],
  ["Beverages", "Cold Brew Reserve", "Slow-steeped coffee, citrus peel, clear ice, and tonic option.", 10, "Vegan", ["Coffee", "Water", "Citrus", "Ice"]],
  ["Beverages", "Masala Chai Luxe", "Assam tea, spices, milk, jaggery, and saffron dust.", 8, "Veg", ["Tea", "Spices", "Milk", "Jaggery"]],
  ["Mocktails", "Rose Lychee Fizz", "Lychee, rose, lime, soda, basil seed, and edible flower.", 12, "Vegan", ["Lychee", "Rose", "Lime", "Soda"]],
  ["Mocktails", "Cucumber Mint Cooler", "Cucumber, mint, elderflower, lime, soda, and crushed ice.", 11, "Vegan", ["Cucumber", "Mint", "Elderflower", "Lime"]],
  ["Mocktails", "Mango Passion Spritz", "Mango, passion fruit, lime, soda, and chilli salt rim.", 12, "Vegan", ["Mango", "Passion fruit", "Lime", "Soda"]],
  ["Mocktails", "Pomegranate Basil Sparkle", "Pomegranate, basil, lemon, tonic, and ice.", 12, "Vegan", ["Pomegranate", "Basil", "Lemon", "Tonic"]],
  ["Mocktails", "Smoked Pineapple Nojito", "Pineapple, mint, lime, smoke salt, and soda.", 12, "Vegan", ["Pineapple", "Mint", "Lime", "Soda"]],
  ["Mocktails", "Blueberry Lavender Soda", "Blueberry, lavender, lemon, soda, and rosemary.", 11, "Vegan", ["Blueberry", "Lavender", "Lemon", "Rosemary"]],
  ["Mocktails", "Apple Ginger Highball", "Apple, ginger, lime, soda, and cinnamon.", 11, "Vegan", ["Apple", "Ginger", "Lime", "Cinnamon"]],
  ["Chef Specials", "Black Garlic Lobster Linguine", "Lobster, black garlic butter, linguine, chilli, parsley, and lemon.", 58, "Non-Veg", ["Lobster", "Garlic", "Linguine", "Lemon"]],
  ["Chef Specials", "24-Hour Braised Short Rib", "Short rib, red wine jus, smoked mash, onion, and glazed carrots.", 54, "Non-Veg", ["Short rib", "Red wine", "Potato", "Carrots"]],
  ["Chef Specials", "Saffron Morel Kulcha", "Morel mushroom, saffron cream, kulcha, herbs, and pickled onion.", 31, "Veg", ["Morel", "Saffron", "Kulcha", "Onion"]],
  ["Chef Specials", "Caviar Burrata Toast", "Burrata, caviar, brioche, chives, lemon oil, and sea salt.", 46, "Non-Veg", ["Burrata", "Caviar", "Brioche", "Chives"]],
  ["Chef Specials", "Charcoal Tandoor Lamb Chops", "Lamb chops, yoghurt spice, mint chutney, and charred lemon.", 49, "Non-Veg", ["Lamb", "Yoghurt", "Mint", "Lemon"]],
  ["Chef Specials", "White Asparagus Risotto", "Asparagus, parmesan, lemon, butter, and toasted almond.", 36, "Veg", ["Asparagus", "Parmesan", "Lemon", "Almond"]],
  ["Chef Specials", "Lotus Root Steak", "Lotus root, soy glaze, miso puree, sesame, and greens.", 29, "Vegan", ["Lotus root", "Soy", "Miso", "Sesame"]],
  ["Seasonal Specials", "Summer Corn Agnolotti", "Agnolotti, sweet corn, basil butter, parmesan, and chilli.", 29, "Veg", ["Agnolotti", "Corn", "Basil", "Parmesan"]],
  ["Seasonal Specials", "Winter Truffle Polenta", "Soft polenta, truffle, mushrooms, parmesan, and thyme.", 32, "Veg", ["Polenta", "Truffle", "Mushrooms", "Thyme"]],
  ["Seasonal Specials", "Monsoon Pepper Prawns", "Prawns, black pepper, curry leaves, coconut, and lime.", 36, "Non-Veg", ["Prawns", "Pepper", "Curry leaves", "Coconut"]],
  ["Seasonal Specials", "Spring Pea Ravioli", "Pea ravioli, mint butter, lemon, ricotta, and pea shoots.", 27, "Veg", ["Peas", "Ricotta", "Mint", "Lemon"]],
  ["Seasonal Specials", "Autumn Fig Flatbread", "Flatbread, figs, goat cheese, honey, rocket, and walnut.", 25, "Veg", ["Figs", "Goat cheese", "Honey", "Walnut"]],
  ["Seasonal Specials", "Berry Basil Pavlova", "Meringue, berries, basil cream, vanilla, and lemon zest.", 16, "Veg", ["Meringue", "Berries", "Basil", "Lemon"]],
  ["Seasonal Specials", "Tender Coconut Sorbet", "Tender coconut, lime, palm sugar, and toasted coconut.", 13, "Vegan", ["Coconut", "Lime", "Palm sugar", "Coconut flakes"]],
  ["Premium Signature Dishes", "La Vuerte Grand Mezze", "Premium mezze board, dips, olives, warm bread, herbs, and pickles.", 42, "Veg", ["Hummus", "Labneh", "Olives", "Bread"]],
  ["Premium Signature Dishes", "Royal Seafood Platter", "Prawns, fish, calamari, scallop, lemon butter, and herb salad.", 72, "Non-Veg", ["Prawns", "Fish", "Calamari", "Scallop"]],
  ["Premium Signature Dishes", "Gold Leaf Tiramisu", "Mascarpone, espresso, cocoa, caramel, and delicate gold leaf garnish.", 22, "Veg", ["Mascarpone", "Espresso", "Cocoa", "Gold leaf"]],
  ["Premium Signature Dishes", "Emirati Date Glazed Duck", "Duck breast, date glaze, spice jus, carrot, and pistachio.", 48, "Non-Veg", ["Duck", "Dates", "Carrot", "Pistachio"]],
  ["Premium Signature Dishes", "Truffle Burrata Pizza", "Burrata, truffle cream, mozzarella, mushroom, rocket, and parmesan.", 36, "Veg", ["Burrata", "Truffle", "Mushroom", "Rocket"]],
  ["Premium Signature Dishes", "Sakura Salmon Bowl", "Salmon, sushi rice, avocado, yuzu, nori, and sesame.", 38, "Non-Veg", ["Salmon", "Rice", "Avocado", "Yuzu"]],
  ["Premium Signature Dishes", "Imperial Paneer Steak", "Paneer steak, saffron makhani, greens, almond, and naan crisp.", 30, "Veg", ["Paneer", "Saffron", "Almond", "Naan"]],
  ["Starters", "Mediterranean Olive Board", "Marinated olives, artichoke, peppers, feta, almonds, and crisp bread.", 18, "Veg", ["Olives", "Artichoke", "Feta", "Almonds"]],
  ["Soups", "French Onion Gratinee", "Caramelized onion broth, gruyere toast, thyme, and black pepper.", 16, "Veg", ["Onion", "Gruyere", "Thyme", "Toast"]],
  ["Salads", "Pear Walnut Rocket Salad", "Pear, rocket, walnut, blue cheese, honey, and cider vinaigrette.", 17, "Veg", ["Pear", "Rocket", "Walnut", "Blue cheese"]],
  ["Main Course", "Coffee Rubbed Pork Ribs", "Pork ribs, coffee spice rub, barbecue glaze, slaw, and fries.", 38, "Non-Veg", ["Pork", "Coffee", "Slaw", "Fries"]],
  ["Indian Cuisine", "Kashmiri Rogan Josh", "Lamb, Kashmiri chilli, yoghurt, saffron rice, and pickled onion.", 35, "Non-Veg", ["Lamb", "Chilli", "Yoghurt", "Rice"]],
  ["Chinese Cuisine", "Lotus Stem Honey Chilli", "Crisp lotus stem, honey chilli glaze, sesame, and scallion.", 18, "Veg", ["Lotus stem", "Honey", "Chilli", "Sesame"]],
  ["Italian Cuisine", "Vegan Pomodoro Rigatoni", "Rigatoni, San Marzano tomato, basil, garlic, and olive oil.", 22, "Vegan", ["Rigatoni", "Tomato", "Basil", "Garlic"]],
  ["Fast Food", "Italian Prosciutto Panini", "Prosciutto, mozzarella, rocket, tomato, pesto, and ciabatta.", 25, "Non-Veg", ["Prosciutto", "Mozzarella", "Rocket", "Ciabatta"]],
  ["Desserts", "Raspberry Pistachio Eclair", "Choux pastry, raspberry cream, pistachio glaze, and white chocolate.", 14, "Veg", ["Choux", "Raspberry", "Pistachio", "Chocolate"]],
  ["Beverages", "Sparkling Orange Espresso", "Espresso, orange syrup, soda, ice, and citrus peel.", 10, "Vegan", ["Espresso", "Orange", "Soda", "Ice"]],
  ["Mocktails", "Kiwi Kaffir Lime Cooler", "Kiwi, kaffir lime, mint, soda, and crushed ice.", 12, "Vegan", ["Kiwi", "Kaffir lime", "Mint", "Soda"]],
  ["Chef Specials", "Miso Butter Scallops", "Scallops, miso butter, corn puree, nori, and chilli oil.", 52, "Non-Veg", ["Scallops", "Miso", "Corn", "Nori"]],
  ["Seasonal Specials", "Stone Fruit Caprese", "Peach, plum, mozzarella, basil, balsamic, and olive oil.", 19, "Veg", ["Peach", "Plum", "Mozzarella", "Basil"]],
  ["Premium Signature Dishes", "The La Vuerte Tasting Box", "A curated premium box with chef bites, pasta, dessert, and cafe pairing.", 86, "Non-Veg", ["Chef bites", "Pasta", "Dessert", "Coffee"]]
].forEach(([category, name, description, price, dietary, ingredients], index) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  dishes.push({
    id: slug,
    name,
    cuisine: category.replace(" Cuisine", ""),
    category,
    price,
    rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
    image: categoryImages[category] || LV_IMAGES.hero,
    tag: dietary,
    dietary,
    time: `${9 + (index % 18)} min`,
    description,
    ingredients,
    calories: 280 + (index % 9) * 55
  });
});

const branches = [
  ["Dubai Marina", "Waterfront dining, private lounge, late-night espresso bar.", LV_IMAGES.city],
  ["Milan Brera", "Italian café energy with refined aperitivo and chef counter.", LV_IMAGES.bar],
  ["Mumbai Colaba", "Global plates, marketplace tasting shelves, and warm hospitality.", LV_IMAGES.hero]
];

const posts = [
  ["How Italian café rituals shape our mornings", "A quiet look at crema, pastry, and slower hospitality.", LV_IMAGES.coffee],
  ["The marketplace shelf as a global pantry", "Olive oils, preserves, spice blends, and chef-picked gifts.", LV_IMAGES.brunch],
  ["Behind the pass with La Vuerte chefs", "Precision, warmth, and the calm rhythm of five-star service.", LV_IMAGES.chef]
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const INR_RATE = 85;
const money = (value) => new Intl.NumberFormat("en-IN", {
  currency: "INR",
  maximumFractionDigits: 0,
  style: "currency"
}).format(Math.round(value * INR_RATE));
const page = document.body.dataset.page;
const SITE_URL = "https://lavuerte.com";
const GOOGLE_SHEETS_ENDPOINT = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function initSEO() {
  const path = location.pathname.split("/").pop() || "index.html";
  const title = document.title || "La Vuerte | Taste Beyond Borders";
  const description = document.querySelector('meta[name="description"]')?.content || "Premium global cafe, luxury restaurant, and gourmet food marketplace.";
  const canonicalUrl = `${SITE_URL}/${path === "index.html" ? "" : path}`;
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", path === "index.html" ? "website" : "article", "property");
  setMeta("og:url", canonicalUrl, "property");
  setMeta("og:image", LV_IMAGES.hero, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", LV_IMAGES.hero);
  if (!document.getElementById("lvStructuredData")) {
    const data = document.createElement("script");
    data.type = "application/ld+json";
    data.id = "lvStructuredData";
    data.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "La Vuerte",
      slogan: "Taste Beyond Borders",
      servesCuisine: ["Italian", "Mediterranean", "Japanese", "French", "Global"],
      priceRange: "₹₹₹",
      url: SITE_URL,
      email: "devleadlabs@gmail.com",
      image: LV_IMAGES.hero,
      acceptsReservations: true,
      hasMenu: `${SITE_URL}/menu.html`
    });
    document.head.appendChild(data);
  }
}

function initPerformanceHints() {
  $$("img").forEach((img, index) => {
    img.decoding = "async";
    if (index > 1 && !img.loading) img.loading = "lazy";
  });
}

const navIcons = {
  wishlist: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.9c-2-2-5.1-1.8-6.9.3L12 7.4l-1.9-2.2C8.3 3.1 5.2 2.9 3.2 4.9c-2.3 2.3-2 6.1.5 8.2l8.3 7.2 8.3-7.2c2.5-2.1 2.8-5.9.5-8.2Z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5h11l-1 11h-9l-1-11Z"/><path d="M9 8.5a3 3 0 0 1 6 0"/><path d="M8.5 12h7"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>`
};

const NAV_ITEMS = [
  ["index.html", "Home"],
  ["menu.html", "Menu"],
  ["categories.html", "Categories"],
  ["reservations.html", "Reservations"],
  ["online-ordering.html", "Order"],
  ["catering-services.html", "Catering"],
  ["private-events.html", "Events"],
  ["contact.html", "Contact"]
];

function initNavIcons() {
  $$('a.icon-btn[href*="wishlist"]').forEach((link) => {
    link.innerHTML = navIcons.wishlist;
    link.setAttribute("aria-label", "Wishlist");
  });
  $$('a.icon-btn[href*="cart"]').forEach((link) => {
    link.innerHTML = navIcons.cart;
    link.setAttribute("aria-label", "Cart");
  });
}

function initFooter() {
  const footer = $(".footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-grid">
      <div>
        <h3 class="brand"><span class="brand-mark">LV</span><span>La Vuerte</span></h3>
        <p>Taste Beyond Borders through premium restaurant dining, cafe rituals, global delivery, and curated gourmet marketplace experiences.</p>
        <a href="mailto:devleadlabs@gmail.com">devleadlabs@gmail.com</a>
      </div>
      <div>
        <h4>Experience</h4>
        <a href="menu.html">Menu</a>
        <a href="categories.html">Categories</a>
        <a href="featured-dishes.html">Featured Dishes</a>
        <a href="offers.html">Offers</a>
        <a href="reservations.html">Reservations</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="about.html">About</a>
        <a href="chef.html">Chef Team</a>
        <a href="testimonials.html">Reviews</a>
        <a href="gallery.html">Gallery</a>
        <a href="careers.html">Careers</a>
      </div>
      <div>
        <h4>Market</h4>
        <a href="online-ordering.html">Online Ordering</a>
        <a href="catering-services.html">Catering</a>
        <a href="private-events.html">Private Events</a>
        <a href="wishlist.html">Wishlist</a>
        <a href="cart.html">Cart</a>
      </div>
      <div>
        <h4>Support</h4>
        <a href="faq.html">FAQ</a>
        <a href="delivery-information.html">Delivery</a>
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms-conditions.html">Terms</a>
        <a href="refund-policy.html">Refunds</a>
      </div>
      <div>
        <h4>Private List</h4>
        <form class="newsletter-form" data-validate data-success="You are on the La Vuerte private list">
          <label for="footerEmail">Newsletter email</label>
          <div class="newsletter-row">
            <input id="footerEmail" type="email" placeholder="Email address" autocomplete="email" required>
            <button class="btn gold" type="submit">Join</button>
          </div>
        </form>
      </div>
    </div>
    <div class="container sub-footer">
      <span>© 2026 La Vuerte. All rights reserved by DevLeadLabs.</span>
      <span>Luxury restaurant, global cafe, and food marketplace.</span>
    </div>`;
  $(".sub-footer span", footer).textContent = "\u00a9 2026 La Vuerte. All rights reserved by DevLeadLabs.";
}

function initNav() {
  const nav = $(".nav");
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  if (links) {
    const current = location.pathname.split("/").pop() || "index.html";
    links.innerHTML = NAV_ITEMS.map(([href, label]) => {
      const active = current === href || (current === "" && href === "index.html");
      return `<a href="${href}"${active ? ' class="active" aria-current="page"' : ""}>${label}</a>`;
    }).join("");
  }
  const setToggleState = (open) => {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    toggle.innerHTML = `${open ? navIcons.close : navIcons.menu}<span class="toggle-label">${open ? "Close" : "Explore"}</span>`;
  };
  const sync = () => nav?.classList.toggle("nav-solid", window.scrollY > 20);
  setToggleState(false);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
  toggle?.addEventListener("click", () => {
    const open = !links?.classList.contains("open");
    links?.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    setToggleState(open);
  });
  $$(".nav-links a").forEach((link) => link.addEventListener("click", () => {
    links?.classList.remove("open");
    document.body.classList.remove("menu-open");
    setToggleState(false);
  }));
}

function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = $$("[data-counter]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = Number(node.dataset.counter);
      const suffix = node.dataset.suffix || "";
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 42));
      const tick = () => {
        current = Math.min(target, current + step);
        node.textContent = `${current}${suffix}`;
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
      observer.unobserve(node);
    });
  }, { threshold: 0.6 });
  counters.forEach((counter) => observer.observe(counter));
}

function toast(message) {
  let wrap = $(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const note = document.createElement("div");
  note.className = "toast";
  note.textContent = message;
  wrap.appendChild(note);
  setTimeout(() => note.remove(), 3200);
}

function compactDish(dish) {
  return { id: dish.id, name: dish.name, price: dish.price, image: dish.image, cuisine: dish.cuisine };
}

function priceMarkup(dish) {
  return `
    <span class="price-stack">
      ${dish.originalPrice ? `<span class="old-price">${money(dish.originalPrice)}</span>` : ""}
      <span class="price">${money(dish.price)}</span>
      ${dish.discount ? `<span class="discount-badge">${dish.discount}</span>` : ""}
    </span>`;
}

function dishCard(dish) {
  const wished = window.LVWishlist?.has(dish.id);
  return `
    <article class="dish-card card reveal" data-name="${dish.name.toLowerCase()}" data-cuisine="${dish.cuisine}" data-category="${dish.category}">
      <a class="dish-media" href="dish-details.html?id=${dish.id}" aria-label="View ${dish.name}">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        <div class="tag-row"><span class="pill">${dish.tag}</span><span class="pill">${dish.rating} ★</span></div>
      </a>
      <div class="dish-body">
        <div class="dish-top"><h3 class="dish-title">${dish.name}</h3><span class="price">${money(dish.price)}</span></div>
        <div class="dish-meta"><span>${dish.cuisine}</span><span>${dish.time}</span><span>${dish.category}</span></div>
        <p>${dish.description}</p>
        <div class="dish-actions">
          <button class="btn primary add-cart" data-id="${dish.id}">Add</button>
          <button class="btn ghost wish-btn ${wished ? "active" : ""}" data-id="${dish.id}" aria-label="Toggle wishlist">${wished ? "Saved" : "Wish"}</button>
        </div>
      </div>
    </article>`;
}

function renderDishGrid(selector, items = dishes) {
  const grid = $(selector);
  if (!grid) return;
  grid.innerHTML = items.map(premiumDishCard).join("");
  initReveal();
}

function premiumDishCard(dish) {
  const wished = window.LVWishlist?.has(dish.id);
  return `
    <article class="dish-card card reveal" data-name="${dish.name.toLowerCase()}" data-cuisine="${dish.cuisine}" data-category="${dish.category}">
      <a class="dish-media" href="dish-details.html?id=${dish.id}" aria-label="View ${dish.name}">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        <div class="tag-row"><span class="pill">${dish.discount || dish.tag}</span><span class="pill">${dish.rating} &#9733;</span></div>
      </a>
      <div class="dish-body">
        <div class="dish-top"><h3 class="dish-title">${dish.name}</h3>${priceMarkup(dish)}</div>
        <div class="dish-meta"><span>${dish.cuisine}</span><span>${dish.time}</span><span>${dish.category}</span></div>
        <p>${dish.description}</p>
        <div class="dish-actions">
          <button class="btn primary add-cart" data-id="${dish.id}">Add</button>
          <button class="btn ghost wish-btn ${wished ? "active" : ""}" data-id="${dish.id}" aria-label="Toggle wishlist">${wished ? "Saved" : "Wish"}</button>
        </div>
      </div>
    </article>`;
}

function initDishActions() {
  document.addEventListener("click", (event) => {
    const add = event.target.closest(".add-cart");
    const wish = event.target.closest(".wish-btn");
    if (add) {
      const dish = dishes.find((item) => item.id === add.dataset.id);
      const qty = Number($("#detailQty")?.textContent || 1);
      if (dish) window.LVCart?.add(compactDish(dish), qty);
    }
    if (wish) {
      const dish = dishes.find((item) => item.id === wish.dataset.id);
      if (!dish) return;
      const active = window.LVWishlist?.toggle(compactDish(dish));
      wish.classList.toggle("active", active);
      wish.textContent = active ? "Saved" : "Wish";
      toast(active ? "Saved to wishlist" : "Removed from wishlist");
    }
  });
}

function initMenu() {
  const tabWrap = $(".tabs");
  if (tabWrap) {
    const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];
    tabWrap.innerHTML = categories.map((category, index) => `<button class="tab ${index === 0 ? "active" : ""}" data-filter="${category}">${category}</button>`).join("");
  }
  renderDishGrid("#menuGrid");
  const search = $("#menuSearch");
  const tabs = $$(".tab[data-filter]");
  const incomingSearch = new URLSearchParams(location.search).get("search");
  if (search && incomingSearch) search.value = incomingSearch;
  const apply = () => {
    const term = (search?.value || "").toLowerCase();
    const active = $(".tab.active[data-filter]")?.dataset.filter || "All";
    const filtered = dishes.filter((dish) => {
      const inTerm = `${dish.name} ${dish.cuisine} ${dish.category} ${dish.description} ${(dish.ingredients || []).join(" ")} ${dish.dietary || dish.tag}`.toLowerCase().includes(term);
      const inFilter = active === "All" || dish.cuisine === active || dish.category === active;
      return inTerm && inFilter;
    });
    renderDishGrid("#menuGrid", filtered);
    $("#menuEmpty")?.classList.toggle("hidden", filtered.length > 0);
  };
  search?.addEventListener("input", apply);
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    apply();
  }));
  if (incomingSearch) apply();
}

function initDetail() {
  const host = $("#dishDetail");
  if (!host) return;
  const id = new URLSearchParams(location.search).get("id") || dishes[0].id;
  const dish = dishes.find((item) => item.id === id) || dishes[0];
  const gallery = [dish.image, LV_IMAGES.hero, LV_IMAGES.brunch, LV_IMAGES.bar];
  host.innerHTML = `
    <div class="detail-gallery reveal">
      <img class="detail-main-img" id="detailMainImg" src="${dish.image}" alt="${dish.name}">
      <div class="thumb-row">${gallery.map((src, index) => `<img class="${index === 0 ? "active" : ""}" src="${src}" alt="${dish.name} preview ${index + 1}" loading="lazy">`).join("")}</div>
    </div>
    <aside class="detail-panel glass-card reveal">
      <p class="eyebrow">${dish.cuisine} / ${dish.category}</p>
      <h2>${dish.name}</h2>
      <p>${dish.description}</p>
      <div class="dish-meta"><span>${dish.rating} ★ rating</span><span>${dish.time}</span><span>${dish.calories} kcal</span></div>
      <ul class="info-list">${dish.ingredients.map((item, i) => `<li><span>${item}</span><strong>${["Origin selected", "Daily prep", "Chef balanced", "Premium grade"][i]}</strong></li>`).join("")}</ul>
      <div class="dish-top">
        ${priceMarkup(dish)}
        <div class="quantity"><button data-qty="-1">-</button><span id="detailQty">1</span><button data-qty="1">+</button></div>
      </div>
      <div class="dish-actions">
        <button class="btn primary add-cart" data-id="${dish.id}">Add to cart</button>
        <button class="btn ghost wish-btn ${window.LVWishlist?.has(dish.id) ? "active" : ""}" data-id="${dish.id}">${window.LVWishlist?.has(dish.id) ? "Saved" : "Wish"}</button>
      </div>
    </aside>`;
  $(".detail-panel .dish-meta span", host).innerHTML = `${dish.rating} &#9733; rating`;
  $$(".thumb-row img").forEach((thumb) => thumb.addEventListener("click", () => {
    $$(".thumb-row img").forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
    $("#detailMainImg").src = thumb.src;
  }));
  $$("[data-qty]").forEach((button) => button.addEventListener("click", () => {
    const qty = $("#detailQty");
    qty.textContent = Math.max(1, Number(qty.textContent) + Number(button.dataset.qty));
  }));
  $("#detailMainImg")?.addEventListener("click", () => openPreview($("#detailMainImg").src));
  renderReviews(dish);
  renderDishGrid("#similarGrid", dishes.filter((item) => item.id !== dish.id).slice(0, 3));
  initReveal();
}

function renderReviews(dish) {
  const host = $("#dishReviews");
  if (!host) return;
  const reviews = dishReviews[dish.id] || [
    { name: "Aditi R.", context: `${dish.cuisine} order`, rating: dish.rating, text: `${dish.name} felt polished, fresh, and true to the La Vuerte standard. The flavor profile matched the menu description beautifully.` },
    { name: "Kabir S.", context: "Premium delivery", rating: Math.min(5, dish.rating + 0.1), text: `The ${dish.category.toLowerCase()} plate arrived neatly packed, with strong aroma, balanced seasoning, and a restaurant-quality finish.` },
    { name: "Maya K.", context: "Guest favorite", rating: dish.rating, text: `A refined choice for anyone who enjoys ${dish.cuisine.toLowerCase()} flavors. It felt elegant without losing comfort.` }
  ];
  $("#reviewIntro") && ($("#reviewIntro").textContent = `Reviews for ${dish.name}, written around its flavor, texture, and serving experience.`);
  host.innerHTML = reviews.map((review) => `
    <article class="review-card glass-card reveal">
      <div>
        <div class="review-stars">${"★".repeat(Math.floor(review.rating))}${review.rating < 5 ? "½" : ""}</div>
        <blockquote>“${review.text}”</blockquote>
      </div>
      <div class="review-meta"><strong>${review.name}</strong><span>${review.context}</span></div>
    </article>`).join("");
  $$(".review-card", host).forEach((card, index) => {
    $(".review-stars", card).innerHTML = `${"&#9733;".repeat(Math.floor(reviews[index].rating))}${reviews[index].rating < 5 ? "&frac12;" : ""}`;
    $("blockquote", card).textContent = `"${reviews[index].text}"`;
  });
}

function openPreview(src) {
  const modal = $("#imageModal");
  if (!modal) return;
  $("#modalImage").src = src;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function initModal() {
  $$(".modal-close, .modal").forEach((node) => node.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal") || event.target.classList.contains("modal-close")) {
      $(".modal")?.classList.remove("open");
      document.body.classList.remove("modal-open");
    }
  }));
}

function updateCounts() {
  const count = window.LVCart?.all().reduce((sum, item) => sum + item.qty, 0) || 0;
  const wished = window.LVWishlist?.all().length || 0;
  $$(".cart-count").forEach((node) => node.textContent = count);
  $$(".wish-count").forEach((node) => node.textContent = wished);
}

function renderCart() {
  const list = $("#cartList");
  if (!list) return;
  const items = window.LVCart.all();
  if (!items.length) {
    list.innerHTML = `<div class="glass-card reservation-box"><h2>Your cart is quiet.</h2><p>Explore the menu and bring something beautiful to the table.</p><a class="btn primary" href="menu.html">Explore menu</a></div>`;
  } else {
    list.innerHTML = items.map((item) => `
      <article class="cart-item glass-card">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div><h3 class="dish-title">${item.name}</h3><p>${item.cuisine || "La Vuerte kitchen"}</p>
          <div class="quantity"><button data-cart-dec="${item.id}">-</button><span>${item.qty}</span><button data-cart-inc="${item.id}">+</button></div>
          <button class="btn ghost" data-cart-remove="${item.id}">Remove</button>
        </div>
        <strong class="price">${money(item.price * item.qty)}</strong>
      </article>`).join("");
  }
  renderSummary();
}

function renderSummary() {
  const host = $("#priceSummary");
  if (!host || !window.LVCart) return;
  const totals = window.LVCart.totals();
  host.innerHTML = `
    <div class="summary-line"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
    <div class="summary-line"><span>Delivery</span><strong>${totals.delivery ? money(totals.delivery) : "Complimentary"}</strong></div>
    <div class="summary-line"><span>Service</span><strong>${money(totals.service)}</strong></div>
    <div class="summary-line"><span>Coupon</span><strong>-${money(totals.discount)}</strong></div>
    <div class="summary-line total"><span>Total</span><strong>${money(totals.total)}</strong></div>`;
}

function initCartPage() {
  renderCart();
  renderSummary();
  document.addEventListener("click", (event) => {
    const inc = event.target.closest("[data-cart-inc]");
    const dec = event.target.closest("[data-cart-dec]");
    const remove = event.target.closest("[data-cart-remove]");
    if (inc || dec) {
      const id = (inc || dec).dataset.cartInc || (inc || dec).dataset.cartDec;
      const item = window.LVCart.all().find((entry) => entry.id === id);
      if (item) window.LVCart.update(id, item.qty + (inc ? 1 : -1));
    }
    if (remove) window.LVCart.remove(remove.dataset.cartRemove);
  });
  $("#applyCoupon")?.addEventListener("click", () => window.LVCart.setCoupon($("#couponCode").value));
}

function initWishlistPage() {
  const grid = $("#wishlistGrid");
  if (!grid) return;
  const items = window.LVWishlist.all();
  grid.innerHTML = items.length ? items.map((item) => premiumDishCard(dishes.find((dish) => dish.id === item.id) || item)).join("") : `<div class="glass-card reservation-box"><h2>Your wishlist is ready for cravings.</h2><p>Save dishes from the menu and they will appear here.</p><a class="btn primary" href="menu.html">Find dishes</a></div>`;
  initReveal();
}

function formValues(form) {
  return Object.fromEntries([...new FormData(form).entries()]);
}

function buildCheckoutOrder(form) {
  const values = formValues(form);
  const items = window.LVCart?.all() || [];
  const totals = window.LVCart?.totals() || { subtotal: 0, discount: 0, delivery: 0, service: 0, total: 0 };
  const orderId = `LV-${Date.now().toString().slice(-6)}`;
  return {
    orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: values.checkoutName,
      phone: values.checkoutPhone,
      email: values.checkoutEmail,
      recipient: values.checkoutRecipient || values.checkoutName
    },
    address: {
      flat: values.checkoutFlat,
      building: values.checkoutBuilding,
      street: values.checkoutStreet,
      landmark: values.checkoutLandmark,
      city: values.checkoutCity,
      state: values.checkoutState,
      pin: values.checkoutPin
    },
    preferences: {
      deliveryTime: values.checkoutTime,
      payment: values.checkoutPayment,
      handoff: values.checkoutHandoff,
      cutlery: values.checkoutCutlery,
      notes: values.checkoutInstructions || ""
    },
    coupon: window.LVCart?.coupon() || "",
    items,
    totals,
    totalsInINR: {
      subtotal: money(totals.subtotal),
      discount: money(totals.discount),
      delivery: totals.delivery ? money(totals.delivery) : "Complimentary",
      service: money(totals.service),
      total: money(totals.total)
    }
  };
}

function saveOrderBackup(order, status) {
  const key = "laVuerteOrders";
  let orders = [];
  try {
    orders = JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    orders = [];
  }
  orders.push({ ...order, sheetStatus: status });
  localStorage.setItem(key, JSON.stringify(orders.slice(-50)));
}

async function sendOrderToGoogleSheets(order) {
  if (!GOOGLE_SHEETS_ENDPOINT || GOOGLE_SHEETS_ENDPOINT.includes("PASTE_YOUR")) {
    saveOrderBackup(order, "endpoint-not-configured");
    return { ok: false, skipped: true };
  }
  try {
    await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(order)
    });
    saveOrderBackup(order, "sent");
    return { ok: true };
  } catch (error) {
    saveOrderBackup(order, "send-failed");
    return { ok: false, error };
  }
}

function initForms() {
  $$("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const invalid = $$("input, select, textarea", form).find((field) => field.required && !field.checkValidity());
      if (invalid) {
        invalid.focus();
        invalid.reportValidity?.();
        toast("Please complete the highlighted details");
        return;
      }
      if (form.id === "checkoutForm") {
        const order = buildCheckoutOrder(form);
        if (!order.items.length) {
          toast("Your cart is empty. Add a dish before checkout.");
          return;
        }
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Saving Order";
        }
        await sendOrderToGoogleSheets(order);
        sessionStorage.setItem("laVuerteLastOrder", JSON.stringify(order));
        window.LVCart?.clear();
        toast("Order captured successfully");
        location.href = `order-confirmation.html?order=${encodeURIComponent(order.orderId)}`;
        return;
      }
      toast(form.dataset.success || "Request received");
      form.reset();
    });
  });
}

function initReservationExperience() {
  const section = $("#reservation");
  if (!section) return;
  const date = $("#resDate", section);
  if (date) date.min = new Date().toISOString().slice(0, 10);
  $$(".experience-option", section).forEach((button) => {
    button.addEventListener("click", () => {
      $$(".experience-option", section).forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      $("#resExperience", section).value = button.dataset.experience;
      const note = $("#resNote", section);
      if (note && !note.value) note.placeholder = `${button.dataset.experience}: dietary notes, seating preference, or occasion`;
    });
  });
  $$(".time-chip", section).forEach((button) => {
    button.addEventListener("click", () => {
      $$(".time-chip", section).forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      $("#resTime", section).value = button.dataset.time;
    });
  });
}

function initTestimonials() {
  const slides = $$(".testimonial-slide");
  if (!slides.length) return;
  let index = 0;
  const show = (next) => {
    slides[index].classList.remove("active");
    index = (next + slides.length) % slides.length;
    slides[index].classList.add("active");
  };
  $("#nextTestimonial")?.addEventListener("click", () => show(index + 1));
  $("#prevTestimonial")?.addEventListener("click", () => show(index - 1));
  setInterval(() => show(index + 1), 6200);
}

function initFaq() {
  $$(".faq-q").forEach((button) => button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = !item.classList.contains("open");
    item.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
  }));
}

function initHome() {
  renderDishGrid("#signatureGrid", dishes.slice(0, 3));
  const input = $("#homeFoodSearch");
  const link = $("#homeSearchLink");
  const empty = $("#homeSearchEmpty");
  if (!input) return;
  const apply = () => {
    const term = input.value.trim().toLowerCase();
    const results = term
      ? dishes.filter((dish) => `${dish.name} ${dish.cuisine} ${dish.category} ${dish.description}`.toLowerCase().includes(term)).slice(0, 3)
      : dishes.slice(0, 3);
    renderDishGrid("#signatureGrid", results);
    empty?.classList.toggle("hidden", results.length > 0);
    if (link) {
      link.href = term ? `menu.html?search=${encodeURIComponent(term)}` : "menu.html";
      link.textContent = term ? "View Results" : "Search Menu";
    }
  };
  input.addEventListener("input", apply);
}

function initBranches() {
  const grid = $("#branchesGrid");
  if (!grid) return;
  grid.innerHTML = branches.map(([title, text, image]) => `<article class="branch-card card reveal"><img src="${image}" alt="${title}" loading="lazy"><div class="dish-body"><h3 class="dish-title">${title}</h3><p>${text}</p><a class="btn ghost" href="contact.html">Reserve</a></div></article>`).join("");
  initReveal();
}

function initBlog() {
  const grid = $("#blogGrid");
  if (!grid) return;
  grid.innerHTML = posts.map(([title, text, image]) => `<article class="post-card card reveal"><img src="${image}" alt="${title}" loading="lazy"><div class="dish-body"><p class="eyebrow">Journal</p><h3 class="dish-title">${title}</h3><p>${text}</p><a class="btn ghost" href="blog.html">Read</a></div></article>`).join("");
  initReveal();
}

function initContentPages() {
  const categoriesGrid = $("#categoriesGrid");
  if (categoriesGrid) {
    const groups = [...new Set(dishes.map((dish) => dish.category))];
    categoriesGrid.innerHTML = groups.map((category) => {
      const sample = dishes.find((dish) => dish.category === category);
      const count = dishes.filter((dish) => dish.category === category).length;
      return `<article class="dish-card card reveal">
        <a class="dish-media" href="menu.html?search=${encodeURIComponent(category)}" aria-label="Explore ${category}">
          <img src="${sample?.image || LV_IMAGES.hero}" alt="${category}" loading="lazy">
          <div class="tag-row"><span class="pill">${count} dishes</span><span class="pill">Explore</span></div>
        </a>
        <div class="dish-body"><h3 class="dish-title">${category}</h3><p>Chef-selected ${category.toLowerCase()} with premium ingredients, polished preparation, and delivery-ready presentation.</p><a class="btn ghost" href="menu.html?search=${encodeURIComponent(category)}">View Category</a></div>
      </article>`;
    }).join("");
  }
  renderDishGrid("#featuredGrid", dishes.filter((dish) => dish.rating >= 4.8).slice(0, 12));
  renderDishGrid("#orderingGrid", dishes.slice(0, 8));
}

function initDashboards() {
  $$(".dash-nav button").forEach((button) => button.addEventListener("click", () => {
    $$(".dash-nav button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    $$(".dash-panel").forEach((panel) => panel.hidden = panel.id !== button.dataset.panel);
  }));
}

function getLastOrder() {
  try {
    return JSON.parse(sessionStorage.getItem("laVuerteLastOrder")) || null;
  } catch (error) {
    return null;
  }
}

function initConfirmationPage() {
  const host = $("#confirmationDetails");
  if (!host) return;
  const order = getLastOrder();
  const orderId = new URLSearchParams(location.search).get("order") || order?.orderId;
  if ($("#confirmationOrderId") && orderId) $("#confirmationOrderId").textContent = `Order ${orderId}`;
  if (!orderId) {
    host.innerHTML = `<h2>No recent order found.</h2><p>Place an order to receive a private confirmation and tracking link.</p><a class="btn primary" href="menu.html">Order from menu</a>`;
    return;
  }
  const itemText = order?.items?.map((item) => `${item.qty} x ${item.name}`).join(", ") || "Your selected La Vuerte dishes";
  host.innerHTML = `
    <p class="eyebrow">Order ${orderId}</p>
    <h2>Your order is confirmed.</h2>
    <p>${itemText}</p>
    <div class="summary-line total"><span>Total</span><strong>${order?.totalsInINR?.total || "Confirmed"}</strong></div>
    <p>A confirmation email can include this private tracking link once email delivery is connected.</p>
    <div class="hero-actions"><a class="btn primary" href="order-tracking.html?order=${encodeURIComponent(orderId)}">Track Order</a><a class="btn ghost" href="menu.html">Add More</a></div>`;
}

function initTrackingPage() {
  const heroOrder = $("#trackingOrderId");
  const gate = $("#trackingGate");
  const content = $("#trackingContent");
  if (!content) return;
  const order = getLastOrder();
  const orderId = new URLSearchParams(location.search).get("order") || order?.orderId;
  if (!orderId) {
    content.innerHTML = `<div class="glass-card reservation-box reveal"><h2>Tracking opens after checkout.</h2><p>For guest privacy, order tracking is available only from a confirmed order link.</p><a class="btn primary" href="menu.html">Place an order</a></div>`;
    gate?.classList.add("hidden");
    return;
  }
  if (heroOrder) heroOrder.textContent = `Order ${orderId}`;
  const destination = order?.address ? `${order.address.flat}, ${order.address.street}, ${order.address.city}` : "Delivery address confirmed at checkout";
  const items = order?.items?.map((item) => `${item.qty} x ${item.name}`).join(", ") || "Kitchen order received";
  content.insertAdjacentHTML("afterbegin", `<div class="glass-card reservation-box reveal tracking-summary"><h2>${orderId}</h2><p>${items}</p><p>${destination}</p></div>`);
}

document.addEventListener("toast", (event) => toast(event.detail));
document.addEventListener("cart:changed", () => { updateCounts(); renderCart(); renderSummary(); });
document.addEventListener("wishlist:changed", () => { updateCounts(); if (page === "wishlist") initWishlistPage(); });
document.addEventListener("coupon:changed", renderSummary);

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty("--hero-image", `url("${LV_IMAGES.hero}")`);
  initSEO();
  initPerformanceHints();
  initNavIcons();
  initFooter();
  initNav();
  initReveal();
  initCounters();
  initDishActions();
  initModal();
  initForms();
  initReservationExperience();
  initTestimonials();
  initFaq();
  updateCounts();
  if (page === "home") initHome();
  if (page === "menu") initMenu();
  if (page === "detail") initDetail();
  if (page === "cart" || page === "checkout") initCartPage();
  if (page === "wishlist") initWishlistPage();
  if (page === "confirmation") initConfirmationPage();
  if (page === "tracking") initTrackingPage();
  initBranches();
  initBlog();
  initContentPages();
  initDashboards();
});
