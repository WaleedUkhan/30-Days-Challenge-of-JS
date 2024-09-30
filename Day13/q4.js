function createItemManager() {
    // Step 1: Define the private collection of items
    let items = [];

    // Step 2: Define a method to add items
    function addItem(item) {
        items.push(item);
        console.log(`Added: ${item}`);
    }

    // Step 2: Define a method to remove items
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
            console.log(`Removed: ${item}`);
        } else {
            console.log(`${item} not found in the collection.`);
        }
    }

    // Step 2: Define a method to list all items
    function listItems() {
        console.log("Items in the collection:");
        items.forEach(item => console.log(item));
    }

    // Step 3: Return an object with the methods
    return {
        addItem,
        removeItem,
        listItems
    };
}

// Using the module
const itemManager = createItemManager();

// Adding items
itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Mango");
itemManager.addItem("Cherry");

// Listing items
itemManager.listItems();  // Outputs: Apple, Banana

// Removing an item
itemManager.removeItem("Banana");

// Listing items again to see the updated collection
itemManager.listItems();  // Outputs: Apple
