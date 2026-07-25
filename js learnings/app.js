// console.log("شروع برنامه");

// const myPromise = new Promise((resolve, reject) => {
//     const success = false;
//     if (success) {
//         resolve("عملیات با موفقیت انجام شد");
//     } else {
//         reject("خطایی رخ داد");
//     }
// });

// myPromise.then((result) => {
//     console.log(result);
// }).catch((error) => { 
// 	console.log(error); 
// });

// console.log("پایان برنامه");

// تاخیر زمانی
// console.log("در حال ارسال درخواست...");
// const delayPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("3 ثانیه گذشت");
//   }, 3000);
// });

// delayPromise.then(message => {
//   console.log(message);
// });
// console.log("کارهای دیگر برنامه ادامه دارد");
// console.log("این خط اولین خط اجرایی ماست");
// async function getData() {
//     console.log("شروع دریافت اطلاعات");

//     setTimeout(() => {
//         console.log("اطلاعات دریافت شد");
//     }, 3000);
// }

// getData();

// console.log("این خط منتظر پایان تابع نمی‌ماند");

// async function getName() {
//     return "Ali";
// }

// console.log(getName());



// how show async
// async function getName() {
//     return "Ali";
// }

// getName().then(result => {
//     console.log(result);
// });


// await 
// function getUser() {
//     return Promise.resolve("Ali");
// }
// async function showUser() {
//     const user = await getUser();

//     console.log(user);
// }

// showUser();

// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 3000);
//     });
// }

// async function showData() {
//     console.log("مرحله اول");

//     const result = await getData();

//     console.log(result);
//     console.log("مرحله دوم");
// }

// showData();

// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 3000);
//     });
// }

// async function showData() {
//     console.log("شروع تابع");

//     const result = await getData();

//     console.log(result);
// }

// showData();

// console.log("اجرای سایر دستورات برنامه");

// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 3000);
//     });
// }

// async function showUser() {
//     const user = await getUser();

//     console.log(user);
// }

// showUser();


// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }

// async function loadData() {
//     const user = await getUser();
//     console.log(user);

//     const posts = await getPosts();
//     console.log(posts);
// }

// loadData();


// await
// function fetchUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "Ali"
//             });
//         }, 2000);
//     });
// }

// async function getUser() {
//     return fetchUser();
// }
// getUser()
//     .then(user => {
//         console.log(user);
//     });


// fetch
// async function getData() {
//     const response = await fetch("./files/test.txt");

//     console.log(response);
// }
// getData()


// try
// function getUser() {
//     return Promise.reject("کاربر پیدا نشد");
// }

// async function showUser() {
//     try {
//         const user = await getUser();

//         console.log(user);
//     } catch (error) {
//         console.log("خطا:", error);
//     }
// }

// showUser();


// function getUser() {
//     return Promise.reject("کاربر پیدا نشد");
// }

// async function showUser() {
//     const user = await getUser();

//     console.log(user);
// }

// showUser();



// function getUser() {
//     return Promise.reject("Ali");
// }

// async function showUser() {
//     try {
//         const user = await getUser();

//         console.log(user);
//     } catch (error) {
//         console.log("خطا:", error);
//     } finally {
//         console.log("عملیات به پایان رسید");
//     }
// }

// showUser();

// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }

// async function loadData() {
//     const user = await getUser();
//     console.log(user);

//     const posts = await getPosts();
//     console.log(posts);
// }

// loadData();



// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }

// async function loadData() {
//     // const userPromise = getUser();
//     // const postsPromise = getPosts();

//     // const user = await userPromise;
//     // const posts = await postsPromise;
//     const user = await getUser();
//     console.log(user);
//     const posts = await getPosts();
//     console.log(posts);



// }

// loadData();

// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }

// async function loadData() {
//     console.time("test");

//     const user = await getUser();
//     const posts = await getPosts();

//     console.log(user);
//     console.log(posts);

//     console.timeEnd("test");
// }

// loadData();


// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }

// async function loadData() {
//     const results = await Promise.all([
//         getUser(),
//         getPosts()
//     ]);

//     console.log(results);
// }

// loadData();


// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Ali");
//         }, 2000);
//     });
// }

// function getPosts() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Posts loaded");
//         }, 2000);
//     });
// }
// async function loadData() {
//     const [user, posts] = await Promise.all([
//         getUser(),
//         getPosts()
//     ]);

//     console.log(user);
//     console.log(posts);
// }

// loadData();


// for...of
// function getData(id) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`Data ${id}`);
//         }, 1000);
//     });
// }

// async function loadData() {
//     const ids = [1, 2, 3];

//     for (const id of ids) {
//         const result = await getData(id);

//         console.log(result);
//     }
// }

// loadData();


// function delay(name) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(name);
//         }, 1000);
//     });
// }

// async function run() {
//     const users = ["Ali", "Sara", "Reza"];

//     for (const user of users) {
//         const result = await delay(user);

//         console.log(result);
//     }
// }

// run();



async function createUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST"
        }
    );

    console.log(response);
}

createUser();
