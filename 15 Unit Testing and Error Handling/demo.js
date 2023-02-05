function demo(){
    console.log('Something');
    throw new Error('stop!')
    throw new RangeError('stop!')
    throw {message: 'This is an error'}
}

function solve(){
    try{
        demo()
    }catch(err){
        console.log(err.message)
        console.log(err.stack)
        console.error(err.stack)
        console.error(err)
    }

}

solve()