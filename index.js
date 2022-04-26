function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    function aNamedFunction(){
    
    }
    return aNamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}