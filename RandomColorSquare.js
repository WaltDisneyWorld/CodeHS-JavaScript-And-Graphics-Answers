var SIDE_LENGTH = 100;

function start()
{
    
    var rect = new Rectangle(100, 100);
    var x = getWidth() / 2;
    var y = getHeight() / 2;
    rect.setPosition(x, y);
    var color = Randomizer.nextColor();
    rect.setColor(color);
    add(rect);
    
}