let Lotto = 0
let EuroMillions_Jackpot = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Lotto = randint(1, 45057474)
    if (Lotto == 1) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.LoopingInBackground)
        basic.showString("YOU HAVE WON THE LOTTO!")
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    EuroMillions_Jackpot = randint(1, 139838160)
    if (EuroMillions_Jackpot == 1) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.LoopingInBackground)
        basic.showString("YOU HAVE WON THE EUROMILLIONS JACKPOT!")
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    }
})
