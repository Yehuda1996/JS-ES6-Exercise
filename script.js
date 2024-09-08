//1
function printArrow(num, direction){
    const line = '-'.repeat(num);
    const arrow = direction ? '>' : '<';
    direction ? console.log(line + arrow) : console.log(arrow + line)
}
//2

