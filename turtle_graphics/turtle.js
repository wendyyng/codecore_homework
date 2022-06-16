// [Homework] Turtle Graphics - 2
// Drawing Turtle Graphics Style
// In this homework, you will create a simple drawing program inspired by Turtle Graphics. 
// It will be a much simpler implementation that will only accept right angles (90 degrees). 
// Here's an example of what your program should be able to do by the end:
// new Turtle(0, 0)
// .forward(5)
// .right()
// .forward(5)
// .right()
// .forward(5)
// .right()
// .forward(5)
// .print()
// The above would log the following to the screen:

//   ••••••
//   •       •
//   •       •
//   •       •
//   •       •
//   ••••••
// The above drew a 5 by 5 square.

// Breaking It Down
// Before beginning, you should read all instructions.

// The Turtle
// To begin drawing, your program needs to know where it should begin. Create a Turtle class whose constructor will take two arguments (in order): x & y coordinates. Here are some examples:

// This turtle begins at position (0, 0) on our fictional 5 by 5 grid.

// new Turtle(0, 0);

// This is an illustration that is part of the explanation.
// Your program should not draw it.
//
//  0 1 2 3 4
// 0•─┼─┼─┼─┼
// 1┼─┼─┼─┼─┼
// 2┼─┼─┼─┼─┼
// 3┼─┼─┼─┼─┼
// 4┼─┼─┼─┼─┼

// This turtle begins at position (2, 3) on our fictional 5 by 5 grid.

// new Turtle(2, 3);

//  0 1 2 3 4
// 0┼─┼─┼─┼─┼
// 1┼─┼─┼─┼─┼
// 2┼─┼─┼─┼─┼
// 3┼─┼─•─┼─┼
// 4┼─┼─┼─┼─┼
// Moving The Turtle
// Create a forward method that takes a number of steps then updates the Turtle instance with its new position after moving that many steps. Keep track of every movement the turtle makes including the first one.

// For Example:

// This turtle begins at position (0, 0) on our fictional 5 by 5 grid, then
// moves forward 3 steps positioning itself at (3, 0) indicated by the `*`
// on the grid. You should record these 2 positions.

// new Turtle(0, 0).forward(3);

// Figure of turtle's movement on a grid.
// LEGEND
// • – Starting Location
// * – End Location
//
//  0 1 2 3 4
// 0•---------*─┼
// 1┼─┼─┼─┼─┼
// 2┼─┼─┼─┼─┼
// 3┼─┼─┼─┼─┼
// 4┼─┼─┼─┼─┼
// Turning The Turtle
// Create a right method that takes zero arguments. When right is called, update the Turtle instance to rotate its facing to the right. A turtle should begin facing east.

// For Example:

// // This turtle begins at position (0, 0), then moves forward 3 steps to (3, 0),
// // then turns right (facing south), then moves 2 steps to (3, 2).

// new Turtle(0, 0).forward(3).right().forward(2);

// Figure of turtle's movement on a grid.
// LEGEND
// • – Starting or in-between locations
// * – End locations
//
//  0 1 2 3 4
// 0•---------•─┼
// 1┼─┼─┼─|─┼
// 2┼─┼─┼─*─┼
// 3┼─┼─┼─┼─┼
// 4┼─┼─┼─┼─┼
// Create a left method like right but turns the turtle's facing to the left.

// For Example:

// This turtle begins at position (0, 4), then moves forward 3 steps to (3, 4),
// then turns right (facing north), then moves 3 steps to (3, 1).

// new Turtle(0, 4).forward(3).left().forward(3);

// Figure of turtle's movement on a grid.
// LEGEND
// • – Starting or in-between locations
// * – End locations
//
//  0 1 2 3 4
// 0┼─┼─┼─┼─┼
// 1┼─┼─┼─*─┼
// 2┼─┼─┼─|─┼
// 3┼─┼─┼─|─┼
// 4•----------•─┼
// All Points
// Create an allPoints method which returns an array containing all coordinates the turtle has walked over.

// For Example:

// const flash = new Turtle(0, 0).forward(3).left().forward(3);

// Figure of turtle's movement on a grid.
// LEGEND
// • – Starting or in-between locations
// * – End locations
//
//  0 1 2 3 4
// 0┼─┼─┼─┼─┼
// 1┼─┼─┼─*─┼
// 2┼─┼─┼─|─┼
// 3┼─┼─┼─|─┼
// 4•----------•─┼
//
// Flash, the turtle, has walked around the grid quite bit. She's touched at
// least 7 coordinates.
//
// Looking at the grid above, she walked over (0, 4), (1, 4), (2, 4) and (3, 4).
// After turning left, she walked over (3, 3), (3, 2) and (3, 1). That's 7
// coordinates. Using the method allPoints on flash should return all these
// coordinates in an array in the order she walked over them.

// flash.allPoints()

// // returns [ [0, 4], [1, 4], [2, 4], [3, 4], [3, 3], [3, 2], [3, 1] ]
// Print
// Create a print method that draws the path that the turtle walked over as a string and logs it to the console. You should use the array of coordinates returned by .allPoints() as your starting point.

