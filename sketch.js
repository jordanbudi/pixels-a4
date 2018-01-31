function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    loadPixels();
    
    for(var row=0; row<height; row++){
        for(var col=0; col<width; col++){
            var index = (row * width + col) * 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            pixels[index] = col;
            pixels[index + 1] = 0;
            pixels[index + 2] = row;
            pixels[index + 3] = a;
        }
    }
    
    updatePixels();
}