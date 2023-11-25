import Enemy from "./Enemy.js"

export default class Game{
  #ctx
  #width
  #height
  #enemies
  #enemyInterval
  #enemyTimer

  constructor(ctx, width, height){
    this.#ctx = ctx
    this.#width = width
    this.#height = height

    this.#enemies = []
    this.#enemyInterval = 5000
    this.#enemyTimer = 0
  }

  get width(){
    return this.#width
  }
  get height(){
    return this.#height
  }

  #addNewEnemy(){
    this.#enemies.push(new Enemy(this))
  }

  update(deltaTime){
    this.#enemyTimer += deltaTime
    if(this.#enemyTimer > this.#enemyInterval){
      this.#addNewEnemy()
      this.#enemyTimer = 0
    }

    this.#enemies = this.#enemies.reduce((prev, curr) => {
      curr.update()
      return curr.markedForDeletion ? prev : [...prev, curr]
    }, [])
  }

  draw(){
    this.#enemies.forEach(enemy => enemy.draw(this.#ctx))
  }
}