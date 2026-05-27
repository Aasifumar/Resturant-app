// Dummy Food Data - Sample recipes and food items
export const foodData = [
  // Pizza Category
  {
    id: 1,
    title: "Margherita Pizza",
    category: "Pizza",
    price: 250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"],
    reviews: 324,
    prepTime: "20 mins",
    servings: 2
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    category: "Pizza",
    price: 300,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop",
    description: "Loaded with spicy pepperoni and mozzarella cheese",
    ingredients: ["Dough", "Tomato Sauce", "Pepperoni", "Mozzarella", "Oregano"],
    reviews: 456,
    prepTime: "25 mins",
    servings: 2
  },
  {
    id: 3,
    title: "Veggie Delight Pizza",
    category: "Pizza",
    price: 280,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&auto=format&fit=crop",
    description: "Fresh vegetables on a thin crust base",
    ingredients: ["Dough", "Tomato Sauce", "Bell Peppers", "Mushrooms", "Onions", "Olives"],
    reviews: 234,
    prepTime: "22 mins",
    servings: 2
  },
  {
    id: 4,
    title: "Garlic Bread Pizza",
    category: "Pizza",
    price: 220,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=400&auto=format&fit=crop",
    description: "Crispy crust with loads of garlic and herbs",
    ingredients: ["Dough", "Garlic", "Butter", "Herbs", "Mozzarella"],
    reviews: 189,
    prepTime: "18 mins",
    servings: 2
  },

  // Burger Category
  {
    id: 5,
    title: "Classic Cheeseburger",
    category: "Burger",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    description: "Juicy beef patty with melted cheese and fresh vegetables",
    ingredients: ["Beef Patty", "Cheddar Cheese", "Lettuce", "Tomato", "Pickles", "Onion"],
    reviews: 567,
    prepTime: "15 mins",
    servings: 1
  },
  {
    id: 6,
    title: "Bacon Burger",
    category: "Burger",
    price: 220,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
    description: "Crispy bacon with double beef and cheese",
    ingredients: ["Beef Patty", "Bacon", "Cheddar Cheese", "Lettuce", "Tomato"],
    reviews: 678,
    prepTime: "18 mins",
    servings: 1
  },
  {
    id: 7,
    title: "Veggie Burger",
    category: "Burger",
    price: 150,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=400&auto=format&fit=crop",
    description: "Healthy veggie patty with fresh greens",
    ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Cucumber", "Avocado"],
    reviews: 234,
    prepTime: "12 mins",
    servings: 1
  },

  // Pasta Category
  {
    id: 8,
    title: "Spaghetti Carbonara",
    category: "Pasta",
    price: 280,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop",
    description: "Creamy Italian pasta with bacon and parmesan",
    ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan", "Black Pepper"],
    reviews: 423,
    prepTime: "20 mins",
    servings: 2
  },
  {
    id: 9,
    title: "Penne Arrabbiata",
    category: "Pasta",
    price: 260,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    description: "Spicy pasta with tomatoes and garlic",
    ingredients: ["Penne", "Tomatoes", "Garlic", "Red Chili", "Olive Oil"],
    reviews: 356,
    prepTime: "18 mins",
    servings: 2
  },
  {
    id: 10,
    title: "Fettuccine Alfredo",
    category: "Pasta",
    price: 320,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1645112411341-6c4ee80343b9?w=400&h=300&fit=crop",
    description: "Silky cream sauce with fettuccine pasta",
    ingredients: ["Fettuccine", "Cream", "Butter", "Parmesan", "Garlic"],
    reviews: 512,
    prepTime: "22 mins",
    servings: 2
  },

  // Drinks Category
  {
    id: 11,
    title: "Fresh Orange Juice",
    category: "Drinks",
    price: 80,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    description: "Freshly squeezed orange juice",
    ingredients: ["Oranges", "Ice", "Sugar"],
    reviews: 234,
    prepTime: "5 mins",
    servings: 1
  },
  {
    id: 12,
    title: "Iced Coffee",
    category: "Drinks",
    price: 120,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop",
    description: "Cold brew coffee with ice and milk",
    ingredients: ["Coffee", "Milk", "Ice", "Sugar"],
    reviews: 456,
    prepTime: "3 mins",
    servings: 1
  },
  {
    id: 13,
    title: "Smoothie Bowl",
    category: "Drinks",
    price: 200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    description: "Thick smoothie topped with fruits and granola",
    ingredients: ["Berries", "Yogurt", "Honey", "Granola", "Coconut"],
    reviews: 378,
    prepTime: "8 mins",
    servings: 1
  },

  // Dessert Category
  {
    id: 14,
    title: "Chocolate Cake",
    category: "Dessert",
    price: 200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    description: "Rich chocolate cake with frosting",
    ingredients: ["Flour", "Cocoa", "Sugar", "Eggs", "Butter"],
    reviews: 634,
    prepTime: "10 mins",
    servings: 2
  },
  {
    id: 15,
    title: "Cheesecake",
    category: "Dessert",
    price: 250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1549007994-cb92cff1a3e8?w=400&h=300&fit=crop",
    description: "Creamy New York style cheesecake",
    ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Cracker"],
    reviews: 523,
    prepTime: "15 mins",
    servings: 3
  },
  {
    id: 16,
    title: "Ice Cream Sundae",
    category: "Dessert",
    price: 150,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    description: "Creamy ice cream with toppings",
    ingredients: ["Ice Cream", "Chocolate Syrup", "Whipped Cream", "Nuts"],
    reviews: 456,
    prepTime: "2 mins",
    servings: 1
  },

  // Indian Food Category
  {
    id: 17,
    title: "Butter Chicken",
    category: "Indian Food",
    price: 320,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    description: "Tender chicken in creamy tomato butter sauce",
    ingredients: ["Chicken", "Butter", "Cream", "Tomatoes", "Spices"],
    reviews: 745,
    prepTime: "30 mins",
    servings: 2
  },
  {
    id: 18,
    title: "Biryani",
    category: "Indian Food",
    price: 280,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1603894524315-ded6a7a34457?w=400&h=300&fit=crop",
    description: "Fragrant rice with spiced meat",
    ingredients: ["Rice", "Meat", "Saffron", "Yogurt", "Spices"],
    reviews: 612,
    prepTime: "35 mins",
    servings: 2
  },
  {
    id: 19,
    title: "Paneer Tikka",
    category: "Indian Food",
    price: 250,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
    description: "Grilled cottage cheese with spices",
    ingredients: ["Paneer", "Yogurt", "Spices", "Bell Peppers"],
    reviews: 534,
    prepTime: "25 mins",
    servings: 2
  },

  // Chinese Food Category
  {
    id: 20,
    title: "Kung Pao Chicken",
    category: "Chinese Food",
    price: 300,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1603521214040-d0a84bbd8e63?w=400&h=300&fit=crop",
    description: "Stir-fried chicken with peanuts and spices",
    ingredients: ["Chicken", "Peanuts", "Soy Sauce", "Ginger", "Garlic"],
    reviews: 456,
    prepTime: "22 mins",
    servings: 2
  },
  {
    id: 21,
    title: "Fried Rice",
    category: "Chinese Food",
    price: 220,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603894752066-4ef31cc0720d?w=400&h=300&fit=crop",
    description: "Fragrant rice stir-fried with vegetables",
    ingredients: ["Rice", "Vegetables", "Eggs", "Soy Sauce"],
    reviews: 378,
    prepTime: "15 mins",
    servings: 2
  },
  {
    id: 22,
    title: "Sweet and Sour Pork",
    category: "Chinese Food",
    price: 290,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608270861620-7b0675594838?w=400&h=300&fit=crop",
    description: "Crispy pork in sweet and sour sauce",
    ingredients: ["Pork", "Pineapple", "Bell Peppers", "Sweet and Sour Sauce"],
    reviews: 423,
    prepTime: "25 mins",
    servings: 2
  },
];

// Get all unique categories
export const getCategories = () => {
  const categories = [...new Set(foodData.map(item => item.category))];
  return categories;
};

// Filter food by category
export const filterByCategory = (category) => {
  if (category === "All") return foodData;
  return foodData.filter(item => item.category === category);
};

// Search food items
export const searchFood = (query) => {
  return foodData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
};

// Get single food item
export const getFoodById = (id) => {
  return foodData.find(item => item.id === id);
};
