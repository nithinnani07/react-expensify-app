const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my reoslved data');

        reject('This is my error');
    }, 4500);
});

console.log('before');

//separate catch
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Something went wrong')
});

//promises chaining
promise.then((data) => {
    console.log(data);
    return 'Chain1 send payload to chain2'
}).then((str) => {
    console.log('This chain ran', str);
}).catch((error) => {
    console.log('Something went wrong')
});

//advance promises chaining
promise.then((data) => {
    console.log(data);
    return setTimeout(() => {
        resolve('This is my reoslved data');
    }, 4500);
}).then((data) => {
    console.log('This chain ran', data);
}).catch((error) => {
    console.log('Something went wrong')
});

//catch as second arg to then
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('Something went wrong')
});

console.log('after');