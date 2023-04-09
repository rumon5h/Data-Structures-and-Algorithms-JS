// Prime number
// Problem: Give a natural number 'n', determine if the number is prime or not 
// A prime number is a natural number gater than 1 that is not product of two smaller natural number
// isPrime(5) = true (5*1 or 1*5)
// isPrime(4) = false (1*4, 2*2, 4*1)


function isPrime(n){
    if(n <2 ){
        return false
    }
    for(let i = 2; i <+ Math.sqrt(n); i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

// Big-O = O(sqrt(n))