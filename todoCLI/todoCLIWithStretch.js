//Stretch: Save File
//Example Usage: node todoCLIWithStretch.js

const { Todo, toDoCli, writeFile } = require('./todoCLI')

class StretchTodo extends Todo {
    constructor(newFileName) {
        super(newFileName);
        //A new menu bar with 'Save' option
        this.options = "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit";
        //If a filePath argument has been given, it will be saved as the suggested file path to save the file
        this.newFileName = newFileName;
    }
    //Save: Add the ability to save a file
    save(fileName) {
        //If the user presses Enter without giving a new filePath, use the suggested filePath
        //*** Please note that there is already an example json file "myTodos.json" in current directory
        //*** If same file path name is used, the example json file will be overwritten
        if (!fileName) fileName = this.newFileName
        writeFile(fileName, JSON.stringify(this.items))
            .then(console.log(`List saved to "${fileName}"`))
        this.menu()
    }
}

//Example Usage: node todoCLIWithStretch.js myTodos.json
if (/^.+\.json$/.test(process.argv[2])) {
    let filePath = process.argv[2]
    //Since the question doesn't require todoCLIWithStretch.js to also support opening a JSON file
    //So the second argument (openFileName) is undefined in this case
    toDoCli(StretchTodo, undefined, filePath)
} else {
    //Else if no filePath argument is given
    //Example Usage: node todoCLIWithStretch.js
    toDoCli(StretchTodo)
}