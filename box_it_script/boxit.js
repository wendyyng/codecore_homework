#!/usr/bin/env node

/* Stretch (Optional)
To use shebang, your can give boxit.js the executable permission by running
chmod u+x boxit.js */

/*
Box a List of Words in The CLI
In this homework, you will create a script that can take any number of arguments 
then outputs them inside boxes.
A short disclaimer about the examples, the output will look much better in your terminal. Here are examples of it in action:
$ node boxit.js 'Jon Snow' 'Cersei Lannister' 'Daenerys Targaryen'
┏━━━━━━━━━━━━━━━━━━┓
┃Jon Snow       ┃
┣━━━━━━━━━━━━━━━━━━┫
┃Cersei Lannister  ┃
┣━━━━━━━━━━━━━━━━━━┫
┃Daenerys Targaryen┃
┗━━━━━━━━━━━━━━━━━━┛
$ node boxit.js 'Jon Snow'
┏━━━━━━━━┓
┃Jon Snow┃
┗━━━━━━━━┛
$ node boxit.js
┏┓
┗┛ 
*/


function drawLine(num) {
    return "━".repeat(num)
}

function drawTopBorder(num) {
    return "┏" + drawLine(num) + "┓"
}

function drawMiddleBorder(num) {
    return "┣" + drawLine(num) + "┫"
}

function drawBottomBorder(num) {
    return "┗" + drawLine(num) + "┛"
}

function drawBarsAround(str, longest) {
    return "┃" + str + " ".repeat(longest - str.length) + "┃"
}

//Boxit Function
let arr = process.argv.slice(2)
//Find the longest element in the array 
let longest = 0

if (arr.length !== 0) {
    let nameArray = arr.slice()
    longest = nameArray.sort(function (a, b) {
        return b.length - a.length
    })[0].length
}
// Top Border
let output = drawTopBorder(longest) + "\n"

//Print Names with Surrounding Lines
if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
        output += drawBarsAround(arr[i], longest) + "\n"
        if (i !== arr.length - 1) output += drawMiddleBorder(longest) + "\n"
    }
}

//Bottom Border
output += drawBottomBorder(longest)

console.log(output)