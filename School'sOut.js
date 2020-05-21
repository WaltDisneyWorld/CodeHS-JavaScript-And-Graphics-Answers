function start(){
    var weekday = readBoolean("Is it a week day? ");
    var holiday = readBoolean("Is it a holiday? ");
    var noSchoolToday = !weekday || holiday;
    
    if(noSchoolToday){
        println("There is no school today: " + noSchoolToday);
    }
    
    if(!noSchoolToday){
        println("There is school today: " + noSchoolToday);
    }
    
    
    
}