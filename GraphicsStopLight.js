var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var BUFFER = 100;
var GRAY_COLOR = "#737071";
var centerX = getWidth() / 2;
var centerY = getHeight() / 2;
var DIST_BETWEEN_LIGHTS = 100;


function start(){
    var rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    rect.setPosition(centerX - STOPLIGHT_WIDTH / 2, centerY - STOPLIGHT_HEIGHT / 2);
    rect.setColor(GRAY_COLOR);
    add(rect);
    drawCircle(Color.red, centerY - DIST_BETWEEN_LIGHTS);
    drawCircle(Color.yellow, centerY);
    drawCircle(Color.green, centerY + DIST_BETWEEN_LIGHTS);
	
}

function drawCircle(color, y){
    var circle = new Circle(LIGHT_RADIUS);
    circle.setPosition(centerX, y);
    circle.setColor(color);
    add(circle);
    
}