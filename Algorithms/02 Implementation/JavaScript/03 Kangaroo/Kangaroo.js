function kangaroo(x1, v1, x2, v2) {
    let result = '';
    for (let i = 0; i < 10000; i++) {
        x1 += v1;
        x2 += v2;
        if (x1 === x2) {
            result = 'YES';
            break;
        }
        else if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1))
            result = "NO"
    }

    return result == '' ? 'NO' : result;

}

function main() {
    const x1 = 42; //0 //0;   
    const v1 = 2; //3 //2;
    const x2 = 70; //4 //5;
    const v2 = 2; //2 //3;

    let result = kangaroo(x1, v1, x2, v2);

    console.log(result + "\n");

}
main();