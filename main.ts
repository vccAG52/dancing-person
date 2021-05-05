scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d f d d d d f d e . . . 
    . . . e d d f f f f d d e . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d 3 d d d d 3 d e . . . 
    . . . e d 3 3 3 3 3 3 d e . . . 
    . . . d 3 3 3 3 3 3 3 3 d . . . 
    . . d 3 3 3 3 3 3 3 3 3 3 d . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . d . . . . d . . . . . 
    . . . . . f . . . . f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d f d d d d f d e . . . 
    . . . e d d f f f f d d e . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d 3 d d d d 3 d e . . . 
    . . . e d 3 3 3 3 3 3 d e . . . 
    . . . d 3 3 3 3 3 3 3 3 d . . . 
    . . d 3 3 3 3 3 3 3 3 3 3 d . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . d . . . . d f . . . . 
    . . . . . f . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d f d d d d f d e . . . 
    . . . e d d f f f f d d e . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d 3 d d d d 3 d e . . . 
    . . . e d 3 3 3 3 3 3 d e . . . 
    . . . d 3 3 3 3 3 3 3 3 d . . . 
    . . d 3 3 3 3 3 3 3 3 3 3 d . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . d . . . d . . . . . . 
    . . . . . f . . . f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . e d f d d f d e . . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d f d d d d f d e . . . 
    . . . e d d f f f f d d e . . . 
    . . . e e d d d d d d e e . . . 
    . . . e d 3 d d d d 3 d e . . . 
    . . . e d 3 3 3 3 3 3 d e . . . 
    . . . d 3 3 3 3 3 3 3 3 d . . . 
    . . d 3 3 3 3 3 3 3 3 3 3 d . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . f d . . . d . . . . . . 
    . . . . . . . . . f . . . . . . 
    `],
500,
true
)
