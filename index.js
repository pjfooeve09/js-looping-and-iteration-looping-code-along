function writeCards (array, event){
    let newArray = []
    for (let i = 0; i < array.length; i++){
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
  }
  
  

  function countDown(number) {
    let i = -1
    while (i < number) {
      console.log(number--)
    }
  }