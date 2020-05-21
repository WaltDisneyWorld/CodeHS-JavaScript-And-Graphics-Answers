function start(){
    horizontalLine(100, 200);
    horizontalLine(200, 100);
    horizontalLine(300, 20);
}

function horizontalLine(y, length){
    var line = new Line(0, y, length, y);
    line.setLineWidth(1);
    add(line);
}