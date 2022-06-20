// Todo CLI
// Write an interactive CLI todo list application using Node's readline and fs modules. The following describes what each action does. It would be best to implement each action as its own function.

// The Menu
// When the todoCLI.js is first executed, a menu as shown below should be displayed. These are all the options the user should be able to perform.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// >

// View
// From the Todo Menu, pressing v then Enter should display the contents of the todo list then the Todo Menu again. See the example below.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// 0 [✓] Take out the trash

// 1 [✓] Buy toothpaste

// 2 [ ] Buy Snickerdoodles

// 3 [ ] Fix the climate

// 4 [ ] Find a cure for aging

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// >

// Add
// From the Todo Menu pressing n then Enter should ask the user what item to add to the list. The user can then write a response. Save their response as a new item at the end of the todo list.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > n

// What?

// >Go hunting for pesky beetles (not the band)

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// >

// Complete
// From the Todo Menu pressing cX where X refers to the index of a Todo item then Enter should mark that item as complete. Tell the user which item was marked. Then, re-display the Todo Menu.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > c2

// Completed "Buy Snickerdoodles"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// >

// When displaying the list, completed items should have a checkmark (i.e. `✓`) besides their title. For example:

// 0 [✓] Take out the trash

// Delete
// From the Todo Menu pressing dX where X refers to the index of a Todo item then `Enter` should remove that from the list. Tell the user which item was deleted. Then, re-display the Todo Menu.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > d0

// Deleted "Take out the trash"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// Quit
// From the Todo Menu pressing q quits the application. Say farewell.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > q

// See you soon! 😄

// $

// All Together
// As a complete example, here's an interaction with the application using all possible actions.

// $ node todoCLI.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// List is empty...

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > n

// What?

// > Have lunch

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > n

// What?

// > Fix the climate

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > n

// What?

// > Go beetle hunting (not rock star kind)

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// 0 [ ] Have lunch

// 1 [ ] Fix the climate

// 2 [ ] Go beetle hunting (not rock star kind)

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > c0

// Completed "Have lunch"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// 0 [✓] Have lunch

// 1 [ ] Fix the climate

// 2 [ ] Go beetle hunting (not rock star kind)

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > d2

// Deleted "Go beetle hunting (not rock star kind)"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// 0 [✓] Have lunch

// 1 [ ] Fix the climate

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > c1

// Completed "Fix the climate"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > v

// 0 [✓] Have lunch

// 1 [✓] Fix the climate

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// > q

// See you soon! 😄

// $

// Stretch
// Open File
// Add support to load a todo list from a JSON file as an argument. The application must still work if its not given a file as an argument.

// To process JSON files, you'll have to read them with fs.readFile then you'll have to convert the file's data into a JavaScript data structure with

// JSON.parse.

// A [sample todo](https://certifiedin.s3.amazonaws.com/uploads/attachment/file/2182/myTodos.json) file has been provided as an example. However, its contents may not be structured in the same way as your previous code.

// $ node todoCLI.js myTodos.json

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit

// >v

// 0 [✓] Feed the raptops

// 1 [ ] Have lunch

// 2 [ ] Go see Deadpool 2

// 3 [ ] Write a script to fix the climate

// Save File
// Add the ability to save a file. Create a new menu item. Here's an example interaction with the new menu item:

// $ node todoCLIWithStretch.js

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// > n

// What?

// > Save my list

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// > v

// 0 [ ] Save my list

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// > s

// Where?

// > myList.json

// List saved to "myList.json"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// > q

// See you soon! 😄

// $ cat myList.json

// [{"completed":false,"title":"Save my list"}]

// If a filePath argument has been given, use it as a suggested filePath to save the file. If the user presses Enter without giving a new filePath,

// use the suggested filePath as shown below:

// $ node todoCLIWithStretch.js myTodos.json

// Welcome to Todo CLI!

// --------------------

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// > s

// Where? (myTodos.json)

// >

// List saved to "myTodos.json"

// (v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit

// >

