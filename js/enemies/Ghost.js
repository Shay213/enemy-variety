import Enemy from "../Enemy.js"

export default class Ghost extends Enemy{
  constructor(game){
    super(game)

    this.spriteWidth = 261
    this.spriteHeight = 209
    this.width = this.spriteWidth * 0.5
    this.height = this.spriteHeight * 0.5
    this.x = this.game.width
    this.y = Math.random() * game.height * 0.6
    this.img = ghost
    this.vx = Math.random() * 0.2 + 0.1
    this.angle = 0
    this.curve = Math.random() * 3
  }

  update(deltaTime){
    super.update(deltaTime)
    this.y += Math.sin(this.angle) * this.curve
    this.angle += 0.04
  }

  draw(ctx){
    ctx.save()
    ctx.globalAlpha = 0.6
    super.draw(ctx)
    ctx.restore()
  }
}