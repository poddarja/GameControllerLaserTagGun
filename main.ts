input.onButtonPressed(Button.A, function () {
    radio.sendString("Regular Shot")
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenUp, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Regular Shot") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    }
    if (receivedString == "Power Shot") {
        basic.showIcon(IconNames.No)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Power Shot")
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 216, 255, 158, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
radio.setGroup(1)
