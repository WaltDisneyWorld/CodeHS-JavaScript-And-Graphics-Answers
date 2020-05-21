function start()
{
    var credits = readInt("How many credits do you have: ");
    var metRequirements = readBoolean("Have you met requirements: ");
    var canGraduate = credits && metRequirements;
    
    if(canGraduate){
        println("true");
    }
    
    if(!canGraduate){
        println("false");
    }
}