
function plotChart() {
    chart.config(ChartType.Bar, "A", "B")
    input.onButtonPressed(Button.A, function () {
        chart.changeValue("A", ChangeType.Increase, 1);
    })
    input.onButtonPressed(Button.B, function () {
        chart.changeValue("B", ChangeType.Increase, 1);
    })
    while (true) {
        basic.pause(1000)
    }
}

function plotPlot() {
    plot.config(PlotType.Line, "x", "y", "z")
    while (true) {
        plot.addValue(
            plot.createLV("x", input.acceleration(Dimension.X)),
            plot.createLV("y", input.acceleration(Dimension.Y)),
            plot.createLV("z", input.acceleration(Dimension.Z))
        )
        basic.pause(400);
    }
}

// Select chart type base on button input
let loopCounter = 0
while (!input.buttonIsPressed(Button.A) && !input.buttonIsPressed(Button.B)) {
    loopCounter += 1
    if (loopCounter % 2 == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
        `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
        `)
    }
    if (input.buttonIsPressed(Button.A)) {
        serial.writeLine("Chart selected")
        basic.showString("C")
        plotChart()
    }
    if (input.buttonIsPressed(Button.B)) {
        serial.writeLine("Plot selected")
        basic.showString("P")
        plotPlot()
    }
    basic.pause(100)
}
