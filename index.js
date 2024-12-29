//--------------------------------------------
function myEach(collection, callback){
    if(!(Array.isArray(collection))){
       const array = Object.values(collection)
       for(const element of array){
        callback(element)
       }
       return collection
    }
    for(const element of collection){
        callback(element)
    }
    return collection
}

//--------------------------------------------
function myMap(collection, callback){
    const newArray = []
    if(!(Array.isArray(collection))){
        const array = Object.values(collection)
        for(const element of array){
         newArray.push(callback(element))
        }
        return newArray
     }
     for(const element of collection){
        newArray.push(callback(element))
     }
     return newArray
}

//--------------------------------------------
function myReduce(collection, callback, acc){
    if(acc === undefined){
        if(!(Array.isArray(collection))){
            const array = Object.values(collection)
            acc = array[0]
            for(const element of array.slice(1)){
                acc = callback(acc, element, array)
            }
            return acc
         }
         acc = collection[0]
         for(const element of collection.slice(1)){
            acc = callback(acc, element, collection)
         }
         return acc
    }else{
        if(!(Array.isArray(collection))){
            const array = Object.values(collection)
            for(const element of array){
                acc = callback(acc, element, array)
            }
            return acc  
         }
         for(const element of collection){
            acc = callback(acc, element, collection)
         }
         return acc
    } 
}

//--------------------------------------------
function myFind(collection, callback){
    if(!(Array.isArray(collection))){
        const array = Object.values(collection)
        for(const element of array){
            if(callback(element)){
                return element
            }
        }
        return undefined
    }
    for(const element of collection){
        if(callback(element)){
            return element
        }
    }
    return undefined
}

//--------------------------------------------
function myFilter(collection, callback){
    const filteredArray = []
    if(!(Array.isArray(collection))){
        const array = Object.values(collection)
        for(const element of array){
            if(callback(element)){
                filteredArray.push(element)
            }
        }
        return filteredArray
     }
     for(const element of collection){
        if(callback(element)){
            filteredArray.push(element)
        }
     }
     return filteredArray
}

//--------------------------------------------
function mySize(collection){
    if(!(Array.isArray(collection))){
        const array = Object.values(collection)
        return array.length
    }
    return collection.length
}

//--------------------------------------------
function myFirst(array, integer = 1){
    if (integer === 1) {
        return array[0]
    }
    return array.slice(0, integer)
}

//--------------------------------------------
function myLast(array, integer = 1){
    if (integer === 1) {
        return array[array.length-1]
    }
    return array.slice(-integer)
}

//--------------------------------------------
function myKeys(object){
   return Object.keys(object)
}

//--------------------------------------------
function myValues(object){
    return Object.values(object)
 }
