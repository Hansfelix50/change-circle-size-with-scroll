class Circle {

    constructor(left, top, color) {

        this.left = left
        this.top = top
        this.color = color

// linea adicional
        var iDiv = document.createElement('div')


        iDiv.className = 'point'
        iDiv.style.left = `${left}px`
        iDiv.style.top = `${top}px`
        iDiv.style.background = color




        container.appendChild(iDiv)

        this.iDiv = iDiv

        this.position = {
            x: '',
            y: ''
        }

        this.d = ''


        // this.el = this.createDiv()

        // this.pos = this.calculePos()
        // this.dis = this.calculeDis()
        // this.size = this.calculeSize()

        // this.setSize()
    }

    updatePosition() {
        var pos = this.iDiv.getBoundingClientRect()
        this.position.x = pos.x
        this.position.y = pos.y

        this.calculateDist()

    }

    calculateDist() {
        var a = this.position.x - C.x
        var b = this.position.y - C.y
        var d = Math.sqrt(a * a + b * b)

        this.dis = d

        if (this.dis < C.r) {
            this.calculateScale()
        } else {
            this.iDiv.style.transform = "scale(1)"

        }
    }

    calculateScale() {
        var r = this.dis / C.r
        // return (1-r) * 42
        var razon = (1 - r) * 10

        this.iDiv.style.transform = 'scale('+razon+')'
    }

}

var C = {
    x: 675,
    y: 350,
    r: 300
}
var container = document.querySelector('.container')
var colors = ['#FC2D79', '#c1c1c1', '#4A90E2', '#FCB635']
var dist = 100
var rows = Math.trunc(container.offsetWidth / dist)
var columns = Math.trunc(container.offsetHeight / dist)

var circles = []

for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {

        var x, y = i * dist + dist / 2

        if (i % 2 == 0) x = (j + 1) * dist
        else x = j * dist + dist / 2

        var color = colors[Math.floor(Math.random() * colors.length)]

        var circle = new Circle(x, y, color)

        circles.push(circle)

        // if( x == container.offsetWidth) break

    }
}


window.addEventListener("scroll", function () {
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i]
        circle.updatePosition()
    }
});