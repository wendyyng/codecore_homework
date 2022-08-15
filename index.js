
$(document).ready(() => {
    const nameArray = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
    const imgArray = ['1_gallows.jpg', '2_gallows+head.jpg', '3_gallows+head+torso.jpg', '4_gallows+head+torso+leg.jpg', '5_gallows+head+torso+2leg.jpg', '6_gallows+head+torso+2leg+arm.jpg', '7_gallows+head+torso+2leg+2arm.jpg']
    
    let errorCount = 0;
    let answerArr = []
    let wrongArr = []
    let randomName = Math.floor(Math.random() * nameArray.length);
    let randomNameArr = nameArray[randomName].toUpperCase().split("")
    let status = true
    const correct = new Audio("audio/correct-2-46134.mp3")
    const wrong = new Audio("audio/wronganswer-37702.mp3")
    const fail = new Audio("audio/die-41314.mp3")
    const victory = new Audio("audio/small-applause-6695.mp3")


    // $('.test').html(`Answer: ${nameArray[randomName]}`)
    
    // console.log(randomName, nameArray[randomName])
    // console.log(randomNameArr)
    
    for(let i = 0; i < randomNameArr.length; i++){
        $('.word').append(`<span id=${i} class="letter">&#160&#160&#160</span>`)
    }

    //Press Play Again button to reload the page
    $('.play-again').on('click', event => {
        location.reload(true);
    })

    clickLetters()
    pressKeys()

    function play(currentKey){
        if(status === true && !randomNameArr.includes(currentKey)){
            // console.log(status)
            wrong.currentTime = 0
            wrong.play()
            $(`#${currentKey}`).css("background-color", "red")
            $('.message').html("Wrong!")
            if(!wrongArr.includes(currentKey)){
                wrongArr.push(currentKey)
                errorCount += 1;
                changeImg()
            }
        }else if(status === true && randomNameArr.includes(currentKey) && countInArray(randomNameArr, currentKey) > countInArray(answerArr, currentKey)){
            $(`#${currentKey}`).css("background-color", "green")
            $('.message').html("Right!")
            correct.currentTime = 0
            correct.play()
            randomNameArr.forEach((letter, i) => {
                if(currentKey === letter){
                    answerArr.push(letter);
                    $(`#${i}`).replaceWith(`<span id=${i} class="letter">${letter}</span>`)
                }
            })
            checkSuccess()
        }
    }

    function pressKeys(){
        $(document).keypress(function(event){
            let key = (event.keyCode ? event.keyCode : event.which);
            let currentKey = String.fromCharCode(key).toUpperCase()
            // alert('You pressed key : ' +ch);   
            play(currentKey)
        })
    }

    function clickLetters(){
        $('.key').on('click', event => {
            let currentKey = event.currentTarget.id
            play(currentKey)
        })
    }

    function checkSuccess(){
        if(randomNameArr.length == answerArr.length){
            // console.log(status)
            victory.play()
            $('.message').html("Congratulations you have gotten the answer!")
            status = false
            
            setTimeout(() => {
                alert("Congratulations! You win!")
            }, "500")
        }
    }
    
    function changeImg(){
        let currentImg = `images/${imgArray[errorCount]}`
        $('.hangman-img').attr("src", currentImg)
        if(errorCount === 6){
            console.log(status)
            fail.play()
            $('.message').html(`Sorry, you have been hanged! The answer was: ${nameArray[randomName].toUpperCase()}`)
            status = false
            setTimeout(() => {
                alert("Better luck next time...")
            }, "500")
        }
    }

    function countInArray(array, alphabet) {
        return array.filter(item => item == alphabet).length;
    }
})
