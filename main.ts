let strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    basic.pause(100)
    strip.rotate(1)
    strip.show()
})
