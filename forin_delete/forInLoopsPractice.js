var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'
for(var x in drink){
    if(drink[x]==='orange'){
        drink[x] = 'cherry';
    }
}

//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy
var checkValid = obj =>{
    for(var x in obj){
        if((obj[x] === false)||
            (obj[x] !== obj[x])||
            (obj[x] === 0)||
            (obj[x] === null)||
            (obj[x] === undefined)||
            (obj[x] === '')){
            return false;
        }else{
           return true; 
        }
    }
}