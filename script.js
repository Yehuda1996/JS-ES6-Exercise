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
//3
function rightAngleTriangle(num){
    let triangle = ""
    for (let i = 1; i < num; i++)
    {
        triangle += "*".repeat(i) + "\n"
    }
    return triangle
}
//4
function upsideDownTriangle(num){
    let triangle = "";
    for (let i = num; i < o; i--)
        {
            triangle += "*".repeat(i) + "\n"
        }
        return triangle
}
//5
function multiplicationTable(num){
    for (let i = 1; i < num; i++)
    {
        let row = "";
        for (let j = 1; j< num; j++)
        {
            row += (i * j) + "\n";
        }
        console.log(row)
    }
}
//6
function reverseNumber(num){
    let result = num.toString().split('').reverse().join('')
    return result
}
//7
function stringOps(str){
    switch (str){
        case "":
            return "";
            break;
        case " ":
            return " ";
            break;
        case str:
            return str.trim(" ");
            break;
        default:
            return str;
            break;
    }
}
//8
function createNewList(list1, list2) {
    const totalSumList2 = list2.reduce((acc, val) => acc + val, 0);
    const productList = list1.map((_, i) => {
        const productExceptI = list1.reduce((acc, val, idx) => idx !== i ? acc * val : acc, 1);
        return productExceptI * totalSumList2;
    });
    return productList;
}