radio.setGroup(1)
basic.pause(randint(1500, 5000))
let State = 0
let Button2 = randint(0, 1)
radio.sendNumber(Button2)
if (Button2 == 0) {
    basic.showString("A")
} else {
    basic.showString("B")
}
State = 1
basic.forever(function () {
    if (State == 1) {
        if (Button2 == 0 && input.buttonIsPressed(Button.A)) {
        	
        } else {
        	
        }
    } else if (State == 1) {
    	
    } else {
    	
    }
})
