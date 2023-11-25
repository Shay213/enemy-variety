import Worm from "./enemies/Worm.js"
import Ghost from "./enemies/Ghost.js"
import Spider from "./enemies/Spider.js"

export default class Game{
  #ctx
  #width
  #height
  #enemies
  #enemyInterval
  #enemyTimer
  #enemyTypes

  constructor(ctx, width, height){
    this.#ctx = ctx
    this.#width = width
    this.#height = height

    this.#enemies = []
    this.#enemyInterval = 500
    this.#enemyTimer = 0
    this.#enemyTypes = ['worm', 'ghost', 'spider']
  }

  get width(){
    return this.#width
  }
  get height(){
    return this.#height
  }

  #addNewEnemy(){
    const randomEnemy = this.#enemyTypes[Math.floor(Math.random() * this.#enemyTypes.length)]

    switch(randomEnemy){
      case 'worm':
        this.#enemies.push(new Worm(this))
        break
      case 'ghost':
        this.#enemies.push(new Ghost(this))
        break
      case 'spider':
        this.#enemies.push(new Spider(this))
        break
    }
  }

  update(deltaTime){
    this.#enemyTimer += deltaTime
    if(this.#enemyTimer > this.#enemyInterval){
      this.#addNewEnemy()
      this.#enemyTimer = 0
    }

    this.#enemies = this.#enemies.reduce((prev, curr) => {
      curr.update(deltaTime)
      return curr.markedForDeletion ? prev : [...prev, curr]
    }, [])
  }

  draw(){
    this.#enemies.forEach(enemy => enemy.draw(this.#ctx))
  }
}