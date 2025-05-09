input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Ghost)
    basic.showLeds(`
        # # # . .
        . # . # .
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        # # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . # .
        . . . . #
        . . # . .
        # . . . #
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        # # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # . .
        # # # . .
        # . # . .
        `)
    basic.showLeds(`
        # # # . .
        . . . # .
        # # # # .
        # # # # .
        . # . # .
        `)
    basic.showIcon(IconNames.Ghost)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Ghost)
