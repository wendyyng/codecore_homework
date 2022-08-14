
$(document).ready(() => {
    const nameArray = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
    const imgArray = ['1_gallows.jpg', '2_gallows+head.jpg', '3_gallows+head+torso.jpg', '4_gallows+head+torso+leg.jpg', '5_gallows+head+torso+2leg.jpg', '6_gallows+head+torso+2leg+arm.jpg', '7_gallows+head+torso+2leg+2arm.jpg']
    
    let errorCount = 0;
    let answerArr = []
    let randomName = Math.floor(Math.random() * nameArray.length);
    let randomNameArr = nameArray[randomName].toUpperCase().split("")

    

    $('.test').html(`Answer: ${nameArray[randomName]}`)
    
    console.log(randomName, nameArray[randomName])
    console.log(randomNameArr)

    for(let i = 0; i < randomNameArr.length; i++){
        $('.word').append(`<span id=${i} class="letter">&#160&#160&#160</span>`)
    }

    pressKey()
    changeImg()

    function pressKey(){
        $('button').on('click', event => {
            if(!randomNameArr.includes(event.currentTarget.id)){
                $(event.currentTarget).css("background-color", "red")
                errorCount += 1;
                console.log(errorCount)
                changeImg()
            }else {
                $(event.currentTarget).css("background-color", "green")
                randomNameArr.forEach((letter, i) => {
                    if(event.currentTarget.id === letter){
                        answerArr.push(letter);
                        $(`#${i}`).replaceWith(`<span id=${i} class="letter">${letter}</span>`)
                    }
                })
                checkSuccess()
            }
            
            // else if(randomNameArr.includes(event.currentTarget.id) && countInArray(randomNameArr, event.currentTarget.id) > countInArray(answerArr, event.currentTarget.id)){
            //     answerArr.push(event.currentTarget.id)
                
            //     console.log(answerArr)
            // }
        })
    }

    function checkSuccess(){
        if(randomNameArr.length == answerArr.length){
            $('.line').append(`<p>Congratulations you have gotten the answer!</p>`)
            setTimeout(() => {
                location.reload(true);
            }, "800")
        }
    }
    
    function changeImg(){
        let currentImg = `images/${imgArray[errorCount]}`
        $('.hangman-img').attr("src", currentImg)
        if(errorCount === 6){
            $('.line').append(`<p>You lose!</p>`)
            setTimeout(() => {
                location.reload(true);
            }, "800")
        }
    }

    // function countInArray(array, alphabet) {
    //     return array.filter(item => item == alphabet).length;
    // }
})
