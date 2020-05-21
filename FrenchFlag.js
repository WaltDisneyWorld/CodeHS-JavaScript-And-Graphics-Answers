function start()
{
    var newRect = new Rectangle(getWidth() / 3, getHeight());
    newRect.setPosition(0, 0); //Setting the rectangle's position
    newRect.setColor(Color.blue); //Setting the colour to blue
    add(newRect); //Placing the rectangle
    
    var newRect = new Rectangle(getWidth() / 3, getHeight());
    newRect.setPosition(267, 0); //Setting the rectangle's position
    newRect.setColor(Color.red); //Setting the rectangle's colour to red
    add(newRect); //Placing the rectangle

}