// -------------------------------------------------------------------------------------------------------------------------------------
//Add interactive CLI by using Node's readline and fs modules
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin, // process standard in is an object that represents input from a terminal
    output: process.stdout // process standard out is an object that represents the output to the terminal
})
const fs = require('fs');
// -------------------------------------------------------------------------------------------------------------------------------------
//Create the Todo class
class Todo {
    constructor() {
        this.items = [];
        this.options = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit";
    }
    //Menu bar
    menu() {
        console.log(this.options)
    }
    //View: Display the contents of the todo list then the Todo Menu again.
    view() {
        //If the list is empty:
        if (this.items.length === 0) {
            console.log("List is empty...")
        } else {
            let output = ""
            for (let i = 0; i < this.items.length; i++) {
                output += `${i} [`
                if (this.items[i].completed === true) {
                    // When displaying the list, completed items should have a checkmark (i.e. `✓`) 
                    // besides their title. For example: 0 [✓] Take out the trash
                    output += "✓"
                }
                output += `] ${this.items[i].name}\n`
            }
            console.log(output.slice(0, -1))
        }
        this.menu()
    }
    //Add(New): Save user's response as a new item at the end of the todo list.
    add(item) {
        this.items.push({ "name": item, "completed": false })
        this.menu()
    }
    //Complete: Mark that item with corresponding index as complete. 
    complete(index) {
        //Tell the user which item was marked
        console.log(`Completed "${this.items[index].name}"`)
        this.items[index].completed = true;
        this.menu()
    }
    //Delete: From the Todo Menu pressing dX where X refers to the index of a Todo item 
    deleted(index) {
        //Tell the user which item was deleted
        console.log(`Deleted "${this.items[index].name}"`)
        // `Enter` should remove that from the list. 
        this.items.splice(index, 1)
        this.menu()
    }
    //Quit: From the Todo Menu pressing q quits the application. Say farewell.
    quit() {
        console.log('See you soon! 😄')
    }
}
// -------------------------------------------------------------------------------------------------------------------------------------
//To Do CLI function
const toDoCli = (ClassTodo, json, newFileName) => {
    let newList = new ClassTodo(newFileName)
    if (json) {
        json.forEach(item => newList.items.push(item))
    }
    console.log("Welcome to Todo CLI!\n\n--------------------\n")
    newList.menu()
    terminal.on('line', function (input) {
        if (input === 'v') {
            //Pressing v then Enter will display the contents of the todo list
            newList.view()
        } else if (input === 'n') {
            //Pressing n then Enter will ask the user what item to add to the list
            terminal.question("What?\n", function (item) {
                //User's input will be added to the list
                newList.add(item)
            })
        } else if (/^c[0-9]+$/.test(input)) {
            //Pressing cX where X refers to the index of a Todo item then Enter 
            //should mark that item as complete.
            newList.complete(input.substring(1))
        } else if (/^d[0-9]+$/.test(input)) {
            //Pressing dX where X refers to the index of a Todo item then `Enter` should remove that from the list. 
            newList.deleted(input.substring(1))
        } else if (input === 'q') {
            //Pressing q quits the application
            newList.quit()
            process.exit(1)
        } else if (input === 's') {
            //Stretch: Save to File
            if (newList.newFileName){
                // If a filePath argument has been given, use it as a suggested filePath to save the file.
                terminal.question(`Where? (${newList.newFileName})\n`, function (item) {
                    newList.save(item)
                    })
            }else{
                terminal.question("Where?\n", function (item) {
                    newList.save(item)
                    })
            }
        } else {
            newList.menu()
        }
    })
}

// -------------------------------------------------------------------------------------------------------------------------------------
// Stretch: Open File
//Read Directory function that returns a promise
function readdir(pathName) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathName, (err, files) => {
            if (err)
                reject(err);
            else {
                resolve(files)
            }
        })
    })
}
//Read File function that returns a promise
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
//Write File function that returns a promise
function writeFile(fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

//If the user provides a JSON file as an argument 
//(file name must has at least one character followed by ".json")
//Example Usage: node todoCLI.js myTodos.json
//An example json file "myTodos.json" is provided in the current directory
if (/todoCLI\.js$/.test(process.argv[1]) && /^.+\.json$/.test(process.argv[2])) {
    readdir(".")
        .then((fileNames) => {
            let fileData = []
            if (fileNames.includes(process.argv[2])) {
                fileData.push(readFile(`./${process.argv[2]}`))
            }

            return Promise.all(fileData)
        })
        .then((data) => {

            toDoCli(Todo, JSON.parse(data))
        }).catch(console.error)

} else if (/todoCLI\.js$/.test(process.argv[1]) && !process.argv[2]) {
    //If no JSON file is provided as an argument
    //Example Usage: node todoCLI.js
    toDoCli(Todo)
}

module.exports = { Todo, toDoCli, writeFile, readFile, readdir };