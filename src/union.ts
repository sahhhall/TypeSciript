// A uniion type describe value that can be one of several types 

const getSum = (a: string | number , b: string | number ): any => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}