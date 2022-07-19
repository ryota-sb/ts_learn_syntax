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

// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const messages = {
//   good: "0以上の数値です",
//   bad: "負の数です。",
// };

// rl.question("数字を入力してください", (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close;
// });

// const obj1 = {
//   name: "ryota",
//   age: 27,
// };

// const obj2 = {
//   ...obj1,
//   name: "MatsuiRyota",
//   age: 30,
// };

// console.log(obj1.name);
// console.log(obj2.name);

// type FoobarObj = {
//   foo: string;
//   bar: number;
// };

// const obj: FoobarObj = {
//   foo: "helloWorld",
//   bar: 123,
// };

// インデックスシグネチャ（任意のプロパティ名を許容する型）
// type PriceData = {
//   [key: string]: number;
// };

// const foodPrice: PriceData = {
//   apple: 200,
//   banana: 100,
//   melon: 900,
// };

// オプショナルプロパティ（あってもなくてもいいプロパティ）
// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// };

// const obj: MyObj = {
//   foo: true,
//   bar: false,
//   baz: 100,
// };

// if (obj.baz !== undefined) {
//   console.log(obj.baz * 2);
// }

// type FooBar = {
//   foo: string;
//   bar: number;
// };

// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// };

// const obj: FooBarBaz = {
//   foo: "Hello",
//   bar: 100,
//   baz: true,
// };

// const obj2: FooBar = obj;

// console.log(obj2);

// ジェネリック型の定義（型引数の宣言）
// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// const obj: Family<number, string> = {
//   mother: 41,
//   father: 40,
//   child: "15",
// };

// console.log(obj);

// const array: number[] = [1, 100, 200, 400];

// console.log(array.push(1000));
// console.log(array);

// 配列の読み取り専用
// const array: readonly number[] = [1, 100, 300, 500];

// const array: readonly number[] = [100, 200, 300];
// for (let arr of array) {
//   arr *= 10;
//   console.log(arr);
// }

// console.log(array);

// 分割代入
// type Obj = {
//   foo: number;
//   bar: number;
// };

// const obj: Obj = {
//   foo: 10000,
//   bar: 27,
// };

// const { foo, bar } = obj;

// console.log(foo, bar);

// const obj = {
//   foo: 100,
//   barbaz: {
//     bar: 200,
//     baz: 300,
//   },
// };

// const {
//   foo,
//   barbaz: { bar, baz },
// } = obj;

// console.log(foo, bar, baz);

// const obj = {
//   foo: 100,
//   barbaz: {
//     bar: 200,
//     baz: 300,
//   },
// };

// const { bar, baz } = obj.barbaz;

// console.log(bar, baz);

// // 配列の分割代入
// const array: readonly number[] = [100, 200, 300, 400];

// const [f, s, t, fo] = array;

// console.log(f, s, t);

// // restパターンでオブジェクトの残り要素を取得する方法
// const obj = {
//   foo: "string",
//   bar: 100,
//   baz: false,
// };

// const { foo, ...rest } = obj;

// console.log(rest);

// const array = [1, 2, 3, 4, 5];

// const [f, ...rest] = array;

// console.log(rest);

// const date = new Date();

// console.log(date.toISOString);

// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };

// const data: string = `
// uhyo,26,1
// John Smith,17,0
// Mary Sue,14,1
// `;

// const users: User[] = [];

// const lines = data.split("\n");

// for (const line of lines) {
//   if (line === "") {
//     continue;
//   }
//   const [name, ageString, premiumUserString] = line.split(",");
//   const age = Number(ageString);
//   const premiumUser = premiumUserString === "1";

//   users.push({
//     name,
//     age,
//     premiumUser,
//   });
// }

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})は、プレミアムユーザーです。`);
//   } else {
//     console.log(
//       `${user.name}(${user.age})は、プレミアムユーザーではありません。`
//     );
//   }
// }

// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };

// const data: string = `
// // uhyo,26,1
// // John Smith,17,0
// // Mary Sue,14,1
// // `;

// const users: User[] = data
//   .split("\n")
//   .filter((line) => line !== "")
//   .map((line) => {
//     const [name, ageString, premiumUserString] = line.split(",");
//     return {
//       name: name,
//       age: Number(ageString),
//       premiumUser: premiumUserString === "1",
//     };
//   });

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})は、プレミアムユーザーです。`);
//   } else {
//     console.log(
//       `${user.name}(${user.age})は、プレミアムユーザーではありません。`
//     );
//   }
// }

// 関数宣言
// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(range(5, 20));

// function helloworldtimes(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log("helloworld");
//   }
// }

// helloworldtimes(10);

// 関数式
// type Human = {
//   height: number;
//   width: number;
// };

// const bmiCalc = function ({ height, width }: Human): number {
//   return height / width ** 2;
// };

// const ryota: Human = { height: 1.7, width: 50 };

// console.log(bmiCalc(ryota));

// アロー関数式
// type Human = {
//   height: number;
//   width: number;
// };

// const calcBMI = ({ height, width }: Human): number => {
//   return height / width ** 2;
// };

// const ryota: Human = { height: 1.7, width: 50 };

// console.log(calcBMI(ryota));

// 可変長引数
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(sum(...nums));

// const sum3 = (a: number, b: number, c: number) => a + b + c;

// type tNumber = [number, number, number];

// const nums: tNumber = [1, 2, 3];

// console.log(sum3(...nums));

//ジェネリックス
// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }

// console.log(repeat<string>("a", 5));

// const getFizzBuzzString = (i: number) => {
//   if (i % 3 === 0 && i % 5 === 0) {
//     return "FizzBuzz";
//   } else if (i % 3 === 0) {
//     return "Fizz";
//   } else if (i % 5 === 0) {
//     return "Buzz";
//   } else {
//     return i;
//   }
// };

// for (let i = 1; i <= 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// function sequence(start: number, end: number): number[] {
//   const result: number[] = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// for (const i of sequence(1, 100)) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// function map<T, U>(array: T[], callback: (value: T) => U): U[] {
//   const result: U[] = [];
//   for (const element of array) {
//     result.push(callback(element));
//   }
//   return result;
// }

// const data = [1, -3, -2, -2, 8, 0, -1];

// const result: boolean[] = map(data, (x) => x >= 0);

// console.log(result);
