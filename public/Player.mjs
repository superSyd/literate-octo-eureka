class Player {
  constructor(input) {
    this.x = Number(input.x)
    this.y = Number(input.y)
    this.score = Number(input.score)
    this.id = input.id

  }

  movePlayer(dir, speed) {
    switch(dir){
      case 'left':
          this.x -= speed
          break
      case 'right':
          this.x += speed


    }

  }

  collision(item) {
    if(this.x == item.x && this.y == item.y){
      return true
    } else {
      return false
    }

  }

  calculateRank(arr) {
    var myArr = arr.sort((a,b) => {
      return b.score-a.score
    })

    for(let i in myArr){
      if(myArr[i].id == this.id){
        return "Rank: " + (Number(i)+1) + " / "+ myArr.length
      }

    }

  }
}

export default Player;
