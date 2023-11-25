export default class Enemy{
  #frameX
  #maxFrame
  #frameInterval
  #frameTimer

  constructor(game){
    this.game = game
    this.markedForDeletion = false
    this.#frameX = 0
    this.#maxFrame = 5 // all sprites have 6 frames
    this.#frameInterval = 100
    this.#frameTimer = 0
  }

  update(deltaTime){
    this.x -= this.vx * deltaTime
    if(this.x < -this.width){
      this.markedForDeletion = true
    }
    this.#frameTimer += deltaTime
    if(this.#frameTimer > this.#frameInterval){
      if(this.#frameX < this.#maxFrame) this.#frameX++
      else this.#frameX = 0
      this.#frameTimer = 0
    }
  }

  draw(ctx){
    ctx.drawImage(this.img, this.#frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}