// For Example:

// const flash = new Turtle(0, 0).forward(3).left().forward(3);
// flash.print();

// -- BEGIN LOG
//        •
//        •
// ••••
// -- END LOG
// When implementing print, feel free to choose any character you prefer to represent the turtles path instead of # and feel free to choose another one for the background instead of _>.

// Here is another example with alternate characters:

//  new Turtle(0, 4)
//     .forward(3)
//     .left()
//     .forward(3)
//     .right()
//     .forward(5)
//     .right()
//     .forward(8)
//     .right()
//     .forward(5)
//     .right()
//     .forward(3)
//     .left()
//     .forward(3)
//     .print();

// -- BEGIN LOG
// □□□□□□□□□□
// □□□■■■■■■□
// □□□■□□□□■□
// □□□■□□□□■□
// ■■■■□□□□■□
// □□□□□□□□■□
// ■■■■□□□□■□
// □□□■□□□□■□
// □□□■□□□□■□
// □□□■■■■■■□
// -- END LOG

// Stretch
// As A Script
// Make the turtle graphics program usable as a script. It should take a string as a an argument that is seperated by dashes (i.e. ->). This string will contain all turtle commands in abbreviated form:

// tX,Y for new Turtle where X & Y are numbers representing the starting x & y coordinates. If this command is not given, begin the turtle at (0, 0).
// fN for forward where N is a number representing how many units the turtle moves forward.
// r for right
// l for left
// Example usage:

// $ node turtle.js t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5
// •••••••••••
// • • •     •
// • • •     •
// • • •     •
// • • •     •
// •••••••••••
// $ node turtle.js f10-r-r-f10-l-f5-l-f10-r-f5-r-f11
// •••••••••••
// •
// •
// •
// •
// •••••••••••
//           •
//           •
//           •
//           •
// •••••••••••
// Save To a File
// Have your script accept an option --output=[filename<]/code> where [filename] corresponds to the name of a file. If the option is used, write the turtle drawing to the file using fs.writeFile. Notify the user of that the write was completed.

// Example usage:

// $ node --output=drawing.txt f10-r-f10-r-f10-r-f10
// 🐢 Drawing written to drawing.txt

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//The Turtle: Create the Turtle class 
class Turtle {
    //The class constructor will take two arguments (in order): x & y coordinates.
    constructor(x, y) {
        this.x = x
        this.y = y
        this.points = [[x, y]]
        //Moving along x-axis by default
        this.axis = "x"
        //Direction is right by default
        this.direction = "right"
    }
    //Moving the Turtle: Forward method that takes a number of steps then updates the Turtle instance with its new position after moving that many steps. 
    //Keep track of every movement the turtle makes including the first one.
    forward(steps) {
        for (let i = 1; i < steps + 1; i++) {
            if (this.axis === "x") {
                if (this.direction === "right") {
                    this.points.push([(this.x + i), this.y])
                } else if (this.direction === "left") {
                    this.points.push([(this.x - i), this.y])
                }

            } else if (this.axis === "y") {
                if (this.direction === "up") {
                    this.points.push([this.x, (this.y - i)])
                } else if (this.direction === "down") {
                    this.points.push([this.x, (this.y + i)])
                }
            }

        }
        //Update the Turtle instance with the new position
        this.x = this.points[this.points.length - 1][0]
        this.y = this.points[this.points.length - 1][1]
        // console.log(this.axis)
        // console.log(this.direction)
        return this
    }
    //Turning the Turtle: Right method that takes zero arguments. When right is called, update the Turtle instance to rotate its facing to the right. 
    //A turtle should begin facing east.
    right() {
        if (this.axis === "x") {
            if (this.direction === "right") {
                this.direction = "down"
            } else if (this.direction === "left") {
                this.direction = "up"
            }
            this.axis = "y"

        } else if (this.axis === "y") {
            if (this.direction === "up") {
                this.direction = "right"
            } else if (this.direction === "down") {
                this.direction = "left"
            }
            this.axis = "x"
        }

        return this
    }
    //Turning the Turtle: Left Method
    left() {

        if (this.axis === "x") {
            if (this.direction === "right") {
                this.direction = "up"
            } else if (this.direction === "left") {
                this.direction = "down"
            }
            this.axis = "y"
        } else if (this.axis === "y") {
            if (this.direction === "up") {
                this.direction = "left"
            } else if (this.direction === "down") {
                this.direction = "right"
            }
            this.axis = "x"
        }

        return this
    }
    //All Points: allPoints method which returns an array containing all coordinates the turtle has walked over.
    allPoints() {
        return this.points
    }
    //Print: Create a print method that draws the path that the turtle walked over as a string and logs it to the console. 
    //You should use the array of coordinates returned by .allPoints() as your starting point.
    print() {
        //Find the width and length of the grid
        let width = 0
        let height = 0
        for (let point of this.allPoints()) {
            if (point[0] > width) {
                width = point[0]
            }
            if (point[1] > height) {
                height = point[1]
            }
        }
        // console.log(width)
        // console.log(height)
        //Begin Log
        let result = "-- BEGIN LOG\n"
        //Draw the path
        for (let i = 0; i < height + 1; i++) {
            let temp = ""
            for (let j = 0; j <= width; j++) {
                if (this.points.find(point => point[0] === j && point[1] === i)) {
                    temp += "■"
                } else {
                    temp += "□"
                }
                if (j === width) temp += "\n"
            }
            result += temp
        }
        //End Log
        result += "-- END LOG"
        console.log(result)
        return result;
    }
}

