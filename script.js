//1
function printArrow(num, direction){
    const line = '-'.repeat(num);
    const arrow = direction ? '>' : '<';
    direction ? console.log(line + arrow) : console.log(arrow + line)
}
//2
function printNums(){
    let num = prompt("Enter a number: ");
    let arr = [];

    while (num != 0)
    {
        arr.push(num)
    }
    console.log(Math.max(arr));
    console.log(arr.length);
    const sum = arr.reduce((acc, curr) =>
    acc + curr, 0)
    console.log(sum)
    const avg = sum / arr.length
    console.log(avg)
    arr.length > 4 ? console.log(arr.findIndex(4)) : console.log(arr.findIndex(arr.length - 1))
}

