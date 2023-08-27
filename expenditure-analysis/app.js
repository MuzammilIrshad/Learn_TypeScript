function calculateTotalSpentByCategory(transactions) {
    // Create a Set to store unique categories
    var uniqueCategories = new Set();
    // Iterate through the data and add each category to the Set
    transactions.forEach(function (item) {
        uniqueCategories.add(item.category);
    });
    // Convert the Set back to an array to get unique categories
    var uniqueCategoriesArray = Array.from(uniqueCategories);
    var categoryObjects = [];
    //converting array of strings(uniqueCategoriesArray)  to array of objects 
    uniqueCategoriesArray.forEach(function (category, index) {
        if (typeof category === 'string') {
            categoryObjects === null || categoryObjects === void 0 ? void 0 : categoryObjects.push({ category: category, totalExpenditure: 0 });
        }
    });
    //calculating totalExpenditure for each category
    uniqueCategoriesArray === null || uniqueCategoriesArray === void 0 ? void 0 : uniqueCategoriesArray.forEach(function (category, index) {
        var items = transactions === null || transactions === void 0 ? void 0 : transactions.filter(function (item) { return (item === null || item === void 0 ? void 0 : item.category) === category; });
        var total = items.reduce(function (acc, transaction) {
            return acc + Number(transaction.price);
        }, 0);
        categoryObjects[index].totalExpenditure = total;
    });
    return categoryObjects;
}
var totalExpense = calculateTotalSpentByCategory([
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
console.log(totalExpense);
