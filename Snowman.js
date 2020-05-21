/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;

function start(){
    var circle = new Circle(BOTTOM_RADIUS);
    circle.setPosition(200, 300);
    circle.setColor(Color.gray);
    add(circle);
    
    var circle = new Circle(MID_RADIUS);
    circle.setPosition(200, 140);
    circle.setColor(Color.gray);
    add(circle);
    
    var circle = new Circle(TOP_RADIUS);
    circle.setPosition(200, 50);
    circle.setColor(Color.gray);
    add(circle);
}