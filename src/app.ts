// 関数定義
// function message(count: number): string {
//   return "Hey".repeat(count);
// }
// console.log(message(10));

// 引数の型によって出力を変える
// function message(value: number | string) {
//   if (typeof value === "number") {
//     console.log(value * 2);
//   } else {
//     console.log(value.repeat(3));
//   }
// }

// console.log(message("fack"));

// function numDouble(value: number): number {
//   return value * 2;
// }

// console.log(numDouble(1_000_000));

// import { createInterface } from "readline";

// const rl = createInterface({ input: process.stdin, output: process.stdout });

// rl.question("文字を入力してください:", (line) => {
//   console.log(`${line}が入力されました`);
//   rl.close;
// });

// import { createInterface } from "readline";

// const rl = createInterface({ input: process.stdin, output: process.stdout });

// rl.question("文字を入力してください:", (line) => {
//   const num = Number(line);
//   console.log(num + 1000);
// });

// import { createInterface } from "readline";

// const rl = createInterface({ input: process.stdin, output: process.stdout });

// rl.question("文字入力:", (line) => {
//   const num = Number(line);
//   if (0 <= num && num < 100) {
//     console.log(`${num}は、0以上100未満です`);
//   } else {
//     console.log(`${num}は、０以上100未満ではありません`);
//   }
//   rl.close;
// });

// FizzBuzz問題
// for (let i: number = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// プロパティ名と変数名が同じ場合、オブジェクトの中身を省略して書くことができる
// const userName = "ryota";

// const user = {
//   userName,
//   age: 27,
// };

// console.log(user.userName);
