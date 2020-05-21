var STARTING_ITEMS_IN_INVENTORY = 20;

function start(){
    
    while(STARTING_ITEMS_IN_INVENTORY >= 1){
        println("We have " + STARTING_ITEMS_IN_INVENTORY + " items in inventory.");
        var buy = readInt("How many would you like to buy? ");
        if(buy <= STARTING_ITEMS_IN_INVENTORY)
        {
            STARTING_ITEMS_IN_INVENTORY = STARTING_ITEMS_IN_INVENTORY - buy;
            println("Now we have " + STARTING_ITEMS_IN_INVENTORY + " left.");
        }
        
        if(buy > 20)
        {
            println("There is not enough in inventory for that purchase.");
        }
        
        if(STARTING_ITEMS_IN_INVENTORY == 0)
        {
            println("All out!");
        }
        
    }
    
}