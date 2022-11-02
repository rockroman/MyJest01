function addition(a,b){
    if (isNaN(a) || isNaN(b)){
        throw  error()
    }else{
        return a + b

    }
    
}

module.exports = addition