const restaurant = [];
const images = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "Eigth",
  "nine",
  "tenth",
];
const rest_name = [
  "The Golden Spoon",
  "Ocean Breeze Café",
  "Firewood Grill",
  "Bella Italia",
  "Spice Symphony",
  "Urban Eats",
  "Sunset Bistro",
  "Taste of Tradition",
  "The Hungry Table",
  "Blue Lagoon Seafood",
  "Mountain View Diner",
  "The Rustic Fork",
  "La Petite Crêperie",
  "Savory Seasons",
  "The Gourmet Garden",
  "Mama’s Kitchen",
  "Fusion Delight",
  "The Velvet Plate",
  "Chef’s Corner",
  "The Food Haven",
];
const foodTypes = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Thai",
    "Japanese",
    "American",
    "Mediterranean",
    "French",
    "Korean"
  ];
  const delhiLocations = [
    "Connaught Place",
    "Chandni Chowk",
    "India Gate",
    "Hauz Khas Village",
    "Lodhi Garden",
    "Karol Bagh",
    "Saket",
    "Rajouri Garden",
    "Lajpat Nagar",
    "Qutub Minar"
  ];
  
  

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj["image"] = images[Math.floor(Math.random() * 10)];
  obj["name"] = rest_name[Math.floor(Math.random() * 20)];
  obj["rating"]=Math.floor(Math.random()*5+1);
  obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
  obj["Price_for_two"]=Math.floor(Math.random()*2401+100);
  obj["location"]=delhiLocations[Math.floor(Math.random()*10)];
  obj["Distance_from_Customer_house"]=(Math.random()*10+1).toFixed(1);
  obj["offers"]=Math.floor(Math.random()*30+1);
  obj["alcholol"]=Math.random()>0.7;
  obj["Restaurant_open_time"]=Math.floor(Math.random()*24);
  obj["Restaurant_close_time"]=(obj["Restaurant_open_time"]+12)%24;
   
  restaurant.push(obj);
}

// console.log(restaurant);

// var jsonArray = JSON.parse(JSON.stringify(restaurant))
// console.log(jsonArray);
// console.log(JSON.stringify(restaurant));

