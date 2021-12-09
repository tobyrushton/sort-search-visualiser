export function getInterpolationSearchAnimations(array,searchNumber){
    const animations = []; 
    if(array.length<=1) return array;
    doInterpolation(array,animations,searchNumber)
    return animations;
  }

function doInterpolation(
    array,
    animations,
    searchNumber
)
{
    let current;
    let length = array.length-1; 
    let start = 0; 
    let found = false; 

    if(0<= length && searchNumber >= array[start] && searchNumber <= array[length]){

        while(!found){
            current = start + Math.floor(((length-start) /(array[length]-array[start])) * (searchNumber-array[start]));
            animations.push([current]);
            console.log("current comparison = ", array[current])
    
            if(searchNumber === array[current]) 
            {
            console.log("found")
            found = true; 
            return animations;
            }

    
            if(array[current] < searchNumber) start = current+1;
            if(array[current] > searchNumber) length = current-1; 

        }

    }

}