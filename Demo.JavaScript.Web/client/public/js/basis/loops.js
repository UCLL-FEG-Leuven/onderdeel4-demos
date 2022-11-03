console.log("*** loops.js ***");

for (var i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

while (true) {
    console.log("In while...");
    break;
}


let quit = false;
do {
    console.log("In do while...");
    quit = true;
} while (!quit);