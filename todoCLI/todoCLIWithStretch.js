//Save File
// Add the ability to save a file. Create a new menu item. 
const { Todo, toDoCli, writeFile } = require('./todoCLI')

class StretchTodo extends Todo {
    constructor() {
        super();
        //Menu bar with 'Save' option
        this.options = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit"
    }
    //Stretch: Save File
    save(fileName) {
        //If a filePath argument has been given, use it as a suggested filePath to save the file. 
        //If the user presses Enter without giving a new filePath, use the suggested filePath
        //Default fileName is "myTodos.json"
        if (!fileName) fileName = "myTodos.json"
        writeFile(fileName, JSON.stringify(this.items))
            .then(console.log(`List saved to "${fileName}"`))

    }
}

toDoCli(StretchTodo)