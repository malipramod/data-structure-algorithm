function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;

    for (let apple of apples) {
        if ((a + apple >= s) && (a + apple) <= t) {
            applesCount++;
        }
    }
    for (let orange of oranges) {
        if ((b + orange >= s) && (b + orange) <= t) {
            orangesCount++;
        }
    }

    console.log(`${applesCount}
${orangesCount}`);

}

function main() {


    // 7 11
    // 5 15
    // 3 2
    // -2 2 1
    // 5 -6
    const s = 7;    //starting point of Sam's house location
    const t = 11;   //ending location of Sam's house location
    const a = 5;    //location of the Apple tree
    const b = 15;   //location of the Orange tree
    const m = 3;    //No of Apples
    const n = 2;    //No of Oranges
    const apples = [-2, 2, 6];

    const oranges = [5, -6];

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
main();