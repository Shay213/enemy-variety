export default class Enemy{
  #x
  #y
  #width
  #height
  #game
  #markedForDeletion
  
  constructor(game){
    this.#game = game
    this.#x = game.width
    this.#y = Math.random() * game.height
    this.#width = 100
    this.#height = 100
    this.#markedForDeletion = false
  }

  get markedForDeletion(){
    return this.#markedForDeletion
  }

  update(){
    this.#x--
    if(this.#x < -this.#width){
      this.#markedForDeletion = true
    }
  }

  draw(ctx){
    ctx.fillRect(this.#x, this.#y, this.#width, this.#height)
  }
}