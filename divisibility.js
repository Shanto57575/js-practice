// ...................function.......................
function divisibility(check) {
    for (let i = 1; i <= check; i++) {
        if (i % 5 == 0 && i % 3 == 0)
            console.log("foobar");
        else if (i % 3 == 0)
            console.log("foo");
        else if (i % 5 == 0)
            console.log("bar");
        else console.log(i);
    }
}
divisibility(50);