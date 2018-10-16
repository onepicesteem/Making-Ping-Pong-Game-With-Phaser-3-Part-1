var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

var game = new Phaser.Game(config);

var cursor;
var player;


function preloadGame ()
 {
  this.load.image('ground','assets/ground.png');
  this.load.image('player','assets/player.png');
   

 }

function createGame ()
{
  this.add.image(400, 200, 'ground');


    cursor = this.input.keyboard.createCursorKeys();
    console.log(cursor);
    

    player = this.physics.add.sprite(780, 200, 'player');
    player.setCollideWorldBounds(true);
    
    
}

function updateGame ()
{
  if(cursor.up.isDown)
  {
    player.setVelocityY(-150);
  }
  else if(cursor.down.isDown)
  {
    player.setVelocityY(150);
  }
  else
  {
    player.setVelocityY(0);
  }

}
