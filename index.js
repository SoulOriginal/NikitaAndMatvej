
const cutsring = (red, n) =>{
    let result = []
    for (let index = 0; index < red.length; index+= n) {
        // console.log(red[index])
        result.push(red.substr(index, n))
        console.log(index)
    }
    return result
}
console.log(cutsring('наслаждение',2))