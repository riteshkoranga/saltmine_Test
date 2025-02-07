const Cart=require('./cart');

async function runCart(){
    const cart = new Cart();
    console.log("\nAdding items to the cart...\n");

    try {
        //sample test case 1

        // await cart.addProduct("cornflakes", 1);  // Fetch price from db.josn
        // await cart.addProduct("cornflakes", 1);
        // await cart.addProduct("weetabix", 1); 


        //sample test case 2

        await cart.addProduct("cheerios", 1);  
        await cart.addProduct("shreddies", 1);
        await cart.addProduct("frosties", 1);
        await cart.addProduct("cheerios", 2);  


        cart.printCart();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

runCart();


