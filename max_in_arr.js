//Write a function to find the maximum number in the given array

function maxInArr(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max)
          max = array[i];
    }
    return max;
}

let max_array = [11, 23, 37, 86, 934, 1122, 34, 22, 723, 988];
console.log(maxInArr(max_array));

//Write a function to find the minimum number in the given array

function minInArr(array2) {
    let mini = 1000000000000;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] < mini)
          mini = array2[i];
    }
    return mini;
}

let min_array = [11, 23, 37, 86, 934, 1122, 34, 22, 723, 988];
console.log(minInArr(min_array));

// .....................*******************************.......................//