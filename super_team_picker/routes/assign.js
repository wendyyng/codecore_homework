//8. --------------Assign Teams--------------

// /ShuffleArr function to shuffle an array
const shuffleArr = arr => {
    for(let i = 0; i < arr.length - 1 ; i++){
      let temp = arr[i]
    // Math.random() function returns a floating-point, 
    // pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
    //The Math.floor() function returns the largest integer less than or equal to a given number.
      let randomIndex = Math.floor(Math.random() * (1 + i))
      arr[i] = arr[randomIndex]
      arr[randomIndex] = temp
    }
  return arr
  }

  //Method: Team Count
const countTeam = (quantity, members) => {
  let arr = shuffleArr(members)
  // console.log(arr)
  let numMembers = Math.floor(arr.length / quantity)
  // let numMembers = Math.round(cohort.length / quantity) + 1
  let result = []

  for(let i = 0; i < quantity ; i++){
    result.push(arr.splice(0,numMembers))
  }
  // console.log(arr)
  if(arr.length > 0){
    for(let i = 0; i < result.length; i++){
      if(arr.length > 0){
        let next = arr.splice(0,1).flat().toString()
        // console.log(next)
        result[i].push(next)
      }else{
        break;
      }
    }
  }
  return result
}