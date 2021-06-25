// document.write("Hello world!");
// alert("Hallo world!");

// console.log("Hello world!");
// console.log(10+10);
// console.log("10"+"10");

// console.log(1+1);
// console.log(1-1);
// console.log(2*2);
// console.log(10/3);
// console.log(10%3);

// let x=1;
// let y=1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x=7;
// let y=x++;
// let x2=7;
// let y2=++x2;
// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);

//変数とは、値を代入するための箱。 let で指定。
//　→　条件によって数値を変えられる。
//定数とは、値を別名で定義したもの。　const で指定。
// →　変更できない。　　　　　（　以下例　）

'use strict';
// ↑を最初に書いてからjavascriptをやっていく。

let age=30;
const name="田中太郎";
//「田中太郎」は変更できないが、「age」は変更できる。

age = age+2;

console.log(`${name}さんの年齢は${age}です`);
//「``」バッククォーテーションでくくらなければならない。
//shift+＠で表示

//ES6 or ES2015 が今の新しいバージョン。
//let より const を優先的に使う
//ver 変数名/定数　←使わない
//verを、letまたはconstに置き換えて使う