interface transactions {
  itemName: String;
  category: String;
  price: Number;
  timestamp: Number;
}

function calculateTotalSpentByCategory(transactions:transactions[]): {category:String, totalExpenditure:Number}[] {
   // Create a Set to store unique categories
const uniqueCategories = new Set();

// Iterate through the data and add each category to the Set
transactions.forEach(item => {
  uniqueCategories.add(item.category);
});

// Convert the Set back to an array to get unique categories
const uniqueCategoriesArray = Array.from(uniqueCategories);

const categoryObjects:{category:String, totalExpenditure:Number}[] = [];

//converting array of strings(uniqueCategoriesArray)  to array of objects 
uniqueCategoriesArray.forEach((category, index) => {
  if (typeof category === 'string') {
    categoryObjects?.push({category, totalExpenditure:0})
  }});
 
  //calculating totalExpenditure for each category
  uniqueCategoriesArray?.forEach((category, index)=>{
     const items = transactions?.filter((item)=>item?.category === category);
     const total = items.reduce((acc, transaction) => {
      return acc + Number(transaction.price);
    }, 0);
    categoryObjects[index].totalExpenditure = total;
 })

  
  return categoryObjects;
}
const totalExpense = calculateTotalSpentByCategory([
  {
    itemName: "Shoes",
    category: "garments",
    price: 100,
    timestamp: 1200000,
  },
  {
    itemName: "car",
    category: "auto",
    price: 1000,
    timestamp: 1200000,
  },
  {
    itemName: "Shoes",
    category: "garments",
    price: 100,
    timestamp: 1200000,
  },
  {
    itemName: "bike",
    category: "auto",
    price: 140,
    timestamp: 1200000,
  },
  {
    itemName: "ketchup",
    category: "food",
    price: 50,
    timestamp: 1200000,
  },
  {
    itemName: "potato",
    category: "food",
    price: 50,
    timestamp: 1200000,
  },
]);
console.log(totalExpense)