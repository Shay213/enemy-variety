import Enemy from "./Enemy.js"

export default class Game{
  #enemies

  constructor(){
    this.#enemies = []
    this.#addNewEnemy()
  }

  #addNewEnemy(){
    this.#enemies.push(new Enemy())
  }

  update(){
    this.#enemies.forEach(enemy => enemy.update())
  }

  draw(ctx){
    this.#enemies.forEach(enemy => enemy.draw(ctx))
  }
}