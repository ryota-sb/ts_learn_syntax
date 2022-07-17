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
