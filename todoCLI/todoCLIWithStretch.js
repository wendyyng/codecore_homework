//Stretch: Save File

const { Todo, toDoCli, writeFile } = require('./todoCLI')

class StretchTodo extends Todo {
    constructor() {
        super();
        //A new menu bar with 'Save' option
        this.options = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit"
    }
    //Save: Add the ability to save a file
    save(fileName) {
        //If a filePath argument has been given, use it as a suggested filePath to save the file. 
        //If the user presses Enter without giving a new filePath, use the suggested filePath
        //Default suggested fileName is "myTodos.json"
        //*** Please note that there is already an example json file "myTodos.json" in current directory
        if (!fileName) fileName = "myTodos.json"
        writeFile(fileName, JSON.stringify(this.items))
            .then(console.log(`List saved to "${fileName}"`))

    }
}

toDoCli(StretchTodo)