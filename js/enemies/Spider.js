import Enemy from "../Enemy.js"

export default class Spider extends Enemy{
  constructor(game){
    super(game)

    this.spriteWidth = 310
    this.spriteHeight = 175
    this.width = this.spriteWidth * 0.5
    this.height = this.spriteHeight * 0.5
    this.x = Math.random() * (game.width - this.width)
    this.y = -this.height
    this.img = spider
    this.vx = 0
    this.vy = Math.random() * 0.1 + 0.1
    this.maxLength = Math.random() * (game.height - this.height)
  }

  update(deltaTime){
    super.update(deltaTime)
    this.y += this.vy * deltaTime
    if(this.y > this.maxLength) this.vy *= -1
  }

  draw(ctx){
    ctx.beginPath()
    ctx.moveTo(this.x + this.width * 0.5, 0)
    ctx.lineTo(this.x + this.width * 0.5, this.y + 10)
    ctx.stroke()
    super.draw(ctx)
  }
}