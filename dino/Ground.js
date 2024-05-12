export default class Ground {
  constructor(ctx, width, height, speed, scaleRatio) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.scaleRatio = scaleRatio;
    

    this.x = 0;
    this.y = this.canvas.height - this.height;

    this.groundImage = new Image();
    this.groundImage.src = "images/ground.png";

  }

  update(gameSpeed, frameTimeDelta) {
    this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio;
  }

  draw() {
    this.ctx.drawImage(
      this.groundImage,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.ctx.drawImage(
      this.groundImage,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );

    
   
    // this.ctx.drawImage(this.birdImage, 300 * this.scaleRatio,this.canvas.height - this.height*1.4 - 1.5 * this.scaleRatio, 40*this.scaleRatio, 40*this.scaleRatio);
    // this.ctx.drawImage(
    //   this.cloudImage,
    //   this.width/2.05,
    //   this.height-110,
    //   80,
    //   80
    // );

    // this.ctx.drawImage(
    //   this.cloudImage,
    //   this.width/1.925,
    //   this.height-130,
    //   80,
    //   80
    // );
    // this.ctx.drawImage(
    //   this.birdImage,
    //   this.width/3,
    //   this.height-50,
    //   100,
    //   100
    // );


    if (this.x < -this.width) {
      this.x = 0;
    }
  }

  reset() {
    this.x = 0;
  }
}
