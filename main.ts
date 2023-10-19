sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    arrow.setPosition(randint(10, 160), randint(10, 120))
    pinkheart.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
let pinkheart: Sprite = null
let arrow: Sprite = null
scene.setBackgroundColor(13)
let heart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 . 2 2 2 . . . . . 
    . . . 2 3 3 3 2 2 2 2 2 . . . . 
    . . . 2 3 2 2 2 2 2 2 2 . . . . 
    . . . 2 3 2 3 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(heart)
arrow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b 1 . . . . . . . . . . . 
    . . . 1 e f f f f b . . . . . . 
    . . . . . e . . . f . . . . . . 
    . . . . . . e . . f . . . . . . 
    . . . . . . . e . f . . . . . . 
    . . . . . . . . e f . . . . . . 
    . . . . . . . . . e 1 . . . . . 
    . . . . . . . . . 1 b . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
pinkheart = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 . . . 3 3 3 . . . . 
    . . . 3 1 1 3 . 3 3 3 3 . . . . 
    . . . 3 1 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
