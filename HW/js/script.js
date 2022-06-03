function reverse(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  console.log(reverse([1,1,2,2,3,45,6,5]));

  function filter(arr){
      let result = [];
      for(let i = 0; i<=arr.length-1; i++){
          if(arr[i].length >6){
              result.push(arr[i]);
          }
      }
      return result;
  }
  console.log(filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']));


const numnum = 16;
numnum2 = numnum.map(Math.sqrt);
  console.log(numnum2);
  


