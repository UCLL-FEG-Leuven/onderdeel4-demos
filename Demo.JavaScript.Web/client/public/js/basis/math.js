for (let i = 1; i <= 7; i++) {
    // [0, 1[ -> [1, 45]

    let willekeurigGetal = Math.round(Math.random() * 45); // [0....,1....[ -> [0...., 44....] -> [0, 45]
    let geldigWillekeurigGetal = Math.max(1, willekeurigGetal); // [0, 45] -> [1, 45]
    document.getElementById("bal" + i).value = geldigWillekeurigGetal;
}
