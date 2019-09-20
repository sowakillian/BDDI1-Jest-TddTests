function fizzBuzz(start, stop) {

    let results = [];

    for (let i = start; i < stop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        }

        if (i % 3 === 0) {
            results.push("Fizz");
        }

        if (i % 5 === 0) {
            results.push("Buzz");
        }

        results.push(i);
    }

    console.log(results);

}

export default fizzBuzz;