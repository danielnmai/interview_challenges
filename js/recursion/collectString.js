function collectStrings(obj){

  let result = [];
  
  

    for(const value of Object.values(obj)) {
        if(typeof value === 'string') {
            return [value];
        } else if(typeof value === 'object') {
            result.concat(collectStrings(value));
        }
    }

    return result;
}

let blah = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(blah));