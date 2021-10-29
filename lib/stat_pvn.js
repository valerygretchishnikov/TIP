function mean(arr){
    const len = arr.length
    let avg = 0
    for(let x of arr){
        avg += x
    }
    return avg/len
}

function max_arr(arr){
    return Math.max(...arr)
}

function min_arr(arr){
    return Math.min(...arr)
}