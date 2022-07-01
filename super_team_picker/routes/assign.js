// ShuffleArr function to shuffle an array
const shuffleArr = arr => {
    for(let i = 0; i < arr.length - 1 ; i++){
      let temp = arr[i]
      let randomIndex = Math.floor(Math.random() * (1 + i))
      arr[i] = arr[randomIndex]
      arr[randomIndex] = temp
    }
  return arr
  }

  //Method: Team Count
const countTeam = (quantity, members) => {
  let arr = shuffleArr(members)
  let numMembers = Math.floor(arr.length / quantity)
  let result = []

  for(let i = 0; i < quantity ; i++){
    result.push(arr.splice(0,numMembers))
  }
  if(arr.length > 0){
    for(let i = 0; i < result.length; i++){
      if(arr.length > 0){
        let next = arr.splice(0,1).flat().toString()
        result[i].push(next)
      }else{
        break;
      }
    }
  }
  return result
}

//Method: Number Per Team
const numberPerTeam = (quantity, members) => {
  let arr = shuffleArr(members)
  let result = []
  for(let i = 0; arr.length > 0 ; i++){
    result.push(arr.splice(0, quantity))
  }
  return result
}

module.exports = {numberPerTeam, countTeam}