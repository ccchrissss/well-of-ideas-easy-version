function well(x) { 
  
  let count = x.filter( e => e == 'good')
  // console.log(count)

  if (count.length === 1 || count.length === 2) {
      return 'Publish!'
    } else if (count.length >= 3) {
      return 'I smell a series!'
    } else return 'Fail!'
}

// console.log('me test,', well(['good', 'good', 'bad', 'bad']))
// console.log('basic test 1', well(['bad', 'bad', 'bad']))
// console.log('basic test 2', well(['good', 'bad', 'bad', 'bad', 'bad']))
// console.log('basic test 3', well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))


// params: x    // an array
// return: str    // a string of either 'Publish!', 'I smell a series!', or 'Fail!'
// e.g. well('good', 'good', 'bad', 'bad')
// results in 'Publish!'

// declare a variable called count and assign it to array.filter, inwhich the array is filtered out for the string 'good'
// create a conditional which returns 'Publish!' if count.length == 1 OR == 2
// else if count.length > 2 return 'I smell a series!'
// else return 'Fail!'


module.exports = well