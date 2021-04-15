
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Callback sample
sleep(500).then(() => {

});

// async await sample
const doSomething = async () => {
    await sleep(2000);
}

doSomething();