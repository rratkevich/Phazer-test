var game = new Phaser.Game(1200, 1200, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {

    game.load.spritesheet('brilliant', 'img/bri_big_anim_start.png', 392, 370, 4);
    game.load.spritesheet('middle', 'img/bri_big_anim_middle.png', 449, 430, 4);
    game.load.spritesheet('finish', 'img/bri_big_anim_finish.png', 326, 330, 4);
}

function create() {

    this.brilliant = game.add.sprite(450, 450, 'brilliant');
    this.brilliant.scale.setTo(0.4, 0.4);
    this.brilliant.animations.add('rotate', [1,2,3,4], 4, true);
    this.brilliant.animations.play('rotate');


    this.middle = game.add.sprite(300,300, 'middle');
    this.middle.scale.setTo(0.4, 0.4);
    this.middle.animations.add('rotate', [1,2,3,4], 4, true);
    this.middle.animations.play('rotate');
    this.middle = game.add.tween(sprite).to({ x: 450, y:450 }, 10000, Phaser.Easing.Linear.None, true);


    this.finish = game.add.sprite(50,50, 'finish');
    this.finish.scale.setTo(0.4, 0.4);
    this.finish.animations.add('rotate', [1,2,3,4], 4, true);
    this.finish.animations.play('rotate');
    this.finish = game.add.tween(sprite).to({ x: 300, y:300 }, 10000, Phaser.Easing.Linear.None, true);
}

function update() {

}
