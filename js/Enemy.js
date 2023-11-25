export default class Enemy{
  #markedForDeletion
  
  constructor(game){
    this.game = game
    this.#markedForDeletion = false
  }

  get markedForDeletion(){
    return this.#markedForDeletion
  }

  update(deltaTime){
    this.x -= this.vx * deltaTime
    if(this.x < -this.width){
      this.#markedForDeletion = true
    }
  }

  draw(ctx){
    ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}