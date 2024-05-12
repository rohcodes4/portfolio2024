export default class Sun{
    constructor(ctx, width, height, speed, scaleRatio) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.scaleRatio = scaleRatio;
        
    
        this.x = 0;
        this.y = this.canvas.height - this.height;
    
        this.sunImage = new Image();
        this.sunImage.src = "images/sun.png";
        this.cloudImage = new Image();
        this.cloudImage.src = "images/cloud.png";
        this.birdImage = new Image();
        this.birdImage.src = "images/bird.png";
        
    
      }
    

    draw(){
        this.ctx.drawImage(this.sunImage, 500 * this.scaleRatio,this.canvas.height - this.height*1.8 - 1.5 * this.scaleRatio, 60*this.scaleRatio, 60*this.scaleRatio);
        this.ctx.drawImage(this.cloudImage, 470 * this.scaleRatio,this.canvas.height - this.height*1.6 - 1.5 * this.scaleRatio, 60*this.scaleRatio, 60*this.scaleRatio);
        this.ctx.drawImage(this.cloudImage, 530 * this.scaleRatio,this.canvas.height - this.height*1.7 - 1.5 * this.scaleRatio, 60*this.scaleRatio, 60*this.scaleRatio);
    }
}