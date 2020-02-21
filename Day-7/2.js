// Transform into an Array with No Duplicates


function set(arr) {

    const sortArr = arr.sort((a, c) => a - c);
    const count = [];
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "string" && arr[i].charCodeAt() - arr[i + 1].charCodeAt !== 0) {
            console.log(arr[i].charCodeAt())
            console.log(arr[i + 1].charCodeAt())
            count.push(arr[i])
        }

        else if (sortArr[i] - sortArr[i + 1] !== 0) {
            count.push(sortArr[i])
        }
    } console.log(count);
}


set(['A', 'A'])