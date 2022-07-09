const str = "вишня, груша, слива, груша"
const deleteFirstOccurrence = (strin, strinGap) =>{
    return  strin.replace((strinGap + ', '), '' )
}
console.log(deleteFirstOccurrence(str, 'груша'))