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

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ali");
        }, 3000);
    });
}

async function showUser() {
    const user = await getUser();

    console.log(user);
}

showUser();
