function start(){
    var age = readInt("How old are you: ");
    ///
    if(age >= 13 && age <= 19){
        println("Yes, you are a teenager.");
    }
    else{
        println("No, you are not a teenager.");
    }
}