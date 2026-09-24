namespace SpriteKind {
    export const yellowkey = SpriteKind.create()
    export const redkey = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.yellowkey, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.smiles, 500)
    mySprite.sayText("you collected a key", 1000, false)
    info.changeScoreBy(50)
})
info.onScore(100, function () {
    game.gameOver(true)
    game.setGameOverMessage(true, "good job on winning")
    game.setGameOverScoringType(game.ScoringType.None)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.redkey, function (sprite2, otherSprite2) {
    sprites.destroy(mySprite3, effects.spray, 500)
    mySprite.sayText("you collected a key", 1000, false)
    info.changeScoreBy(50)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f 9 9 9 9 9 f . . . . . 
    . . . f f 9 9 9 9 9 f f . . . . 
    . . f f f 9 9 9 9 9 f f f . . . 
    . . f f . 9 9 9 9 9 . f f . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . f f f . f f f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f f . . . 
    . f f f f f f f f 5 5 5 f . . . 
    . f 5 5 5 5 5 5 5 5 f 5 f . . . 
    . f 5 f 5 f f f f 5 5 5 f . . . 
    . f f f f f . . f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.yellowkey)
mySprite3 = sprites.create(assets.image`myImage0`, SpriteKind.redkey)
mySprite.setPosition(18, 95)
mySprite2.setPosition(128, 9)
mySprite3.setPosition(116, 81)
mySprite3.setStayInScreen(false)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
game.setDialogFrame(img`
    ...cc..............................cc.....
    ..c55c..bbbb...bbbbb...bbbbb......c55c....
    .cb55bcbdddbbbbbdddbbbbbdddbbbbbbcb55bc...
    b555555bbdddb111bdddb111bdddb11db555555b..
    bb5555bbbbdb11111bdb11111bdb1111bb5555bb..
    cb5555bcddd11111ddd11111ddd11111cb5555bc..
    .c5bb5c1111d111d111d111d111d111ddc5bb5c...
    .cbbbbc11111111111111111111111111cbbbbc...
    ..b1111111111111111111111111111111dddbb...
    ..b11111111111111111111111111111111dbbdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdb1d11111111111111111111111111111111b...
    .bb111d1111111111111111111111111111111b...
    ..b1111111111111111111111111111111d111bb..
    ..b11111111111111111111111111111111d1bdb..
    ..bb1111111111111111111111111111111dbddb..
    .bbdb1d1111111111111111111111111111ddddb..
    .bdddd1111111111111111111111111111d1bdbb..
    .bddbd1111111111111111111111111111111bb...
    .bdbb111111111111111111111111111111111b...
    .bbbd111111111111111111111111111111111b...
    ..bcc11111111111111111111111111111dccdb...
    ..c55c1111111d111d111d111d111d1111c55cb...
    .cb55bcdd11111ddd11111ddd11111dddcb55bc...
    b555555bd1111bdb11111bdb11111bdbb555555b..
    bb5555bbdd11bdddb111bdddb111bdddbb5555bb..
    cb5555bcbbbbbbdddbbbbbdddbbbbbddcb5555bc..
    .c5bb5c......bbbbb...bbbbb...bbbbc5bb5c...
    .cbbbbc..........................cbbbbc...
    ..........................................
    ..........................................
    `)
game.showLongText("collect all the keys to escape", DialogLayout.Bottom)
music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
