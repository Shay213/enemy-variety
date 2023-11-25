import Game from "./Game.js"

let canvas = null
let ctx = null
let game = null
let lastTime = 0

window.addEventListener('load', () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  canvas.width = 500
  canvas.height = 800
  
  game = new Game(ctx, canvas.width, canvas.height)

  animate(0)
})

function animate(timestamp){
  if(!ctx || !canvas) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const deltaTime = timestamp - lastTime
  lastTime = timestamp

  game.update(deltaTime)
  game.draw(ctx)

  requestAnimationFrame(animate)
}