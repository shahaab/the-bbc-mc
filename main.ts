input.onButtonPressed(Button.A, function () {
    User_key = "" + User_key + "A"
    basic.showString("A")
    basic.pause(100)
    basic.clearScreen()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    serial.writeLine(User_key)
})
input.onButtonPressed(Button.B, function () {
    User_key = "" + User_key + "B"
    basic.showString("B")
    basic.pause(100)
    basic.clearScreen()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1414, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    serial.writeLine(User_key)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(User_key)
    basic.pause(100)
    basic.clearScreen()
    serial.writeLine(User_key)
})
let User_key = ""
let Secret = 1236
let Key = "BBAABA"
User_key = ""
basic.forever(function () {
    if (User_key == Key) {
        basic.showNumber(Secret)
        basic.pause(100)
        User_key = ""
    } else if (Key.length < User_key.length) {
        basic.showString("Wrong try again")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        User_key = ""
    }
})
