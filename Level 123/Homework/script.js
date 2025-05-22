// Task 1
function task1() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 1 failed"), 2000);
    }).catch(e => console.log(e));
}
task1();

// Task 2
function task2() {
    const time = Math.random() * 4000 + 1000;
    return new Promise(res => {
        setTimeout(() => res("Task 2 complete"), time);
    });
}
task2().then(console.log);

// Task 3
function task3() {
    const t1 = Math.random() * 2000 + 1000;
    const t2 = Math.random() * 2000 + 1000;

    new Promise(res => {
        setTimeout(() => res("First"), t1);
    })
        .then(msg => {
            console.log(msg);
            return new Promise(res => {
                setTimeout(() => res("Second"), t2);
            });
        })
        .then(console.log);
}
task3();

// Task 4
function task4() {
    const time = Math.random() * 3000 + 1000;
    return new Promise((_, rej) => {
        setTimeout(() => rej("Task 4 failed"), time);
    }).catch(e => console.log(e));
}
task4();

// Task 5
function task5() {
    const time = Math.random() * 4000 + 1000;
    const rand = Math.random();
    return new Promise(res => {
        setTimeout(() => {
            res(rand > 0.5 ? "Task 5 complete" : "Task 5 was quick");
        }, time);
    });
}
task5().then(console.log);

// Task 6
function task6() {
    const time = Math.random() * 3000 + 1000;
    const rand = Math.random();
    new Promise((res, rej) => {
        setTimeout(() => {
            rand < 0.3 ? rej("Task 6 failed") : res("Task 6 complete");
        }, time);
    }).then(console.log).catch(e => console.log(e));
}
task6();
