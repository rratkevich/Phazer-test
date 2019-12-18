var game = new Phaser.Game(1200, 1200, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {

    game.load.spritesheet('brilliant', 'img/bri_big_anim_start.png', 392, 370, 4);
    game.load.spritesheet('brilliant', 'img/bri_big_anim_middle.png', 440, 430, 4);
    game.load.spritesheet('brilliant', 'img/bri_big_anim_finish.png', 392, 370, 4);
}

function create() {

    this.brilliant = game.add.sprite(100, 100, 'brilliant');
    this.brilliant.scale.setTo(0.5, 0.5);
    this.brilliant.animations.add('rotate', [1,2,3,4], 12, true);
    this.brilliant.animations.play('rotate');
    // this.brilliant = game.add.tween(sprite).to({ x: 200 }, 10000, Phaser.Easing.Linear.None, true);

}

function update() {

}