//Making sure that the methods are working properly by using the examples from the question
//Uncomment to print to the console
// console.log(new Turtle(0, 0).forward(3).allPoints()) //return [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ] ]
// console.log(new Turtle(0, 0).forward(3).right().forward(2).allPoints()) //return [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 3, 1 ], [ 3, 2 ] ]
// console.log(new Turtle(0, 4).forward(3).left().forward(3).allPoints()) //return [[ 0, 4 ], [ 1, 4 ],[ 2, 4 ], [ 3, 4 ],[ 3, 3 ], [ 3, 2 ],[ 3, 1 ]]

//Examples of usage:
//Command line: "node turtle.js"
//Please note that this turtle script doesn't support negative coordinates.
if (process.argv.slice(2).length === 0) {
    new Turtle(0, 0).forward(5).right().forward(5).right().forward(5).right().forward(5).print()
    // The above would log the following to the screen:
    // -- BEGIN LOG
    // ••••••
    // •    •
    // •    •
    // •    •
    // •    •
    // ••••••
    // -- END LOG
    const flash = new Turtle(0, 3).forward(3).left().forward(3);
    flash.print();
    // The above would log the following to the screen:
    // -- BEGIN LOG
    //    •
    //    •
    // ••••
    // -- END LOG
    new Turtle(0, 4)
        .forward(3)
        .left()
        .forward(3)
        .right()
        .forward(5)
        .right()
        .forward(8)
        .right()
        .forward(5)
        .right()
        .forward(3)
        .left()
        .forward(3)
        .print();
    // The above would log the following to the screen:
    // -- BEGIN LOG
    // □□□□□□□□□□
    // □□□■■■■■■□
    // □□□■□□□□■□
    // □□□■□□□□■□
    // ■■■■□□□□■□
    // □□□□□□□□■□
    // ■■■■□□□□■□
    // □□□■□□□□■□
    // □□□■□□□□■□
    // □□□■■■■■■□
    // -- END LOG
}

//Stretch: As A Script
//Make the turtle graphics program usable as a script. It should take a string as a an argument that is seperated by dashes (i.e. ->). 
//This string will contain all turtle commands in abbreviated form:
// tX,Y for new Turtle where X & Y are numbers representing the starting x & y coordinates. If this command is not given, begin the turtle at (0, 0).
// fN for forward where N is a number representing how many units the turtle moves forward.
// r for right
// l for left
//Example usage: $ node turtle.js f10-r-r-f10-l-f5-l-f10-r-f5-r-f11
 // The above would log the following to the screen:
// •••••••••••
// •
// •
// •
// •
// •••••••••••
//           •
//           •
//           •
//           •
// •••••••••••
const turtleCommand = function(arr){
    //The starting X & Y coordinates
    let startingX
    let startingY
    if (arr[0].includes(",")) {
        //tX,Y for new Turtle where X & Y are numbers representing the starting x & y coordinates. 
        startingX = parseInt(arr[0].slice(1).split(",")[0])
        startingY = parseInt(arr[0].slice(1).split(",")[1])
        arr.shift()
    } else {
        //If this command is not given, begin the turtle at (0, 0).
        startingX = 0
        startingY = 0
    }

    let output = new Turtle(startingX, startingY)

    for (let command of arr) {
        //fN for forward where N is a number representing how many units the turtle moves forward.
        if (command[0] === 'f') {
            output.forward(parseInt(command.slice(1)))
            //r for right
        } else if (command === 'r') {
            output.right()
            //l for left
        } else if (command === 'l') {
            output.left()
        }
    }

    return output.print()
}

if (process.argv.slice(2).length !== 0 && !process.argv[2].includes('--output')) {
    const input = process.argv.slice(2).toString()
    let arr = input.split("-")
    turtleCommand(arr)
}

//Stretch: Save To a File
//Have your script accept an option --output=[filename<]/code> where [filename] corresponds to the name of a file. 
//If the option is used, write the turtle drawing to the file using fs.writeFile. Notify the user of that the write was completed.

if (process.argv.slice(2).length !== 0 && process.argv[2].includes('--output=')) {
    const fs = require('fs');
    let fileName = process.argv.slice(2, 3).toString().split('=')[1]
    let data = process.argv.slice(3).toString()
    let arr = data.split("-")
    let content = turtleCommand(arr)

    fs.writeFile(fileName, content, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("🐢 Drawing written to " + fileName);
            fs.readFileSync(fileName, "utf8");
            console.log("Write is completed.")
        }
    });
}